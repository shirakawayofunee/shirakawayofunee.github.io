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
  const dayMaskLayerRef = useRef<HTMLDivElement>(null); // 顶层：白天+遮罩
  const nightLayerRef = useRef<HTMLDivElement>(null);   // 底层：黑夜+SVG
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

    // === 1. 初始状态 (Initial State) ===
    
    // [底层] Night Layer + SVG
    // 按照您的要求：平时透明度为0，且放大一点等待缩放效果
    tl.set(nightLayerRef.current, { zIndex: 0 }); 
    tl.set([gridRef.current, hotspotsRef.current], { 
      autoAlpha: 0, 
      scale: 0.4 // 初始放大，制造"落下去"的视差
    });

    // [顶层] Day Layer (Mask)
    // 初始 Mask 极大(300%)，意味着白天图全屏可见
    tl.set(dayMaskLayerRef.current, { 
      zIndex: 10,
      webkitMaskSize: "300% 300%",
      maskSize: "300% 300%",
      autoAlpha: 1
    });

    // 文字状态
    tl.set(text1Ref.current, { autoAlpha: 1 });
    tl.set([text2Ref.current, text3Ref.current], { autoAlpha: 0 });


    // === 2. 动画流程 (Timeline) ===

    // --- Phase 1: 文字1 离场 ---
    tl.to(text1Ref.current, { y: -50, autoAlpha: 0, duration: 2 });

    // --- Phase 2: 天黑/钻入 (Mask 缩小 -> 露出 Night) ---
    
    // 1. Day Layer 的遮罩缩小 (300% -> 0%)
    // 视觉上：白天缩成了一个点然后消失
    tl.to(dayMaskLayerRef.current, {
      webkitMaskSize: "85% 85%",
      maskSize: "85% 85%",
      duration: 8,
      ease: "power2.inOut"
    }, "+=0.5");

    // 2. [底层] SVG 浮现 + 缩放 (配合 Day 层的消失)
    // 视觉上：随着白天消失，绿色的网格和红点浮现出来，并有一个缩放定位的感觉
    tl.to([gridRef.current, hotspotsRef.current], {
      autoAlpha: 1,  // 变亮
      scale: 0.9,      // 回到正常大小
      duration: 8,
      ease: "power2.out"
    }, "<");

    // 3. 文字2 (Tech) 浮现
    tl.to(text2Ref.current, { y: 0, autoAlpha: 1, duration: 2 }, "-=3");

    // --- Phase 3: 停留展示 (Hold) ---
    tl.to({}, { duration: 4 });

    // --- Phase 4: 天亮/恢复 (Mask 变大 -> 盖住 Night) ---
    
    // 1. 文字2 消失
    tl.to(text2Ref.current, { y: -50, autoAlpha: 0, duration: 2 });

    // 2. Day Layer 的遮罩重新变大 (0% -> 300%)
    // 视觉上：白天重新扩散开来，覆盖黑夜
    tl.to(dayMaskLayerRef.current, {
      webkitMaskSize: "300% 300%",
      maskSize: "300% 300%",
      duration: 6,
      ease: "power2.inOut"
    }, "+=0.5");

    // 3. [底层] SVG 淡出 + 缩小
    // 视觉上：网格退远并消失
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
          
          {/* === LAYER 0 (底层): 黑夜 + SVG === */}
          {/* 这层永远在底部，本身不透明，全靠顶层 Day 把它挡住 */}
          <div ref={nightLayerRef} className="absolute inset-0 w-full h-full flex items-center justify-center">
             
             {/* 黑夜底图 */}
             <img src="/hero-night.png" alt="Night" className="absolute inset-0 w-full h-full object-cover opacity-80" />
             
             {/* SVG 元素 (初始 opacity 0) */}
             <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  ref={gridRef}
                  src="/grid.svg" 
                  className="absolute w-full h-full object-cover" 
                  alt="Grid" 
                />
                <img 
                  ref={hotspotsRef}
                  src="/hotspots.svg" 
                  className="absolute w-full h-full object-cover pulse-hotspots" 
                  alt="Hotspots" 
                />
             </div>
          </div>

          {/* === LAYER 10 (顶层): 白天 === */}
          {/* 这一层应用了 mask-layer，Mask控制它的可见区域 */}
          <div ref={dayMaskLayerRef} className="mask-layer absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
            {/* 白天底图 */}
            <img src="/hero-day.png" alt="Day" className="w-full h-full object-cover" />
          </div>

          {/* === LAYER 20 (UI): 文字 === */}
          <div className="slides-container absolute inset-0 z-20 pointer-events-none w-full h-full px-12">
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