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