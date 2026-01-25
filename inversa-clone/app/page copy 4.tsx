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
  const bgNightRef = useRef<HTMLDivElement>(null); // 黑夜背景层
  const maskLayerRef = useRef<HTMLDivElement>(null); // 遮罩容器
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
        scrub: 1, // 增加数值会让动画更平滑（但也更有延迟感）
        pin: wrapperRef.current,
        // markers: true,
      }
    });

    // === 初始状态 ===
    // 确保黑夜层透明，遮罩关闭
    tl.set(bgNightRef.current, { autoAlpha: 0 });
    tl.set(maskLayerRef.current, { 
      webkitMaskSize: "0% 0%", 
      maskSize: "0% 0%" 
    });
    // 初始文字可见
    tl.set(text1Ref.current, { autoAlpha: 1 });

    // ==========================================
    // 阶段 1: 探索开始 (0% - 30%)
    // 动作：文字1 上滑消失
    // ==========================================
    tl.to(text1Ref.current, { 
      y: -50, 
      autoAlpha: 0, 
      duration: 2,
      ease: "power2.in" 
    });

    // ==========================================
    // 阶段 2: 科技层/黑夜 入场 (30% - 50%)
    // 动作：背景变暗 -> 遮罩变大(入场) -> 文字2浮现
    // ==========================================
    
    // 1. 切换到黑夜背景 (淡入)
    tl.to(bgNightRef.current, { autoAlpha: 1, duration: 2 }, "+=0.5");

    // 2. 遮罩层打开 (从 0% -> 300%)
    // 这里的 maskLayer 包含了 grid 和 hotspots
    tl.to(maskLayerRef.current, {
      webkitMaskSize: "300% 300%",
      maskSize: "300% 300%",
      duration: 6, // 慢一点，营造扫描感
      ease: "power2.inOut"
    }, "<"); // 和背景变暗同时开始

    // 3. Grid 和 Hotspots 的视差入场 (稍微放大)
    tl.fromTo([gridRef.current, hotspotsRef.current], 
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 6, ease: "power2.out" },
      "<"
    );

    // 4. 文字2 (Tech) 浮现
    tl.fromTo(text2Ref.current,
      { y: 50, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 2 },
      "-=2" // 遮罩快开完时出现
    );

    // ==========================================
    // 阶段 3: 停留展示 (50% - 60%)
    // 此时屏幕是黑夜 + 满屏网格 + 闪烁的红点 + 文字2
    // ==========================================
    tl.to({}, { duration: 3 }); // 空时间轴占位，让用户看一会

    // ==========================================
    // 阶段 4: 科技层 退场 & 恢复 (60% - 100%)
    // 动作：文字2消失 -> 遮罩缩小(退场) -> 背景变回白天 -> 文字3浮现
    // ==========================================

    // 1. 文字2 消失
    tl.to(text2Ref.current, { y: -50, autoAlpha: 0, duration: 2 });

    // 2. 遮罩层收缩 (原路返回：300% -> 0%)
    tl.to(maskLayerRef.current, {
      webkitMaskSize: "0% 0%",
      maskSize: "0% 0%",
      duration: 5,
      ease: "power2.inOut"
    }, "+=0.5");

    // 3. Grid/Hotspots 随遮罩缩小/淡出
    tl.to([gridRef.current, hotspotsRef.current], {
      scale: 0.8, // 稍微缩小，制造退场纵深
      opacity: 0,
      duration: 5
    }, "<");

    // 4. 黑夜背景淡出 (变回白天)
    tl.to(bgNightRef.current, { 
      autoAlpha: 0, 
      duration: 3 
    }, "-=4"); // 在遮罩收缩过程中就开始变亮，为了自然过渡

    // 5. 文字3 (Restoration) 浮现
    tl.fromTo(text3Ref.current,
      { y: 50, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 2 },
      "-=1"
    );

    // 结尾缓冲
    tl.to({}, { duration: 2 });

  }, { scope: container });

  return (
    <ReactLenis root>
      {/* 这里的 h-[400vh] 控制整个动画流程的长度 */}
      <div ref={container} className="home-hero relative h-[400vh] bg-black">
        
        {/* === 粘性视口 (视觉窗口) === */}
        <div ref={wrapperRef} className="sticky-wrapper sticky top-0 h-screen w-full overflow-hidden flex justify-center items-center">
          
          {/* --- 1. 背景层 (Static Images) --- */}
          {/* Day Image (Base Layer) - 始终存在 */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/hero-day.png" // 您的白天图
              alt="Day Background" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Night Image (Overlay Layer) - 由 GSAP 控制透明度 */}
          <div ref={bgNightRef} className="absolute inset-0 z-1 opacity-0 bg-black">
             <img 
              src="/hero-night.png" // 您的黑夜图
              alt="Night Background" 
              className="w-full h-full object-cover opacity-80" // opacity-80 让黑色背景透一点出来，更暗沉
            />
          </div>

          {/* --- 2. 科技遮罩层 (Mask Layer) --- */}
          {/* 这一层包含了 Grid 和 Hotspots，被 mask.svg 裁剪 */}
          <div ref={maskLayerRef} className="mask-layer absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            
            {/* Grid SVG - 随遮罩显示 */}
            <img 
              ref={gridRef}
              src="/grid.svg" 
              className="grid-svg absolute w-[90%] h-auto object-contain opacity-0" 
              alt="Grid System" 
            />

            {/* Hotspots SVG - 随遮罩显示 + 自身呼吸动效 */}
            <img 
              ref={hotspotsRef}
              src="/hotspots.svg" 
              className="hotspots-svg absolute w-[90%] h-auto object-contain opacity-0 pulse-hotspots" 
              alt="GPS Hotspots" 
            />
            
          </div>

          {/* --- 3. 文字层 (UI) --- */}
          <div className="slides-container absolute inset-0 z-20 pointer-events-none w-full h-full px-8 md:px-24">
            
            {/* Slide 1: Damaged */}
            <div ref={text1Ref} className="absolute top-1/2 right-10 md:right-32 -translate-y-1/2 max-w-lg text-right">
              <h3 className="text-[#ebfc72] text-xl tracking-widest mb-4 uppercase">Damaged Ecosystems</h3>
              <p className="text-[#f4f3e8] text-xl md:text-2xl font-light leading-relaxed">
                Invasive species degrade ecosystems by overwhelming native wildlife and systems that drive costly ecological and economic decline.
              </p>
            </div>

            {/* Slide 2: Tech (配合黑夜模式) */}
            <div ref={text2Ref} className="absolute top-1/2 left-10 md:left-32 -translate-y-1/2 max-w-lg text-left opacity-0">
              <h3 className="text-[#ebfc72] text-xl tracking-widest mb-4 uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-[#f1664d] rounded-full animate-ping"></span> {/* 红色呼吸灯装饰 */}
                One Click Invasive Management
              </h3>
              <p className="text-[#f4f3e8] text-xl md:text-2xl font-light leading-relaxed">
                Origin, Inversa's digital command center, deploys field specialists and management tools, targeting priority zones with precision.
              </p>
            </div>

            {/* Slide 3: Restoration (回到白天) */}
            <div ref={text3Ref} className="absolute top-1/2 right-10 md:right-32 -translate-y-1/2 max-w-lg text-right opacity-0">
              <h3 className="text-[#ebfc72] text-xl tracking-widest mb-4 uppercase">Restoration</h3>
              <p className="text-[#f4f3e8] text-xl md:text-2xl font-light leading-relaxed">
                With invasives controlled, habitats rebound. Wildlife thrives, lands regenerate, and communities gain lasting ecological resilience.
              </p>
            </div>

          </div>

          {/* 固定装饰 (Logo/Menu) */}
          <div className="absolute top-0 left-0 w-full p-8 flex justify-between z-50 text-white mix-blend-difference">
            <div className="font-bold tracking-widest">INVERSA</div>
            <div className="uppercase text-sm tracking-widest">Menu</div>
          </div>

        </div>
      </div>
    </ReactLenis>
  );
}