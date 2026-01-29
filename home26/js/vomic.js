// script.js

// === 0. 启动程序：解析 URL 并加载数据 ===
(function bootstrap() {
        // 【新增】强制每次刷新都回到顶部
        if (history.scrollRestoration) {
            history.scrollRestoration = 'manual'; // 禁用浏览器的“记住滚动位置”
        }
        window.scrollTo(0, 0); // 物理回顶
    // 获取 URL 参数 ?ep=xx
    const urlParams = new URLSearchParams(window.location.search);
    let epId = urlParams.get('ep');

    // 如果没传参数，默认加载列表里的第一话
    if (!epId && EPISODE_LIST.length > 0) {
        epId = EPISODE_LIST[0].id;
    }

    // 找到对应的配置
    const targetEp = EPISODE_LIST.find(e => e.id === epId);

    if (!targetEp) {
        alert("找不到该章节！");
        return;
    }

    const script = document.createElement('script');
    script.src = targetEp.dataFile;
    script.onload = () => {
        startApp(targetEp.id);
    };
    script.onerror = () => {
        alert("数据文件加载失败：" + targetEp.dataFile);
    };
    document.body.appendChild(script);
})();



function startApp(currentEpId) {

    const DATA = window.CURRENT_EP_DATA;
    const COMIC_DATA = DATA.pages;
    const BGM_CONFIG = DATA.bgm;

    const State = {
        isStarted: false,
        mode: 'AUTO',
        isPaused: false,
        currentIndex: 0,
        isPlayingAudio: false
    };

    let bgmInstance = null;
    let voiceInstance = null;
    let autoTimer = null;

    // DOM 元素
    const container = document.getElementById('comic-container');
    const elCurrentPage = document.getElementById('current-page');
    const elTotalPage = document.getElementById('total-page');
    const tocList = document.getElementById('chapter-list');
    
    // 按钮元素
    const btnStart = document.getElementById('start-btn');
    const coverScreen = document.getElementById('cover-screen');
    const btnPlayToggle = document.getElementById('play-toggle');
    const labelPlay = document.getElementById('play-label');
    const iconPlay = document.getElementById('play-icon');
    const btnBgmToggle = document.getElementById('bgm-toggle');

    // === 1. 初始化 DOM ===
    function initDOM() {
        elTotalPage.innerText = String(COMIC_DATA.length).padStart(2, '0');
        elCurrentPage.innerText = "01";
        
        // 渲染漫画内容
        COMIC_DATA.forEach((section, index) => {
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'comic-section';
            if (section.layout) sectionDiv.classList.add(section.layout);
            sectionDiv.id = `sec-${index}`;
            
            section.images.forEach(imgSrc => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.className = 'comic-img';
                img.loading = "lazy";
                sectionDiv.appendChild(img);
            });
            container.appendChild(sectionDiv);
        });

        // 渲染右侧目录 (EPISODE_LIST)
        tocList.innerHTML = '';
        EPISODE_LIST.forEach((ep) => {
            const li = document.createElement('li');
            li.className = 'toc-item';
            li.innerText = ep.title; 
            
            // 高亮当前话
            if (ep.id === currentEpId) {
                li.classList.add('active');
            } else {
                li.style.cursor = "pointer";
                li.onclick = () => {
                    window.location.search = `?ep=${ep.id}`;
                };
            }
            tocList.appendChild(li);
        });
    }

    // === 2. 初始化动画 ===
    function initAnimations() {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        
        // A. 漫画内容
        const sections = document.querySelectorAll('.comic-section');
        sections.forEach((sec, index) => {
            const images = sec.querySelectorAll('.comic-img');
            gsap.fromTo(images, 
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.3,
                    scrollTrigger: {
                        trigger: sec, start: "top 60%",
                        onEnter: () => onSectionEnter(index),
                        onEnterBack: () => onSectionEnter(index)
                    }
                }
            );
        });

        // B. 左侧进度条
        const sidebarLimit = window.innerHeight - 250; 
        
        gsap.to("#progress-track", {
            y: sidebarLimit, 
            ease: "none",
            scrollTrigger: { 
                trigger: "body", 
                start: "top top", 
                end: "bottom bottom", 
                scrub: 0 
            }
        });
        const tocItems = document.querySelectorAll('.toc-item');
        
        if (tocItems.length > 0) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1 // 阻尼感
                }
            });

            tocItems.forEach((item, index) => {
                // === 坐标计算 ===
                
                // 1. 终点 (右上角)：
                // 第1个在 top: 20px
                // 第2个在 top: 55px ...
                const endTop = 20 + (index * 35); 

                // 2. 起点 (右下角)：
                // 我们希望它们一开始都在屏幕下方，但要在视野内
                // 比如从屏幕底部往上数：
                // 第1个在 bottom: 200px (或者 top: windowHeight - 200)
                // 第2个在 bottom: 165px ... 这样它们在下方也是整齐排列的
                // 这里的 150 是给底部 controls 留出的安全距离
                const startTop = window.innerHeight - 50 - ((tocItems.length - 1 - index) * 35);

                // 立即设置初始位置 (GSAP set)
                gsap.set(item, { top: startTop });

                // === 动画逻辑 ===
                // fromTo: 从下方位置 -> 移动到上方位置
                // 放入 timeline 意味着它们是串行的 (Item 1 到了，Item 2 才动)
                tl.fromTo(item, 
                    { top: startTop }, 
                    {
                        top: endTop,
                        ease: "power1.inOut",
                        duration: 1 // 这里的 duration 决定了它在整个滚动条里占的比例
                    }
                );
            });
        }
    }
    // === 核心逻辑函数 ===
    function onSectionEnter(index) {
        if (State.currentIndex === index && State.isPlayingAudio) return;
        State.currentIndex = index;
        updateUI(); // 这里会更新左侧页码

        if (State.mode === 'MANUAL') {
            playSectionAudio(index);
        }
        if (State.mode === 'AUTO' && index === 0 && !State.isPlayingAudio) {
            playSectionAudio(0);
        }
    }

    // === UI 更新函数 (修正左侧页码) ===
    function updateUI() {
        // 【修正1】更新当前分镜序号
        elCurrentPage.innerText = String(State.currentIndex + 1).padStart(2, '0');
        
        // 播放按钮状态
        if (State.mode === 'MANUAL') {
            labelPlay.innerText = "MANUAL"; iconPlay.innerText = "🖐";
        } else {
            if (State.isPaused) { labelPlay.innerText = "PAUSED"; iconPlay.innerText = "▶"; }
            else { labelPlay.innerText = "AUTO"; iconPlay.innerText = "⏸"; }
        }
    }

    // === 以下音频和滚动逻辑保持不变，为了完整性贴在这里 ===
    
    function playSectionAudio(index) {
        if (voiceInstance) { voiceInstance.stop(); voiceInstance.unload(); }
        if (autoTimer) autoTimer.kill();
        if (index >= COMIC_DATA.length) return;

        const data = COMIC_DATA[index];
        const playlist = data.audioPlaylist;

        if (!playlist || playlist.length === 0) {
            if (State.mode === 'AUTO' && !State.isPaused) {
                console.log(`[Section ${index}] Silent wait ${data.autoDuration}ms`);
                autoTimer = gsap.delayedCall(data.autoDuration / 1000, nextSection);
            }
            return;
        }

        let trackIndex = 0;
        function playNextTrack() {
            if (State.isPaused) return;
            if (trackIndex >= playlist.length) {
                if (State.mode === 'AUTO') nextSection();
                return;
            }
            const src = playlist[trackIndex];
            voiceInstance = new Howl({
                src: [src], html5: true,
                onend: () => { trackIndex++; playNextTrack(); },
                onloaderror: () => { trackIndex++; playNextTrack(); },
                onplayerror: () => { voiceInstance.once('unlock', function() { voiceInstance.play(); }); }
            });
            voiceInstance.play();
            State.isPlayingAudio = true;
        }
        playNextTrack();
    }

    function nextSection() {
        const nextIndex = State.currentIndex + 1;
        if (nextIndex >= COMIC_DATA.length) return;
        const nextEl = document.getElementById(`sec-${nextIndex}`);
        gsap.to(window, {
            scrollTo: { y: nextEl, offsetY: 50 },
            duration: 1.5, ease: "power2.inOut",
            onComplete: () => { playSectionAudio(nextIndex); }
        });
    }

    function initBGM() {
        if(!BGM_CONFIG.source) return;
        bgmInstance = new Howl({
            src: [BGM_CONFIG.source], loop: true, volume: BGM_CONFIG.volume, html5: true
        });
        bgmInstance.play();
    }

    btnStart.addEventListener('click', () => {
        State.isStarted = true;
        gsap.to(coverScreen, { opacity: 0, pointerEvents: 'none', duration: 0.5 });
        initBGM();
        playSectionAudio(0);
    });

    btnPlayToggle.addEventListener('click', () => {
        if (State.mode === 'MANUAL') {
            State.mode = 'AUTO'; State.isPaused = false;
            updateUI(); playSectionAudio(State.currentIndex);
        } else {
            State.isPaused = !State.isPaused;
            updateUI();
            if (State.isPaused) {
                if (voiceInstance) voiceInstance.pause();
                if (autoTimer) autoTimer.pause();
            } else {
                if (voiceInstance) voiceInstance.play();
                if (autoTimer) autoTimer.resume();
                if (!voiceInstance && !autoTimer) playSectionAudio(State.currentIndex);
            }
        }
    });
    
    btnBgmToggle.addEventListener('click', () => {
        if (!bgmInstance) return;
        if (bgmInstance.playing()) {
            bgmInstance.pause();
            btnBgmToggle.style.opacity = 0.5;
        } else {
            bgmInstance.play();
            btnBgmToggle.style.opacity = 1;
        }
    });

    window.addEventListener('wheel', () => { if (State.isStarted && State.mode === 'AUTO') switchToManual(); }, { passive: true });
    function switchToManual() {
        if (State.mode === 'MANUAL') return;
        State.mode = 'MANUAL'; State.isPaused = false; if (autoTimer) autoTimer.kill(); updateUI();
    }

    // 启动
    initDOM();
    initAnimations();
}