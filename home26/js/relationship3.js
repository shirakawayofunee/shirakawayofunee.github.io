document.addEventListener('DOMContentLoaded', () => {
  // 1. 获取所有的左侧 Tab 按钮
  const tabs = document.querySelectorAll('.partwan-left .wan-tab');
  // 2. 获取所有的右侧内容块
  const contents = document.querySelectorAll('.partwan-right .wan-content.relationship');

  // 绑定点击事件
  tabs.forEach(tab => {
      tab.addEventListener('click', function() {
          // 获取当前点击的索引
          const targetIndex = this.getAttribute('data-index');

          // --- 步骤 A: 处理左侧高亮状态 ---
          // 移除所有 tab 的 active 类
          tabs.forEach(t => t.classList.remove('active'));
          // 给当前点击的 tab 加上 active
          this.classList.add('active');

          // --- 步骤 B: 处理右侧内容显示 ---
          // 隐藏所有内容块
          contents.forEach(content => content.classList.remove('active'));
          
          // 显示对应索引的内容块 (如果有的话)
          if (contents[targetIndex]) {
              contents[targetIndex].classList.add('active');
          }
      });
  });
});



// ====================== 251213新增：解决文本框滚轮冲突 ======================
  // 获取所有可能需要滚动的文本容器
  const scrollableContainers = document.querySelectorAll('.partwan-right .wan-content .relationship-right-str .left, .partwan-right .wan-content .relationship-right-str .right');

  scrollableContainers.forEach(container => {
    // 1. 阻止滚轮事件冒泡到 Swiper
    container.addEventListener('wheel', function(e) {
      // 只有当内容确实需要滚动时（内容高度 > 容器高度），才阻止 Swiper
      if (this.scrollHeight > this.clientHeight) {
        e.stopPropagation(); // 阻止事件传给 Swiper
      }
    }, { passive: false });

    // 2. 针对 Swiper 的 class 隔离 (防止鼠标拖拽翻页)
    // Swiper 默认识别 'swiper-no-swiping' 类名来停止拖拽
    container.classList.add('swiper-no-swiping');
  });





