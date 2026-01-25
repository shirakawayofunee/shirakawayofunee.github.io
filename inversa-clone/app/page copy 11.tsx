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
  // 1. 背景图层
  const dayImgRef = useRef<HTMLImageElement>(null);   // 1.png
  const nightImgRef = useRef<HTMLDivElement>(null);   // 2.png (叠加层)
  
  // 2. 科技/装饰层 (Mask + Grid + Hotspots)
  // 这个层只在黑夜阶段显示，作为 2.png 的装饰
  const techLayerRef = useRef<HTMLDivElement>(null); 
  const gridRef = useRef<HTMLImageElement>(null);
  const hotspotsRef = useRef<HTMLImageElement>(null);
  
  // 3. 文字
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

    // 背景：白天可见，黑夜透明
    tl.set(dayImgRef.current, { zIndex: 0 }); 
    tl.set(nightImgRef.current, { zIndex: 1, autoAlpha: 0 }); 

    // 科技装饰层：位于最上层，初始不可见，Mask 很大(300%)
    tl.set(techLayerRef.current, { 
      zIndex: 10,
      autoAlpha: 0, 
      webkitMaskSize: "300% 300%",
      maskSize: "300% 300%"
    });

    // 内部SVG：稍微放大，等待缩小入场
    tl.set([gridRef.current, hotspotsRef.current], { scale: 1.2 });

    // 文字
    tl.set(text1Ref.current, { autoAlpha: 1 });
    tl.set([text2Ref.current, text3Ref.current], { autoAlpha: 0 });


    // ==========================================
    // 2. 动画流程
    // ==========================================

    // --- Phase 1: 文字1 离场 ---
    tl.to(text1Ref.current, { y: -50, autoAlpha: 0, duration: 2 });

    // --- Phase 2: 白天 -> 黑夜 (单纯的图片切换) ---
    // 1.png -> 2.png
    tl.to(nightImgRef.current, { 
      autoAlpha: 1, 
      duration: 3 
    }, "+=0.5");

    // --- Phase 3: 科技层入场 (Mask装饰动画) ---
    // 这是给 2.png 增加的特效
    
    // 1. 科技层显现
    tl.to(techLayerRef.current, { autoAlpha: 1, duration: 1 }, "<");

    // 2. Mask 聚焦动画 (300% -> 90%)
    // 配合 SVG 缩放，营造“锁定/扫描”感
    tl.to(techLayerRef.current, {
      webkitMaskSize: "90% 90%",
      maskSize: "90% 90%",
      duration: 6,
      ease: "power2.inOut"
    }, "<");

    // 3. SVG 视差归位
    tl.to([gridRef.current, hotspotsRef.current], {
      scale: 1, // 0.76 太小可能会留黑边，建议1或0.9，具体看您素材
      duration: 6,
      ease: "power2.out"
    }, "<");

    // 4. 文字2 出现
    tl.to(text2Ref.current, { y: 0, autoAlpha: 1, duration: 2 }, "-=2");

    // --- Phase 4: 停留展示 ---
    tl.to({}, { duration: 4 });

    // --- Phase 5: 退场 & 黑夜 -> 白天 ---

    // 1. 文字2 消失
    tl.to(text2Ref.current, { y: -50, autoAlpha: 0, duration: 2 });

    // 2. Mask 散开/退场 (90% -> 300%)
    // 原路返回
    tl.to(techLayerRef.current, {
      webkitMaskSize: "300% 300%",
      maskSize: "300% 300%",
      duration: 5,
      ease: "power2.inOut"
    }, "+=0.5");

    // 3. SVG 随之淡出/缩小
    tl.to([gridRef.current, hotspotsRef.current], {
      scale: 0.8,
      duration: 5
    }, "<");
    
    // 4. 科技层整体隐形 (防止遮挡)
    tl.to(techLayerRef.current, { autoAlpha: 0, duration: 1 }, "-=1");

    // 5. 黑夜图片淡出 -> 回到白天 (2.png -> 1.png)
    tl.to(nightImgRef.current, { 
      autoAlpha: 0, 
      duration: 3 
    }, "<"); 

    // 6. 文字3 出现
    tl.to(text3Ref.current, { y: 0, autoAlpha: 1, duration: 2 }, "-=1");

    // 缓冲
    tl.to({}, { duration: 2 });

  }, { scope: container });

  return (
    <ReactLenis root>
      <div ref={container} className="home-hero relative h-[400vh] bg-[#13140e]">
        <div ref={wrapperRef} className="sticky-wrapper sticky top-0 h-screen w-full overflow-hidden flex justify-center items-center">
          
          {/* === LAYER 0: 白天底图 (1.png) === */}
          {/* 始终存在，垫底 */}
          <img 
            ref={dayImgRef}
            src="/hero-day.png" 
            alt="Day" 
            className="absolute inset-0 w-full h-full object-cover" 
          />

          {/* === LAYER 1: 黑夜叠加层 (2.png) === */}
          {/* 通过 opacity 0->1 覆盖白天 */}
          <div ref={nightImgRef} className="absolute inset-0 w-full h-full">
             <img src="/hero-night.png" alt="Night" className="w-full h-full object-cover opacity-90" />
          </div>

          {/* === LAYER 2: 科技装饰层 (Mask + SVG) === */}
          {/* 
              这就是您说的“给2.png的装饰”。
              它独立于图片切换。
              css .mask-layer 负责应用 mask.svg。
          */}
          <div 
            ref={techLayerRef} 
            className="mask-layer absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center"
          >
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