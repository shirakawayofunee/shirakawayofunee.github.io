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
    dateLabel: "N.F.113年7月16日",
  },
  {
    id: "conversation2",
    category: "bluerain",
    title: "002「穏やかな朝」",
    subtitle: "Blue Rain",
    dateLabel: "N.F.113年7月23日 08:05",
  },
  {
    id: "conversation3",
    category: "bluerain",
    title: "003「家」",
    subtitle: "Blue Rain",
    dateLabel: "N.F.113年7月23日 08:15",
  },
  {
    id: "conversation4",
    category: "bluerain",
    title: "004「異変」",
    subtitle: "Blue Rain",
    dateLabel: "N.F.113年7月23日 23:04",
  },
  {
    id: "conversation5",
    category: "bluerain",
    title: "005「何のために戦うか」",
    subtitle: "Blue Rain",
    dateLabel: "N.F.113年7月23日 23:14",
  },
  {
    id: "conversation6",
    category: "bluerain",
    title: "006「大切なこと」",
    subtitle: "Blue Rain",
    dateLabel: "N.F.113年7月23日 23:24",
  },
  {
    id: "conversation7",
    category: "bluerain",
    title: "007「登場」",
    subtitle: "Blue Rain",
    dateLabel: "N.F.113年7月24日 00:41",
  },
  {
    id: "conversation8",
    category: "flower",
    title: "101「追悼式」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月8日 9:00",
  },
  {
    id: "conversation9",
    category: "flower",
    title: "102「探偵ゲーム」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月8日 16:00",
  },
  {
    id: "conversation10",
    category: "flower",
    title: "103「暗殺予告」",
    subtitle: "Flowers",
    dateLabel: "",
  },
  {
    id: "conversation11",
    category: "flower",
    title: "104「廃墟」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月9日 3:20",
  },
  {
    id: "conversation12",
    category: "flower",
    title: "105「第二現場」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月9日 17:36",
  },
  {
    id: "conversation13",
    category: "flower",
    title: "106「业师」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月9日 18:30",
  },
  {
    id: "conversation14",
    category: "flower",
    title: "201「創傷」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月10日 15:20",
  },
  {
    id: "conversation15",
    category: "flower",
    title: "202「εἰρήνη」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月10日 15:25",
  },
  {
    id: "conversation16",
    category: "flower",
    title: "203「第三現場」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月11日 7:45",
  },
  {
    id: "conversation17",
    category: "flower",
    title: "204「第四現場」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月11日 8:30",
  },
  {
    id: "conversation18",
    category: "flower",
    title: "205「二人目」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月11日 9:00",
  },
  {
    id: "conversation19",
    category: "flower",
    title: "206「誘餌」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月14日 21:25",
  },
  {
    id: "conversation20",
    category: "flower",
    title: "207「本当の目標」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月15日 5:25",
  },
  {
    id: "conversation21",
    category: "flower",
    title: "208「最後通牒」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月15日 11:32",
  },
  {
    id: "conversation22",
    category: "flower",
    title: "209「清理人」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月15日",
  },
  {
    id: "conversation23",
    category: "flower",
    title: "301「西区作战」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月17日 14:23",
  },
  {
    id: "conversation24",
    category: "flower",
    title: "302「露の世は露の世ながらさりながら」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月17日 14:23",
  },
  {
    id: "conversation25",
    category: "flower",
    title: "303「対決」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月23日 7:00",
  },
  {
    id: "conversation26",
    category: "flower",
    title: "304「失った正義」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月23日 17:20",
  },
  {
    id: "conversation27",
    category: "flower",
    title: "305「第五現場」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月24日 4:35",
  },
  {
    id: "conversation28",
    category: "flower",
    title: "401「残花の復仇」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月26日 2:13",
  },
  {
    id: "conversation29",
    category: "flower",
    title: "402「依頼」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月26日",
  },
  {
    id: "conversation30",
    category: "flower",
    title: "403「静默の背叛」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月25日",
  },
  {
    id: "conversation31",
    category: "flower",
    title: "404「後日談1」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年8月25日",
  },
  {
    id: "conversation32",
    category: "flower",
    title: "405「後日談2」",
    subtitle: "Flowers",
    dateLabel: "N.F.113年9月",
  },
  {
    id: "conversation33",
    category: "weak",
    title: "501「」",
    subtitle: "弱者",
    dateLabel: "N.F.113年11月",
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
  document
    .getElementById("music-toggle")
    .addEventListener("click", toggleMusic);
  document
    .getElementById("btn-prev")
    .addEventListener("click", () => navigate(-1));
  document
    .getElementById("btn-next")
    .addEventListener("click", () => navigate(1));
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
  scriptDiv.innerHTML = '<div class="narration">運命を読み取り中……</div>';

  try {
    const res = await fetch(`data/${chapterId}.json`);
    if (!res.ok) throw new Error("File not found");
    const data = await res.json();

    // 设置 BGM
    if (data.meta && data.meta.bgm) playBgm(data.meta.bgm);

    // 渲染正文
    renderScript(data.script);
    // 渲染右侧信息
    renderInfo(data.infoPanel);

    // 滚回顶部
    document.getElementById("script-panel").scrollTop = 0;
  } catch (err) {
    console.error(err);
    scriptDiv.innerHTML = `<div class="narration" style="color:#e23b78">无法打开卷宗: ${chapterId}</div>`;
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
  synDiv.innerHTML = info.synopsis || "暂无记录";
  if (info.relatedLink) {
    const btn = document.createElement("button");
    btn.className = "link-btn";
    btn.textContent = `次章${info.relatedLink.text}`;
    btn.onclick = () => (window.location.hash = info.relatedLink.targetId);
    synDiv.appendChild(btn);
  }
}

// --- 辅助功能 ---
function navigate(dir) {
  const newIdx = currentChapterIndex + dir;
  if (newIdx >= 0 && newIdx < chapterList.length) {
    window.location.hash = chapterList[newIdx].id;
  }
}
function updateNavButtons() {
  document.getElementById("btn-prev").disabled = currentChapterIndex <= 0;
  document.getElementById("btn-next").disabled =
    currentChapterIndex >= chapterList.length - 1;
}
function playBgm(src) {
  if (!bgmPlayer.src.includes(src)) {
    bgmPlayer.src = src;
    if (isMusicPlaying) bgmPlayer.play().catch(() => {});
  }
}
function toggleMusic() {
  isMusicPlaying = !isMusicPlaying;
  const btn = document.getElementById("music-toggle");
  if (isMusicPlaying) {
    bgmPlayer.play();
    btn.textContent = "♪ 暂停音乐";
    btn.style.color = "#fff";
  } else {
    bgmPlayer.pause();
    btn.textContent = "♪ 播放音乐";
    btn.style.color = "#d4af37";
  }
}
