document.addEventListener('DOMContentLoaded', () => {
  const timelineScrollable = document.getElementById('timelineScrollable');

  if (!timelineScrollable) {
    console.error('timelineScrollable element not found!');
    return;
  }

  // 调试：检查滚动区域高度
  console.log('Scroll Height:', timelineScrollable.scrollHeight);
  console.log('Client Height:', timelineScrollable.clientHeight);

  // Mouse wheel scrolling
  timelineScrollable.addEventListener('wheel', (e) => {
    e.preventDefault();
    const scrollAmount = e.deltaY * 0.3; // 调整滚轮灵敏度
    timelineScrollable.scrollBy({
      top: scrollAmount,
      behavior: 'smooth',
    });
    console.log('Wheel scroll:', scrollAmount); // 调试
  }, { passive: false });

  // Mouse drag functionality
  let isDragging = false;
  let startY, scrollTop;

  timelineScrollable.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.pageY - timelineScrollable.offsetTop;
    scrollTop = timelineScrollable.scrollTop;
    timelineScrollable.classList.add('grabbing');
    console.log('Drag start:', startY); // 调试
  });

  timelineScrollable.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const y = e.pageY - timelineScrollable.offsetTop;
    const walk = (y - startY) * 1.2; // 调整拖拽速度
    timelineScrollable.scrollTop = scrollTop - walk;
    console.log('Dragging:', walk); // 调试
  });

  timelineScrollable.addEventListener('mouseup', () => {
    isDragging = false;
    timelineScrollable.classList.remove('grabbing');
    console.log('Drag end'); // 调试
  });

  timelineScrollable.addEventListener('mouseleave', () => {
    isDragging = false;
    timelineScrollable.classList.remove('grabbing');
  });

  // Touch drag functionality
  let touchStartY, touchScrollTop;

  timelineScrollable.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].pageY - timelineScrollable.offsetTop;
    touchScrollTop = timelineScrollable.scrollTop;
    console.log('Touch start:', touchStartY); // 调试
  }, { passive: false });

  timelineScrollable.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touchY = e.touches[0].pageY - timelineScrollable.offsetTop;
    const walk = (touchY - touchStartY) * 1.2; // 调整触摸拖拽速度
    timelineScrollable.scrollTop = touchScrollTop - walk;
    console.log('Touch move:', walk); // 调试
  }, { passive: false });

  // Simple inertia for touch
  let velocity = 0;
  let lastTouchY = 0;
  let lastTime = 0;

  timelineScrollable.addEventListener('touchmove', (e) => {
    const currentY = e.touches[0].pageY;
    const currentTime = performance.now();
    const deltaY = currentY - lastTouchY;
    const deltaTime = currentTime - lastTime;
    if (deltaTime > 0) {
      velocity = deltaY / deltaTime;
    }
    lastTouchY = currentY;
    lastTime = currentTime;
  }, { passive: false });

  timelineScrollable.addEventListener('touchend', () => {
    const inertiaScroll = () => {
      if (Math.abs(velocity) < 0.01) return;
      timelineScrollable.scrollTop -= velocity * 20;
      velocity *= 0.95; // 衰减
      requestAnimationFrame(inertiaScroll);
    };
    requestAnimationFrame(inertiaScroll);
    console.log('Touch end, velocity:', velocity); // 调试
  });
});