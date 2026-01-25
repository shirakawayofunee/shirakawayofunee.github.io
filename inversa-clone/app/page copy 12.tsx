"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  // === DOM 引用 ===
  const nightImgRef = useRef<HTMLDivElement>(null); // 2.png
  
  // 科技层容器 (Grid 和 Hotspots 都在这里面)
  // 这个 DIV 会应用 CSS mask-image
  const techLayerRef = useRef<HTMLDivElement>(null); 
  
  // 内部元素 (只做透明度)
  const gridContentRef = useRef<HTMLDivElement>(null); 
  
  // 文字引用
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
        pin: wrapperRef.current,
      }
    });

    // ==========================================
    // 1. 初始状态设置
    // ==========================================

    // 黑夜层 (2.png): 初始透明
    tl.set(nightImgRef.current, { autoAlpha: 0 });

    // 科技层 (Mask容器): 
    // 1. 位于最上层
    // 2. mask-size 初始为 300% (巨大)
    // 3. 容器本身必须是可见的 (autoAlpha: 1)，否则遮罩再怎么动也看不见内部
    tl.set(techLayerRef.current, { 
      zIndex: 20,
      autoAlpha: 1, 
      webkitMaskSize: "300% 300%",
      maskSize: "300% 300%"
    });

    // Grid/Hotspots 内容: 初始透明度为 0
    tl.set(gridContentRef.current, { autoAlpha: 0 });

    // 文字状态
    tl.set(text1Ref.current, { autoAlpha: 1 });
    tl.set([text2Ref.current, text3Ref.current], { autoAlpha: 0 });


    // ==========================================
    // 2. 动画流程
    // ==========================================

    // --- Phase 1: 文字1 离场 ---
    tl.to(text1Ref.current, { y: -50, autoAlpha: 0, duration: 2 });

    // --- Phase 2: 白天 -> 黑夜 (1.png -> 2.png) ---
    tl.to(nightImgRef.current, { 
      autoAlpha: 1, 
      duration: 3 
    }, "+=0.5");

    // --- Phase 3: 科技层入场 (Mask 300%->90%, Grid FadeIn) ---
    
    // 1. Grid 内容浮现 (Opacity 0->1)
    tl.to(gridContentRef.current, {
      autoAlpha: 1,
      duration: 2,
      ease: "power2.inOut"
    }, "<");

    // 2. Mask 聚焦 (300% -> 90%)
    // 这就是您要求的：Mask 充当裁剪层，范围从大变小
    tl.to(techLayerRef.current, {
      webkitMaskSize: "90% 90%",
      maskSize: "90% 90%",
      duration: 6,
      ease: "power2.inOut"
    }, "<");

    // 3. 文字2 出现
    tl.to(text2Ref.current, { y: 0, autoAlpha: 1, duration: 2 }, "-=2");

    // --- Phase 4: 停留展示 (Hold) ---
    tl.to({}, { duration: 4 });

    // --- Phase 5: 退场 (Mask 90%->300%, Grid FadeOut) ---

    // 1. 文字2 消失
    tl.to(text2Ref.current, { y: -50, autoAlpha: 0, duration: 2 });

    // 2. Mask 散开/原路退场 (90% -> 300%)
    tl.to(techLayerRef.current, {
      webkitMaskSize: "300% 300%",
      maskSize: "300% 300%",
      duration: 5,
      ease: "power2.inOut"
    }, "+=0.5");

    // 3. Grid 内容淡出 (Opacity 1->0)
    tl.to(gridContentRef.current, {
      autoAlpha: 0,
      duration: 3
    }, "<"); // 与遮罩变大同步，或者稍微快一点

    // 4. 黑夜图淡出 -> 回到白天 (2.png -> 1.png)
    tl.to(nightImgRef.current, { 
      autoAlpha: 0, 
      duration: 3 
    }, "<"); 

    // 5. 文字3 出现
    tl.to(text3Ref.current, { y: 0, autoAlpha: 1, duration: 2 }, "-=1");

    // 缓冲
    tl.to({}, { duration: 2 });

  }, { scope: container });

  return (
    <ReactLenis root>
      <div ref={container} className="home-hero relative h-[400vh] bg-[#13140e]">
        <div ref={wrapperRef} className="sticky-wrapper sticky top-0 h-screen w-full overflow-hidden flex justify-center items-center">
          
          {/* === LAYER 0: 白天底图 (1.png) === */}
          <img src="/hero-day.png" alt="Day" className="absolute inset-0 w-full h-full object-cover z-0" />

          {/* === LAYER 1: 黑夜叠加层 (2.png) === */}
          <div ref={nightImgRef} className="absolute inset-0 w-full h-full z-10">
             <img src="/hero-night.png" alt="Night" className="w-full h-full object-cover" />
          </div>

          {/* === LAYER 2: 科技装饰层 (应用 CSS Mask) === */}
          {/* 
              mask-layer 类负责加载 mask.svg 作为 CSS 属性。
              techLayerRef 负责被 GSAP 控制 mask-size。
          */}
          <div 
            ref={techLayerRef} 
            className="mask-layer absolute inset-0 w-full h-full z-20 pointer-events-none flex items-center justify-center"
          >
             {/* 内部 Grid/Hotspots 只负责 Opacity */}
             <div ref={gridContentRef} className="relative w-full h-full flex items-center justify-center">
                <img 
                  src="/grid.svg" 
                  className="absolute w-[90%] h-auto object-contain" 
                  alt="Grid" 
                />
                <img 
                  src="/hotspots.svg" 
                  className="absolute w-[90%] h-auto object-contain pulse-hotspots" 
                  alt="Hotspots" 
                />
             </div>
          </div>

          {/* === LAYER 3: UI 文字 === */}
          <div className="slides-container absolute inset-0 z-30 pointer-events-none w-full h-full px-12">
             <div ref={text1Ref} className="absolute top-1/2 right-20 -translate-y-1/2 text-right max-w-lg">
                <h3 className="text-[#ebfc72] text-xl tracking-widest mb-4">DAMAGED ECOSYSTEMS</h3>
                <p className="text-[#f4f3e8] text-2xl font-light">Invasive species degrade ecosystems...</p>
             </div>
             <div ref={text2Ref} className="absolute top-1/2 left-20 -translate-y-1/2 text-left max-w-lg">
                <h3 className="text-[#ebfc72] text-xl tracking-widest mb-4">ONE CLICK MANAGEMENT</h3>
                <p className="text-[#f4f3e8] text-2xl font-light">Origin digital command center...</p>
             </div>
             <div ref={text3Ref} className="absolute top-1/2 right-20 -translate-y-1/2 text-right max-w-lg">
                <h3 className="text-[#ebfc72] text-xl tracking-widest mb-4">RESTORATION</h3>
                <p className="text-[#f4f3e8] text-2xl font-light">With invasives controlled, habitats rebound...</p>
             </div>
          </div>

        </div>
      </div>
    </ReactLenis>
  );
}