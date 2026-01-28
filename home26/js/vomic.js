// script.js

// === 状态管理 ===
const State = {
    isStarted: false,
    mode: 'AUTO',
    isPaused: false,
    currentIndex: 0,
    isPlayingAudio: false
};

// === 资源变量 ===
let bgmInstance = null; // 专门管 BGM
let voiceInstance = null; // 专门管台词
let autoTimer = null;

// === DOM 元素 ===
const container = document.getElementById('comic-container');
const btnStart = document.getElementById('start-btn');
const coverScreen = document.getElementById('cover-screen');
const elCurrentPage = document.getElementById('current-page');
const elTotalPage = document.getElementById('total-page');
const btnPlayToggle = document.getElementById('play-toggle');
const labelPlay = document.getElementById('play-label');
const iconPlay = document.getElementById('play-icon');
const btnBgmToggle = document.getElementById('bgm-toggle'); // BGM 开关

// 1. 初始化页面
function initDOM() {
    elTotalPage.innerText = String(COMIC_DATA.length).padStart(2, '0');
    
    COMIC_DATA.forEach((section, index) => {
        const sectionDiv = document.createElement('div');
        
        // 基础类名
        sectionDiv.className = 'comic-section';
        // === 新增：如果 JSON 里配置了 layout，就加进去 ===
        if (section.layout) {
            sectionDiv.classList.add(section.layout);
        }
        
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
}

// 2. 初始化动画
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    const sections = document.querySelectorAll('.comic-section');
    sections.forEach((sec, index) => {
        
        // 获取当前组里所有的图片
        const images = sec.querySelectorAll('.comic-img');

        // === 修改：不再是 sec 整体动，而是里面的 images 依次动 ===
        gsap.fromTo(images, 
            { 
                y: 100,      // 初始位置：在下方100px
                opacity: 0   // 初始状态：透明
            },
            {
                y: 0,        // 结束位置：归位
                opacity: 1,  // 结束状态：显现
                duration: 1,
                ease: "power3.out", // 更丝滑的缓动
                stagger: 0.3, // === 关键点：每张图间隔 0.3秒 依次浮现 ===
                scrollTrigger: {
                    trigger: sec,
                    start: "top 60%", // 稍微晚一点触发，让用户看清楚
                    // markers: true, // 调试时可以打开
                    onEnter: () => onSectionEnter(index),
                    onEnterBack: () => onSectionEnter(index)
                }
            }
        );
    });
}

// === 核心：进入章节 ===
function onSectionEnter(index) {
    // 防止重复触发
    if (State.currentIndex === index && State.isPlayingAudio) return;
    
    State.currentIndex = index;
    updateUI();

    if (State.mode === 'MANUAL') {
        playSectionAudio(index);
    }
    // 如果是 AUTO 模式，滚动完成后会在 nextSection() 里调用 playSectionAudio，
    // 这里就不需要重复调用，除非是第一章初始化。
    if (State.mode === 'AUTO' && index === 0 && !State.isPlayingAudio) {
        playSectionAudio(0);
    }
}

// === 核心：播放台词 (带容错处理) ===
function playSectionAudio(index) {
    // 清理上一段
    if (voiceInstance) {
        voiceInstance.stop();
        voiceInstance.unload();
    }
    if (autoTimer) autoTimer.kill();

    if (index >= COMIC_DATA.length) return;

    const data = COMIC_DATA[index];
    const playlist = data.audioPlaylist;
    
    // 情况A：本段无台词 -> 纯倒计时
    if (!playlist || playlist.length === 0) {
        if (State.mode === 'AUTO' && !State.isPaused) {
            console.log(`[Section ${index}] 无台词，停留 ${data.autoDuration}ms`);
            autoTimer = gsap.delayedCall(data.autoDuration / 1000, nextSection);
        }
        return;
    }

    // 情况B：有台词 -> 顺序播放
    let trackIndex = 0;
    
    function playNextTrack() {
        if (State.isPaused) return;

        // 列表播完 -> 下一章
        if (trackIndex >= playlist.length) {
            if (State.mode === 'AUTO') nextSection();
            return;
        }

        const src = playlist[trackIndex];
        console.log(`[Audio] 准备播放: ${src}`);

        voiceInstance = new Howl({
            src: [src],
            html5: true, 
            onend: () => {
                console.log(`[Audio] 播放完毕: ${src}`);
                trackIndex++;
                playNextTrack();
            },
            onloaderror: (id, err) => {
                console.error(`[Error] 加载失败，跳过: ${src}`, err);
                // 关键：加载失败必须继续，否则卡死
                trackIndex++;
                playNextTrack(); 
            },
            onplayerror: (id, err) => {
                console.error(`[Error] 播放因为浏览器限制失败`, err);
                voiceInstance.once('unlock', function() {
                    voiceInstance.play();
                });
            }
        });

        voiceInstance.play();
        State.isPlayingAudio = true;
    }

    playNextTrack();
}

// === 核心：自动滚动 ===
function nextSection() {
    const nextIndex = State.currentIndex + 1;
    if (nextIndex >= COMIC_DATA.length) {
        console.log("全篇结束");
        return;
    }

    const nextEl = document.getElementById(`sec-${nextIndex}`);
    if(!nextEl) return;

    console.log(`[Auto] 滚动到第 ${nextIndex + 1} 章`);

    gsap.to(window, {
        scrollTo: { y: nextEl, offsetY: 50 },
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
            playSectionAudio(nextIndex);
        }
    });
}

// === BGM 控制 ===
function initBGM() {
    if(!BGM_CONFIG.source) return;
    
    bgmInstance = new Howl({
        src: [BGM_CONFIG.source],
        loop: true,
        volume: BGM_CONFIG.volume,
        html5: true
    });
    
    bgmInstance.play();
    console.log("[BGM] 开始播放");
}

// === 交互事件 ===

// 1. 点击开始
btnStart.addEventListener('click', () => {
    State.isStarted = true;
    gsap.to(coverScreen, { opacity: 0, pointerEvents: 'none', duration: 0.5 });
    
    initBGM(); // 启动 BGM
    playSectionAudio(0); // 启动第一句台词
});

// 2. BGM 开关
btnBgmToggle.addEventListener('click', () => {
    if (!bgmInstance) return;
    if (bgmInstance.playing()) {
        bgmInstance.pause();
        btnBgmToggle.style.opacity = 0.5; // 变暗表示关闭
    } else {
        bgmInstance.play();
        btnBgmToggle.style.opacity = 1;
    }
});

// 3. 播放/暂停/模式切换
btnPlayToggle.addEventListener('click', () => {
    if (State.mode === 'MANUAL') {
        switchToAuto();
    } else {
        togglePause();
    }
});

function togglePause() {
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

function switchToAuto() {
    State.mode = 'AUTO';
    State.isPaused = false;
    updateUI();
    playSectionAudio(State.currentIndex);
}

function switchToManual() {
    if (State.mode === 'MANUAL') return;
    console.log("[Mode] 切换到手动");
    State.mode = 'MANUAL';
    State.isPaused = false;
    if (autoTimer) autoTimer.kill();
    updateUI();
}

// 4. 监听滚轮打断
window.addEventListener('wheel', () => {
    if (State.isStarted && State.mode === 'AUTO') switchToManual();
}, { passive: true });
window.addEventListener('touchmove', () => {
    if (State.isStarted && State.mode === 'AUTO') switchToManual();
}, { passive: true });

// UI 更新
function updateUI() {
    elCurrentPage.innerText = String(State.currentIndex + 1).padStart(2, '0');
    
    if (State.mode === 'MANUAL') {
        labelPlay.innerText = "MANUAL";
        iconPlay.innerText = "🖐";
    } else {
        if (State.isPaused) {
            labelPlay.innerText = "PAUSED";
            iconPlay.innerText = "▶";
        } else {
            labelPlay.innerText = "AUTO";
            iconPlay.innerText = "⏸";
        }
    }
}

// 启动
initDOM();
initAnimations();