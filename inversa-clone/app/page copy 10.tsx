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
  
  // Refs
  const nightLayerRef = useRef<HTMLDivElement>(null);   // Z-0: 黑夜底图
  const dayMaskLayerRef = useRef<HTMLDivElement>(null); // Z-10: 白天 (带遮罩)
  const techLayerRef = useRef<HTMLDivElement>(null);    // Z-20: Grid & Hotspots (最上层)
  
  const gridRef = useRef<HTMLImageElement>(null);
  const hotspotsRef = useRef<HTMLImageElement>(null);
  
  // Text Refs
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

    // === 1. 初始状态 ===
    
    // [Z-20] Tech Layer (Grid/Hotspots) - 放在最上面
    tl.set(techLayerRef.current, { zIndex: 20 });
    tl.set([gridRef.current, hotspotsRef.current], { 
      autoAlpha: 0, 
      scale: 0.76 // 初始放大，等待缩放进场
    });

    // [Z-10] Day Layer (Mask)
    // 初始 Mask 300% -> 白天全屏
    tl.set(dayMaskLayerRef.current, { 
      zIndex: 10,
      webkitMaskSize: "300% 300%",
      maskSize: "300% 300%",
      autoAlpha: 1
    });

    // [Z-0] Night Layer - 永远垫底
    tl.set(nightLayerRef.current, { zIndex: 0 });

    // 文字状态
    tl.set(text1Ref.current, { autoAlpha: 1 });
    tl.set([text2Ref.current, text3Ref.current], { autoAlpha: 0 });


    // === 2. 动画流程 ===

    // --- Phase 1: 文字1 离场 ---
    tl.to(text1Ref.current, { y: -50, autoAlpha: 0, duration: 2 });

    // --- Phase 2: 天黑 & 科技层覆盖 (30% - 50%) ---
    
    // 1. Day Layer 遮罩缩小 (300% -> 0%) -> 白天消失，露出黑夜
    tl.to(dayMaskLayerRef.current, {
      webkitMaskSize: "90% 90%",
      maskSize: "90% 90%",
      duration: 8,
      ease: "power2.inOut"
    }, "+=0.5");

    // 2. [顶层] Tech SVG 浮现 + 缩放归位
    // 因为在最上层，所以它会覆盖在正在缩小的白天图层之上
    tl.to([gridRef.current, hotspotsRef.current], {
      autoAlpha: 1,
      scale: 0.76,
      duration: 8,
      ease: "power2.out"
    }, "<");

    // 3. 文字2 出现
    tl.to(text2Ref.current, { y: 0, autoAlpha: 1, duration: 2 }, "-=3");

    // --- Phase 3: 停留展示 ---
    tl.to({}, { duration: 4 });

    // --- Phase 4: 天亮 & 科技层消失 (60% - 100%) ---
    
    // 1. 文字2 消失
    tl.to(text2Ref.current, { y: -50, autoAlpha: 0, duration: 2 });

    // 2. Day Layer 遮罩变大 (0% -> 300%) -> 白天回归
    tl.to(dayMaskLayerRef.current, {
      webkitMaskSize: "300% 300%",
      maskSize: "300% 300%",
      duration: 6,
      ease: "power2.inOut"
    }, "+=0.5");

    // 3. [顶层] Tech SVG 淡出 + 缩小
    tl.to([gridRef.current, hotspotsRef.current], {
      autoAlpha: 0,
      scale: 0.8,
      duration: 6
    }, "<");

    // 4. 文字3 出现
    tl.to(text3Ref.current, { y: 0, autoAlpha: 1, duration: 2 }, "-=2");

    // 缓冲
    tl.to({}, { duration: 2 });

  }, { scope: container });

  return (
    <ReactLenis root>
      <div ref={container} className="home-hero relative h-[400vh] bg-[#13140e]">
        <div ref={wrapperRef} className="sticky-wrapper sticky top-0 h-screen w-full overflow-hidden flex justify-center items-center">
          
          {/* === LAYER 0 (底层): 黑夜 === */}
          <div ref={nightLayerRef} className="absolute inset-0 w-full h-full">
             <img src="/hero-night.png" alt="Night" className="w-full h-full object-cover opacity-80" />
          </div>

          {/* === LAYER 10 (中层): 白天 + Mask === */}
          <div ref={dayMaskLayerRef} className="mask-layer absolute inset-0 w-full h-full pointer-events-none">
            <img src="/hero-day.png" alt="Day" className="w-full h-full object-cover" />
          </div>

          {/* === LAYER 20 (顶层): Tech SVG (Grid + Hotspots) === */}
          {/* 独立出来放在所有图层之上 */}
          <div ref={techLayerRef} className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
             <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  ref={gridRef}
                  src="/grid.svg" 
                  className="absolute w-[90%] h-auto object-contain" 
                  alt="Grid" 
                />
                <img 
                  ref={hotspotsRef}
                  src="/hotspots.svg" 
                  className="absolute w-[90%] h-auto object-contain pulse-hotspots" 
                  alt="Hotspots" 
                />
             </div>
          </div>

          {/* === LAYER 30 (UI): 文字 === */}
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