// ==========================================
// 全局通用变量
// ==========================================
var papermaskZoom = 1;
var translateX = 0;
var translateY = 0;
var isDragging = false;
var startX = 0, startY = 0;

var currentImgList = []; 
var currentImgIndex = 0; 
var isAnimating = false; 
var hoverTimeout;

// ==========================================
// 辅助与核心功能函数
// ==========================================
function createMediaElement(src) {
    const isVideo = src.toLowerCase().endsWith('.mp4') || 
                    src.toLowerCase().endsWith('.webm') || 
                    src.toLowerCase().endsWith('.mkv');
    let el;
    if (isVideo) {
        el = document.createElement("video");
        el.src = src;
        el.autoplay = true;
        el.loop = true;
        el.muted = true; 
        el.playsInline = true;
        el.preload = "metadata";
    } else {
        el = document.createElement("img");
        el.src = src;
    }
    return el;
}

function openDetailModal(imgList, index) {
    currentImgList = imgList;
    currentImgIndex = index;
    papermaskZoom = 1;
    translateX = 0;
    translateY = 0;

    const container = document.getElementById("imageContainer");
    container.innerHTML = "";

    const mediaEl = createMediaElement(currentImgList[currentImgIndex].src);
    mediaEl.className = "detail-img"; 
    mediaEl.id = "activeDetailImg";
    mediaEl.style.cursor = "grab";

    container.appendChild(mediaEl);

    const modal = document.getElementById("customDetailModal");
    if (modal) {
        modal.style.opacity = "0";
        modal.style.display = "flex";
        // 强制回流以触发 CSS Transition 渐变
        modal.offsetHeight; 
        modal.style.transition = "opacity 0.2s ease";
        modal.style.opacity = "1";
    }
}

function navigateImage(direction) {
    if (isAnimating) return;
    if (!currentImgList || currentImgList.length === 0) return;

    let newIndex = currentImgIndex + direction;
    if (newIndex >= currentImgList.length) newIndex = 0;
    if (newIndex < 0) newIndex = currentImgList.length - 1;

    const container = document.getElementById("imageContainer");
    const currentMedia = container.querySelector(".detail-img"); 
    const nextMedia = createMediaElement(currentImgList[newIndex].src);
    nextMedia.className = "detail-img";
    nextMedia.style.cursor = "grab";

    if (direction === 1) {
        nextMedia.classList.add("img-pos-right");
    } else {
        nextMedia.classList.add("img-pos-left");
    }

    container.appendChild(nextMedia);
    nextMedia.offsetWidth; // 触发回流
    isAnimating = true;

    // 导航时重置缩放和位移
    papermaskZoom = 1;
    translateX = 0;
    translateY = 0;

    if (currentMedia) {
        currentMedia.classList.add("img-animating");
        // 清除缩放变换以保证平移动画正常
        currentMedia.style.transform = ""; 
    }
    nextMedia.classList.add("img-animating");

    requestAnimationFrame(() => {
        nextMedia.classList.remove("img-pos-right", "img-pos-left");
        if (currentMedia) {
            if (direction === 1) {
                currentMedia.classList.add("img-pos-left");
            } else {
                currentMedia.classList.add("img-pos-right");
            }
        }
    });

    setTimeout(() => {
        if (currentMedia) currentMedia.remove();
        nextMedia.classList.remove("img-animating");
        nextMedia.id = "activeDetailImg"; 
        isAnimating = false;
    }, 1600); 

    currentImgIndex = newIndex;
}

function updateImageTransform() {
    const activeImg = document.getElementById("activeDetailImg");
    if (activeImg) {
        activeImg.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) scale(${papermaskZoom})`;
    }
}

function handleZoomChange(num) {
    if (num == 1) papermaskZoom += 0.2; 
    if (num == -1) papermaskZoom -= 0.2;
    if (num == 0) {
        papermaskZoom = 1;
        translateX = 0;
        translateY = 0;
    }
    if (papermaskZoom > 4) papermaskZoom = 4;
    if (papermaskZoom < 0.5) papermaskZoom = 0.5;

    updateImageTransform();
}

function handleDownload() {
    if (!currentImgList[currentImgIndex]) return;
    var imgSrc = currentImgList[currentImgIndex].src;
    var a = document.createElement("a");
    a.href = imgSrc;
    a.download = imgSrc.split('/').pop() || 'file'; 
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function paperShowHide() {
    const modal = document.getElementById("customDetailModal");
    if (modal) {
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.style.display = "none";
            const container = document.getElementById("imageContainer");
            if (container) container.innerHTML = ""; 
        }, 200);
    }
}

// ==========================================
// 拖拽与缩放平移交互逻辑
// ==========================================
function initDragAndPan() {
    const container = document.getElementById("imageContainer");
    if (!container) return;

    function startDrag(e) {
        if (papermaskZoom <= 1) return; // 仅在放大状态下允许平移
        const activeImg = document.getElementById("activeDetailImg");
        if (!activeImg) return;

        e.preventDefault();
        isDragging = true;
        
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        startX = clientX - translateX;
        startY = clientY - translateY;
        
        activeImg.style.cursor = 'grabbing';
    }

    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        translateX = clientX - startX;
        translateY = clientY - startY;
        
        updateImageTransform();
    }

    function endDrag() {
        if (!isDragging) return;
        isDragging = false;
        const activeImg = document.getElementById("activeDetailImg");
        if (activeImg) {
            activeImg.style.cursor = 'grab';
        }
    }

    container.addEventListener('mousedown', startDrag);
    container.addEventListener('mousemove', drag);
    window.addEventListener('mouseup', endDrag);

    container.addEventListener('touchstart', startDrag, { passive: false });
    container.addEventListener('touchmove', drag, { passive: false });
    window.addEventListener('touchend', endDrag);
}

// ==========================================
// 瀑布流布局逻辑
// ==========================================
function arrangeWaterfall(containerId, imageArray) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = "";
    
    const width = window.innerWidth;
    const columnCount = width > 576 ? 2 : 1;
    
    const columns = Array(columnCount).fill().map(() => {
        const col = document.createElement("div");
        col.className = "gallery-column";
        container.appendChild(col);
        return col;
    });

    if (!imageArray || imageArray.length === 0) return;

    imageArray.forEach((image, index) => {
        const item = document.createElement("div");
        item.className = "gallery-item";

        const isVideo = image.src.toLowerCase().endsWith('.mp4') || 
                        image.src.toLowerCase().endsWith('.webm') || 
                        image.src.toLowerCase().endsWith('.mkv');
        let mediaEl;
        
        if (isVideo) {
            mediaEl = document.createElement("video");
            mediaEl.src = image.src;
            mediaEl.className = "holder-img"; 
            mediaEl.autoplay = true;
            mediaEl.loop = true;
            mediaEl.muted = true;
            mediaEl.playsInline = true;
            mediaEl.preload = "metadata"; 
        } else {
            mediaEl = document.createElement("img");
            mediaEl.src = image.src;
            mediaEl.alt = image.alt || "";
            mediaEl.className = "holder-img";
        }

        mediaEl.onclick = function () {
            openDetailModal(imageArray, index);
        };

        const caption = document.createElement("div");
        caption.className = "caption";
        caption.textContent = image.description || "";

        item.appendChild(mediaEl);
        item.appendChild(caption);
        columns[index % columnCount].appendChild(item);
    });
}

// ==========================================
// 选项卡切换控制
// ==========================================
function switchTab(tabId) {
    const navLinks = document.querySelectorAll('#galleryTabs .nav-link');
    const tabPanes = document.querySelectorAll('.tab-content .tab-pane');
    
    let activePane = null;

    navLinks.forEach(link => {
        const linkTab = link.getAttribute('href').substring(1);
        if (linkTab === tabId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    tabPanes.forEach(pane => {
        if (pane.id === tabId) {
            pane.classList.add('active');
            pane.offsetHeight; // 强制重绘
            pane.classList.add('show');
            activePane = pane;
        } else {
            pane.classList.remove('show', 'active');
        }
    });

    if (activePane) {
        const containerId = tabId + "Container";
        // 从全局统一数据注册表中获取图片数据
        const array = (window.galleryRegistry && window.galleryRegistry[tabId]) ? window.galleryRegistry[tabId] : [];
        arrangeWaterfall(containerId, array);
    }

    // ==========================================================
    // 【新增】切换选项卡时重置滚动条位置，防止用户直接看到底部
    // ==========================================================
    const pageLayout = document.querySelector('.page-layout');
    if (pageLayout) {
        // 计算顶部导航栏高度 (2.5rem)
        const navbarHeight = parseFloat(getComputedStyle(document.documentElement).fontSize) * 2.5 || 40;
        // 计算 page-layout 距离文档顶部的绝对距离
        const targetPosition = pageLayout.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        // 只有当观众已经向下滚动，且滚动位置超过了画廊顶部时，才将其拉回画廊顶部
        if (window.pageYOffset > targetPosition) {
            window.scrollTo({
                top: targetPosition,
                behavior: 'auto' // 使用 'auto' 瞬间重置。比 'smooth' 更加干净利落，避免换页时画面闪烁
            });
        }
    } else {
        // 兜底降级方案：直接回到网页最顶部
        window.scrollTo({ top: 0, behavior: 'auto' });
    }
}

// 检测 URL Hash 自动定位 Tab
function handleHashChange() {
    const hash = window.location.hash.substring(1);
    if (hash && window.galleryRegistry && window.galleryRegistry[hash]) {
        switchTab(hash);
    } else {
        // 默认载入第一个 Tab
        switchTab('gallery');
    }
}

// ==========================================
// 初始化与事件监听
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    // 1. 初始化选项卡切换和瀑布流
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    // 2. 绑定 Tab 点击和 hover 自动切换逻辑
    const navLinks = document.querySelectorAll('#galleryTabs .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const tabId = this.getAttribute('href').substring(1);
            history.pushState(null, null, '#' + tabId);
            switchTab(tabId);
        });

        link.addEventListener('mouseenter', function () {
            const tabId = this.getAttribute('href').substring(1);
            hoverTimeout = setTimeout(function () {
                history.pushState(null, null, '#' + tabId);
                switchTab(tabId);
            }, 250);
        });

        link.addEventListener('mouseleave', function () {
            clearTimeout(hoverTimeout);
        });
    });

    // 3. 窗口尺寸调整重新计算瀑布流 (防抖处理)
    let resizeTimeout;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {
            const activeLink = document.querySelector('#galleryTabs .nav-link.active');
            if (activeLink) {
                const tabId = activeLink.getAttribute('href').substring(1);
                const containerId = tabId + "Container";
                const array = (window.galleryRegistry && window.galleryRegistry[tabId]) ? window.galleryRegistry[tabId] : [];
                arrangeWaterfall(containerId, array);
            }
        }, 150);
    });

    // 4. 键盘导航支持
    document.addEventListener('keydown', function (e) {
        const modal = document.getElementById("customDetailModal");
        if (modal && modal.style.display === "flex") {
            if (e.key === "ArrowLeft") navigateImage(-1);
            if (e.key === "ArrowRight") navigateImage(1);
            if (e.key === "Escape") paperShowHide();
        }
    });

    // 5. 初始化图片缩放后的拖拽/手势交互
    initDragAndPan();

    // 6. BGM 自动播放激活逻辑
    var bgmPlayer = document.getElementById('bgm');
    if (bgmPlayer) {
        bgmPlayer.volume = 0.6; 
        document.addEventListener('click', function tryAutoPlay() {
            if (bgmPlayer.paused) {
                muteMusic(2);
            }
            document.removeEventListener('click', tryAutoPlay);
        }, { once: true });
    }
});

// ==========================================
// 打字机效果 (使用原生 IntersectionObserver 激活)
// ==========================================
(function () {
    const textContent = `二次創作における恋愛的な解釈については、私もすんなり受け入れます。純粋で美しい愛情を描くのも、不健全で歪んだ、さらには暗く湿った感情を表現するのも、どちらもすごく楽しんで鑑賞しています。
ただ、本家の設定においては、SLは恋愛関係ではないが確かにそこに愛があることは間違いないです。
二人は<span class="text-pink1">師</span><span class="text-Purple">弟</span>、<span class="text-pink1">主</span><span class="text-Purple">従</span>、<span class="text-pink1">母</span><span class="text-Purple">娘</span>、<span class="text-pink1">神</span>と<span class="text-Purple">信徒</span>、革命の<span class="text-blue">戦友</span>であり……こうした様々な立場が重なり合って、彼女たちの間に深いかつ複雑な絆を築き上げています。<span class="text-blue">愛</span>って言葉じゃ正確じゃないけど、<span class="text-blue">この絆を表すなら愛しか出てこない。</span>
それに、Lという人は<span class="text-blue">自由</span>すぎてカッコよすぎる。誰とでも一期一会でパッと火花散らせるけど、誰のそばにも長くは留まらない。<span class="text-blue">愛だってLを縛れない。</span>`;

    const typewriterEl = document.getElementById('cmd-typewriter');
    if (!typewriterEl) return;

    let charIndex = 0;
    let isTyping = false;
    let currentHTML = '';

    function type() {
        if (charIndex < textContent.length) {
            const char = textContent.charAt(charIndex);
            if (char === '<') {
                const closingIndex = textContent.indexOf('>', charIndex);
                if (closingIndex !== -1) {
                    const htmlTag = textContent.substring(charIndex, closingIndex + 1);
                    currentHTML += htmlTag;
                    typewriterEl.innerHTML = currentHTML;
                    charIndex = closingIndex + 1;
                    type(); 
                    return;
                }
            }

            currentHTML += char;
            typewriterEl.innerHTML = currentHTML;
            charIndex++;

            let delay = Math.random() * 30 + 10;
            const prevChar = textContent.charAt(charIndex - 1);
            if (prevChar === '。' || prevChar === '、') {
                delay += 100;
            }
            setTimeout(type, delay);
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !isTyping) {
                isTyping = true;
                typewriterEl.innerHTML = '';
                currentHTML = '';
                type();
            }
        });
    }, { threshold: 0.1 });

    const wrapper = document.getElementById('terminal-wrapper');
    if (wrapper) {
        observer.observe(wrapper);
    }
})();

// ==========================================
// BGM 控制逻辑
// ==========================================
function muteMusic(num) {
    var bgmPlayer = document.getElementById('bgm');
    var playButtons = document.querySelectorAll('.imgMusicPlay'); 
    var stopButtons = document.querySelectorAll('.imgMusicStop'); 

    if (!bgmPlayer) return;

    if (num === 1) {
        bgmPlayer.pause();
        playButtons.forEach(btn => btn.style.display = 'none');
        stopButtons.forEach(btn => btn.style.display = 'block');
    } else if (num === 2) {
        var playPromise = bgmPlayer.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                bgmPlayer.muted = false;
                playButtons.forEach(btn => btn.style.display = 'block');
                stopButtons.forEach(btn => btn.style.display = 'none');
            }).catch(error => {
                console.error('自动播放被阻止，等待用户交互:', error);
            });
        }
    }
}