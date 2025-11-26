// ==================== 漫画数据源 ====================
const mangaData = {
    1: { title: "「何のために戦うか」", images: ["img/manga/c0/01.jpg","img/manga/c0/02.jpg","img/manga/c0/03.jpg","img/manga/c0/04.jpg",
    "img/manga/c0/05.jpg","img/manga/c0/06.jpg","img/manga/c0/07（落稿）.jpg","img/manga/c0/08（落稿）.jpg"] },
    2: { title: "BAD END③「They can't hurt you anymore.」",         
    images: ["img/manga/c1/01.jpg","img/manga/c1/02.jpg","img/manga/c1/03.jpg"]},
    3: { title: "逆转师生",         images: ["img/manga/c1/01.png","img/manga/c1/02.png","img/manga/c1/03.png","img/manga/c1/04.png","img/manga/c1/05.png"] },
    3: { title: "第三章：对决",         images: ["img/manga/c3/01.jpg","img/manga/c3/02.jpg","img/manga/c3/03.jpg","img/manga/c3/04.jpg"] },
    4: { title: "第四章：回忆",         images: ["img/manga/c0/01.jpg","img/manga/c0/02.jpg"] },
    5: { title: "特别篇：日常",         images: ["img/manga/c0/03.jpg","img/manga/c0/04.jpg"] },
    // 后续章节继续往这里加即可（比如 6,7,8...）
    14: { title: "7/23 白天特别篇",     images: ["img/manga/special/day.jpg"] }   // 示例
};

// ==================== 全局 Swiper 实例 ====================
let mangaSwiper = null;

// ==================== 核心：加载章节（双页 RTL） ====================
function loadMangaChapter(chapterId) {
    const data = mangaData[chapterId];
    if (!data) { console.error("Chapter not found:", chapterId); return; }

    // 更新标题栏
    document.getElementById("headerChapterNum").textContent   = "CHAPTER 0" + chapterId;
    document.getElementById("headerChapterTitle").textContent = data.title;
    document.getElementById("mangaTotal").textContent         = data.images.length;

    const wrapper = document.getElementById("mangaWrapper");
    let slidesHtml = "";

    // 两两分组（双页模式）
    for (let i = 0; i < data.images.length; i += 2) {
        const leftImg  = data.images[i];     // 视觉右边（较小页码）
        const rightImg = data.images[i + 1]; // 视觉左边（较大页码）

        slidesHtml += `<div class="swiper-slide">
            <div class="manga-page-left">
                ${leftImg  ? `<img src="${leftImg}"  class="manga-page-img" data-mouse="mid">` : ''}
            </div>
            <div class="manga-page-right">
                ${rightImg ? `<img src="${rightImg}" class="manga-page-img" data-mouse="mid">` : ''}
            </div>
        </div>`;
    }

    // 销毁旧实例 → 重新渲染 → 初始化新 Swiper
    if (mangaSwiper) mangaSwiper.destroy(true, true);
    wrapper.innerHTML = slidesHtml;

    // 初始化 Swiper
    mangaSwiper = new Swiper(".mangaSwiper", {
        slidesPerView: 1, 
        spaceBetween: 0,
        nested: true,
        allowTouchMove: true,
        
        // --- 新增：翻页特效配置 ---
        speed: 800, // 切换速度，800ms 比较有质感，想快一点改成 400
        effect: "creative", // 启用创意特效
        creativeEffect: {
            limitProgress: 2, // 优化边缘渲染
            // 上一页（翻过去的那一页）的状态
            prev: {
                shadow: true,             // 开启阴影
                translate: ["-20%", 0, -100], // 向左移动20%，Z轴后退100px (产生景深)
                rotate: [0, 0, -2],       // 稍微旋转 -2度，增加纸张被掀起的感觉
                opacity: 0.6,             // 稍微变透明
            },
            // 下一页（即将翻进来的那一页）的状态
            next: {
                shadow: true,             // 开启阴影，产生覆盖感
                translate: ["100%", 0, 0], // 从右侧 100% 处滑入
                zIndex: 1,                // 保证在最上层
            },
        },
        // -------------------------

        navigation: {
            // 保持之前的逻辑
            nextEl: ".manga-btn-prev", 
            prevEl: ".manga-btn-next", 
        },
        on: {
            slideChange: function(swiper) {
                // 保持之前的页码逻辑
                let current = (swiper.activeIndex * 2) + 1;
                let total = data.images.length;
                document.getElementById("mangaCurrent").innerText = current + "-" + Math.min(current+1, total);
            }
        }
    });

    // 首次加载也要显示正确页码
    updatePagination(data.images.length);
}

// 更新页码显示（1-2 / 10）
function updatePagination(totalImages) {
    if (!mangaSwiper) return;
    const base = mangaSwiper.activeIndex * 2 + 1;
    const end  = Math.min(base + 1, totalImages);
    document.getElementById("mangaCurrent").textContent = `${base}${end > base ? '-' + end : ''}`;
}

// ==================== 导航面板开关 ====================
function openMangaNav() {
    document.getElementById('mangaNavPanel').style.display = 'flex';
}

function closeMangaNav(e) {
    // 点击蒙版或关闭按钮才关闭
    if (e.target.id === 'mangaNavPanel' || e.target.classList.contains('manga-nav-close-btn')) {
        document.getElementById('mangaNavPanel').style.display = 'none';
    }
}

// ==================== 时间轴高亮逻辑 ====================
function updateNavHighlight(nodeIndex, type = 'sun') {
    // 1. 重置所有状态
    document.querySelectorAll('.nav-node-item').forEach(el => el.classList.remove('active-day'));
    document.querySelectorAll('.node-part-top, .node-part-bottom').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.node-icon').forEach(img => {
        img.src = img.classList.contains('icon-sun')
            ? 'img/timeline2/icon_sun.png'
            : 'img/timeline2/icon_moon.png';
    });

    // 2. 高亮目标节点
    const targetNode = document.querySelector(`.nav-nodes-container .nav-node-item:nth-child(${nodeIndex})`);
    if (!targetNode) return;

    targetNode.classList.add('active-day');

    const part = type === 'sun' ? targetNode.querySelector('.node-part-top') : targetNode.querySelector('.node-part-bottom');
    const icon = part.querySelector('.node-icon');

    if (part) part.classList.add('active'); // 显示红色箭头+文字
    if (icon) {
        icon.src = type === 'sun'
            ? 'img/timeline2/icon_sun_active.png'
            : 'img/timeline2/icon_moon_active.png';
    }
}

// ==================== 节点点击切换章节（最常用）===================
function switchChapter(chapterId, nodeIndex = null, type = null) {
    closeMangaNav({ target: document.getElementById('mangaNavPanel') }); // 直接关面板
    loadMangaChapter(chapterId);

    // 如果传了 nodeIndex，才更新高亮（旧版单参数调用不需要高亮）
    if (nodeIndex !== null) {
        updateNavHighlight(nodeIndex, type || 'sun');
    }
}

// ==================== 页面初始化 ====================
$(document).ready(function() {
    // 默认：7/23 晚上 → chapterId = 1（你可以改成实际对应章节）
    loadMangaChapter(1);
    updateNavHighlight(5, 'moon'); // 第5个节点（7/23）晚上高亮
});