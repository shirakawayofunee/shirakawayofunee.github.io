// --- 漫画数据源 (模拟数据，请替换为真实路径) ---
const mangaData = {
  1: {
      title: "第一章：初遇",
      images: ["img/manga/c0/01.jpg", "img/manga/c0/02.jpg", "img/manga/c0/03.jpg", "img/manga/c0/04.jpg", "img/manga/c0/05.jpg", "img/manga/c0/06.jpg"]
  },
  2: {
      title: "第二章：觉醒",
      images: ["img/manga/c2/01.jpg", "img/manga/c2/02.jpg", "img/manga/c2/03.jpg", "img/manga/c2/04.jpg"]
  },
  3: {
      title: "第三章：对决",
      images: ["img/manga/c3/01.jpg", "img/manga/c3/02.jpg", "img/manga/c3/03.jpg", "img/manga/c3/04.jpg"]
  },
  4: {
      title: "第四章：回忆",
      images: ["img/manga/c0/01.jpg", "img/manga/c0/02.jpg"] // 示例重复
  },
  5: {
      title: "特别篇：日常",
      images: ["img/manga/c0/03.jpg", "img/manga/c0/04.jpg"] // 示例重复
  }
};

// 定义全局变量
var mangaSwiper = null;

// --- 初始化或加载章节 ---
function loadMangaChapter(chapterId) {
  const data = mangaData[chapterId];
  if (!data) return;

  const wrapper = document.getElementById("mangaWrapper");
  
  // 1. 更新标题
  document.getElementById("headerChapterNum").innerText = "CHAPTER 0" + chapterId;
  document.getElementById("headerChapterTitle").innerText = data.title;
  document.getElementById("mangaTotal").innerText = data.images.length;

  // 2. 生成 Slide HTML
  let slidesHtml = "";
  data.images.forEach((imgSrc, index) => {
      // data-swiper-parallax 可以增加滑动视差感，不需要可去掉
      slidesHtml += `
          <div class="swiper-slide">
              <img src="${imgSrc}" alt="Page ${index + 1}" data-mouse="mid">
          </div>
      `;
  });

  // 3. 销毁旧实例 (如果有) 并清空 DOM
  if (mangaSwiper) {
      mangaSwiper.destroy(true, true);
  }
  wrapper.innerHTML = slidesHtml;

  // 4. 重新初始化 Swiper (关键配置：双页 + RTL)
  mangaSwiper = new Swiper(".mangaSwiper", {
      // 确保 HTML 父容器有 dir="rtl"
      slidesPerView: 2,    // 一次显示 2 页
      slidesPerGroup: 2,   // 一次滑 2 页
      spaceBetween: 0,     // 页间距
      speed: 600,
      nested: true,        // 嵌套在主 Swiper 中必须开启
      grabCursor: true,    // 鼠标手势
      keyboard: {
          enabled: true,   // 允许键盘左右键翻页
      },
      navigation: {
          nextEl: ".manga-btn-prev", // RTL模式下，逻辑Next是视觉上的左边(Prev按钮)
          prevEl: ".manga-btn-next", // 反之亦然，这里如果发现反了，互换类名即可
      },
      on: {
          init: updatePageCount,
          slideChange: updatePageCount
      }
  });
}

// 更新页码显示 (1/10 -> 3/10)
function updatePageCount(swiper) {
  // 真实索引+1 (如果是双页，swiper.activeIndex 是左边那一页的索引)
  // RTL模式下，activeIndex 0 是最右边的第一张图
  let current = swiper.activeIndex + 1;
  let total = swiper.slides.length;
  document.getElementById("mangaCurrent").innerText = current + "-" + (current+1 > total ? total : current+1);
}

// --- 导航栏控制 ---

// 开关导航面板
function toggleMangaNav() {
  const panel = document.getElementById("mangaNavPanel");
  if (panel.style.display === "none") {
      panel.style.display = "flex";
  } else {
      panel.style.display = "none";
  }
}

// 切换章节点击事件
function switchChapter(id) {
  console.log("Switching to Chapter: " + id);
  // 1. 关闭导航板
  toggleMangaNav();
  // 2. 加载新数据
  loadMangaChapter(id);
}

// --- 页面加载完成后初始化默认章节 ---
$(document).ready(function() {
  // 默认加载第1章
  loadMangaChapter(1);
});