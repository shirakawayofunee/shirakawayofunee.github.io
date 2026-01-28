// === 状态管理 ===
const State = {
    isStarted: false,
    mode: 'AUTO', // 'AUTO' | 'MANUAL'
    isPaused: false, // 仅在 AUTO 模式下有效（暂停播放）
    currentIndex: 0,
    isPlayingAudio: false
};

// === 资源初始化 ===
let bgm;
let currentHowl = null; // 当前正在播放的语音实例
let autoTimer = null; // 用于无声页面的定时器

// === DOM 元素 ===
const container = document.getElementById('comic-container');
const btnStart = document.getElementById('start-btn');
const coverScreen = document.getElementById('cover-screen');
const elCurrentPage = document.getElementById('current-page');
const elTotalPage = document.getElementById('total-page');
const btnPlayToggle = document.getElementById('play-toggle');
const labelPlay = document.getElementById('play-label');
const iconPlay = document.getElementById('play-icon');

// 1. 初始化页面结构
function initDOM() {
    elTotalPage.innerText = String(COMIC_DATA.length).padStart(2, '0');
    
    COMIC_DATA.forEach((section, index) => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'comic-section';
        sectionDiv.id = `sec-${index}`;
        
        // 生成图片
        section.images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.className = 'comic-img';
            sectionDiv.appendChild(img);
        });

        container.appendChild(sectionDiv);
    });
}

// 2. 初始化 GSAP ScrollTrigger
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const sections = document.querySelectorAll('.comic-section');
    
    sections.forEach((sec, index) => {
        // 图片浮现动画
        gsap.to(sec, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sec,
                start: "top 70%", // 当元素顶部到达视口70%处触发
                onEnter: () => onSectionEnter(index),
                onEnterBack: () => onSectionEnter(index) // 往回滚也触发
            }
        });
    });
}

// === 核心逻辑：进入章节 ===
function onSectionEnter(index) {
    if (State.currentIndex === index && State.isPlayingAudio) return;
    State.currentIndex = index;
    updateUI();

    // 无论什么模式，进入新章节都要处理音频
    // 如果是手动模式：播放音频（如果用户滚太快，需要切掉上一个）
    // 如果是自动模式：这里主要是为了更新进度，播放逻辑由 autoSequence 接管
    
    if (State.mode === 'MANUAL') {
        playSectionAudio(index);
    }
}

// === 音频播放逻辑 ===
function playSectionAudio(index) {
    // 停止上一段声音和定时器
    if (currentHowl) currentHowl.stop();
    if (autoTimer) autoTimer.kill();

    const data = COMIC_DATA[index];
    const playlist = data.audioPlaylist;
    
    if (playlist.length === 0) {
        // 无音频情况
        if (State.mode === 'AUTO' && !State.isPaused) {
            console.log(`Section ${index}: Silent, wait ${data.autoDuration}ms`);
            autoTimer = gsap.delayedCall(data.autoDuration / 1000, nextSection);
        }
        return;
    }

    // 递归播放列表
    let trackIndex = 0;
    
    function playNextTrack() {
        if (State.isPaused) return; // 暂停状态不播下一句

        if (trackIndex >= playlist.length) {
            // 播放完毕
            if (State.mode === 'AUTO') nextSection();
            return;
        }

        const src = playlist[trackIndex];
        currentHowl = new Howl({
            src: [src],
            html5: true, // 建议开启，支持大文件流式播放
            onend: () => {
                trackIndex++;
                playNextTrack();
            }
        });
        currentHowl.play();
        State.isPlayingAudio = true;
    }

    playNextTrack();
}

// === 自动滚动逻辑 ===
function nextSection() {
    const nextIndex = State.currentIndex + 1;
    if (nextIndex >= COMIC_DATA.length) return; // 结束

    // 计算下一个章节的位置
    const nextEl = document.getElementById(`sec-${nextIndex}`);
    
    // 平滑滚动
    gsap.to(window, {
        scrollTo: { y: nextEl, offsetY: 50 }, // offsetY 留点顶部边距
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: () => {
            // 滚动完成后，播放该章节音频
            playSectionAudio(nextIndex);
        }
    });
}

// === 交互控制 ===

// 开始按钮
btnStart.addEventListener('click', () => {
    State.isStarted = true;
    // 隐藏封面
    gsap.to(coverScreen, { opacity: 0, pointerEvents: 'none', duration: 0.5 });
    
    // 初始化 BGM
    // bgm = new Howl({ src: ['assets/bgm.mp3'], loop: true, volume: 0.5 });
    // bgm.play();

    // 启动 Auto 流程
    playSectionAudio(0);
});

// 切换播放/暂停/自动/手动
btnPlayToggle.addEventListener('click', () => {
    if (State.mode === 'MANUAL') {
        // 从手动切回自动
        switchToAuto();
    } else {
        // 在自动模式下切换 播放/暂停
        togglePause();
    }
});

function togglePause() {
    State.isPaused = !State.isPaused;
    updateUI();
    
    if (State.isPaused) {
        if (currentHowl) currentHowl.pause();
        if (autoTimer) autoTimer.pause();
    } else {
        if (currentHowl) currentHowl.play();
        if (autoTimer) autoTimer.resume();
        // 如果暂停时刚好没声音也没定时器（极少情况），手动触发一下
        if (!currentHowl && !autoTimer) playSectionAudio(State.currentIndex);
    }
}

function switchToAuto() {
    State.mode = 'AUTO';
    State.isPaused = false;
    updateUI();
    // 立即从当前位置继续
    playSectionAudio(State.currentIndex);
}

function switchToManual() {
    if (State.mode === 'MANUAL') return;
    State.mode = 'MANUAL';
    State.isPaused = false; // 手动模式不存在“暂停”概念，只有滚和不滚
    if (autoTimer) autoTimer.kill(); // 杀掉自动倒计时
    updateUI();
}

// 监听用户主动滚动（打断 Auto 模式）
let isScrolling;
window.addEventListener('wheel', () => {
    if (State.isStarted && State.mode === 'AUTO') {
        switchToManual();
    }
}, { passive: true });

window.addEventListener('touchmove', () => {
    if (State.isStarted && State.mode === 'AUTO') {
        switchToManual();
    }
}, { passive: true });

// UI 更新
function updateUI() {
    elCurrentPage.innerText = String(State.currentIndex + 1).padStart(2, '0');
    
    if (State.mode === 'MANUAL') {
        labelPlay.innerText = "MANUAL";
        iconPlay.innerText = "🖐"; // 手掌图标
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

// === 启动 ===
initDOM();
initAnimations();