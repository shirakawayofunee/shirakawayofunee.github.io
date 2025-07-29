document.addEventListener('DOMContentLoaded', () => {
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

  // 鼠标滚轮滚动
  timelineScrollable.addEventListener('wheel', (event) => {
    event.preventDefault();
    event.stopPropagation(); // 防止 Swiper 拦截
    const scrollAmount = event.deltaY * 1.5; // 与模板一致的灵敏度
    timelineScrollable.scrollTop += scrollAmount;
    console.log('Wheel scroll triggered, deltaY:', event.deltaY, 'scrollAmount:', scrollAmount);
  }, { passive: false });

  // 鼠标拖拽滚动
  let isDragging = false;
  let startY = 0;
  let startScrollTop = 0;

  timelineScrollable.addEventListener('mousedown', (event) => {
    isDragging = true;
    startY = event.pageY - timelineScrollable.offsetTop; // 使用 pageY，与模板一致
    startScrollTop = timelineScrollable.scrollTop;
    timelineScrollable.style.cursor = 'grabbing';
    event.preventDefault(); // 防止文本选择
    console.log('Drag start, startY:', startY);
  });

  document.addEventListener('mousemove', (event) => {
    if (!isDragging) return;
    event.preventDefault();
    const y = event.pageY - timelineScrollable.offsetTop;
    const walk = (startY - y) * 1.5; // 与模板一致的灵敏度
    timelineScrollable.scrollTop = startScrollTop + walk;
    console.log('Dragging, walk:', walk);
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    timelineScrollable.style.cursor = 'grab';
    console.log('Drag end');
  });

  document.addEventListener('mouseleave', () => {
    isDragging = false;
    timelineScrollable.style.cursor = 'grab';
    console.log('Mouse leave, drag reset');
  });

  // 触摸滑动
  let touchStartY = 0;
  let touchStartScrollTop = 0;

  timelineScrollable.addEventListener('touchstart', (event) => {
    touchStartY = event.touches[0].pageY; // 使用 pageY，与模板一致
    touchStartScrollTop = timelineScrollable.scrollTop;
    console.log('Touch start, touchStartY:', touchStartY);
  }, { passive: false });

  timelineScrollable.addEventListener('touchmove', (event) => {
    event.preventDefault();
    event.stopPropagation(); // 防止 Swiper 拦截
    const touchY = event.touches[0].pageY;
    const walk = (touchStartY - touchY) * 1.5; // 与模板一致的灵敏度
    timelineScrollable.scrollTop = touchStartScrollTop + walk;
    console.log('Touch move, walk:', walk);
  }, { passive: false });
});

// 保留原有的 timeline-item 交互逻辑
document.querySelectorAll('.timeline-item').forEach(item => {
  const node = item.querySelector('.timeline-node');
  const originalSrc = './img/timeline/node_normal.png';
  const hoverSrc = './img/timeline/icon_curr.png';
  const originalSize = '14px';
  const hoverSize = '28px';
  const originalLeft = '-7px';
  const hoverLeft = '-14px';
  const originalTop = '5px';
  const hoverTop = '0px';

  // 移动端尺寸和定位
  const isMobile = window.innerWidth <= 768;
  const mobileOriginalSize = '12px';
  const mobileHoverSize = '24px';
  const mobileOriginalLeft = '-6px';
  const mobileHoverLeft = '-12px';
  const mobileOriginalTop = '4px';
  const mobileHoverTop = '0px';

  // 鼠标悬停事件
  item.addEventListener('mouseenter', () => {
    node.src = hoverSrc;
    node.style.width = isMobile ? mobileHoverSize : hoverSize;
    node.style.height = isMobile ? mobileHoverSize : hoverSize;
    node.style.left = isMobile ? mobileHoverLeft : hoverLeft;
    node.style.top = isMobile ? mobileHoverTop : hoverTop;
  });

  // 鼠标离开事件
  item.addEventListener('mouseleave', () => {
    if (!item.classList.contains('active')) {
      node.src = originalSrc;
      node.style.width = isMobile ? mobileOriginalSize : originalSize;
      node.style.height = isMobile ? mobileOriginalSize : originalSize;
      node.style.left = isMobile ? mobileOriginalLeft : originalLeft;
      node.style.top = isMobile ? mobileOriginalTop : originalTop;
    }
  });

  // 点击事件
  item.addEventListener('click', () => {
    document.querySelectorAll('.timeline-item').forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
        const otherNode = otherItem.querySelector('.timeline-node');
        otherNode.src = originalSrc;
        otherNode.style.width = isMobile ? mobileOriginalSize : originalSize;
        otherNode.style.height = isMobile ? mobileOriginalSize : originalSize;
        otherNode.style.left = isMobile ? mobileOriginalLeft : originalLeft;
        otherNode.style.top = isMobile ? mobileOriginalTop : originalTop;
      }
    });
    item.classList.toggle('active');
    node.src = item.classList.contains('active') ? hoverSrc : originalSrc;
    node.style.width = item.classList.contains('active') ? (isMobile ? mobileHoverSize : hoverSize) : (isMobile ? mobileOriginalSize : originalSize);
    node.style.height = item.classList.contains('active') ? (isMobile ? mobileHoverSize : hoverSize) : (isMobile ? mobileOriginalSize : originalSize);
    node.style.left = item.classList.contains('active') ? (isMobile ? mobileHoverLeft : hoverLeft) : (isMobile ? mobileOriginalLeft : originalLeft);
    node.style.top = item.classList.contains('active') ? (isMobile ? mobileHoverTop : hoverTop) : (isMobile ? mobileOriginalTop : originalTop);
  });
});