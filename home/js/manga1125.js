// --- 漫画数据源 (模拟数据，请替换为真实路径) ---
const mangaData = {
    1: {
        title: "「何のために戦うか」",
        images: ["img/manga/c0/01.jpg", "img/manga/c0/02.jpg", "img/manga/c0/03.jpg", "img/manga/c0/04.jpg", 
        "img/manga/c0/05.jpg", "img/manga/c0/06.jpg", "img/manga/c0/07（落稿）.jpg", "img/manga/c0/08（落稿）.jpg"]
    },
    2: { title: "逆转师生",         images: ["img/manga/c1/01.png","img/manga/c1/02.png","img/manga/c1/03.png","img/manga/c1/04.png","img/manga/c1/05.png"] },
/*     3: {
        title: "第三章：对决",
        images: ["img/manga/c3/01.jpg", "img/manga/c3/02.jpg", "img/manga/c3/03.jpg", "img/manga/c3/04.jpg"]
    },
    4: {
        title: "第四章：回忆",
        images: ["img/manga/c0/01.jpg", "img/manga/c0/02.jpg"]
    },
    5: {
        title: "特别篇：日常",
        images: ["img/manga/c0/03.jpg", "img/manga/c0/04.jpg"]
    } */
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
          let leftImgSrc = images[i];       // P1 (images[0]) -> 放入左容器(视觉右)
          let rightImgSrc = images[i + 1];  // P2 (images[1]) -> 放入右容器(视觉左)
  
          slidesHtml += `<div class="swiper-slide">`;
          
          slidesHtml += `<div class="manga-page-left">`;
          if (leftImgSrc) {
              slidesHtml += `<img src="${leftImgSrc}" class="manga-page-img" data-mouse="mid">`;
          }
          slidesHtml += `</div>`;
  
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
  
  function openMangaNav() {
      document.getElementById('mangaNavPanel').style.display = 'flex';
  }
  
  // 关闭 (支持点击背景关闭)
  function closeMangaNav(e) {
      // e.target 是用户实际点击的元素
      // e.currentTarget 是绑定了事件的元素 (即 #mangaNavPanel)
      
      // 只有当点击的是“黑色背景蒙版”或者“关闭按钮”时，才执行关闭
      // 这样点击内部的节点、图片时，不会触发关闭
      if (e.target.id === 'mangaNavPanel' || e.target.classList.contains('manga-nav-close-btn')) {
          document.getElementById('mangaNavPanel').style.display = 'none';
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
  
  function switchChapter(chapterId, nodeIndex, type) {
      console.log(`Switching to Ch:${chapterId}, Node:${nodeIndex}, Type:${type}`);
      
      // 1. 关闭导航板
      document.getElementById('mangaNavPanel').style.display = 'none';
      
      // 2. 加载数据
      loadMangaChapter(chapterId);
  
      // 3. 更新高亮 UI
      updateNavHighlight(nodeIndex, type);
  }
  
  // 单独抽离 UI 更新函数，方便初始化时调用
  function updateNavHighlight(nodeIndex, type) {
      // 1. 重置所有状态 (清空类 + 恢复图片 src)
      
      // A. 移除所有节点的数字高亮
      document.querySelectorAll('.nav-node-item').forEach(el => el.classList.remove('active-day'));
      
      // B. 移除所有日/月部分的 active 类 (隐藏指示器)
      document.querySelectorAll('.node-part-top, .node-part-bottom').forEach(el => {
          el.classList.remove('active');
      });
  
      // C. 恢复所有图片为普通版 (icon_sun.png / icon_moon.png)
      document.querySelectorAll('.node-icon.icon-sun').forEach(img => {
          img.src = 'img/timeline2/icon_sun.png'; 
      });
      document.querySelectorAll('.node-icon.icon-moon').forEach(img => {
          img.src = 'img/timeline2/icon_moon.png'; 
      });
  
  
      // 2. 设置新的高亮状态
      
      // 找到目标节点 (注意 nth-child 从1开始)
      const targetNode = document.querySelector(`.nav-nodes-container .nav-node-item:nth-child(${nodeIndex})`);
      
      if (targetNode) {
          // A. 亮数字
          targetNode.classList.add('active-day');
          
          // B. 亮图标 + 换图片 + 显示指示器
          if (type === 'sun') {
              const sunPart = targetNode.querySelector('.node-part-top');
              const sunImg = sunPart.querySelector('.node-icon');
              
              if(sunPart) sunPart.classList.add('active'); // 显示 CSS 箭头
              if(sunImg)  sunImg.src = 'img/timeline2/icon_sun_active.png'; // 换图
              
          } else if (type === 'moon') {
              const moonPart = targetNode.querySelector('.node-part-bottom');
              const moonImg = moonPart.querySelector('.node-icon');
              
              if(moonPart) moonPart.classList.add('active'); // 显示 CSS 箭头
              if(moonImg)  moonImg.src = 'img/timeline2/icon_moon_active.png'; // 换图
          }
      }
  }
  
  // --- 3. 初始化默认状态 ---
  $(document).ready(function() {
      // 默认加载：第一章 (chapterId=1)
      // 对应节点：7/23 (nodeIndex=5)
      // 对应时段：晚上 (type='moon')
      
      loadMangaChapter(1); // 载入漫画内容
      updateNavHighlight(5, 'moon'); // 仅更新UI高亮，不重复加载
  });