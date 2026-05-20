class MagneticPointer {
    constructor(options = {}) {
        // --- 配置参数 ---
        this.selector = options.selector || '.magnetic-target'; // 你要吸附的元素类名
        this.color = options.color || '#17f700';
        this.baseSize = options.baseSize || 40;
        this.padding = options.padding || 20;
        this.cornerLength = options.cornerLength || 10;
        this.borderWidth = options.borderWidth || 3;
        this.magneticForce = options.magneticForce || 0.1;
        
        this.pointer = null;
        this.currentTarget = null;
        
        this.init();
    }

    init() {
        this.injectStyles();
        this.createDOM();
        this.bindEvents();
    }

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
                pointer-events: none; /* 穿透鼠标事件，非常关键 */
                z-index: 99999;
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

    createDOM() {
        this.pointer = document.createElement('div');
        this.pointer.className = 'magnetic-pointer';
        for (let i = 0; i < 4; i++) {
            this.pointer.appendChild(document.createElement('div'));
        }
        document.body.appendChild(this.pointer);
    }

    bindEvents() {
        // 1. 处理鼠标移动时的跟随与磁吸坐标计算
        window.addEventListener("mousemove", (e) => {
            let x = e.clientX;
            let y = e.clientY;

            // 如果当前有选中的目标，计算磁吸
            if (this.currentTarget) {
                const rect = this.currentTarget.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                x = centerX + (x - centerX) * this.magneticForce;
                y = centerY + (y - centerY) * this.magneticForce;
            }

            this.pointer.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
        });

        // ==========================================
        // 2. 核心修改：使用事件委托处理动态元素悬停
        // ==========================================
        
        // 监听全局鼠标进入元素
        document.addEventListener('mouseover', (e) => {
            // e.target.closest 会向上查找最近的符合条件的元素
            // 这样即使你鼠标放到目标内部的子元素上（比如按钮里的文字），也能正确识别
            const target = e.target.closest(this.selector);
            
            if (target) {
                this.currentTarget = target;
                const rect = target.getBoundingClientRect();
                this.pointer.style.setProperty("--width", `${rect.width + this.padding}px`);
                this.pointer.style.setProperty("--height", `${rect.height + this.padding}px`);
            }
        });

        // 监听全局鼠标离开元素
        document.addEventListener('mouseout', (e) => {
            const target = e.target.closest(this.selector);
            
            if (target) {
                // 如果鼠标只是在目标元素内部的子元素之间移动，不触发离开动画
                if (e.relatedTarget && target.contains(e.relatedTarget)) {
                    return;
                }

                this.currentTarget = null;
                this.pointer.style.setProperty("--width", `${this.baseSize}px`);
                this.pointer.style.setProperty("--height", `${this.baseSize}px`);
            }
        });
    }
}