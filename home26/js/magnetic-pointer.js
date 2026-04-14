class MagneticPointer {
  constructor(options = {}) {
      // --- 配置参数 ---
      this.selector = options.selector || '.magnetic-target'; // 你要吸附的元素类名
      this.color = options.color || '#17f700';               // 指针颜色
      this.baseSize = options.baseSize || 40;                // 默认大小(px)
      this.padding = options.padding || 20;                  // 吸附后比元素大多少(px)
      this.cornerLength = options.cornerLength || 10;        // 四个角的线段长度(px)
      this.borderWidth = options.borderWidth || 3;           // 线条粗细(px)
      this.magneticForce = options.magneticForce || 0.1;     // 磁力强度 (0.1代表偏离中心的程度)
      
      this.pointer = null;
      this.currentTarget = null;
      
      this.init();
  }

  init() {
      this.injectStyles();
      this.createDOM();
      this.bindEvents();
  }

  // 自动注入所需CSS
  injectStyles() {
      if (document.getElementById('magnetic-pointer-styles')) return;
      
      const style = document.createElement('style');
      style.id = 'magnetic-pointer-styles';
      style.innerHTML = `
          .magnetic-pointer {
              --width: ${this.baseSize}px;
              --height: ${this.baseSize}px;
              --color: ${this.color};
              --b-width: ${this.borderWidth}px;
              --c-length: ${this.cornerLength}px;
              
              position: fixed;
              top: 0;
              left: 0;
              width: var(--width);
              height: var(--height);
              pointer-events: none; /* 关键：防止指针挡住鼠标点击事件 */
              z-index: 99999;
              /* 仅对宽高做过渡动画，不影响transform，确保鼠标跟随无延迟 */
              transition: width 0.2s ease-out, height 0.2s ease-out;
              will-change: transform, width, height;
          }
          .magnetic-pointer div {
              position: absolute;
              width: var(--c-length);
              height: var(--c-length);
              border-width: var(--b-width);
              border-color: var(--color);
          }
          .magnetic-pointer div:nth-child(1) { top: 0; left: 0; border-top-style: solid; border-left-style: solid; }
          .magnetic-pointer div:nth-child(2) { top: 0; right: 0; border-top-style: solid; border-right-style: solid; }
          .magnetic-pointer div:nth-child(3) { bottom: 0; left: 0; border-bottom-style: solid; border-left-style: solid; }
          .magnetic-pointer div:nth-child(4) { bottom: 0; right: 0; border-bottom-style: solid; border-right-style: solid; }
      `;
      document.head.appendChild(style);
  }

  // 自动创建指针DOM
  createDOM() {
      this.pointer = document.createElement('div');
      this.pointer.className = 'magnetic-pointer';
      for (let i = 0; i < 4; i++) {
          this.pointer.appendChild(document.createElement('div'));
      }
      document.body.appendChild(this.pointer);
  }

  // 绑定事件
  bindEvents() {
      // 1. 全局鼠标移动跟踪
      window.addEventListener("mousemove", (e) => {
          let x = e.clientX;
          let y = e.clientY;

          // 如果正在悬停目标，计算磁吸坐标
          if (this.currentTarget) {
              const rect = this.currentTarget.getBoundingClientRect();
              const centerX = rect.left + rect.width / 2;
              const centerY = rect.top + rect.height / 2;
              
              // 磁吸效果：坐标向中心靠拢
              x = centerX + (x - centerX) * this.magneticForce;
              y = centerY + (y - centerY) * this.magneticForce;
          }

          // 使用 translate(-50%, -50%) 实现完美居中跟随
          this.pointer.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      });

      // 2. 绑定目标元素的悬停事件
      this.updateTargets();
  }

  // 扫描并绑定目标元素（如果页面有动态新增的元素，可再次调用此方法）
  updateTargets() {
      const targets = document.querySelectorAll(this.selector);
      targets.forEach(ele => {
          // 防止重复绑定
          if (ele.dataset.magneticBinded) return;
          ele.dataset.magneticBinded = "true";

          ele.addEventListener('mouseenter', () => {
              this.currentTarget = ele;
              const rect = ele.getBoundingClientRect();
              // 放大到包围元素，并加上边距
              this.pointer.style.setProperty("--width", `${rect.width + this.padding}px`);
              this.pointer.style.setProperty("--height", `${rect.height + this.padding}px`);
          });

          ele.addEventListener('mouseleave', () => {
              this.currentTarget = null;
              // 恢复默认大小
              this.pointer.style.setProperty("--width", `${this.baseSize}px`);
              this.pointer.style.setProperty("--height", `${this.baseSize}px`);
          });
      });
  }
}