/*
 * @Author: DCBZ
 * @Date: 2025-02-25 08:45:50
 * @LastEditors: your name
 * @LastEditTime: 2025-08-20 23:50:38
 * @Description: Enhanced music control with auto-play on Swiper slide change
 * @FilePath: \shirakawayofunee.github.io\home\js\musicControls.js
 */
var musicTimer;

function muteMusic(num, src) {
    const bgmPlayer = document.getElementById('bgm');
    const playButton = document.querySelector('.imgMusicPlay');
    const stopButton = document.querySelector('.imgMusicStop');

    if (!bgmPlayer) {
        console.error('Audio element #bgm not found');
        return;
    }
    if (src) bgmPlayer.src = src; // 支持动态设置音频源

    if (num === 1) {
        console.log('Pausing BGM');
        bgmPlayer.pause();
        if (playButton) playButton.style.display = 'none';
        if (stopButton) stopButton.style.display = 'block';
    } else if (num === 2) {
        console.log('Attempting to play BGM, src:', bgmPlayer.src);
        bgmPlayer.play().then(() => {
            console.log('BGM playing successfully');
            if (playButton) playButton.style.display = 'block';
            if (stopButton) stopButton.style.display = 'none';
            bgmPlayer.muted = false; // 确保非静音
        }).catch(e => {
            console.error('BGM auto-play error:', e);
            // 尝试静音播放
            bgmPlayer.muted = true;
            bgmPlayer.play().catch(e => console.error('Muted BGM play error:', e));
            // 显示播放按钮，提示用户手动播放
            if (playButton) playButton.style.display = 'block';
            if (stopButton) stopButton.style.display = 'none';
            showPlayPrompt(); // 显示手动播放提示
        });
    }
}

function changeGalleryMusic(type) {
    if (type === "play") {
        muteMusic(1);
        document.querySelector('.music-z').style.display = 'block';
        document.querySelector('.music-pc').style.display = 'none';
        const allMusic = document.getElementById('allMusic');
        allMusic.play().catch(e => console.error('allMusic play error:', e));
        document.querySelector('.musicmaskDetail-con-left-record').classList.add('music-rotate');
        document.querySelector('.musicmaskDetail-con-top-record-mobile').classList.add('music-rotate');
        musicTimer = setInterval(changeMusicProgress, 500);
    } else if (type === "stop") {
        document.querySelector('.music-z').style.display = 'none';
        document.querySelector('.music-pc').style.display = 'block';
        document.getElementById('allMusic').pause();
        document.querySelector('.musicmaskDetail-con-left-record').classList.remove('music-rotate');
        document.querySelector('.musicmaskDetail-con-top-record-mobile').classList.remove('music-rotate');
    }
}

function changeMusicProgress() {
    const allMusic = document.getElementById('allMusic');
    if (allMusic.ended) {
        document.querySelector('.music-z').style.display = 'none';
        document.querySelector('.music-pc').style.display = 'block';
        document.querySelector('.musicmaskDetail-con-left-record').classList.remove('music-rotate');
        document.querySelector('.musicmaskDetail-con-top-record-mobile').classList.remove('music-rotate');
        clearInterval(musicTimer);
        return;
    }
    let percent = (allMusic.currentTime / allMusic.duration).toFixed(4);
    let width = document.getElementById('progress1').offsetWidth * percent;
    document.getElementById('progressNow1').style.width = width + 'px';
    document.getElementById('progressNow2').style.width = width + 'px';
    let widthMobile = document.getElementById('progressM').offsetWidth * percent;
    document.getElementById('progressNowM').style.width = widthMobile + 'px';
    let data = getTimeFromSeconds(allMusic.currentTime);
    let allData = getTimeFromSeconds(allMusic.duration);
    document.querySelector('.musicmaskDetail-con-right-bottom-bottom-time-start-pc').textContent = data;
    document.querySelector('.musicmaskDetail-con-right-bottom-bottom-time-end-pc').textContent = allData;
    document.querySelector('.musicmaskDetail-con-right-bottom-bottom-time-mobile-start').textContent = data;
    document.querySelector('.musicmaskDetail-con-right-bottom-bottom-time-mobile-end').textContent = allData;
}

// 显示手动播放提示
function showPlayPrompt() {
    const prompt = document.createElement('div');
    prompt.innerText = '请点击播放背景音乐';
    prompt.style.cssText = 'position: fixed; bottom: 20px; right: 20px; padding: 10px; background: #333; color: #fff; z-index: 1000;';
    document.body.appendChild(prompt);
    setTimeout(() => prompt.remove(), 5000);
}

// 自动播放触发机制
function enableAutoPlayOnSlideChange(swiperInstance) {
    if (!swiperInstance) {
        console.error('Swiper instance not provided');
        return;
    }
    console.log('Binding auto-play to Swiper slideChange event, Swiper instance:', swiperInstance);
    swiperInstance.on('slideChange', function () {
        console.log('Slide changed to index:', this.activeIndex, 'attempting to play music');
        muteMusic(2); // 尝试播放背景音乐
    });
}

// 页面加载后监听用户交互
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded, setting up auto-play listeners');
    // 首次滚动或点击触发播放
    document.addEventListener('scroll', function tryAutoPlay() {
        console.log('Scroll detected, attempting to play music');
        muteMusic(2);
    }, { once: true });
    document.addEventListener('click', function tryAutoPlay() {
        console.log('Click detected, attempting to play music');
        muteMusic(2);
    }, { once: true });
});