"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react"; // 确保你装了 lenis 库

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home-hero", // 监听整个长容器
        start: "top top",      // 顶部对齐时开始
        end: "bottom bottom",  // 底部对齐时结束
        scrub: 1,              // 绑定滚动进度，带平滑缓冲
        pin: ".sticky-wrapper", // 钉住视觉窗口，不让它跑
        // markers: true,      // 调试时可以打开这个看标记
      }
    });

    // --- 初始设置 ---
    // 确保 Slide 1 是可见的
    tl.set(".slide-1", { opacity: 1 });

    // --- 阶段 1 -> 阶段 2 (Damaged -> Tech/Mask) ---
    
    // 1. 第一段文字上浮消失
    tl.to(".slide-1", { y: -50, opacity: 0, duration: 2 });

    // 2. 遮罩层 (Mask) 打开
    // 关键：maskSize 从 0% 变大到 300% (足以覆盖全屏)，模拟“钻入”效果
    tl.to(".mask-container", { 
      maskSize: "300%",
      webkitMaskSize: "300%", 
      duration: 5,
      ease: "power2.inOut" 
    }, "<"); // "<" 表示和上一启动画同时开始

    // 3. 同时，里面的 Grid 和 Hotspots 稍微放大一点，制造纵深感
    tl.fromTo(".grid-svg, .hotspots-svg", 
      { scale: 0.8, opacity: 0.5 },
      { scale: 1.2, opacity: 1, duration: 5 },
      "<"
    );

    // 4. 第二段文字 (Tech) 浮现
    tl.fromTo(".slide-2", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 2 },
      "-=2" // 在遮罩还没完全开完时就出现
    );

    // --- 阶段 2 -> 阶段 3 (Tech -> Restored) ---

    // 5. 第二段文字消失
    tl.to(".slide-2", { y: -50, opacity: 0, duration: 2 }, "+=1");

    // 6. 遮罩层淡出 / 恢复层 (Layer 3) 显现
    // 这里我们直接让 Layer 3 的透明度变 1，盖住下面的所有东西
    tl.to(".layer-restored", { opacity: 1, duration: 3 }, "<");

    // 7. 第三段文字 (Restoration) 浮现
    tl.fromTo(".slide-3", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 2 },
      "-=1"
    );

    // 8. 留一点时间给用户阅读，然后再结束 ScrollTrigger
    tl.to({}, { duration: 2 });

  }, { scope: container });

  return (
    <ReactLenis root>
      {/* 这里的 ref=container 对应上面的 useGSAP scope */}
      <div ref={container}>
        
        <section className="home-hero">
          {/* 粘性视口：所有画面都在这里发生 */}
          <div className="sticky-wrapper">
            
            {/* 1. 底图层：受损生态 */}
            <div className="layer-damaged">
              <img src="/hero-1.png" alt="Damaged Ecosystem" />
            </div>

            {/* 2. 遮罩层：原站的核心动效 */}
            <div className="mask-container">
              {/* 这里面的东西只会在遮罩区域显示 */}
              <img src="/grid.svg" className="grid-svg" alt="" />
              <img src="/hotspots.svg" className="hotspots-svg" alt="" />
            </div>

            {/* 3. 顶图层：生态恢复 */}
            <div className="layer-restored">
              <img src="/hero-2.png" alt="Restored Ecosystem" />
            </div>

            {/* 文字层 */}
            <div className="slides-container">
              {/* Slide 1 */}
              <div className="slide slide-1">
                <div className="content-box">
                  <h3 className="title-highlight">Damaged Ecosystems</h3>
                  <p className="text-body">
                    Invasive species degrade ecosystems by overwhelming native wildlife.
                  </p>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="slide slide-2">
                <div className="content-box">
                  <h3 className="title-highlight">One Click Management</h3>
                  <p className="text-body">
                    Origin deploys field specialists targeting priority zones.
                  </p>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="slide slide-3">
                <div className="content-box">
                  <h3 className="title-highlight">Restoration</h3>
                  <p className="text-body">
                    With invasives controlled, habitats rebound and wildlife thrives.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>


        <section className="next-section-placeholder">
          Inversa is where economics, ecology...
        </section>

      </div>
    </ReactLenis>
  );
}