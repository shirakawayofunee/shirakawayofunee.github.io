/*
 * @Author: DCBZ
 * @Date: 2025-07-19 21:17:05
 * @LastEditors: your name
 * @LastEditTime: 2025-07-20 18:10:22
 * @Description: 
 * @FilePath: \shirakawayofunee.github.io\home\js\timeline.js
 */

document.addEventListener('DOMContentLoaded', () => {
    const timelineScrollable = document.getElementById('timelineScrollable');
    const timelineMobileScrollable = document.getElementById('timelineMobileScrollable');
  
    // Mouse scroll for PC
    if (timelineScrollable) {
      timelineScrollable.addEventListener('wheel', (e) => {
        e.preventDefault();
        timelineScrollable.scrollTop += e.deltaY;
      });
  
      // Drag functionality for PC
      let isDragging = false;
      let startY, scrollTop;
  
      timelineScrollable.addEventListener('mousedown', (e) => {
        isDragging = true;
        startY = e.pageY - timelineScrollable.offsetTop;
        scrollTop = timelineScrollable.scrollTop;
        timelineScrollable.style.cursor = 'grabbing';
      });
  
      timelineScrollable.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const y = e.pageY - timelineScrollable.offsetTop;
        const walk = (y - startY) * 2; // Adjust drag speed
        timelineScrollable.scrollTop = scrollTop - walk;
      });
  
      timelineScrollable.addEventListener('mouseup', () => {
        isDragging = false;
        timelineScrollable.style.cursor = 'grab';
      });
  
      timelineScrollable.addEventListener('mouseleave', () => {
        isDragging = false;
        timelineScrollable.style.cursor = 'grab';
      });
    }
  
    // Touch scroll and drag for Mobile
    if (timelineMobileScrollable) {
      let touchStartY, touchScrollTop;
  
      timelineMobileScrollable.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].pageY - timelineMobileScrollable.offsetTop;
        touchScrollTop = timelineMobileScrollable.scrollTop;
      });
  
      timelineMobileScrollable.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touchY = e.touches[0].pageY - timelineMobileScrollable.offsetTop;
        const walk = (touchY - touchStartY) * 2; // Adjust drag speed
        timelineMobileScrollable.scrollTop = touchScrollTop - walk;
      });
    }
  });