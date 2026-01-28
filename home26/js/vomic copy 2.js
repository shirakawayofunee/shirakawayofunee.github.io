// script.js

// === 0. 启动程序：解析 URL 并加载数据 ===
(function bootstrap() {
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

    // 动态加载对应的数据文件
    const script = document.createElement('script');
    script.src = targetEp.dataFile;
    script.onload = () => {
        // 数据加载完毕，启动主逻辑
        // 此时 window.CURRENT_EP_DATA 已经有值了
        startApp(targetEp.id);
    };
    script.onerror = () => {
        alert("数据文件加载失败：" + targetEp.dataFile);
    };
    document.body.appendChild(script);
})();


// === 主逻辑封装 ===
// 所有的原有逻辑都放在这里，等数据加载完才执行
function startApp(currentEpId) {
    // 从 window 对象读取刚才加载的数据
    const DATA = window.CURRENT_EP_DATA;
    const COMIC_DATA = DATA.pages;
    const BGM_CONFIG = DATA.bgm;

    // === 状态管理 ===
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
    
    // ... 其他按钮 DOM 获取保持不变 ...
    const btnStart = document.getElementById('start-btn');
    const coverScreen = document.getElementById('cover-screen');
    const btnPlayToggle = document.getElementById('play-toggle');
    const labelPlay = document.getElementById('play-label');
    const iconPlay = document.getElementById('play-icon');
    const btnBgmToggle = document.getElementById('bgm-toggle');

    // === 1. 初始化 DOM ===
    function initDOM() {
        // 左侧显示页数 (或者话数)
        // elTotalPage.innerText = String(COMIC_DATA.length).padStart(2, '0');
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

        // === 渲染右侧目录 (话数列表) ===
        // 这里显示的不再是分镜标题，而是 menu.js 里的每一话
        EPISODE_LIST.forEach((ep) => {
            const li = document.createElement('li');
            li.className = 'toc-item';
            li.innerText = ep.title; // 例如 "01 / 雨夜"
            
            // 如果是当前这一话，标记高亮
            if (ep.id === currentEpId) {
                li.classList.add('active');
                // 更新左侧总数显示为当前话数 (只是为了视觉匹配)
                elCurrentPage.innerText = ep.id;
            } else {
                // 如果不是当前话，点击跳转
                li.style.cursor = "pointer";
                li.onclick = () => {
                    // 跳转 URL，刷新页面
                    window.location.search = `?ep=${ep.id}`;
                };
            }
            
            tocList.appendChild(li);
        });
        
        // 左侧总页数显示为 总话数
        elTotalPage.innerText = String(EPISODE_LIST.length).padStart(2, '0');
    }

    // === 2. 初始化动画 (包含右侧电梯效果) ===
    function initAnimations() {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        
        // 漫画内容浮现动画 (保持不变)
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

        // === 左侧进度条跟随 ===
        const sidebarHeight = window.innerHeight - 200; 
        gsap.to("#progress-track", {
            y: sidebarHeight, 
            ease: "none",
            scrollTrigger: { trigger: "body", start: "top top", end: "bottom bottom", scrub: 0 }
        });

        // === 右侧目录：电梯升起动画 ===
        // 你的需求：最开始(01)所有字都在下方，随着进度往下，字有一个升起动画
        if (tocList) {
            gsap.fromTo(tocList, 
                { y: window.innerHeight * 0.3 }, // 初始状态：列表整体沉在下面
                { 
                    y: -window.innerHeight * 0.3, // 结束状态：列表整体升到上面
                    ease: "none",
                    scrollTrigger: {
                        trigger: "body",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.5 // 延迟感
                    }
                }
            );
        }
    }

    // === 核心逻辑函数 (保持原样) ===
    function onSectionEnter(index) {
        if (State.currentIndex === index && State.isPlayingAudio) return;
        State.currentIndex = index;
        updateUI();

        if (State.mode === 'MANUAL') {
            playSectionAudio(index);
        }
        if (State.mode === 'AUTO' && index === 0 && !State.isPlayingAudio) {
            playSectionAudio(0);
        }
    }

    function playSectionAudio(index) {
        // ... (请复制之前的 playSectionAudio 代码，注意变量名要用内部的 COMIC_DATA) ...
        // 为了篇幅，我这里简写了，请务必把之前的 playSectionAudio 逻辑完整贴回来
        // 重点：使用 COMIC_DATA[index] 而不是全局变量
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

    // === 按钮事件绑定 (保持原样) ===
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
    
    // ... 这里的切换 Manual 逻辑和 updateUI 逻辑和之前完全一样 ...
    function updateUI() {
        // elCurrentPage.innerText = ... 这里不需要再动了，因为左侧现在显示话数
        if (State.mode === 'MANUAL') {
            labelPlay.innerText = "MANUAL"; iconPlay.innerText = "🖐";
        } else {
            if (State.isPaused) { labelPlay.innerText = "PAUSED"; iconPlay.innerText = "▶"; }
            else { labelPlay.innerText = "AUTO"; iconPlay.innerText = "⏸"; }
        }
    }

    window.addEventListener('wheel', () => { if (State.isStarted && State.mode === 'AUTO') switchToManual(); }, { passive: true });
    function switchToManual() {
        if (State.mode === 'MANUAL') return;
        State.mode = 'MANUAL'; State.isPaused = false; if (autoTimer) autoTimer.kill(); updateUI();
    }

    // === 启动内部初始化 ===
    initDOM();
    initAnimations();
}