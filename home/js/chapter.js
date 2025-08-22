/*
 * @Author: DCBZ
 * @Date: 2025-08-22 17:51:18
 * @LastEditors: your name
 * @LastEditTime: 2025-08-22 17:51:49
 * @Description: 
 * @FilePath: \shirakawayofunee.github.io\home\js\chapter.js
 */
document.addEventListener('DOMContentLoaded', () => {
    // 预加载背景图
    const images = [
      'img/flower/bg1.png', 'img/flower/bg2.png', 'img/flower/bg3.png', 'img/flower/bg4.png',
      'img/flower/bg1-mobile.png', 'img/flower/bg2-mobile.png', 'img/flower/bg3-mobile.png', 'img/flower/bg4-mobile.png',
      'img/flower/1-1.png', 'img/flower/1-2.png', 'img/flower/1-3.png',
      'img/flower/2-1.png', 'img/flower/2-2.png', 'img/flower/2-3.png',
      'img/flower/3-1.png', 'img/flower/3-2.png', 'img/flower/3-3.png',
      'img/flower/4-1.png', 'img/flower/4-2.png', 'img/flower/4-3.png'
    ];
    images.forEach(src => {
      new Image().src = src;
    });
  
    // 初始化 PC 端 Swiper
    const chapterSwiper = new Swiper('#chapterSwiper', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    });
  
    // 初始化移动端 Swiper
    const chapterSwiperMobile = new Swiper('#chapterSwiperMobile', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    });
  
    // 暂停/播放按钮（PC 端）
    const pausePlayBtn = document.querySelector('#chapterSwiper .swiper-pause-play');
    pausePlayBtn.addEventListener('click', () => {
      if (chapterSwiper.autoplay.running) {
        chapterSwiper.autoplay.stop();
        pausePlayBtn.textContent = 'Play';
      } else {
        chapterSwiper.autoplay.start();
        pausePlayBtn.textContent = 'Pause';
      }
    });
  
    // 暂停/播放按钮（移动端）
    const pausePlayBtnMobile = document.querySelector('#chapterSwiperMobile .swiper-pause-play');
    pausePlayBtnMobile.addEventListener('click', () => {
      if (chapterSwiperMobile.autoplay.running) {
        chapterSwiperMobile.autoplay.stop();
        pausePlayBtnMobile.textContent = 'Play';
      } else {
        chapterSwiperMobile.autoplay.start();
        pausePlayBtnMobile.textContent = 'Pause';
      }
    });
  
    // 鼠标悬停暂停（PC 端）
    document.querySelector('#chapterSwiper').addEventListener('mouseenter', () => {
      chapterSwiper.autoplay.stop();
    });
    document.querySelector('#chapterSwiper').addEventListener('mouseleave', () => {
      if (pausePlayBtn.textContent === 'Pause') {
        chapterSwiper.autoplay.start();
      }
    });
  });