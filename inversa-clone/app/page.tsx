"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";

const BASE_PATH = "/inversa-clone"; 

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  // === DOM Refs ===
  const dayLayerRef = useRef<HTMLDivElement>(null);       // Layer 1 (Z=0): 白天
  const darkBgLayerRef = useRef<HTMLDivElement>(null);    // 夹层: 深色背景 (#13140e)
  const nightMaskLayerRef = useRef<HTMLDivElement>(null); // Layer 2 (Z=10): 黑夜 (Mask)
  const techLayerRef = useRef<HTMLDivElement>(null);      // Layer 3 (Z=20): Grid & Hotspots
  
  const gridRef = useRef<HTMLImageElement>(null);
  
  // Text Refs (保持原有的文字逻辑配合展示)
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5, // 稍微柔和一点的滚动跟随
        pin: wrapperRef.current,
      }
    });

    // ==========================================
    // 1. 初始状态设置 (Set Initial States)
    // ==========================================

    // Layer 1: 白天 (常驻，垫底)
    tl.set(dayLayerRef.current, { zIndex: 0, autoAlpha: 1 });

    // 夹层: 深色背景 (初始隐藏)
    // 当 Mask 缩小时，我们需要看到这个颜色，而不是底下的白天
    tl.set(darkBgLayerRef.current, { zIndex: 5, autoAlpha: 0 });

    // Layer 2: 黑夜 Mask (初始隐藏，Mask 巨大)
    tl.set(nightMaskLayerRef.current, { 
      zIndex: 10,
      autoAlpha: 0, 
      webkitMaskSize: "300% 300%", // 初始巨大
      maskSize: "300% 300%"
    });

    // Layer 3: Tech Grid (初始隐藏)
    tl.set(techLayerRef.current, { zIndex: 20 });
    tl.set(gridRef.current, { autoAlpha: 0 });

    // 文字状态
    tl.set(text1Ref.current, { autoAlpha: 1, y: 0 });
    tl.set([text2Ref.current, text3Ref.current], { autoAlpha: 0, y: 50 });


    // ==========================================
    // 2. 动画剧本
    // ==========================================

    // --- Phase 0: 准备 ---
    // 文字1 离场
    tl.to(text1Ref.current, { y: -50, autoAlpha: 0, duration: 2 });


    // --- Phase 1: 入场 (Day -> Night) ---
    // 逻辑：Layer 2 (黑夜) 透明度 0 -> 1。
    // 同时让夹层背景也变黑，防止后面 Mask 缩小时漏出白天。
    // 此时 Mask Size 为 300%，视觉上黑夜图覆盖全屏。
    tl.to([darkBgLayerRef.current, nightMaskLayerRef.current], {
      autoAlpha: 1,
      duration: 4,
      ease: "power1.inOut"
    });


    // --- Phase 2: 聚焦 (Night Focus) ---
    // 1. Layer 2 Mask Size: 300% -> 90%
    // 视觉：黑夜可视区域收缩，边缘漏出 darkBgLayerRef (#13140e)
    tl.to(nightMaskLayerRef.current, {
      webkitMaskSize: "90% 90%",
      maskSize: "90% 90%",
      duration: 6,
      ease: "power2.inOut"
    });

    // 2. Layer 3 (Grid) 透明度 0 -> 1 (与 Mask 收缩同时或稍后)
    tl.to(gridRef.current, {
      autoAlpha: 1,
      duration: 6,
      ease: "power2.inOut"
    }, "<"); // "<" 表示与上一动画同时开始

    // (文字2 进场配合聚焦)
    tl.to(text2Ref.current, { y: 0, autoAlpha: 1, duration: 2 }, "-=4");

    
    // --- Phase 3: 停留 (Hold) ---
    tl.to({}, { duration: 4 }); // 这里的空动画是为了增加滚动距离，让用户多看一会儿


    // --- Phase 4: 退场 (Night -> Day) ---
    
    // (文字2 离场)
    tl.to(text2Ref.current, { y: -50, autoAlpha: 0, duration: 2 });

    // 1. Layer 2 Mask Size: 90% -> 300% (原路返回)
    // 视觉：黑夜图重新铺满，盖住边缘深色
    tl.to(nightMaskLayerRef.current, {
      webkitMaskSize: "300% 300%",
      maskSize: "300% 300%",
      duration: 5,
      ease: "power2.inOut"
    });

    // 2. Layer 3 (Grid) 透明度 1 -> 0
    tl.to(gridRef.current, {
      autoAlpha: 0,
      duration: 4
    }, "<");

    // 3. Layer 2 (黑夜) & 夹层背景 透明度 1 -> 0
    // 视觉：黑夜淡出，回到 Layer 1 的白天
    tl.to([darkBgLayerRef.current, nightMaskLayerRef.current], {
      autoAlpha: 0,
      duration: 4,
      ease: "power1.inOut"
    });

    // (文字3 进场)
    tl.to(text3Ref.current, { y: 0, autoAlpha: 1, duration: 2 }, "-=2");

    // 结尾缓冲
    tl.to({}, { duration: 2 });

  }, { scope: container });
return (
  <ReactLenis root>
    {/* 这里的 h-[450vh] 决定了动画的总滚动长度 */}
    <div ref={container} className="home-hero relative h-[450vh] bg-[#13140e]">
      <div ref={wrapperRef} className="sticky-wrapper sticky top-0 h-screen w-full overflow-hidden flex justify-center items-center">
        
        {/* === LAYER 1 (Z=0): 白天 (常驻) === */}
        <div ref={dayLayerRef} className="absolute inset-0 w-full h-full">
           {/* 【修改 1】白天图路径 */}
           <img src={`${BASE_PATH}/hero-day.png`} alt="Day" className="w-full h-full object-cover" />
        </div>

        {/* === 夹层 (Z=5): 纯色背景 #13140e === */}
        <div ref={darkBgLayerRef} className="absolute inset-0 w-full h-full bg-[#13140e] pointer-events-none"></div>

        {/* === LAYER 2 (Z=10): 黑夜 + Mask === */}
        <div 
          ref={nightMaskLayerRef} 
          className="mask-layer absolute inset-0 w-full h-full pointer-events-none"
          style={{
            // 【修改 2】Mask 路径 (注意这里用了反引号 ` 和 ${BASE_PATH})
            maskImage: `url("${BASE_PATH}/mask.svg")`,
            WebkitMaskImage: `url("${BASE_PATH}/mask.svg")`,
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
          }}
        >
          {/* 1. 黑夜底图 (添加 absolute 确保重叠) */}
          {/* 【修改 3】黑夜图路径 */}
          <img 
            src={`${BASE_PATH}/hero-night.png`} 
            alt="Night" 
            className="absolute inset-0 w-full h-full object-cover z-0" 
          />
          
          {/* 2. Rain 图层 */}
          <div className="absolute inset-0 w-full h-full z-10">
             {/* 【修改 4】Rain 图路径 */}
             {/* 如果你之后想换回“动画版”，记得这里也要加 BASE_PATH */}
             <img 
               src={`${BASE_PATH}/rain.png`} 
               alt="Rain" 
               className="w-full h-full object-cover opacity-60" 
             />
          </div>
        </div>

        {/* === LAYER 3 (Z=20): Grid & Hotspots (不被裁剪) === */}
        <div ref={techLayerRef} className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center">
           <div ref={gridRef} className="relative w-full h-full flex items-center justify-center">
              {/* 【修改 5】Grid 路径 */}
              <img 
                src={`${BASE_PATH}/grid.svg`} 
                className="absolute w-[68%] h-auto object-contain" 
                alt="Grid" 
              />
              {/* 【修改 6】Hotspots 路径 */}
              <img 
                src={`${BASE_PATH}/hotspots.svg`} 
                className="absolute w-[60%] h-auto object-contain pulse-hotspots" 
                alt="Hotspots" 
              />
           </div>
        </div>

        {/* === UI 文字层 (Z=40) === */}
        <div className="slides-container absolute inset-0 z-40 pointer-events-none w-full h-full px-12">
           <div ref={text1Ref} className="absolute top-1/2 right-20 -translate-y-1/2 text-right max-w-lg">
              <h3 className="text-[#ebfc72] text-xl tracking-widest mb-4">THE PROBLEM</h3>
              <p className="text-[#f4f3e8] text-2xl font-light">Daytime view logic...</p>
           </div>
           <div ref={text2Ref} className="absolute top-1/2 left-20 -translate-y-1/2 text-left max-w-lg">
              <h3 className="text-[#ebfc72] text-xl tracking-widest mb-4">ANALYSIS</h3>
              <p className="text-[#f4f3e8] text-2xl font-light">Focusing on the ecosystem data...</p>
           </div>
           <div ref={text3Ref} className="absolute top-1/2 right-20 -translate-y-1/2 text-right max-w-lg">
              <h3 className="text-[#ebfc72] text-xl tracking-widest mb-4">RESTORED</h3>
              <p className="text-[#f4f3e8] text-2xl font-light">Back to the thriving day...</p>
           </div>
        </div>

      </div>
    </div>
  </ReactLenis>
);
}