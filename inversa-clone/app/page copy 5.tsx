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
  
  // 引用 DOM 元素
  const bgNightRef = useRef<HTMLDivElement>(null); 
  const maskLayerRef = useRef<HTMLDivElement>(null); 
  const gridRef = useRef<HTMLImageElement>(null);
  const hotspotsRef = useRef<HTMLImageElement>(null);
  
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
        scrub: 0.5, // 稍微减小 scrub 值，让反应更灵敏
        pin: wrapperRef.current,
      }
    });

    // === 1. 初始状态设置 (非常重要) ===
    // 强制设置初始状态，防止 CSS 加载延迟导致错位
    tl.set(bgNightRef.current, { autoAlpha: 0 }); // 黑夜层隐藏
    tl.set(text1Ref.current, { autoAlpha: 1 });   // 文字1显示
    tl.set([text2Ref.current, text3Ref.current], { autoAlpha: 0 }); // 其他文字隐藏
    
    // 关键修复：确保 SVG 初始是可见的(opacity 1)，只是被遮罩挡住了
    tl.set([gridRef.current, hotspotsRef.current], { autoAlpha: 1, scale: 1.2 });

    // 关键修复：Mask 初始大小为 0
    tl.set(maskLayerRef.current, { 
      WebkitMaskSize: "0% 0%", // 针对 Chrome/Safari
      maskSize: "0% 0%",       // 标准属性
      autoAlpha: 1             // 确保容器本身不透明
    });

    // === 2. 动画流程 ===

    // --- Step 1: 文字1 消失 ---
    tl.to(text1Ref.current, { y: -50, autoAlpha: 0, duration: 2 });

    // --- Step 2: 进入黑夜 & 遮罩打开 ---
    // 黑夜背景淡入
    tl.to(bgNightRef.current, { autoAlpha: 1, duration: 2 }, "+=0.5");

    // 遮罩扩大 (核心 SVG 显示逻辑)
    tl.to(maskLayerRef.current, {
      WebkitMaskSize: "300% 300%", // 放大到超大，铺满屏幕
      maskSize: "300% 300%",
      duration: 6,
      ease: "power2.inOut"
    }, "<"); // 与黑夜淡入同步

    // 内部 SVG 视差效果 (从放大状态回到正常)
    tl.to([gridRef.current, hotspotsRef.current], {
      scale: 1,
      duration: 6,
      ease: "power2.out"
    }, "<");

    // 文字2 出现
    tl.to(text2Ref.current, { y: 0, autoAlpha: 1, duration: 2 }, "-=2");

    // --- Step 3: 停留 (Hold) ---
    tl.to({}, { duration: 4 });

    // --- Step 4: 退场 ---
    // 文字2 消失
    tl.to(text2Ref.current, { y: -50, autoAlpha: 0, duration: 2 });

    // 遮罩缩小 (原路返回)
    tl.to(maskLayerRef.current, {
      WebkitMaskSize: "0% 0%",
      maskSize: "0% 0%",
      duration: 5,
      ease: "power2.inOut"
    }, "+=0.5");

    // 内部 SVG 稍微缩小淡出 (配合遮罩)
    tl.to([gridRef.current, hotspotsRef.current], {
      scale: 0.8,
      duration: 5
    }, "<");

    // 黑夜背景淡出 (回到白天)
    tl.to(bgNightRef.current, { autoAlpha: 0, duration: 3 }, "-=4");

    // 文字3 出现
    tl.to(text3Ref.current, { y: 0, autoAlpha: 1, duration: 2 }, "-=1");

    // 缓冲
    tl.to({}, { duration: 2 });

  }, { scope: container });

  return (
    <ReactLenis root>
      <div ref={container} className="home-hero relative h-[400vh] bg-black">
        <div ref={wrapperRef} className="sticky-wrapper sticky top-0 h-screen w-full overflow-hidden flex justify-center items-center">
          
          {/* 1. 白天底图 (永远在最底层 z-0) */}
          <img src="/hero-day.png" alt="Day" className="absolute inset-0 w-full h-full object-cover z-0" />

          {/* 2. 黑夜底图 (z-1) */}
          <div ref={bgNightRef} className="absolute inset-0 z-1 bg-black">
             <img src="/hero-night.png" alt="Night" className="w-full h-full object-cover opacity-80" />
          </div>

          {/* 3. 科技遮罩层 (z-10) */}
          {/* 
             Debug技巧：如果您还是看不到SVG，
             试着给下面这个 div 加上 'bg-red-500/50'。
             如果看到红色方块变大，说明 Mask 没生效；
             如果看到红色圆形变大，说明 Mask 生效了但 SVG 没加载。
          */}
          <div ref={maskLayerRef} className="mask-layer absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center pointer-events-none" >
            
            {/* Grid */}
            <img 
              ref={gridRef}
              src="/grid.svg" 
              className="absolute w-[90%] h-auto object-contain" 
              alt="Grid" 
            />
            {/* Hotspots */}
            <img 
              ref={hotspotsRef}
              src="/hotspots.svg" 
              className="absolute w-[90%] h-auto object-contain pulse-hotspots" 
              alt="Hotspots" 
            />
          </div>

          {/* 4. 文字层 (z-20) */}
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