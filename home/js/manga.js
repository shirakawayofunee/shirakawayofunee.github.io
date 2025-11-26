// --- 漫画数据源 (模拟数据，请替换为真实路径) ---
const mangaData = {
  1: {
      title: "「何のために戦うか」",
      images: ["img/manga/c0/01.jpg", "img/manga/c0/02.jpg", "img/manga/c0/03.jpg", "img/manga/c0/04.jpg", 
      "img/manga/c0/05.jpg", "img/manga/c0/06.jpg", "img/manga/c0/07（落稿）.jpg", "img/manga/c0/08（落稿）.jpg"]
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
// 修改加载逻辑，改为“物理双页”
function loadMangaChapter(chapterId) {
    const data = mangaData[chapterId];
    if (!data) return;

    // 更新标题
    document.getElementById("headerChapterNum").innerText = "CHAPTER 0" + chapterId;
    document.getElementById("headerChapterTitle").innerText = data.title;
    document.getElementById("mangaTotal").innerText = data.images.length; // 总页数还是按张数算

    const wrapper = document.getElementById("mangaWrapper");
    let slidesHtml = "";

    // --- 核心算法：两两分组 ---
    const images = data.images;
    // 每次 i 加 2
    for (let i = 0; i < images.length; i += 2) {
        // 漫画逻辑（RTL）：
        // i 是较小的页码（Page 1），应该在右边 (Right)
        // i+1 是较大的页码（Page 2），应该在左边 (Left)
        let rightImgSrc = images[i]; 
        let leftImgSrc = images[i + 1]; 

        slidesHtml += `<div class="swiper-slide">`;
        
        // 1. 左侧容器 (放 Page 2)
        slidesHtml += `<div class="manga-page-left">`;
        if (leftImgSrc) {
            slidesHtml += `<img src="${leftImgSrc}" class="manga-page-img" data-mouse="mid">`;
        }
        slidesHtml += `</div>`;

        // 2. 右侧容器 (放 Page 1)
        slidesHtml += `<div class="manga-page-right">`;
        if (rightImgSrc) {
            slidesHtml += `<img src="${rightImgSrc}" class="manga-page-img" data-mouse="mid">`;
        }
        slidesHtml += `</div>`;
        
        slidesHtml += `</div>`;
    }

    // 销毁旧实例
    if (mangaSwiper) {
        mangaSwiper.destroy(true, true);
    }
    wrapper.innerHTML = slidesHtml;

    // 初始化 Swiper
    mangaSwiper = new Swiper(".mangaSwiper", {
        // 因为我们自己处理了双页，Swiper 只需要认为这是 1 个 Slide 即可
        slidesPerView: 1, 
        spaceBetween: 0,
        speed: 600,
        nested: true,
        allowTouchMove: true, // 允许拖动
        navigation: {
            // RTL漫画逻辑：点左箭头(Next)去下一页(视觉上的左边)
            // 但因为我们是一个Slide包两张图，所以逻辑是正常的 Slide Next
            nextEl: ".manga-btn-prev", 
            prevEl: ".manga-btn-next", 
        },
        on: {
            slideChange: function(swiper) {
                // 更新页码：当前Slide索引 * 2 + 1
                let current = (swiper.activeIndex * 2) + 1;
                let total = data.images.length;
                document.getElementById("mangaCurrent").innerText = current + "-" + Math.min(current+1, total);
            }
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

    // 3. 更新时间轴的高亮状态 (UI同步)
    // 移除所有 active 类
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.classList.remove('active');
        // 隐藏里面的指示器（因为我在css用了display:none控制，这步其实css做了，但清空类很重要）
    });

    // 给当前点击的那个添加 active 类
    // 注意：CSS选择器是 nth-child，这里 id 是 1-5，刚好对应 nth-child(1) 到 (5)
    // 如果 id 和位置不对应，建议给 div 加 id="tl-node-1" 这种方式查找
    const activeItem = document.querySelector(`.timeline-container .timeline-item:nth-child(${id})`);
    if(activeItem) {
        activeItem.classList.add('active');
        
        // 也可以在这里更换图标图片源，比如把 moon_icon.png 换成 moon_active.png
        // 简单的方法是在 CSS 里控制 opacity 或者 background，或者用 JS 替换 src
    }
}

// --- 页面加载完成后初始化默认章节 ---
$(document).ready(function() {
  // 默认加载第1章
  loadMangaChapter(1);
});