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
  
  // === DOM Refs ===
  const dayLayerRef = useRef<HTMLDivElement>(null);      // Layer 0: 白天
  const blackLayerRef = useRef<HTMLDivElement>(null);    // Layer 1: 纯黑背景 (夹层)
  const nightMaskLayerRef = useRef<HTMLDivElement>(null); // Layer 2: 黑夜 (Mask)
  const techLayerRef = useRef<HTMLDivElement>(null);     // Layer 3: SVG
  
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

    // ==========================================
    // 1. 初始状态设置
    // ==========================================

    // Layer 0: 白天 (垫底)
    tl.set(dayLayerRef.current, { zIndex: 0 });

    // Layer 1: 纯黑层 (夹在中间，盖住白天)
    // 初始不可见
    tl.set(blackLayerRef.current, { zIndex: 10, autoAlpha: 0 });

    // Layer 2: 黑夜 (Mask)
    // 初始不可见，Mask 很大 (300%)
    tl.set(nightMaskLayerRef.current, { 
      zIndex: 20,
      autoAlpha: 0, 
      webkitMaskSize: "300% 300%",
      maskSize: "300% 300%"
    });

    // Layer 3: Tech SVG
    tl.set(techLayerRef.current, { zIndex: 30 });
    tl.set([gridRef.current, hotspotsRef.current], { 
      autoAlpha: 0,
      scale: 0.76 
    });

    // 文字
    tl.set(text1Ref.current, { autoAlpha: 1 });
    tl.set([text2Ref.current, text3Ref.current], { autoAlpha: 0 });


    // ==========================================
    // 2. 动画流程
    // ==========================================

    // --- Phase 1: 文字1 离场 ---
    tl.to(text1Ref.current, { y: -50, autoAlpha: 0, duration: 2 });

    // --- Phase 2: 入夜 (白天 -> 纯黑 -> 黑夜图) ---
    
    // 1. 纯黑层 & 黑夜层 同时淡入
    // 这一步之后，屏幕全黑(因为Mask很大，黑夜图铺满，底下还有个黑色底兜底)
    tl.to([blackLayerRef.current, nightMaskLayerRef.current], { 
      autoAlpha: 1, 
      duration: 3 
    }, "+=0.5");

    // --- Phase 3: 聚焦 (Mask 缩小 -> 露出 Layer 1 的纯黑) ---
    
    // 2. Mask 缩小 (300% -> 90%)
    // 视觉：黑夜图收缩到中间，边缘被切掉 -> 露出底下的 blackLayerRef (黑色)
    tl.to(nightMaskLayerRef.current, {
      webkitMaskSize: "90% 90%",
      maskSize: "90% 90%",
      duration: 6,
      ease: "power2.inOut"
    }, "<");

    // 3. SVG 显现
    tl.to([gridRef.current, hotspotsRef.current], {
      autoAlpha: 1,
      scale: 1,
      duration: 6,
      ease: "power2.out"
    }, "<");

    // 4. 文字2 出现
    tl.to(text2Ref.current, { y: 0, autoAlpha: 1, duration: 2 }, "-=2");

    // --- Phase 4: 停留 ---
    tl.to({}, { duration: 4 });

    // --- Phase 5: 退场 (Mask 放大 -> 变回全屏黑夜 -> 淡出变白天) ---

    // 1. 文字2 消失
    tl.to(text2Ref.current, { y: -50, autoAlpha: 0, duration: 2 });

    // 2. Mask 变大 (90% -> 300%)
    // 视觉：黑夜图重新铺满全屏，盖住边缘的黑色夹层
    tl.to(nightMaskLayerRef.current, {
      webkitMaskSize: "300% 300%",
      maskSize: "300% 300%",
      duration: 5,
      ease: "power2.inOut"
    }, "+=0.5");

    // 3. SVG 消失
    tl.to([gridRef.current, hotspotsRef.current], {
      autoAlpha: 0,
      scale: 0.76,
      duration: 5
    }, "<");

    // 4. 纯黑层 & 黑夜层 同时淡出 (回到 Layer 0 白天)
    tl.to([blackLayerRef.current, nightMaskLayerRef.current], { 
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
          
          {/* === LAYER 0 (底层): 白天 === */}
          <div ref={dayLayerRef} className="absolute inset-0 w-full h-full">
             <img src="/hero-day.png" alt="Day" className="w-full h-full object-cover" />
          </div>

          {/* === LAYER 1 (夹层): 纯黑背景 === */}
          {/* 当黑夜Mask缩小时，透过边缘看到的是这一层黑色，而不是Layer 0 */}
          <div ref={blackLayerRef} className="absolute inset-0 w-full h-full bg-black pointer-events-none"></div>

          {/* === LAYER 2 (中层): 黑夜 + Mask === */}
          {/* Mask 缩小 -> 露出 Layer 1 (黑色) */}
          <div 
            ref={nightMaskLayerRef} 
            className="mask-layer absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center"
          >
            <img src="/hero-night.png" alt="Night" className="w-full h-full object-cover" />
          </div>

          {/* === LAYER 3 (顶层): Tech SVG === */}
          {/* 在最上面，不受 Mask 影响 */}
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

          {/* === UI 文字 === */}
          <div className="slides-container absolute inset-0 z-40 pointer-events-none w-full h-full px-12">
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