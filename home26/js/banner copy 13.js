// ==================== 移植后的 banner.js ====================
// 去掉 Swiper，全面使用 GSAP ScrollTrigger

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);   // ← 必须加 ScrollToPlugin

// 全局状态（平替 bannerIndex）
let activeIndex = 0;
let wheelIndex = false;   // 保留你原来的标记

const sections = document.querySelectorAll('.gsap-slide');

// ====================== 全局切换逻辑（平替 slideChange） ======================
sections.forEach((section, index) => {
    ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => handleSectionChange(index),
        onEnterBack: () => handleSectionChange(index),
        // markers: true   // 测试时打开，调试完记得关
    });
});

function handleSectionChange(index) {
    if (activeIndex === index) return;

    // 防止从第2屏直接跳到0屏的异常（保留你原来的保护逻辑）
    if (activeIndex === 2 && index === 0) {
        console.warn("Detected invalid jump from 2 to 0, correcting to 1");
        // 可以在这里加 gsap.to(window, {scrollTo: sections[1], duration: 0.3});
        return;
    }

    activeIndex = index;
    wheelIndex = false;

    console.log("Slide changed to index:", activeIndex);

    // === 移植旧逻辑 ===
    changeBanner(activeIndex);
    changeBannerCssHide(activeIndex);
    muteMusic(2);                    // 你原来的音乐触发
    // changeBannerCss 会放在 transitionEnd 类似的位置，这里用 setTimeout 模拟一下结束时机
    setTimeout(() => {
        changeBannerCss(activeIndex);
    }, 300);
}
// 替换整个 changeBanner 函数为下面这个“修正索引版”
function changeBanner(num, targetSelector) {
  console.log("Nav click → index:", num, "target:", targetSelector);
  wheelIndex = 0;

  // 1. 获取目标元素
  const targetSection = document.querySelector(targetSelector);
  
  if (targetSection) {
      // 2. 滚动前先刷新 ScrollTrigger 确保位置计算准确
      ScrollTrigger.refresh();

      // 3. 执行滚动
      gsap.to(window, {
          duration: 1.2,
          scrollTo: {
              y: targetSection,
              autoKill: false // 禁止用户中途滚动中断动画
          },
          ease: "power3.inOut",
          onStart: () => {
              // 暂时禁用触发器，防止滚动过程中反复触发 handleSectionChange
              ScrollTrigger.getAll().forEach(st => st.disable(false));
          },
          onComplete: () => {
              // 滚动完成，重新启用并刷新
              ScrollTrigger.getAll().forEach(st => st.enable(false));
              ScrollTrigger.refresh(); 
              activeIndex = num; 
          }
      });
  }

    // 文字高亮 + 隐藏弹窗（不变）
    let id = `#banner${num}`;
    $(".div-centerpc .div-head-text").removeClass("div-head-text-active");
    $(".div-centerpc .div-head-text-en").removeClass("div-head-text-en-active");

    $(id).find(".div-head-text").addClass("div-head-text-active");
    $(id).find(".div-head-text-en").addClass("div-head-text-en-active");

    maskType = false;
    $("#newsmask, #videomask, #musicmask, #musicmaskDetail, #papermask, #newsDetail").hide();
}

function changeBannerCss(num) {
    console.log("Applying CSS for slide:", num);

    if (num == 4) {
        $(".gallery-top-1,.gallery-top-2,.gallery-top-3,.gallery-top-4,.gallery-top-5,.gallery-top-6").show();
        cancelAnimationFrame(canvasId);
    }
    if (num == 1) {
        $(".character-left,.character-right,.character-right-right").show();
        characterStorage();
        if (typeof swipreCharacter !== "undefined" && swipreCharacter) {
            swipreCharacter.destroy(true, true);
        }
        showCharacter();
        refreshCharacterSwiper();
        cancelAnimationFrame(canvasId);
    }
    if (num == 2) {
        video.play();
        $(".character").css({
            "background": `url("./img/BG.png") no-repeat bottom`,
            "background-size": "cover"
        });
        $(".backstory-left,.backstory-right").show();
        cancelAnimationFrame(canvasId);
    }
    if (num == 3) {
        $(".backstory-left,.backstory-right").show();
        cancelAnimationFrame(canvasId);
    }
    if (num == 4) {
        $(".timeline-left").show().addClass("animate__animated animate__fadeInLeft");
        $(".timeline-right").show().addClass("animate__animated animate__fadeInUp");
        cancelAnimationFrame(canvasId);
    }
    if (num == 0) {
        cancelAnimationFrame(canvasId);
    }
}

/* function changeBannerCssHide(num) {
    console.log("Hiding elements for slide:", num);

    if (num == 1) {
        $(".news-left,.news-right-head-img,.news-right-head-bg,.news-right-con,.news-right-foot").hide();
    }
    if (num == 2) {
        $(".character-left,.character-right,.character-right-right").hide();
    }
    if (num == 3) {
        $(".backstory-left,.backstory-right").hide();
    }
    if (num == 4) {
        $(".gallery-top-1,.gallery-top-2,.gallery-top-3,.gallery-top-4,.gallery-top-5,.gallery-top-6").hide();
    }
} */

// ====================== Slide 4 的特殊滚轮处理（statement） ======================
document.onmousewheel = scrollFunc;
document.onwheel = scrollFunc;

function scrollFunc(e) {
    e = e || window.event;
    if (activeIndex == 4) {          // 用 activeIndex 代替 bannerIndex
        wheelIndex = true;
        const delta = e.wheelDelta || -e.detail;
        if (delta > 100) {
            changeStatement(false);  // 向上
        } else if (delta < -100) {
            changeStatement(true);   // 向下
        }
    }
}

function changeStatement(type) {
    if (type) {  // 显示 statement
        // swiperAll.disable() → 在 GSAP 中我们用 ScrollTrigger 的 pause 或直接控制
        $(".statement").show();
        gsap.to("#allSwiper, .statement", {   // 把 #allSwiper 换成你实际的容器 id/class
            y: "-22.25rem",
            duration: 0.3,
            ease: "power1.out"
        });
        gsap.to(".statement", {
            y: "-23.8rem",
            duration: 0.3,
            ease: "power1.out"
        });
    } else {     // 隐藏 statement
        gsap.to("#allSwiper, .statement", {
            y: "0",
            duration: 0.3,
            ease: "power1.out",
            onComplete: () => {
                // 恢复滚动（如果需要）
            }
        });
    }
}

// ====================== 初始化 ======================
changeBanner(0);

// 如果你还有 enableAutoPlayOnSlideChange 这个函数，请确保它在 handleSectionChange 里被调用
// enableAutoPlayOnSlideChange();   // 如果需要全局绑定音乐自动播放

// ==================== Slide 5 平移就位逻辑 ====================


// ==================== Slide 5 变暗 + 往上推逻辑 ====================

// 1. 遮罩透明度动画：从 0 缓慢增加到 0.5
gsap.to(".backstory-mask", {
  opacity: 0.5,      // 最终达到 50% 的透明度
  ease: "none",     // 线性变化，让透明度严格跟随手指/滚轮的距离
  scrollTrigger: {
      trigger: "#slide6",
      start: "top 100%", // 当 slide6 的头刚出现在屏幕底部时，遮罩开始从 0 出现
      end: "top 20%",   // 当 slide6 盖住 80% 屏幕时，遮罩达到 0.5 的最大值
      scrub: true       // 关键：动画过程被“揉”进滚动里，不是瞬间完成
  }
});

// 2. 物理位移：内容被往上顶的效果
gsap.to("#slide5 .pc", {
  y: "-30vh",       // 向上位移，数值越大，“被推”的感觉越明显
  ease: "power1.inOut", 
  scrollTrigger: {
      trigger: "#slide6",
      start: "top 100%", 
      end: "top 0%",    
      scrub: true
  }
});

// ==================== 1. 入场平移动画 (跟随滚动) ====================
// 当 slide5 露头 10% 开始，到完全占满屏幕时结束
// 1. 入场平移 (slide5 露头 10% 开始，到全屏结束)
gsap.fromTo([".backstory-left", ".backstory-right"],
    { x: "-30vw" }, 
    { x: "0", ease: "none", 
      scrollTrigger: {
          trigger: "#slide5",
          start: "top 90%",
          end: "top 0%",
          scrub: true
      }
    }
);

/* gsap.fromTo(["#backstoryTitle", "#backstoryStr", ".backstory-right-page"],
    { y: "15vh" }, 
    { y: "0", ease: "none", stagger: 0.05, 
      scrollTrigger: {
          trigger: "#slide5",
          start: "top 90%",
          end: "top 0%",
          scrub: true
      }
    }
); */

// 2. 钉住并制造“推走”效果
// 我们用一个 Timeline 来处理 slide5 占满屏幕后的动作
const pushTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#slide5",
        start: "top top",
        end: "+=100%", // 这里决定了 slide5 停留在原地多久
        pin: true,
        scrub: true,
        pinSpacing: false // 允许 slide6 叠上来
    }
});

// 3. 核心：当 slide6 向上推时，slide5 的内容和遮罩同步变化
pushTl.to(".backstory-mask", {
    opacity: 1, // 幕布降临（变暗）
    ease: "none"
}, 0); // 0 表示从 timeline 开始就触发

// 为了制造“缓缓往上推”的感觉，我们让内容在 slide6 进场时也向上移动
gsap.to("#slide5 .pc", {
  scale: 0.85,             // 微微后退缩小
    y: "-50vh", // 往上推一段距离，产生位移错觉
    ease: "none",
    scrollTrigger: {
        trigger: "#slide6",
        start: "top 100%", // slide6 的顶部一出现在屏幕底部
        end: "top 0%",    // 到 slide6 完全盖住全屏
        scrub: true
    }
});

// 同步让遮罩的深浅也随 slide6 的距离变化
gsap.to(".backstory-mask", {
    opacity: 1,
    scrollTrigger: {
        trigger: "#slide6",
        start: "top 100%",
        end: "top 20%",
        scrub: true
    }
});