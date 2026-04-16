/*
 * @Author: DCBZ
 * @Date: 2025-02-25 08:45:50
 * @LastEditors: your name
 * @LastEditTime: 2026-04-17 01:19:22
 * @Description: 
 * @FilePath: \shirakawayofunee.github.io\home26\js\banner.js
 */
// 1. 注册 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

// 全局状态变量（平替你的 bannerIndex）
let activeIndex = 0; 

// ==========================================
// 模块 A：全局状态管理器 (平替 slideChange)
// ==========================================
const sections = document.querySelectorAll('.gsap-section');

sections.forEach((section, index) => {
    // 为每一个屏创建一个独立的触发器
    ScrollTrigger.create({
        trigger: section,
        // 当这个 section 的顶部到达屏幕中线，或者底部回退到中线时触发
        start: "top center", 
        end: "bottom center",
        onEnter: () => handleSectionChange(index),
        onEnterBack: () => handleSectionChange(index)
    });
});

// 你原有的那些变更导航、控制音乐的逻辑，移到这里
function handleSectionChange(index) {
    if (activeIndex === index) return;
    activeIndex = index;
    console.log("当前所在模块索引:", activeIndex);
    
    // 触发你老代码里的逻辑 (你可以逐步把这些函数补充回来)
    // changeBanner(activeIndex);
    // changeBannerCssHide(activeIndex);
    // changeBannerCss(activeIndex);
    // muteMusic(2);
}

// ==========================================
// 模块 B：实验对象 Slide 5 的视差动画
// ==========================================

// 创建专属于 Slide5 的时间轴
// 1. 注册插件
gsap.registerPlugin(ScrollTrigger);

// 2. 创建专属于 Slide5 的“滚动时间轴”
const backstoryTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#slide5",       // 触发元素：你的第五屏
        start: "top top",         // 触发时机：当 slide5 的顶部接触到屏幕顶部
        end: "+=150%",            // 动画行程：用户继续往下滚 1.5 倍屏幕的高度期间，播放这段动画
        pin: true,                // 🌟核心魔法：锁死屏幕！直到动画播完，页面才允许继续往下滚
        scrub: 1,                 // 🌟核心魔法：跟随滚轮！1代表有1秒的高级平滑缓冲阻尼
        // markers: true          // 【强烈建议开启测试】屏幕右侧会出现辅助线，方便你直观理解
    }
});

// ==========================================
// 阶段一：入场动画 (向下滚动到达 slide5 时)
// ==========================================

// 左边区域从左侧推进
backstoryTl.fromTo(".backstory-left", 
    { x: "-50vw", opacity: 0 }, 
    { x: "0", opacity: 1, ease: "power1.out", duration: 1 }
)
// 右边的标题、文本、分页器，从下方依次错落浮现入场
.fromTo(["#backstoryTitle", "#backstoryStr", ".backstory-right-page"],
    { y: "15vh", opacity: 0 }, 
    { y: "0", opacity: 1, ease: "power1.out", duration: 1, stagger: 0.2 },
    "<" // "<" 代表与上一个动画（左侧推进）同时开始
)

// ==========================================
// 阶段二：安全阅读期
// ==========================================
// 塞入一个空的动画。作用是：用户在这段滚动距离内，页面完全静止。
// 这样用户就可以安心去用鼠标滑动你的右侧文本框（overflow-y: auto），或者点你的轮播图。
.to({}, { duration: 1.5 }) 

// ==========================================
// 阶段三：退场动画 (继续狠狠往下滚时)
// ==========================================
// 把外层那个包裹 div 整体缩小、向上推走并变暗
.to("#slide5 .pc", 
    { scale: 0.8, y: "-15vh", opacity: 0, ease: "power2.inOut", duration: 1 }
);