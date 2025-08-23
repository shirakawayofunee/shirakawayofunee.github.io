/*
 * @Author: DCBZ
 * @Date: 2025-02-25 08:45:50
 * @LastEditors: your name
 * @LastEditTime: 2025-08-21
 * @Description: Enhanced music control with auto-play on Swiper slide change and correct button display
 * @FilePath: \shirakawayofunee.github.io\home\js\musicControls.js
 */
var musicTimer;

function muteMusic(num, src) {
    const bgmPlayer = document.getElementById('bgm');
    const playButton = document.querySelector('.imgMusicStop'); // v2c.png (播放按钮)
    const stopButton = document.querySelector('.imgMusicPlay'); // v2.gif (暂停按钮)

    if (!bgmPlayer) {
        console.error('Audio element #bgm not found');
        return;
    }
    if (src) bgmPlayer.src = src;

    if (num === 1) {
        console.log('Pausing BGM');
        bgmPlayer.pause();
        bgmPlayer.currentTime = 0; // 重置到开头
        if (playButton) playButton.style.display = 'block';
        if (stopButton) stopButton.style.display = 'none';
    } else if (num === 2) {
        console.log('Attempting to play BGM, src:', bgmPlayer.src);
        bgmPlayer.play().then(() => {
            console.log('BGM playing successfully');
            if (playButton) playButton.style.display = 'none';
            if (stopButton) stopButton.style.display = 'block';
            bgmPlayer.muted = false;
        }).catch(e => {
            console.error('BGM auto-play error:', e);
            bgmPlayer.muted = true;
            bgmPlayer.play().catch(e => console.error('Muted BGM play error:', e));
            if (playButton) playButton.style.display = 'block';
            if (stopButton) stopButton.style.display = 'none';
            showPlayPrompt();
        });
    }
}

function changeGalleryMusic(type) {
    if (type === "play") {
        muteMusic(1);
        const musicZ = document.querySelector('.music-z');
        const musicPc = document.querySelector('.music-pc');
        if (musicZ) musicZ.style.display = 'block';
        if (musicPc) musicPc.style.display = 'none';
        const allMusic = document.getElementById('allMusic');
        if (allMusic) {
            allMusic.play().catch(e => console.error('allMusic play error:', e));
        } else {
            console.error('Audio element #allMusic not found');
        }
        const leftRecord = document.querySelector('.musicmaskDetail-con-left-record');
        const topRecordMobile = document.querySelector('.musicmaskDetail-con-top-record-mobile');
        if (leftRecord) leftRecord.classList.add('music-rotate');
        if (topRecordMobile) topRecordMobile.classList.add('music-rotate');
        musicTimer = setInterval(changeMusicProgress, 500);
    } else if (type === "stop") {
        const musicZ = document.querySelector('.music-z');
        const musicPc = document.querySelector('.music-pc');
        if (musicZ) musicZ.style.display = 'none';
        if (musicPc) musicPc.style.display = 'block';
        const allMusic = document.getElementById('allMusic');
        if (allMusic) allMusic.pause();
        const leftRecord = document.querySelector('.musicmaskDetail-con-left-record');
        const topRecordMobile = document.querySelector('.musicmaskDetail-con-top-record-mobile');
        if (leftRecord) leftRecord.classList.remove('music-rotate');
        if (topRecordMobile) topRecordMobile.classList.remove('music-rotate');
    }
}

function changeMusicProgress() {
    const allMusic = document.getElementById('allMusic');
    if (!allMusic) {
        console.error('Audio element #allMusic not found');
        clearInterval(musicTimer);
        return;
    }
    if (allMusic.ended) {
        const musicZ = document.querySelector('.music-z');
        const musicPc = document.querySelector('.music-pc');
        if (musicZ) musicZ.style.display = 'none';
        if (musicPc) musicPc.style.display = 'block';
        const leftRecord = document.querySelector('.musicmaskDetail-con-left-record');
        const topRecordMobile = document.querySelector('.musicmaskDetail-con-top-record-mobile');
        if (leftRecord) leftRecord.classList.remove('music-rotate');
        if (topRecordMobile) topRecordMobile.classList.remove('music-rotate');
        clearInterval(musicTimer);
        return;
    }
    let percent = (allMusic.currentTime / allMusic.duration).toFixed(4);
    const progress1 = document.getElementById('progress1');
    const progressNow1 = document.getElementById('progressNow1');
    const progressNow2 = document.getElementById('progressNow2');
    const progressM = document.getElementById('progressM');
    const progressNowM = document.getElementById('progressNowM');
    if (progress1 && progressNow1 && progressNow2) {
        let width = progress1.offsetWidth * percent;
        progressNow1.style.width = width + 'px';
        progressNow2.style.width = width + 'px';
    }
    if (progressM && progressNowM) {
        let widthMobile = progressM.offsetWidth * percent;
        progressNowM.style.width = widthMobile + 'px';
    }
    let data = getTimeFromSeconds(allMusic.currentTime);
    let allData = getTimeFromSeconds(allMusic.duration);
    const timeStartPc = document.querySelector('.musicmaskDetail-con-right-bottom-bottom-time-start-pc');
    const timeEndPc = document.querySelector('.musicmaskDetail-con-right-bottom-bottom-time-end-pc');
    const timeStartMobile = document.querySelector('.musicmaskDetail-con-right-bottom-bottom-time-mobile-start');
    const timeEndMobile = document.querySelector('.musicmaskDetail-con-right-bottom-bottom-time-mobile-end');
    if (timeStartPc) timeStartPc.textContent = data;
    if (timeEndPc) timeEndPc.textContent = allData;
    if (timeStartMobile) timeStartMobile.textContent = data;
    if (timeEndMobile) timeEndMobile.textContent = allData;
}

function showPlayPrompt() {
    const prompt = document.createElement('div');
    prompt.innerText = '请点击播放背景音乐';
    prompt.style.cssText = 'position: fixed; bottom: 20px; right: 20px; padding: 10px; background: #333; color: #fff; z-index: 1000;';
    document.body.appendChild(prompt);
    setTimeout(() => prompt.remove(), 5000);
}

function enableAutoPlayOnSlideChange(swiperInstance) {
    if (!swiperInstance) {
        console.error('Swiper instance not provided');
        return;
    }
    console.log('Binding auto-play to Swiper slideChange event, Swiper instance:', swiperInstance);
    swiperInstance.on('slideChange', function () {
        console.log('Slide changed to index:', this.activeIndex, 'attempting to play music');
        muteMusic(2);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded, setting up auto-play listeners');
    document.addEventListener('click', function tryAutoPlay() {
        console.log('Click detected, attempting to play music');
        muteMusic(2);
    }, { once: true });
});