// @ts-nocheck
"use client";
import { useRef, useEffect } from "react";
// 注意：新版 lenis 导入方式变更，如果报错改为 import Lenis from 'lenis'
import { ReactLenis } from "lenis/react"; 
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 注册插件
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);

  useGSAP(() => {
    // 定义时间轴
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",      // 触发对象
        start: "top top",      // 顶部对齐时开始
        end: "+=300%",         // 滚动距离为 300% 视口高度 (对应 content 的 400svh)
        pin: true,             // 钉住画面
        scrub: 1,              // 平滑延迟 1秒
      }
    });

    /* --- 核心动画逻辑 --- */

    // 1. 文字内容向上滚动 (Scrollytelling)
    // 内容有 4 个 block，总高 400svh，我们需要向上移动 300svh 才能看到底部
    tl.to(".hero-content", {
      y: "-300vh",
      ease: "none",
      duration: 10 // 总时长设为10作为基准
    }, 0); // 从时间轴 0 开始

    // 2. 遮罩放大 (Mask Reveal)
    // 你的 CSS 里 mask-size 初始是 50% (在 .hero-mask 中定义)
    // 我们把它放大到 3000%，让它大到足以露出整张图
    tl.fromTo(".hero-mask", 
      { maskSize: "50%" }, 
      { maskSize: "3000%", ease: "power2.inOut", duration: 5 }, 
      0
    );

    // 3. 背景图视差 (Image Parallax)
    // 图片高度是 200svh，稍微向下移动一点，制造深邃感
    tl.to(".hero-img", {
      y: "10%",
      filter: "grayscale(0%)", // 可以从黑白变彩色
      duration: 10
    }, 0);

    // 4. 网格层同步 (Grid Overlay)
    // 网格也随之放大或淡入
    tl.fromTo(".hero-grid-overlay",
      { opacity: 0.25, scale: 0.8 },
      { opacity: 1, scale: 1.2, duration: 5 },
      0
    );

    // 5. 标记点依次出现 (Markers)
    // 在滚动到中间时，让标记点蹦出来
    tl.fromTo(".marker", 
      { opacity: 0, scale: 0 }, 
      { opacity: 1, scale: 1, stagger: 0.5, duration: 2 }, 
      2 // 在时间轴第 2 秒开始 (大约滚动了 20% 时)
    );

    // 6. 进度条 (Progress Bar)
    // 控制 CSS 变量 --progress 从 0 到 1
    tl.to(".hero-scroll-progress-bar", {
      "--progress": 1,
      duration: 10,
      ease: "none"
    }, 0);

  }, { scope: container });

  return (
    <ReactLenis root>
      <div className="container" ref={container}>
        <section className="hero">
          {/* 背景图层 */}
          <div className="hero-img">
            <img src="/hero-img.jpg" alt="Background Map" />
          </div>

          {/* 遮罩层 (挖洞层) */}
          <div className="hero-mask"></div>

          {/* 网格装饰层 */}
          <div className="hero-grid-overlay">
            <img src="/grid-overlay.svg" alt="Grid System" />
          </div>

          {/* 标记点 (GPS Dots) */}
          <div className="marker marker-1">
            <span className="marker-icon"></span>
            <p className="marker-label">Anchor Field</p>
          </div>
          <div className="marker marker-2">
            <span className="marker-icon"></span>
            <p className="marker-label">B Field</p>
          </div>
          <div className="marker marker-3" style={{ top: '65svh', left: '40vw' }}> {/* 我手动加了个位置，防止重叠 */}
            <span className="marker-icon"></span>
            <p className="marker-label">C Field</p>
          </div>

          {/* 滚动内容层 (400svh 高度，用来被移动) */}
          <div className="hero-content">
            {/* Block 1: 初始状态 */}
            <div className="hero-content-block">
              <div className="hero-content-copy">
                <h1>Location Framework</h1>
              </div>
            </div>
            
            {/* Block 2: 遮罩开始变大 */}
            <div className="hero-content-block">
              <div className="hero-content-copy">
                <h2>Analysis Phase</h2>
                <p>
                  Identifying ecological hotspots through satellite imagery.
                </p>
              </div>
            </div>

            {/* Block 3: 标记点出现 */}
            <div className="hero-content-block">
              <div className="hero-content-copy">
                <h2>Coordinate Mapping</h2>
                <p>
                  Terrain data is interpreted through directional vectors.
                </p>
              </div>
            </div>

            {/* Block 4: 结束 */}
            <div className="hero-content-block">
              <div className="hero-content-copy">
                <h2>Deployment</h2>
                <p>
                  Movement responds to relative position rather than absolute distance.
                </p>
              </div>
            </div>
          </div>

          {/* 进度条 */}
          <div className="hero-scroll-progress-bar"></div>
        </section>

        {/* 底部占位，证明滚动结束 */}
        <section className="outro">
          <p>The system has reached its final spatial state.</p>
        </section>
        <section className="outro" style={{height: '50vh'}}></section>
      </div>
    </ReactLenis>
  );
}