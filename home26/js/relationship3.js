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
// ====================== 260117更新：解决文本框滚轮冲突（兼容旧版和新版Browser） ======================
  // 1. 获取所有的左侧 Tab 按钮
  const tabs = document.querySelectorAll('.partwan-left .wan-tab');
  // 2. 获取所有的右侧内容块
  const contents = document.querySelectorAll('.partwan-right .wan-content.relationship');

  // Tab 切换逻辑保持不变...
  tabs.forEach(tab => {
      tab.addEventListener('click', function() {
          const targetIndex = this.getAttribute('data-index');
          tabs.forEach(t => t.classList.remove('active'));
          this.classList.add('active');
          contents.forEach(content => content.classList.remove('active'));
          if (contents[targetIndex]) {
              contents[targetIndex].classList.add('active');
          }
      });
  });

  // --- 重点修改部分：滚动条防冲突逻辑 ---
  
  // 这里的 selector 增加了 '.content-scroll-area' 以匹配新的浏览器窗口结构
  const scrollableSelector = '.partwan-right .wan-content .relationship-right-str .left, ' + 
                             '.partwan-right .wan-content .relationship-right-str .right, ' + 
                             '.content-scroll-area';

  const scrollableContainers = document.querySelectorAll(scrollableSelector);

  scrollableContainers.forEach(container => {
    // 阻止滚轮事件冒泡到 Swiper (当内容确实很长需要滚动时)
    container.addEventListener('wheel', function(e) {
      // 判断是否具备滚动条件 (内容高度 > 容器高度)
      if (this.scrollHeight > this.clientHeight) {
        // 阻止冒泡，让 Swiper 不要动，只滚动文本
        e.stopPropagation(); 
      }
    }, { passive: false });

    // 添加 swiper-no-swiping 类，防止鼠标点击拖拽时触发翻页
    container.classList.add('swiper-no-swiping');
  });







  /* ============================================================
 *  关系数值配置 (在这里修改数值即可，范围 0-100)
 * ============================================================ */
const dataSet1 = [
  { label: "愛情", left: 99, right: 30 },
  { label: "理性", left: 40, right: 80 },
  { label: "親情", left: 100, right: 80 },
  { label: "友情", left: 60, right: 70 },
  { label: "信頼度", left: 97, right: 65 },
  { label: "忠誠度", left: 100, right: 0}, /* 这里的 isDark: true 会让条变成黑色(如果CSS支持) */
  { label: "依存度", left: 90, right: 25 },
  { label: "保護欲", left: 100, right: 100 },
  { label: "征服欲", left: 25, right: 10 },
  { label: "独占欲", left: 85, right: 30 },
  { label: "優越感", left: 0, right: 2 },
  { label: "功利性", left: 0, right: 0 },
  { label: "娯楽性", left: 15, right: 30 },
  { label: "献身", left: 99, right: 85 },
  { label: "欲求", left: 60, right: 20 },
  { label: "偏愛", left: 100, right: 90 },
  { label: "支配", left: 10, right: 40 },
  { label: "服従", left: 95, right: 1 },
  { label: "崇拝", left: 80, right: 0 },
  { label: "同情", left: 15, right: 70 },
  { label: "歓楽", left: 100, right: 60 },
  { label: "苦痛", left: 15, right: 0 },
  { label: "情欲", left: 80, right: 20 },
  { label: "敵意", left: 0, right: 0 },
  { label: "悪意", left: 0, right: 0 },
  { label: "慈愛", left: 20, right: 90 },
  { label: "敬愛", left: 60, right: 0 },
  { label: "母性愛", left: 70, right: 80 },
  { label: "性愛", left: 75, right: 0 },
  { label: "家族愛", left: 100, right: 90 },
];


const dataSet2 = [
  { label: "愛情", left: 60, right: 5 }, // 比如相爱相杀
  { label: "理性", left: 80, right: 80 },
  { label: "執着", left: 80, right: 30 },
  { label: "理解", left: 90, right: 90 }, // 最理解彼此的敌人
  { label: "共鳴", left: 90, right: 90 },
  { label: "同情", left: 70, right: 30 },
  { label: "信頼", left: 60, right: 30 },   // 虽然理解但不信任
  { label: "利益", left: 80, right: 80 }, // 利益一致
  { label: "嫌悪", left: 0, right: 15 },
  { label: "利用", left: 70, right: 40 },
];

const dataSet3 = [
  { label: "愛情", left: 50, right: 10 }, // 比如相爱相杀
  { label: "理性", left: 80, right: 80 },
  { label: "友情", left: 70, right: 65 },
  { label: "信頼", left: 55, right: 50 },
  { label: "依存", left: 0, right: 0 },
  { label: "執着", left: 80, right: 90 },
  { label: "理解", left: 80, right: 80 }, // 最理解彼此的敌人
  { label: "共鳴", left: 80, right: 80 },
];

/* ============================================================
*  自动渲染逻辑 (无需修改)
* ============================================================ */
function renderMetrics(containerId, data) {
  const container = document.getElementById(containerId);
  if (!container) return; 

  let htmlContent = '';

  data.forEach(item => {
      // --- 智能颜色逻辑 ---
      
      // 左侧 (浅色条)：如果数值 < 20%，说明条很短，字会显示在黑色背景上
      // 此时需要加 'text-on-black' 类，把字变白。
      // 否则(条很长)，字显示在浅灰条上，维持 CSS 默认的深色字。
      const leftClass = item.left < 20 ? 'text-on-black' : '';
      
      // 右侧 (深色条)：字一直是白的，黑色背景上也是白的，所以不用特殊处理。

      htmlContent += `
          <div class="metric-row">
              <div class="metric-label-group">
                  <span>${item.label}</span>
                  <span>${item.label}</span>
              </div>
              <div class="bar-container">
                  <!-- 左侧条 -->
                  <div class="bar-side left">
                      <div class="bar-track">
                          <div class="bar-fill ${leftClass}" style="width: ${item.left}%;">
                              ${item.left}%
                          </div>
                      </div>
                  </div>
                  
                  <!-- 中间分割线 -->
                  <div class="bar-divider"></div>
                  
                  <!-- 右侧条 -->
                  <div class="bar-side right">
                      <div class="bar-track">
                          <div class="bar-fill" style="width: ${item.right}%;">
                              ${item.right}%
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `;
  });

  container.innerHTML = htmlContent;
}

// 确保页面加载后执行
document.addEventListener('DOMContentLoaded', () => {
  // 渲染第 1 个窗口 (请确保 HTML 里有 id="metrics-container-1")
  renderMetrics('metrics-container-1', dataSet1);

  // 渲染第 2 个窗口 (请确保 HTML 里有 id="metrics-container-2")
  renderMetrics('metrics-container-2', dataSet2);
  
  // 如果以后有第 3 个窗口，就在这里加一行：
  renderMetrics('metrics-container-3', dataSet3);
});