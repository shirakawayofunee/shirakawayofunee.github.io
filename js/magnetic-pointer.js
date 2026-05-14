// ==========================================
// 全局通用变量
// ==========================================
var papermaskZoom = 1;
var currentImgList =[]; 
var currentImgIndex = 0; 
var isAnimating = false; 
var hoverTimeout;

// ==========================================
// 辅助与核心功能函数
// ==========================================
function createMediaElement(src) {
    const isVideo = src.toLowerCase().endsWith('.mp4') || src.toLowerCase().endsWith('.webm');
    let el;
    if (isVideo) {
        el = document.createElement("video");
        el.src = src;
        el.autoplay = true;
        el.loop = true;
        el.muted = true; 
        el.playsInline = true;
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

    const container = document.getElementById("imageContainer");
    container.innerHTML = "";

    const mediaEl = createMediaElement(currentImgList[currentImgIndex].src);
    mediaEl.className = "detail-img"; 
    mediaEl.id = "activeDetailImg";

    container.appendChild(mediaEl);

    $(".papermaskDetail").fadeIn(200);
    $(".papermaskDetail").css("display", "flex");
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

    if (direction === 1) {
        nextMedia.classList.add("img-pos-right");
    } else {
        nextMedia.classList.add("img-pos-left");
    }

    container.appendChild(nextMedia);
    nextMedia.offsetWidth; // Force Reflow
    isAnimating = true;

    if (currentMedia) currentMedia.classList.add("img-animating");
    nextMedia.classList.add("img-animating");

    requestAnimationFrame(() => {
        nextMedia.classList.remove("img-pos-right", "img-pos-left");
        if (currentMedia) {
            currentMedia.style.transform = "";
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
        papermaskZoom = 1;
        isAnimating = false;
    }, 1600); 

    currentImgIndex = newIndex;
}

function handleZoomChange(num) {
    if (num == 1) papermaskZoom += 0.2; 
    if (num == -1) papermaskZoom -= 0.2;
    if (num == 0) papermaskZoom = 1;
    if (papermaskZoom > 4) papermaskZoom = 4;
    if (papermaskZoom < 0.5) papermaskZoom = 0.5;

    const activeImg = document.getElementById("activeDetailImg");
    if (activeImg) {
        activeImg.style.transform = `scale(${papermaskZoom})`;
    }
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
    $(".papermaskDetail").fadeOut(200);
    setTimeout(() => {
        document.getElementById("imageContainer").innerHTML = ""; 
    }, 200);
}

// ==========================================
// 数据映射逻辑 (安全重写版)
// ==========================================
function getArrayByName(name) {
    // 采用 typeof 安全检查，避免某网页没有定义特定数组时报错白屏
    switch(name) {
        case "gallery": return (typeof galleryImages !== 'undefined') ? galleryImages :[];
        case "L":       return (typeof LImages !== 'undefined') ? LImages :[];
        case "X":       return (typeof XImages !== 'undefined') ? XImages :[];
        case "dc":      return (typeof dcImages !== 'undefined') ? dcImages :[];
        case "manga":   return (typeof mangaImages !== 'undefined') ? mangaImages :[];
        case "catdw":   return (typeof catdwImages !== 'undefined') ? catdwImages :[];
        case "theme":   return (typeof themeImages !== 'undefined') ? themeImages :[];
        case "r18g":    return (typeof r18gImages !== 'undefined') ? r18gImages :[];
        case "mansion": return (typeof mansionImages !== 'undefined') ? mansionImages :[];
        case "tab1":    return (typeof tab1Images !== 'undefined') ? tab1Images :[];
        case "tab2":    return (typeof tab2Images !== 'undefined') ? tab2Images :[];
        case "doodle":  return (typeof doodleImages !== 'undefined') ? doodleImages : [];
        default:        return[];
    }
}

// ==========================================
// 瀑布流与初始化逻辑
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

        const isVideo = image.src.toLowerCase().endsWith('.mp4') || image.src.toLowerCase().endsWith('.mkv');
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

document.addEventListener('keydown', function (e) {
    if ($(".papermaskDetail").is(":visible")) {
        if (e.key === "ArrowLeft") navigateImage(-1);
        if (e.key === "ArrowRight") navigateImage(1);
        if (e.key === "Escape") paperShowHide();
    }
});

$(document).ready(function () {
    // 尝试加载默认tab的内容。如果有 galleryImages 就加载它，否则加载个空的
    const initialArray = (typeof galleryImages !== 'undefined') ? galleryImages :[];
    arrangeWaterfall("galleryContainer", initialArray);

    $('.nav-link').on('mouseenter', function () {
        var _this = this; 
        hoverTimeout = setTimeout(function () {
            var tabTrigger = new bootstrap.Tab(_this);
            tabTrigger.show();
        }, 250);
    }).on('mouseleave', function () {
        clearTimeout(hoverTimeout);
    });

    $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
        const targetId = $(e.target).attr("href").substring(1);
        const containerId = targetId + "Container";
        const array = getArrayByName(targetId);
        arrangeWaterfall(containerId, array);
    });
});

// ==========================================
// 打字机效果
// ==========================================
(function () {
    const textContent = `二次創作における恋愛的な解釈については、私もすんなり受け入れます。純粋で美しい愛情を描くのも、不健全で歪んだ、さらには暗く湿った感情を表現するのも、どちらもすごく楽しんで鑑賞しています。
ただ、本家の設定においては、SLは恋愛関係ではないが確かにそこに愛があることは間違いないです。
二人は<span class="text-pink1">師</span><span class="text-Purple">弟</span>、<span class="text-pink1">主</span><span class="text-Purple">従</span>、<span class="text-pink1">母</span><span class="text-Purple">娘</span>、<span class="text-pink1">神</span>と<span class="text-Purple">信徒</span>、革命の<span class="text-blue">戦友</span>であり……こうした様々な立場が重なり合って、彼女たちの間に深いかつ複雑な絆を築き上げています。<span class="text-blue">愛</span>って言葉じゃ正確じゃないけど、<span class="text-blue">この絆を表すなら愛しか出てこない。</span>
それに、Lという人は<span class="text-blue">自由</span>すぎてカッコよすぎる。誰とでも一期一会でパッと火花散らせるけど、誰のそばにも長くは留まらない。<span class="text-blue">愛だってLを縛れない。</span>`;

    const typewriterEl = document.getElementById('cmd-typewriter');
    if (!typewriterEl) return; // 安全检查，如果没有这个元素就不执行

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

document.addEventListener('DOMContentLoaded', function () {
    var bgmPlayer = document.getElementById('bgm');
    if(bgmPlayer) {
        document.addEventListener('click', function tryAutoPlay() {
            if (bgmPlayer.paused) {
                muteMusic(2);
            }
            document.removeEventListener('click', tryAutoPlay);
        }, { once: true });
    }
});