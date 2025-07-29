function preloadTimelineImages() {
    const images = [
      './img/timeline/node_normal.png',
      './img/timeline/icon_curr.png',
      './img/timeline/camera.png',
      './img/timeline/title.png',
    ];
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }
  
  function renderTimeline() {
    const timelineScrollable = document.querySelector('#timelineScrollable');
    if (!timelineScrollable) {
      console.error('Error: timelineScrollable element not found!');
      return;
    }
  
    // 清空现有内容
    timelineScrollable.innerHTML = '';
  
    // 动态生成 timeline-item
    timelineMsg.forEach(item => {
      const timelineItem = document.createElement('div');
      timelineItem.className = 'timeline-item';
      timelineItem.setAttribute('data-mouse', 'small');
      timelineItem.innerHTML = `
        <img src="./img/timeline/node_normal.png" alt="Timeline node" class="timeline-node">
        <div class="timeline-date">${item.date}</div>
        <div class="timeline-text">${item.text}</div>
      `;
      timelineScrollable.appendChild(timelineItem);
    });
  
    // 为动态生成的时间线节点绑定交互
    bindTimelineInteractions();
  }
  
  function bindTimelineInteractions() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
      const node = item.querySelector('.timeline-node');
      const originalSrc = './img/timeline/node_normal.png';
      const hoverSrc = './img/timeline/icon_curr.png';
      const mobileSize = '24px';
      const mobileLeft = '-12px';
      const mobileTop = '0px';
      const mobileOriginalSize = '12px';
      const mobileOriginalLeft = '-6px';
      const mobileOriginalTop = '4px';
  
      // 触摸开始事件（模拟悬停）
      item.addEventListener('touchstart', (event) => {
        event.preventDefault(); // 防止触摸触发滚动
        node.src = hoverSrc;
        node.style.width = mobileSize;
        node.style.height = mobileSize;
        node.style.left = mobileLeft;
        node.style.top = mobileTop;
      }, { passive: false });
  
      // 触摸结束事件（模拟鼠标离开）
      item.addEventListener('touchend', () => {
        if (!item.classList.contains('active')) {
          node.src = originalSrc;
          node.style.width = mobileOriginalSize;
          node.style.height = mobileOriginalSize;
          node.style.left = mobileOriginalLeft;
          node.style.top = mobileOriginalTop;
        }
      });
  
      // 点击事件（激活/取消激活）
      item.addEventListener('click', () => {
        timelineItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherNode = otherItem.querySelector('.timeline-node');
            otherNode.src = originalSrc;
            otherNode.style.width = mobileOriginalSize;
            otherNode.style.height = mobileOriginalSize;
            otherNode.style.left = mobileOriginalLeft;
            otherNode.style.top = mobileOriginalTop;
          }
        });
        item.classList.toggle('active');
        node.src = item.classList.contains('active') ? hoverSrc : originalSrc;
        node.style.width = item.classList.contains('active') ? mobileSize : mobileOriginalSize;
        node.style.height = item.classList.contains('active') ? mobileSize : mobileOriginalSize;
        node.style.left = item.classList.contains('active') ? mobileLeft : mobileOriginalLeft;
        node.style.top = item.classList.contains('active') ? mobileTop : mobileOriginalTop;
      });
    });
  }
  
  // 初始化 Swiper
  var swiperTimelineM = new Swiper('#timelineM', {
    slidesPerView: 1,
    centeredSlides: true,
    observer: true,
    observeParents: false,
    loop: false,
    touchRatio: 1, // 启用触摸滑动
    on: {
      slideChange: function() {
        // 可添加滑块切换逻辑（如更新标题或背景）
        console.log('Timeline Swiper slide changed to index:', this.realIndex);
      }
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    // 预加载图片
    preloadTimelineImages();
  
    // 渲染时间线
    renderTimeline();
  
    const timelineScrollable = document.querySelector('#timelineScrollable');
    if (!timelineScrollable) {
      console.error('Error: timelineScrollable element not found!');
      return;
    }
  
    // 调试：检查滚动区域高度
    console.log('Scroll Height:', timelineScrollable.scrollHeight);
    console.log('Client Height:', timelineScrollable.clientHeight);
    if (timelineScrollable.scrollHeight <= timelineScrollable.clientHeight) {
      console.warn('Warning: Content height is not enough to trigger scrolling! Add more content or reduce container height.');
    }
  
    // 触摸滑动
    let touchStartY = 0;
    let touchStartScrollTop = 0;
  
    timelineScrollable.addEventListener('touchstart', (event) => {
      touchStartY = event.touches[0].pageY;
      touchStartScrollTop = timelineScrollable.scrollTop;
      console.log('Touch start, touchStartY:', touchStartY);
    }, { passive: false });
  
    timelineScrollable.addEventListener('touchmove', (event) => {
      event.stopPropagation(); // 防止 Swiper 拦截
      const touchY = event.touches[0].pageY;
      const walk = (touchStartY - touchY) * 1.5; // 与 PC 端一致的灵敏度
      timelineScrollable.scrollTop = touchStartScrollTop + walk;
      console.log('Touch move, walk:', walk);
    }, { passive: false });
  });