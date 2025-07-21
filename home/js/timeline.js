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
    const scrollAmount = event.deltaY * 0.5; // 模仿 character.js 的灵敏度
    timelineScrollable.scrollTop += scrollAmount;
    console.log('Wheel scroll triggered, deltaY:', event.deltaY, 'scrollAmount:', scrollAmount);
  }, { passive: false });

  // 鼠标拖拽滚动
  let isDragging = false;
  let startY = 0;
  let startScrollTop = 0;

  timelineScrollable.addEventListener('mousedown', (event) => {
    isDragging = true;
    startY = event.clientY; // 模仿 character.js 使用 clientY
    startScrollTop = timelineScrollable.scrollTop;
    timelineScrollable.style.cursor = 'grabbing';
    console.log('Drag start, startY:', startY);
  });

  document.addEventListener('mousemove', (event) => {
    if (!isDragging) return;
    event.preventDefault();
    const deltaY = startY - event.clientY; // 模仿 character.js 的方向
    timelineScrollable.scrollTop = startScrollTop + deltaY;
    console.log('Dragging, deltaY:', deltaY);
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    timelineScrollable.style.cursor = 'grab';
    console.log('Drag end');
  });

  // 触摸拖拽滚动
  let touchStartY = 0;
  let touchStartScrollTop = 0;

  timelineScrollable.addEventListener('touchstart', (event) => {
    touchStartY = event.touches[0].clientY; // 模仿 character.js
    touchStartScrollTop = timelineScrollable.scrollTop;
    console.log('Touch start, touchStartY:', touchStartY);
  }, { passive: false });

  timelineScrollable.addEventListener('touchmove', (event) => {
    event.preventDefault();
    const touchY = event.touches[0].clientY;
    const deltaY = touchStartY - touchY; // 模仿 character.js 的方向
    timelineScrollable.scrollTop = touchStartScrollTop + deltaY;
    console.log('Touch move, deltaY:', deltaY);
  }, { passive: false });
});


document.querySelectorAll('.timeline-item').forEach(item => {
  const node = item.querySelector('.timeline-node');
  const originalSrc = './img/timeline/node_normal.png';
  const hoverSrc = './img/timeline/icon_curr.png';
  const originalSize = '14px'; /* node_normal.png */
  const hoverSize = '28px'; /* icon_curr.png */
  const originalLeft = '-7px'; /* 14px/2 */
  const hoverLeft = '-14px'; /* 28px/2 */
  const originalTop = '5px';
  const hoverTop = '0px'; /* 调整以保持中心对齐 */

  // 移动端尺寸和定位
  const isMobile = window.innerWidth <= 768;
  const mobileOriginalSize = '12px';
  const mobileHoverSize = '24px';
  const mobileOriginalLeft = '-6px'; /* 12px/2 */
  const mobileHoverLeft = '-12px'; /* 24px/2 */
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