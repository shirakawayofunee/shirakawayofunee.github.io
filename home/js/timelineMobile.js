function preloadTimelineImages() {
    console.log('Preloading timeline images');
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
    console.log('renderTimeline called, timelineMsg:', window.timelineMsg);
    if (!window.timelineMsg) {
      console.error('Error: timelineMsg is undefined! Ensure timeline.js is loaded and defines timelineMsg globally.');
      return;
    }
    const timelineScrollable = document.querySelector('#timelineScrollable');
    if (!timelineScrollable) {
      console.error('Error: timelineScrollable element not found!');
      return;
    }
    console.log('Rendering timeline withmunmap with', window.timelineMsg.length, 'items');
    timelineScrollable.innerHTML = ''; // 清空静态内容
    window.timelineMsg.forEach((item, index) => {
      console.log('Rendering item', index, item.date);
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
    bindTimelineInteractions();
  }
  
  function bindTimelineInteractions() {
    console.log('Binding timeline interactions');
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
  
      item.addEventListener('touchstart', (event) => {
        event.preventDefault();
        console.log('Touchstart on timeline-item');
        node.src = hoverSrc;
        node.style.width = mobileSize;
        node.style.height = mobileSize;
        node.style.left = mobileLeft;
        node.style.top = mobileTop;
      }, { passive: false });
  
      item.addEventListener('touchend', () => {
        console.log('Touchend on timeline-item');
        if (!item.classList.contains('active')) {
          node.src = originalSrc;
          node.style.width = mobileOriginalSize;
          node.style.height = mobileOriginalSize;
          node.style.left = mobileOriginalLeft;
          node.style.top = mobileOriginalTop;
        }
      });
  
      item.addEventListener('click', () => {
        console.log('Click on timeline-item');
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
  
  var swiperTimelineM = new Swiper('#timelineM', {
    slidesPerView: 1,
    centeredSlides: true,
    observer: true,
    observeParents: false,
    loop: false,
    touchRatio: 1,
    nested: true,
    on: {
      slideChange: function() {
        console.log('Timeline Swiper slide changed to index:', this.realIndex);
        // 重新渲染时间线，确保在 Swiper 滑块切换后内容正确显示
        renderTimeline();
      }
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded fired for timelineMobile.js');
    // 检查 timelineMsg 是否可用，若不可用则延迟重试
    function tryRender() {
      if (window.timelineMsg) {
        preloadTimelineImages();
        renderTimeline();
      } else {
        console.warn('timelineMsg not yet available, retrying...');
        setTimeout(tryRender, 100);
      }
    }
    tryRender();
  
    const timelineScrollable = document.querySelector('#timelineScrollable');
    if (!timelineScrollable) {
      console.error('Error: timelineScrollable element not found!');
      return;
    }
  
    console.log('Scroll Height:', timelineScrollable.scrollHeight);
    console.log('Client Height:', timelineScrollable.clientHeight);
    if (timelineScrollable.scrollHeight <= timelineScrollable.clientHeight) {
      console.warn('Warning: Content height is not enough to trigger scrolling! Add more content or reduce container height.');
    }
  
    let touchStartY = 0;
    let touchStartScrollTop = 0;
  
    timelineScrollable.addEventListener('touchstart', (event) => {
      touchStartY = event.touches[0].pageY;
      touchStartScrollTop = timelineScrollable.scrollTop;
      console.log('Touch start, touchStartY:', touchStartY);
    }, { passive: false });
  
    timelineScrollable.addEventListener('touchmove', (event) => {
      event.stopPropagation();
      const touchY = event.touches[0].pageY;
      const walk = (touchStartY - touchY) * 1.5;
      timelineScrollable.scrollTop = touchStartScrollTop + walk;
      console.log('Touch move, walk:', walk);
    }, { passive: false });
  });