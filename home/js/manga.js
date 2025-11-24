/*
 * @Author: DCBZ
 * @Date: 2025-11-24 07:17:38
 * @LastEditors: your name
 * @LastEditTime: 2025-11-24 07:17:49
 * @Description: 
 * @FilePath: \shirakawayofunee.github.io\home\js\chapter copy.js
 */
// 初始化漫画阅读器的 Swiper
var mangaSwiper = new Swiper(".mangaSwiper", {
  direction: "horizontal", // 漫画横向翻页
  loop: false,             // 是否循环
  speed: 600,
  slidesPerView: 1,        // 一次看一张
  spaceBetween: 0,
  nested: true,            // 关键：表示它是嵌套在另一个Swiper里的，防止冲突
  mousewheel: false,       // 建议关闭漫画内部的滚轮，避免滚轮滑太快直接切页
  
  // 按钮导航
  navigation: {
    nextEl: ".manga-button-next",
    prevEl: ".manga-button-prev",
  },
  
  // 页码更新逻辑
  on: {
    init: function (swiper) {
      updateMangaPagination(swiper);
    },
    slideChange: function (swiper) {
      updateMangaPagination(swiper);
    },
  },
});

// 简单的页码更新函数
function updateMangaPagination(swiper) {
  var current = swiper.realIndex + 1; // 当前页 (索引+1)
  var total = swiper.slides.length;   // 总页数
  
  var currentEl = document.getElementById("mangaCurrent");
  var totalEl = document.getElementById("mangaTotal");
  
  if(currentEl) currentEl.innerText = current;
  if(totalEl) totalEl.innerText = total;
}