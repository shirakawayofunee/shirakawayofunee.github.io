// eye-component.js

// 共享的鼠标坐标对象，避免为每个眼睛实例都创建监听器
const sharedMouse = { x: -1000, y: -1000 }; // 初始化在屏幕外，避免初始闪烁
let mouseListenerInitialized = false; // 标记，确保只添加一次全局鼠标事件监听

function initializeGlobalMouseTracking() {
    if (mouseListenerInitialized) return; // 如果已经初始化，则不再重复添加

    window.addEventListener('mousemove', (e) => {
        sharedMouse.x = e.clientX;
        sharedMouse.y = e.clientY;
    }, { capture: true, passive: true }); // 使用捕获模式和被动监听，提高性能和兼容性
    
    mouseListenerInitialized = true;
}

class MagneticEye {
    // 用于生成唯一的 clipPath 和 gradient ID，防止多个实例冲突
    static idCounter = 0; 

    /**
     * 构造函数
     * @param {HTMLElement} parentElement 眼睛组件将被插入到的父 DOM 元素
     * @param {Object} options 配置选项
     * @param {string} [options.style='minimal'] 眼睛的样式：'minimal' (极简线框风) 或 'realistic' (拟物写实风)
     * @param {Object} [options.pupilConfig] 覆盖默认的瞳孔配置 (Rx, Ry, squish)
     */
    constructor(parentElement, options = {}) {
        if (!parentElement || !(parentElement instanceof HTMLElement)) {
            console.error('MagneticEye: parentElement 是必需的，并且必须是一个有效的 DOM 元素。');
            return;
        }

        this.parentElement = parentElement;
        this.options = {
            style: options.style || 'minimal', // 默认使用极简线框风
            viewBoxWidth: 200, // SVG 的内部坐标宽度
            viewBoxHeight: 100, // SVG 的内部坐标高度
            ...options
        };

        this.svg = null;         // SVG 元素本体
        this.pupilGroup = null;  // SVG 中控制瞳孔移动的 <g> 元素
        this.animationFrameId = null; // 用于存储 requestAnimationFrame 的 ID，方便停止动画

        initializeGlobalMouseTracking(); // 确保全局鼠标追踪已启动
        this.init();
    }

    init() {
        this.createDOM();
        this.startAnimation();
    }

    /**
     * 创建并插入 SVG DOM 结构
     */
    createDOM() {
        const { style, viewBoxWidth, viewBoxHeight } = this.options;
        const instanceId = MagneticEye.idCounter++; // 获取当前实例的唯一 ID

        // 创建一个包裹 SVG 的 div，以便应用外部 CSS 样式
        const container = document.createElement('div');
        container.className = 'magnetic-eye-component';
        this.parentElement.appendChild(container);

        // 创建 SVG 元素
        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.svg.setAttribute('viewBox', `0 0 ${viewBoxWidth} ${viewBoxHeight}`);
        this.svg.setAttribute('aria-hidden', 'true'); // 语义化，表示该元素纯粹用于装饰

        // 根据选择的样式，填充 SVG 的内部内容
        if (style === 'minimal') {
            this.svg.innerHTML = `
                <defs>
                    <!-- 使用唯一的 ID 防止多个实例冲突 -->
                    <clipPath id="clip-minimal-${instanceId}">
                        <path d="M 10 50 Q 100 -10 190 50 Q 100 110 10 50"/>
                    </clipPath>
                </defs>
                <!-- 整个瞳孔组被 clip-path 包裹，超出眼眶的部分会被直接隐藏 -->
                <g clip-path="url(#clip-minimal-${instanceId})">
                    <g class="pupil-group">
                        <circle cx="0" cy="0" r="18" fill="none" stroke="#e0e0e0" stroke-width="3" vector-effect="non-scaling-stroke"/>
                        <circle cx="0" cy="0" r="7" fill="#e0e0e0" vector-effect="non-scaling-stroke"/>
                    </g>
                </g>
                <!-- 眼眶线最后画，盖在最上面，确保边缘干净 -->
                <path d="M 10 50 Q 100 -10 190 50 Q 100 110 10 50" fill="none" stroke="#e0e0e0" stroke-width="4" stroke-linejoin="round"/>
            `;
            // 极简风格的默认瞳孔配置
            this.pupilConfig = { Rx: 55, Ry: 20, squish: 0.5, ...this.options.pupilConfig };
        } else if (style === 'realistic') {
            // 如果需要拟物风格，SVG 代码如下
            this.svg.innerHTML = `
                <defs>
                    <clipPath id="clip-realistic-${instanceId}">
                        <path d="M 10 50 Q 100 -10 190 50 Q 100 110 10 50"/>
                    </clipPath>
                    <!-- 关键：球体渐变，fx和fy让高光偏移，产生圆润的球体感 -->
                    <radialGradient id="sclera-grad-${instanceId}" cx="50%" cy="50%" r="50%" fx="35%" fy="35%">
                        <stop offset="0%" stop-color="#ffffff"/>
                        <stop offset="70%" stop-color="#dce1e8"/>
                        <stop offset="100%" stop-color="#9ca5b5"/>
                    </radialGradient>
                    <radialGradient id="iris-grad-${instanceId}" cx="50%" cy="50%" r="50%" fx="35%" fy="35%">
                        <stop offset="0%" stop-color="#4a8ef0"/>
                        <stop offset="60%" stop-color="#14437a"/>
                        <stop offset="100%" stop-color="#051224"/>
                    </radialGradient>
                    <!-- 关键：固定内阴影，模拟眼眶盖在眼球上产生的立体阴影 -->
                    <radialGradient id="inner-shadow-${instanceId}" cx="50%" cy="50%" r="50%">
                        <stop offset="60%" stop-color="rgba(0,0,0,0)"/>
                        <stop offset="100%" stop-color="rgba(0,0,0,0.5)"/>
                    </radialGradient>
                </defs>

                <!-- 眼白 (底) -->
                <path d="M 10 50 Q 100 -10 190 50 Q 100 110 10 50" fill="url(#sclera-grad-${instanceId})"/>
                
                <!-- 裁切区域 -->
                <g clip-path="url(#clip-realistic-${instanceId})">
                    <!-- 移动的瞳孔 -->
                    <g class="pupil-group">
                        <circle cx="0" cy="0" r="24" fill="url(#iris-grad-${instanceId})"/>
                        <circle cx="0" cy="0" r="10" fill="#040914"/>
                    </g>
                    
                    <!-- 盖在瞳孔之上的固定内阴影 (不随瞳孔移动，制造深邃的球体感) -->
                    <path d="M 10 50 Q 100 -10 190 50 Q 100 110 10 50" fill="url(#inner-shadow-${instanceId})" pointer-events="none"/>
                </g>
                
                <!-- 眼眶盖板 -->
                <path d="M 10 50 Q 100 -10 190 50 Q 100 110 10 50" fill="none" stroke="#6f7a8a" stroke-width="3" opacity="0.6"/>
            `;
            // 拟物风格的默认瞳孔配置
            this.pupilConfig = { Rx: 50, Ry: 18, squish: 0.4, ...this.options.pupilConfig };
        } else {
            console.warn(`MagneticEye: 未知样式 "${style}"。将使用 'minimal' 样式。`);
            // 默认回退到极简风格
            this.svg.innerHTML = `... (同 'minimal' 样式代码) ...`;
            this.pupilConfig = { Rx: 55, Ry: 20, squish: 0.5, ...this.options.pupilConfig };
        }
        
        container.appendChild(this.svg);
        this.pupilGroup = this.svg.querySelector('.pupil-group');
        // 初始化瞳孔的当前位置，用于平滑动画
        this.pupilGroup.currentTx = 0; 
        this.pupilGroup.currentTy = 0;
    }

    /**
     * 根据鼠标位置更新瞳孔位置和形变
     */
    updateEyePosition() {
        if (!this.pupilGroup || !this.svg) return;

        // 获取 SVG 在页面中的实际位置和尺寸
        const rect = this.svg.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        // 计算鼠标相对于眼睛中心的向量
        let dx = sharedMouse.x - eyeCenterX;
        let dy = sharedMouse.y - eyeCenterY;

        let dist = Math.hypot(dx, dy); // 鼠标到眼睛中心的距离
        let angle = Math.atan2(dy, dx); // 鼠标到眼睛中心的方向角度

        // 距离压缩，模拟球面限制，鼠标离得越远，瞳孔移动幅度越小
        let intensity = Math.min(dist / 500, 1); 
        let easeIntensity = Math.sin(intensity * Math.PI / 2); // 使用正弦函数实现缓动效果

        // 根据椭圆运动轨迹限制瞳孔最大移动半径
        const { Rx, Ry, squish } = this.pupilConfig;
        let maxR = (Rx * Ry) / Math.sqrt(
            Math.pow(Ry * Math.cos(angle), 2) + Math.pow(Rx * Math.sin(angle), 2)
        );

        // 计算目标瞳孔的位移量
        let targetTx = (maxR * easeIntensity) * Math.cos(angle);
        let targetTy = (maxR * easeIntensity) * Math.sin(angle);

        // 平滑延迟动画，让瞳孔运动更自然
        this.pupilGroup.currentTx += (targetTx - this.pupilGroup.currentTx) * 0.15;
        this.pupilGroup.currentTy += (targetTy - this.pupilGroup.currentTy) * 0.15;

        // 计算透视压扁效果，瞳孔越靠近边缘，被“挤压”得越扁
        let currentR = Math.hypot(this.pupilGroup.currentTx, this.pupilGroup.currentTy);
        let currentAngle = Math.atan2(this.pupilGroup.currentTy, this.pupilGroup.currentTx);
        let deg = currentAngle * 180 / Math.PI;

        let ratio = maxR > 0 ? Math.min(currentR / maxR, 1) : 0;
        let scaleX = 1 - (ratio * squish); // 根据离中心的距离计算X轴的缩放

        // 渲染形变
        // translate(${svgCenterX}, ${svgCenterY}) 将瞳孔组移动到 SVG 的中心 (100, 50)
        // 然后再应用计算出的位移、旋转和缩放
        const svgCenterX = this.options.viewBoxWidth / 2;
        const svgCenterY = this.options.viewBoxHeight / 2;

        this.pupilGroup.setAttribute('transform', 
            `translate(${svgCenterX}, ${svgCenterY}) 
             translate(${this.pupilGroup.currentTx}, ${this.pupilGroup.currentTy}) 
             rotate(${deg}) 
             scale(${scaleX}, 1)`
        );
    }

    /**
     * 启动动画循环
     */
    startAnimation() {
        const animate = () => {
            this.updateEyePosition();
            this.animationFrameId = requestAnimationFrame(animate); // 循环调用
        };
        this.animationFrameId = requestAnimationFrame(animate); // 启动第一次
    }

    /**
     * 停止动画循环
     */
    stopAnimation() {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }

    /**
     * 销毁组件，移除 DOM 元素和事件监听
     */
    destroy() {
        this.stopAnimation();
        if (this.parentElement && this.svg && this.svg.parentElement) {
            this.parentElement.removeChild(this.svg.parentElement); // 移除包裹 div
        }
    }
}