// ==================== 配置区域 ====================

// 1. 分类配置 (随时可添加新篇章)
const categories = [
  { id: "all", name: "脚本集" },
  { id: "bluerain", name: "Blue Rain" },
  { id: "flower", name: "繁花" },
  { id: "weak", name: "弱者" },
  { id: "extra", name: "番外編" },
];

// 2. 章节数据库 (请在这里录入所有章节信息)
const chapterList = [
  {
    id: "conversation1",
    category: "bluerain",
    title: "001「招かれざる客」",
    subtitle: "Blue Rain",
    dateLabel: "N.F.113/7/16",
  },
  {
    id: "conversation2",
    category: "bluerain",
    title: "002「穏やかな朝」",
    subtitle: "Blue Rain",
    dateLabel: "N.F.113/7/22/07:18",
  },
  {
    id: "conversation3",
    category: "bluerain",
    title: "003「家」",
    subtitle: "Blue Rain",
    dateLabel: "N.F.113/7/22/07:21",
  },
  {
    id: "conversation4",
    category: "bluerain",
    title: "004「大切なこと」",
    subtitle: "Blue Rain",
    dateLabel: "N.F.113/7/22/23:04",
  },
  {
    id: "conversation5",
    category: "bluerain",
    title: "005「何のために戦うか」",
    subtitle: "Blue Rain",
    dateLabel: "N.F.113/7/22/23:14",
  },
  {
    id: "conversation6",
    category: "bluerain",
    title: "006「探求の終点」",
    subtitle: "Blue Rain",
    dateLabel: "N.F.113/7/22/23:24",
  },
  {
    id: "conversation7",
    category: "bluerain",
    title: "007「登場」",
    subtitle: "Blue Rain",
    dateLabel: "N.F.113/7/23/00:41",
  },
  {
    id: "conversation8",
    category: "flower",
    title: "101「追悼式」",
    subtitle: "Flora Part.Ⅰ",
    dateLabel: "N.F.113/8/8/09:00",
  },
  {
    id: "conversation9",
    category: "flower",
    title: "102「探偵ゲーム」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/8/16:00",
  },
  {
    id: "conversation10",
    category: "flower",
    title: "103「暗殺予告」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/8/16:13",
  },
  {
    id: "conversation11",
    category: "flower",
    title: "104「廃墟」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/9/03:20",
  },
  {
    id: "conversation12",
    category: "flower",
    title: "105「第二現場」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/9/17:36",
  },
  {
    id: "conversation13",
    category: "flower",
    title: "106「业师」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/9/18:30",
  },
  {
    id: "conversation14",
    category: "flower",
    title: "201「創傷」",
    subtitle: "Flora Part.Ⅱ",
    dateLabel: "N.F.113/8/10/15:20",
  },
  {
    id: "conversation15",
    category: "flower",
    title: "202「εἰρήνη」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/10/15:25",
  },
  {
    id: "conversation16",
    category: "flower",
    title: "203「第三現場」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/11/07:45",
  },
  {
    id: "conversation17",
    category: "flower",
    title: "204「第四現場」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/11/08:30",
  },
  {
    id: "conversation18",
    category: "flower",
    title: "205「二人目」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/11/09:00",
  },
  {
    id: "conversation19",
    category: "flower",
    title: "206「誘餌」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/14/21:25",
  },
  {
    id: "conversation20",
    category: "flower",
    title: "207「本当の目標」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/15/05:25",
  },
  {
    id: "conversation21",
    category: "flower",
    title: "208「最後通牒」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/15/11:30",
  },
  {
    id: "conversation22",
    category: "flower",
    title: "209「執行人」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/15/12:00",
  },
  {
    id: "conversation23",
    category: "flower",
    title: "301「西区作战」",
    subtitle: "Flora Part.Ⅲ",
    dateLabel: "N.F.113/8/17/14:23",
  },
  {
    id: "conversation24",
    category: "flower",
    title: "302「露の世は露の世ながらさりながら」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/17/14:23",
  },
  {
    id: "conversation25",
    category: "flower",
    title: "303「対決」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/23/07:00",
  },
  {
    id: "conversation26",
    category: "flower",
    title: "304「失った正義」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/23/17:20",
  },
  {
    id: "conversation27",
    category: "flower",
    title: "305「第五現場」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/24/04:35",
  },
  {
    id: "conversation28",
    category: "flower",
    title: "401「残花の復讐」",
    subtitle: "Flora Part.Ⅳ",
    dateLabel: "N.F.113/8/26/02:13",
  },
  {
    id: "conversation29",
    category: "flower",
    title: "402「依頼」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/26",
  },
  {
    id: "conversation30",
    category: "flower",
    title: "403「満開」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/26",
  },
  {
    id: "conversation31",
    category: "flower",
    title: "404「静黙の反逆」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/26",
  },
  {
    id: "conversation32",
    category: "flower",
    title: "405「後日談1」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/26",
  },
  {
    id: "conversation33",
    category: "flower",
    title: "406「後日談2」",
    subtitle: "Flora",
    dateLabel: "N.F.113/9/",
  },
  {
    id: "conversation34",
    category: "weak",
    title: "501「」",
    subtitle: "The Weak",
    dateLabel: "N.F.113/11/",
  },
  {
    id: "side01",
    category: "extra",
    title: "「サボテン」",
    subtitle: "Side Story",
     dateLabel: "N.F.113/11/",
  },

  {
    id: "side02",
    category: "extra",
    title: "「腹黑」",
    subtitle: "Side Story",
     dateLabel: "N.F.113/11/",
  },
  {
    id: "side03",
    category: "extra",
    title: "「母熊と図書室」",
    subtitle: "Side Story",
     dateLabel: "N.F.113/11/",
  },
];

// ==================== 核心逻辑 ====================

let currentChapterIndex = -1;
let currentCategory = "all";
let isMusicPlaying = false;
const bgmPlayer = document.getElementById("bgm-player");

document.addEventListener("DOMContentLoaded", () => {
  initTabs(); // 初始化分类标签
  renderList(); // 初始化列表
  handleHashChange(); // 检查URL

  // 事件监听
  window.addEventListener("hashchange", handleHashChange);

  // 搜索监听
  document.getElementById("chapter-search").addEventListener("input", (e) => {
    renderList(e.target.value);
  });

  // 按钮监听
  document.getElementById('btn-play').addEventListener('click', () => toggleMusic('play'));
    
  // 点击动图(v2) -> 触发暂停
  document.getElementById('btn-pause').addEventListener('click', () => toggleMusic('pause'));
});

// --- 1. 初始化分类标签 ---
function initTabs() {
  const container = document.getElementById("category-tabs");
  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "tab-btn";
    btn.textContent = cat.name;
    btn.dataset.id = cat.id;
    if (cat.id === "all") btn.classList.add("active");

    btn.onclick = () => {
      // 切换 Tab 样式
      document
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // 切换数据
      currentCategory = cat.id;
      // 清空搜索框并重绘列表
      document.getElementById("chapter-search").value = "";
      renderList();
    };
    container.appendChild(btn);
  });
}
// --- 2. 渲染章节列表 (关键：扁平化结构以适配 CSS Grid) ---
function renderList(searchText = "") {
    const listContainer = document.getElementById('chapter-list');
    listContainer.innerHTML = '';

    const filtered = chapterList.filter(item => {
        const matchCategory = currentCategory === 'all' || item.category === currentCategory;
        const matchText = item.title.toLowerCase().includes(searchText.toLowerCase()) ||
                          item.subtitle.toLowerCase().includes(searchText.toLowerCase());
        return matchCategory && matchText;
    });

    filtered.forEach(item => {
        const el = document.createElement('div');
        el.className = 'chapter-item';
        el.dataset.id = item.id;
        
        if (window.location.hash.substring(1) === item.id) {
            el.classList.add('active');
        }

        // 修改点：必须使用这种“扁平”结构，不能有额外的 div 包裹
        // 这样 CSS 里的 grid-column: 1/2 才能生效
        el.innerHTML = `
            <span class="chap-title">${item.title}</span>
            
            <div class="chap-arrow-box">
                <svg class="custom-arrow" viewBox="0 0 12 12">
                    <!-- 身体：从 0.5 到 10，长箭头 -->
                    <line x1="0.5" y1="6" x2="10" y2="6" stroke-linecap="round"></line>
                    <!-- 头部 -->
                    <polyline points="7 3 10 6 7 9" stroke-linecap="round" stroke-linejoin="round"></polyline>
                </svg>
            </div>
            
            <span class="chap-subtitle">${item.subtitle}</span>
            
            <span class="chap-date">${item.dateLabel}</span>
        `;

        el.onclick = () => {
            window.location.hash = item.id;
        };

        listContainer.appendChild(el);
    });
}

// --- 3. 路由处理 ---
function handleHashChange() {
  const hash = window.location.hash.substring(1);
  if (!hash) return; // 无hash不操作

  // 加载章节内容
  loadChapter(hash);

  // 更新列表高亮
  document.querySelectorAll(".chapter-item").forEach((item) => {
    if (item.dataset.id === hash) {
      item.classList.add("active");
      item.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      item.classList.remove("active");
    }
  });

  // 更新当前索引 (用于上一章/下一章)
  currentChapterIndex = chapterList.findIndex((c) => c.id === hash);
  updateNavButtons();
}

// --- 4. 加载 JSON 数据 ---
async function loadChapter(chapterId) {
  const scriptDiv = document.getElementById("script-content");
  
  // Header 状态重置
  const summaryEl = document.getElementById("header-summary");
  if (summaryEl) {
      summaryEl.textContent = "ACCESSING ARCHIVES...";
  }
  
  scriptDiv.innerHTML = '<div class="narration">運命を読み取り中……</div>';

  try {
    const module = await import(`../data/${chapterId}.js`);
    const data = module.default;

    // 设置 BGM
    if (data.meta && data.meta.bgm) {
      playBgm(data.meta.bgm, true); 
    }
    
    // 渲染正文
    renderScript(data.script);
    
    // ============================================
    // 修改点：只传 infoPanel，让它去读 synopsis
    // ============================================
    renderInfo(data.infoPanel); 

    // ============================================
    // 确保 Header 独立读取 meta.summary
    // ============================================
    updateHeaderFromJSON(chapterId, data);

    // 滚回顶部
    const scrollPanel = document.getElementById("script-panel");
    if (scrollPanel) scrollPanel.scrollTop = 0;
    
  } catch (err) {
    console.error(err);
    scriptDiv.innerHTML = `<div class="narration" style="color:#e23b78">无法打开卷宗: ${chapterId}</div>`;
  }
}

// --- 新增：更新顶部 UI 的函数 ---
function updateHeaderFromJSON(chapterId, data) {
  // 修改点：只读取 meta.summary，如果没有则显示默认占位符，不再去读 synopsis
  const jsonSummary = (data.meta && data.meta.summary) 
                      ? data.meta.summary 
                      : "NO SUMMARY DATA"; 

  const elSummary = document.getElementById("header-summary");
  
  if (elSummary) {
      // 简单的淡入效果
      elSummary.style.opacity = 0;
      elSummary.textContent = jsonSummary;
      
      // 50ms 后显示
      setTimeout(() => {
          elSummary.style.transition = "opacity 0.3s";
          elSummary.style.opacity = 1;
      }, 50);
  }
}

// --- 5. 渲染正文 ---
function renderScript(script) {
  const container = document.getElementById("script-content");
  container.innerHTML = "";

  script.forEach((line) => {
    const div = document.createElement("div");

    if (line.type === "narration") {
      div.className = "message-row";
      div.innerHTML = `<div class="narration">${line.text}</div>`;
    } else if (line.type === "image") {
      div.className = "message-row";
      div.innerHTML = `<div class="narration"><img src="${line.src}" class="cg-image"></div>`;
    } else if (line.type === "dialogue") {
      const pos = line.position === "right" ? "pos-right" : "pos-left";
      div.className = `message-row ${pos}`;
      div.innerHTML = `
                <img src="${line.avatar}" class="avatar">
                <div class="message-bubble">${line.text}</div>
            `;
    }
    container.appendChild(div);
  });
}

// --- 6. 渲染右侧信息 ---
function renderInfo(info) {
  // 名词解释
  const glossaryDiv = document.getElementById("glossary-container");
  glossaryDiv.innerHTML = "";
  if (info.glossary) {
    info.glossary.forEach((g) => {
      const item = document.createElement("div");
      item.className = "glossary-item";
      item.innerHTML = `
                <div class="glossary-term" onclick="this.parentElement.classList.toggle('active')">
                    ${g.term} <span>▼</span>
                </div>
                <div class="glossary-desc">${g.desc}</div>
            `;
      glossaryDiv.appendChild(item);
    });
  }

  // 角色
  const charDiv = document.getElementById("characters-container");
  charDiv.innerHTML = "";
  if (info.characters) {
    info.characters.forEach((c) => {
      const card = document.createElement("div");
      card.className = "char-card";
      card.innerHTML = `
                <img src="${c.avatar}">
                <div class="char-info">
                    <strong>${c.name}</strong>
                    <p>${c.note}</p>
                </div>
            `;
      charDiv.appendChild(card);
    });
  }

  // 前情提要
  const synDiv = document.getElementById("synopsis-container");
  // 只渲染文本内容，删除了之前在这里追加 <button> 的代码
  synDiv.innerHTML = info.synopsis || "暂无记录";
}

// --- 辅助功能 ---
function navigate(dir) {
  const newIdx = currentChapterIndex + dir;
  if (newIdx >= 0 && newIdx < chapterList.length) {
    window.location.hash = chapterList[newIdx].id;
  }
}
// --- 修改后的按钮状态更新函数 ---
function updateNavButtons() {
  // 1. 获取新版 HTML 中的悬浮按钮 ID
  const btnPrev = document.getElementById("float-btn-prev");
  const btnNext = document.getElementById("float-btn-next");

  // 2. 加上安全检查，防止找不到元素报错
  if (btnPrev && btnNext) {
      // 3. 根据当前章节索引判断是否禁用
      // 如果是第一章 (index <= 0)，禁用“前”
      btnPrev.disabled = currentChapterIndex <= 0;
      
      // 如果是最后一章 (index >= 总数-1)，禁用“次”
      btnNext.disabled = currentChapterIndex >= chapterList.length - 1;
  }
}
function playBgm(src) {
  if (!bgmPlayer.src.includes(src)) {
    bgmPlayer.src = src;
    if (isMusicPlaying) bgmPlayer.play().catch(() => {});
  }
}
// --- 音乐控制 (新版：图片切换 + 自动播放) ---

// 播放音乐的核心函数
// src: 音乐路径
// forcePlay: 是否强制尝试播放 (用于切章节时自动播放)
function playBgm(src, forcePlay = false) {
  // 如果切歌了，或者不仅没切歌但强制要求播放
  if (!bgmPlayer.src.includes(src)) {
      bgmPlayer.src = src;
  }

  if (forcePlay || isMusicPlaying) {
      // 尝试播放
      const playPromise = bgmPlayer.play();

      if (playPromise !== undefined) {
          playPromise.then(() => {
              // 播放成功：更新状态为播放中
              updateMusicUI(true);
          }).catch(error => {
              // 自动播放被浏览器拦截：更新状态为暂停
              console.log("Auto-play blocked by browser. User interaction needed.");
              updateMusicUI(false);
          });
      }
  }
}

// 切换播放/暂停状态 (绑定到图片点击事件)
function toggleMusic(action) {
  if (action === 'play') {
      bgmPlayer.play();
      updateMusicUI(true);
  } else {
      bgmPlayer.pause();
      updateMusicUI(false);
  }
}

// 更新 UI 图片显示
function updateMusicUI(playing) {
  isMusicPlaying = playing;
  const btnPlay = document.getElementById('btn-play'); // v2c.png
  const btnPause = document.getElementById('btn-pause'); // v2.gif

  if (playing) {
      // 正在播放：隐藏静止图，显示动图
      btnPlay.style.display = 'none';
      btnPause.style.display = 'block';
  } else {
      // 停止/暂停：显示静止图，隐藏动图
      btnPlay.style.display = 'block';
      btnPause.style.display = 'none';
  }
}


// --- 沉浸模式：移除 Header ---
function enableImmersiveMode() {
  const header = document.getElementById("script-header");
  if (header) {
      header.style.display = 'none';
      
      // 由于使用了 Flex 布局，Header 移除后，
      // .script-scroll-area (flex: 1) 会自动向上延伸填满空间。
  }
}



// ==================== 视觉特效 ====================

// --- 打字机效果 (用于左侧 Header) ---
document.addEventListener("DOMContentLoaded", () => {
  initTypewriter();
});

// --- 序列化打字机效果 ---
function initTypewriter() {
  const titleEl = document.querySelector('.main-title');
  const subEl = document.querySelector('.sub-title');
  
  if (!titleEl || !subEl) return;

  // 1. 定义内容
  const titleText = "運命の織機";
  const subText = ">./USER_LOGS.EXE";

  // 2. 清空内容
  titleEl.textContent = "";
  subEl.textContent = "";

  // 3. 通用打字函数 (带光标)
  // element: 目标元素
  // text: 文本
  // speed: 打字速度 [基准, 随机波动]
  // cursorColor: 光标颜色
  // callback: 打完后的回调
  function typeString(element, text, speed, cursorColor, callback) {
      let i = 0;
      // 添加光标
      element.style.borderRight = `3px solid ${cursorColor}`;
      
      function step() {
          if (i < text.length) {
              element.textContent += text.charAt(i);
              i++;
              // 随机延迟
              setTimeout(step, Math.random() * speed[1] + speed[0]);
          } else {
              // 打完了
              element.style.borderRight = "none"; // 移除光标
              if (callback) callback();
          }
      }
      step();
  }

  // 4. 执行序列
  // 第一步：打主标题 (稍慢，庄重一点)
  setTimeout(() => {
      // 使用红色光标打主标题
      typeString(titleEl, titleText, [320, 80], "#e23b78", () => {
          
          // 第二步：主标题打完后，打副标题 (稍快，像机器指令)
          // 使用灰色光标
          typeString(subEl, subText, [120, 30], "#555", () => {
              
              // 全部结束，给副标题留一个闪烁光标作为待机状态
              subEl.style.borderRight = "2px solid #555";
              setInterval(() => {
                   const currentColor = subEl.style.borderRightColor;
                   subEl.style.borderRightColor = (currentColor === 'transparent') ? '#555' : 'transparent';
              }, 500);
          });
          
      });
  }, 200); // 页面加载后延迟 0.5秒开始
}