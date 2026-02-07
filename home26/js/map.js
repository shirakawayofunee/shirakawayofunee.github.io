document.addEventListener("DOMContentLoaded", (event) => {
    
    // ==========================================
    // 0. 移植配置 (重要!)
    // ==========================================
    // 如果你的图片不在 svg 文件夹下，请修改这里。例如: "/assets/images/map"
    const BASE_PATH = "./svg"; 

    // 图片映射表 (ID -> 文件名)
    const images = {
        'img-day': 'hero-day.png',
        'img-night': 'hero-night.png',
        'img-rain': 'rain.png',
        'img-grid': 'grid.svg',
    };

    // ==========================================
    // 1. 初始化资源路径
    // ==========================================
    // 设置 img 标签的 src
    for (const [id, filename] of Object.entries(images)) {
        const imgElement = document.getElementById(id);
        if (imgElement) {
            imgElement.src = `${BASE_PATH}/${filename}`;
        }
    }

    // 设置 CSS Mask 路径
    const nightMaskLayer = document.getElementById('night-mask-layer');
    if (nightMaskLayer) {
        const maskUrl = `url("${BASE_PATH}/mask.svg")`;
        nightMaskLayer.style.maskImage = maskUrl;
        nightMaskLayer.style.webkitMaskImage = maskUrl;
    }

    // ==========================================
    // 2. 辅助函数：巡逻点动画
    // ==========================================
    function createPatrolDots(containerId, count = 15) {
        const container = document.getElementById(containerId);
        if (!container) return;

        for (let i = 0; i < count; i++) {
            const dot = document.createElement('div');
            // 30% 概率红色，70% 黄色
            const isEnemy = Math.random() > 0.7;
            dot.className = `patrol-dot ${isEnemy ? 'enemy' : ''}`;
            
            // 初始随机位置
            const startX = gsap.utils.random(10, 90);
            const startY = gsap.utils.random(10, 90);
            dot.style.left = `${startX}%`;
            dot.style.top = `${startY}%`;
            
            container.appendChild(dot);
            animatePatrol(dot);
        }
    }

    function animatePatrol(element) {
        gsap.to(element, {
            x: gsap.utils.random(-40, 40),
            y: gsap.utils.random(-40, 40),
            duration: gsap.utils.random(3, 6),
            ease: "sine.inOut",
            onComplete: () => animatePatrol(element)
        });
    }

    // ==========================================
    // 3. Lenis 平滑滚动
    // ==========================================
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // ==========================================
    // 4. GSAP ScrollTrigger 主时间轴
    // ==========================================
    gsap.registerPlugin(ScrollTrigger);

    const container = document.getElementById('container');
    const wrapper = document.getElementById('wrapper');
    
    // 获取各图层元素
    const dayLayer = document.getElementById('day-layer');
    const darkBgLayer = document.getElementById('dark-bg-layer');
    const nightMaskLayer = document.getElementById('night-mask-layer');
    const techLayer = document.getElementById('tech-layer');
    const gridContainer = document.getElementById('grid-container');
    const markersContainer = document.getElementById('markers-container');
    const text1 = document.getElementById('text-1');
    const text2 = document.getElementById('text-2');

    // 生成动态光点
    createPatrolDots('patrol-dots-layer', 25);

    // 创建时间轴
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            pin: wrapper,
        }
    });

    // --- Phase 0: 初始状态 ---
    tl.set(dayLayer, { zIndex: 0, autoAlpha: 1 });
    tl.set(darkBgLayer, { zIndex: 5, autoAlpha: 0 });
    // Mask 初始很大，不可见
    tl.set(nightMaskLayer, { 
        zIndex: 10,
        autoAlpha: 0, 
        webkitMaskSize: "300% 300%",
        maskSize: "300% 300%"
    });
    tl.set(techLayer, { zIndex: 20 });
    tl.set([gridContainer, markersContainer], { autoAlpha: 0 });
    
    // 文字初始状态
    tl.set(text1, { autoAlpha: 1, y: 0 });
    tl.set(text2, { autoAlpha: 0, y: 50 });

    // --- Phase 1: Day -> Night ---
    // 文字1 离场
    tl.to(text1, { y: -50, autoAlpha: 0, duration: 2 });
    // 黑夜层淡入
    tl.to([darkBgLayer, nightMaskLayer], {
        autoAlpha: 1,
        duration: 4,
        ease: "power1.inOut"
    });

    // --- Phase 2: Focus & Tech ---
    // Mask 缩小聚焦
    tl.to(nightMaskLayer, {
        webkitMaskSize: "90% 90%",
        maskSize: "90% 90%",
        duration: 6,
        ease: "power2.inOut"
    });
    // 网格和红色标记浮现
    tl.to([gridContainer, markersContainer], {
        autoAlpha: 1,
        duration: 6,
        ease: "power2.inOut"
    }, "<"); 
    
    // 文字2 进场 (左侧)
    tl.to(text2, { y: 0, autoAlpha: 1, duration: 2 }, "-=4");

    // --- Phase 3: Hold ---
    // 停留，让用户阅读
    tl.to({}, { duration: 6 }); 

    // --- Phase 4: Night -> Day (还原) ---
    // 文字2 离场
    tl.to(text2, { y: -50, autoAlpha: 0, duration: 2 });
    // Mask 放大还原
    tl.to(nightMaskLayer, {
        webkitMaskSize: "300% 300%",
        maskSize: "300% 300%",
        duration: 5,
        ease: "power2.inOut"
    });
    // 网格消失
    tl.to([gridContainer, markersContainer], {
        autoAlpha: 0,
        duration: 4
    }, "<");

    // 结尾缓冲
    tl.to({}, { duration: 2 });
});