document.addEventListener("DOMContentLoaded", function() {
  
    // 注册 GSAP 插件
    gsap.registerPlugin(ScrollTrigger);
  
    // === 1. 初始化 DOM 引用 ===
    const slide7 = document.getElementById('slide7'); // 滚动容器 (Scroller)
    if (!slide7) return;
  
    const mapLayer = {
      day: document.getElementById('map-day'),
      dark: document.getElementById('map-dark-layer'),
      nightGroup: document.getElementById('map-night-layer'),
      techGroup: document.getElementById('map-tech-layer'),
      grid: document.getElementById('map-grid-container'),
      dotsContainer: document.getElementById('map-patrol-dots'),
      text1: document.getElementById('map-text-1'),
      text2: document.getElementById('map-text-2')
    };
  
    // === 2. 辅助函数：生成随机巡逻点 ===
    function createPatrolDots(count = 20) {
      const container = mapLayer.dotsContainer;
      if (!container) return;
      container.innerHTML = ''; // 清空
  
      for (let i = 0; i < count; i++) {
        const dot = document.createElement('div');
        const isEnemy = Math.random() > 0.7;
        dot.className = `patrol-dot ${isEnemy ? 'enemy' : ''}`;
        
        // 随机位置 (10% - 90%)
        dot.style.left = gsap.utils.random(10, 90) + '%';
        dot.style.top = gsap.utils.random(10, 90) + '%';
        
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
  
    // === 3. 初始化动画 ===
    function initMapAnimation() {
        console.log("初始化地图动画...");
    
        // 1. 再次确认 DOM 元素存在
        const scrollContainer = document.querySelector(".map-scroll-container");
        const slide7 = document.querySelector("#slide7");
        
        if (!scrollContainer || !slide7) {
            console.error("找不到地图容器元素！");
            return;
        }
    
        // 2. 生成巡逻点 (装饰)
        createPatrolDots(25);
    
        // 3. 初始状态设置 (防止一开始就看不见)
        // 强制 Day 层显示
        gsap.set("#map-day", { autoAlpha: 1 });
        // 隐藏其他层
        gsap.set("#map-text-1", { autoAlpha: 1, y: 0 });
        gsap.set(["#map-text-2"], { autoAlpha: 0, y: 50 });
        gsap.set("#map-grid-container", { autoAlpha: 0 });
    
        // 4. 创建时间轴
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".map-scroll-container", // 触发器：长容器
            scroller: "#slide7",              // ★★★ 核心修复：指定滚动容器为 Slide 7 ★★★
            start: "top top",                 // 容器顶部 碰到 视口顶部
            end: "bottom bottom",             // 容器底部 碰到 视口底部
            scrub: 0.5,                       // 平滑滚动
            pin: ".map-sticky-wrapper",       // 固定视口
            pinType: "transform",             // 在 Swiper 中通常 transform 兼容性更好
            invalidateOnRefresh: true,        // 刷新时重新计算
            // markers: true,                 // ★★★ 调试：如果还不行，把这一行取消注释，看是否有标记线
          }
        });
    
        // --- 动画序列 ---
        // Phase 1: Day -> Night
        tl.to("#map-text-1", { y: -50, autoAlpha: 0, duration: 2 })
          .to(["#map-dark-layer", "#map-night-layer"], { 
            autoAlpha: 1, 
            duration: 4, 
            ease: "power1.inOut" 
          });
    
        // Phase 2: Focus
        tl.to("#map-night-layer", {
            webkitMaskSize: "90% 90%",
            maskSize: "90% 90%",
            duration: 6,
            ease: "power2.inOut"
          })
          .to("#map-grid-container", { autoAlpha: 1, duration: 6 }, "<")
          .to("#map-text-2", { y: 0, autoAlpha: 1, duration: 2 }, "-=4");
    
        // Phase 3: Hold
        tl.to({}, { duration: 6 });
    
        // Phase 4: Restore
        tl.to("#map-text-2", { y: -50, autoAlpha: 0, duration: 2 })
          .to("#map-night-layer", {
            webkitMaskSize: "300% 300%",
            maskSize: "300% 300%",
            duration: 5,
            ease: "power2.inOut"
          })
          .to("#map-grid-container", { autoAlpha: 0, duration: 4 }, "<");
    
        // 5. 强制刷新一次 ScrollTrigger
        ScrollTrigger.refresh();
    }
    
    // 确保在图片加载完成后执行，否则高度计算可能错误
    window.addEventListener("load", () => {
        setTimeout(initMapAnimation, 100);
    });
  
    // === 4. Swiper 集成处理 ===
    // 监听 Swiper 切换事件，当进入 Slide 7 时刷新动画
    // 假设您的 Swiper 实例变量名为 allSwiper (根据 main.js)
    // 如果 allSwiper 定义在全局，请确保这里能访问到
    
    // 延迟初始化以确保 DOM 渲染完成
    setTimeout(() => {
      initMapAnimation();
    }, 500);
  
    // 额外优化：如果可能，监听 swiper 的 slideChange
    // window.allSwiper.on('slideChange', function () {
    //   if (window.allSwiper.activeIndex === 6) { // 索引6对应 Slide 7
    //     ScrollTrigger.refresh();
    //   }
    // });
  
  });