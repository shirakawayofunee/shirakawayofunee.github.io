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
function changeBanner(num) {
    console.log("Nav click → target index:", num);
    wheelIndex = 0;

    // === 修正索引映射（关键！）===
    let targetIndex = num;
    if (num >= 6) targetIndex = num + 1;   // 跳过第6个导航（map.html），把7映射到实际slide索引

    const targetSection = sections[targetIndex];
    if (!targetSection) {
        console.error(`找不到 sections[${targetIndex}] (原始num=${num})`);
        return;
    }

    // 临时禁用所有 pin（解决 pin 冲突）
    ScrollTrigger.getAll().forEach(st => {
        if (st.vars.pin) st.disable();
    });

    gsap.to(window, {
        duration: 1.0,
        scrollTo: {
            y: targetSection,
            autoKill: true,
            offsetY: 0
        },
        ease: "power2.inOut",
        onComplete: () => {
            ScrollTrigger.getAll().forEach(st => {
                if (st.vars.pin) st.enable();
            });
            activeIndex = targetIndex;   // 用修正后的索引
            console.log("滚动完成，activeIndex =", activeIndex);
        }
    });

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

function changeBannerCssHide(num) {
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
}

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

// ====================== 你 Slide 5 的 backstory Timeline（保留你的实验代码） ======================
const backstoryTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#slide5",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1,
        // markers: true
    }
});

backstoryTl
    .fromTo(".backstory-left", 
        { x: "-50vw", opacity: 0 }, 
        { x: "0", opacity: 1, ease: "power1.out" }
    )
    .fromTo(["#backstoryTitle", "#backstoryStr", ".backstory-right-page"],
        { y: "15vh", opacity: 0 }, 
        { y: "0", opacity: 1, ease: "power1.out", stagger: 0.2 },
        "<"
    )
    .to({}, { duration: 1.5 })           // 安全阅读期
    .to("#slide5 .pc", 
        { scale: 0.8, y: "-15vh", opacity: 0, ease: "power2.inOut" }
    );