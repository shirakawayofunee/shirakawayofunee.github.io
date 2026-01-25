"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";

// 注册插件
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  
  // 定义 Refs 以便 GSAP 精准控制
  const wrapperRef = useRef<HTMLDivElement>(null);
  const slide1Ref = useRef<HTMLDivElement>(null);
  const slide2Ref = useRef<HTMLDivElement>(null);
  const slide3Ref = useRef<HTMLDivElement>(null);
  const maskContainerRef = useRef<HTMLDivElement>(null);
  const techContentRef = useRef<HTMLDivElement>(null); // 控制遮罩内部元素的视差
  const layerRestoredRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 创建时间轴
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current, // 监听整个 400vh 的容器
        start: "top top",           // 容器顶部到达视口顶部时开始
        end: "bottom bottom",       // 容器底部到达视口底部时结束
        scrub: 1,                   // 柔和的跟手效果
        pin: wrapperRef.current,    // 钉住视觉视口
        // markers: true,           // 调试时取消注释
      }
    });

    // === 初始状态设置 (防闪烁) ===
    // 确保 Slide 1 可见，其他隐藏
    tl.set(slide1Ref.current, { autoAlpha: 1 })
      .set([slide2Ref.current, slide3Ref.current], { autoAlpha: 0 })
      .set(layerRestoredRef.current, { autoAlpha: 0 })
      .set(maskContainerRef.current, { 
        webkitMaskSize: "0% 0%", 
        maskSize: "0% 0%" // 初始遮罩关闭
      });

    // === 阶段 1 -> 2: 钻入科技层 (Invasion/Tech) ===
    
    // 1. 文字1 上滑淡出
    tl.to(slide1Ref.current, { 
      yPercent: -30, 
      autoAlpha: 0, 
      duration: 1, 
      ease: "power2.in" 
    });

    // 2. 遮罩层打开 (核心动效)
    tl.to(maskContainerRef.current, {
        // 放大到 300% 确保覆盖哪怕是超宽屏
        webkitMaskSize: "300% 300%",
        maskSize: "300% 300%",
        duration: 8, // 持续时间长，给用户“穿越”的感觉
        ease: "power1.inOut"
      }, 
      "<" // 与文字消失同步开始，或稍微延后 "-=0.5"
    );

    // 3. 遮罩内部元素 (Grid/Hotspots) 的视差效果
    // 遮罩变大的同时，里面的内容稍微缩小，制造纵深感
    tl.fromTo(techContentRef.current, 
      { scale: 1.2, opacity: 0.5 },
      { scale: 1, opacity: 1, duration: 8, ease: "linear" },
      "<" 
    );

    // 4. 文字2 (Tech) 浮现
    tl.to(slide2Ref.current, { 
      yPercent: 0, // 假设 CSS 中初始可能有偏移
      autoAlpha: 1, 
      duration: 2 
    }, "-=3"); // 在遮罩还没完全开完时浮现

    // === 阶段 2 -> 3: 生态恢复 (Restoration) ===

    // 5. 文字2 上滑淡出
    tl.to(slide2Ref.current, { 
      yPercent: -30, 
      autoAlpha: 0, 
      duration: 1 
    }, "+=1");

    // 6. 遮罩层/科技层 淡出 & 恢复层 淡入
    // 直接控制透明度切换最平滑
    tl.to(layerRestoredRef.current, { 
      autoAlpha: 1, 
      duration: 3 
    }, "<");

    // 7. 文字3 (Restoration) 浮现
    tl.to(slide3Ref.current, { 
      autoAlpha: 1, 
      duration: 2 
    }, "-=1.5");

    // 8. 结尾缓冲
    tl.to({}, { duration: 1 });

  }, { scope: container });

  return (
    <ReactLenis root>
      <div ref={container} className="home-hero">
        {/* 粘性视口 */}
        <div ref={wrapperRef} className="sticky-wrapper">
          
          {/* Layer 1: 底图 (受损) */}
          <div className="layer-damaged">
            <img src="/hero-1.png" alt="Damaged Ecosystem" />
          </div>

          {/* Layer 2: 遮罩层 (科技) */}
          <div ref={maskContainerRef} className="mask-container">
            {/* 这里的 div 包裹是为了做内部视差缩放 */}
            <div ref={techContentRef} className="mask-inner-content">
                <img src="/grid.svg" className="grid-svg" alt="Grid" />
                <img src="/hotspots.svg" className="hotspots-svg" alt="Hotspots" />
            </div>
          </div>

          {/* Layer 3: 顶图 (恢复) */}
          <div ref={layerRestoredRef} className="layer-restored">
            <img src="/hero-2.png" alt="Restored Ecosystem" />
          </div>

          {/* 文字层 (UI) */}
          <div className="slides-container">
            {/* Slide 1 */}
            <div ref={slide1Ref} className="slide slide-1">
              <div className="content-box">
                <h2 className="heading-large">
                  INVASIONS<br />MOVE FAST.<br />BE FASTER.
                </h2>
                <button className="base-button">Explore Origin</button>
              </div>
            </div>

            {/* Slide 2 */}
            <div ref={slide2Ref} className="slide slide-2">
              <div className="content-box">
                <h3 className="title-highlight">Damaged Ecosystems</h3>
                <p className="text-body">
                  Invasive species degrade ecosystems by overwhelming native wildlife.
                </p>
              </div>
            </div>

            {/* Slide 3 */}
            <div ref={slide3Ref} className="slide slide-3">
              <div className="content-box">
                <h3 className="title-highlight">Restoration</h3>
                <p className="text-body">
                  With invasives controlled, habitats rebound. Wildlife thrives, lands regenerate.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* 下一部分内容 */}
      <section className="next-section-placeholder">
        <h2>Next Section</h2>
      </section>
    </ReactLenis>
  );
}