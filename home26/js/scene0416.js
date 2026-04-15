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
    title: "106「業師」",
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
    title: "301「西区作戦」",
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
    title: "402「依頼·満開」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/26",
  },
  {
    id: "conversation30",
    category: "flower",
    title: "403「静黙の反逆」",
    subtitle: "Flora",
    dateLabel: "N.F.113/8/26",
  },
  {
    id: "conversation31",
    category: "flower",
    title: "404「終わりに」",
    subtitle: "Flora",
    dateLabel: "N.F.113.8.26",
  },
  {
    id: "conversation32",
    category: "flower",
    title: "405「後日談」",
    subtitle: "Flora",
    dateLabel: "N.F.113.9",
  },
  {
    id: "conversation33",
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
     dateLabel: "N.F.114/？/？",
  },

  {
    id: "side02",
    category: "extra",
    title: "「腹黑」",
    subtitle: "Side Story",
     dateLabel: "N.F.114/？/？",
  },
  {
    id: "side03",
    category: "extra",
    title: "「母熊と図書室」",
    subtitle: "Side Story",
     dateLabel: "N.F.114/？/？",
  },
];

// ==================== 核心逻辑 ====================
let currentChapterIndex = -1;
let currentCategory = "all";
let isMusicPlaying = false;
let bgmObserver = null;       
let lastTriggeredBgm = "";    
const bgmPlayer = document.getElementById("bgm-player");
bgmPlayer.volume = 0.4;

document.addEventListener("DOMContentLoaded", () => {
  initTabs(); 
  renderList(); 
  handleHashChange(); 

  window.addEventListener("hashchange", handleHashChange);

  document.getElementById("chapter-search").addEventListener("input", (e) => {
    renderList(e.target.value);
  });

  document.getElementById('btn-play').addEventListener('click', () => toggleMusic('play'));
  document.getElementById('btn-pause').addEventListener('click', () => toggleMusic('pause'));

  setupAudioUnlock();
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
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      currentCategory = cat.id;
      document.getElementById("chapter-search").value = "";
      renderList();
    };
    container.appendChild(btn);
  });
}

// --- 2. 渲染章节列表 ---
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

        el.innerHTML = `
            <span class="chap-title">${item.title}</span>
            <div class="chap-arrow-box">
                <svg class="custom-arrow" viewBox="0 0 12 12">
                    <line x1="0.5" y1="6" x2="10" y2="6" stroke-linecap="round"></line>
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
  if (!hash) return; 

  loadChapter(hash);

  document.querySelectorAll(".chapter-item").forEach((item) => {
    if (item.dataset.id === hash) {
      item.classList.add("active");
      item.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      item.classList.remove("active");
    }
  });

  currentChapterIndex = chapterList.findIndex((c) => c.id === hash);
  updateNavButtons();
}

// --- 4. 加载 JSON 数据 ---
async function loadChapter(chapterId) {
  const scriptDiv = document.getElementById("script-content");
  
  // 【修改点】：保护前言节点 (script-header)
  // 因为现在 script-header 嵌在 script-content 内部，不能直接被 innerHTML 抹掉
  const headerBox = document.getElementById("script-header");
  const summaryEl = document.getElementById("header-summary");
  
  if (summaryEl) {
      summaryEl.textContent = "ACCESSING ARCHIVES...";
  }
  
  // 【修改点】：清空容器，放回前言节点，再插入读取中的文字
  scriptDiv.innerHTML = '';
  if (headerBox) {
      scriptDiv.appendChild(headerBox); 
  }
  scriptDiv.insertAdjacentHTML('beforeend', '<div class="narration">運命を読み取り中……</div>');

  try {
    const module = await import(`../data/${chapterId}.js`);
    const data = module.default;

    const defaultBgm = (data.meta && data.meta.bgm) ? data.meta.bgm : "";
    lastTriggeredBgm = defaultBgm; 

    if (defaultBgm) {
      playBgm(defaultBgm, true); 
    }

    renderScript(data.script, defaultBgm);
    renderInfo(data.infoPanel); 
    updateHeaderFromJSON(chapterId, data);

    const scrollPanel = document.getElementById("script-panel");
    if (scrollPanel) scrollPanel.scrollTop = 0;

    const currentChapInfo = chapterList.find(item => item.id === chapterId);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'chapter_read',          
      'chapter_id': chapterId,          
      'chapter_title': currentChapInfo ? currentChapInfo.title : 'Unknown', 
      'chapter_category': currentChapInfo ? currentChapInfo.category : 'Unknown' 
    });

    setTimeout(() => {
      initBgmObserver();
    }, 100);
    
  } catch (err) {
    console.error(err);
    scriptDiv.innerHTML = '';
    if (headerBox) scriptDiv.appendChild(headerBox);
    scriptDiv.insertAdjacentHTML('beforeend', `<div class="narration" style="color:#D40F30">无法打开卷宗: ${chapterId}</div>`);
  }
}

// --- 新增：更新顶部开场白的函数 ---
function updateHeaderFromJSON(chapterId, data) {
  const jsonSummary = (data.meta && data.meta.summary) 
                      ? data.meta.summary 
                      : "NO SUMMARY DATA"; 

  const elSummary = document.getElementById("header-summary");
  
  if (elSummary) {
      elSummary.style.opacity = 0;
      elSummary.textContent = jsonSummary;
      
      // 【修改点】：延长淡入时间，并改为更平滑的 ease，增加前言的文学感
      setTimeout(() => {
          elSummary.style.transition = "opacity 0.8s ease";
          elSummary.style.opacity = 1;
      }, 50);
  }
}

// --- 5. 渲染正文 ---
function renderScript(script, defaultBgm = "") {
  const container = document.getElementById("script-content");
  
  // 【修改点】：同样保护前言节点，避免被抹除
  const headerBox = document.getElementById("script-header");
  container.innerHTML = "";
  if (headerBox) {
      container.appendChild(headerBox);
  }

  VoiceManager.reset(script);

  let currentLineBgm = defaultBgm;

  script.forEach((line, index) => {
      const div = document.createElement("div");
      div.id = `msg-row-${index}`;

      if (line.bgm) {
          currentLineBgm = line.bgm;
      }
      if (currentLineBgm) {
          div.setAttribute("data-bgm", currentLineBgm);
      }

      let voiceBtnHtml = '';

      if (line.voice) {
          if (Array.isArray(line.voice)) {
              voiceBtnHtml += '<span class="voice-group">'; 
              line.voice.forEach((v, subIndex) => {
                  const safePath = v.path.replace(/#/g, '%23');
                  voiceBtnHtml += `<button id="voice-btn-${index}-${subIndex}" class="voice-tag" onclick="event.stopPropagation(); VoiceManager.playManual(${index}, '${safePath}', ${subIndex})" title="Play ${v.label}">${v.label}</button>`;
              });
              voiceBtnHtml += '</span>';
          } else {
              const safePath = line.voice.replace(/#/g, '%23');
              voiceBtnHtml = `<button id="voice-btn-${index}-0" class="voice-btn" onclick="event.stopPropagation(); VoiceManager.playManual(${index}, '${safePath}', 0)" title="Play Voice"><svg viewBox="0 0 24 24" class="play-icon"><path d="M8 5v14l11-7z"></path></svg></button>`;
          }
      }

      if (line.type === "narration") {
        div.className = "message-row";
        let customBubbleClass = line.bubbleStyle ? line.bubbleStyle : "";
        let displayText = line.text;

        if (customBubbleClass === "secret-comm") {
            let regex = /(^|<br>|\n)\s*([^:：<]+[:：])/g;
            displayText = displayText.replace(regex, '$1<span class="comm-speaker">$2</span>');
            displayText = `<div class="comm-header">--- ENCRYPTED_CHANNEL ---</div><div class="comm-body"><span class="comm-bracket">[</span> ${displayText} <span class="comm-bracket">]</span></div>`;
        }

        div.innerHTML = `<div class="narration ${customBubbleClass}">${displayText}</div>`;
    
      } else if (line.type === "image") {
          div.className = "message-row";
          div.innerHTML = `<div class="narration"><img src="${line.src}" class="cg-image"></div>`;
      
      } else if (line.type === "dialogue") {
          const pos = line.position === "right" ? "pos-right" : "pos-left";
          div.className = `message-row ${pos}`;
          
          const customBubbleClass = line.bubbleStyle ? line.bubbleStyle : "";
          
          div.innerHTML = `
              <img src="${line.avatar}" class="avatar">
              <div class="message-bubble ${customBubbleClass}">${line.text}${voiceBtnHtml}</div>
          `;
      }
      container.appendChild(div);
  });
}

// --- 6. 渲染右侧信息 ---
function renderInfo(info) {
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

  const synDiv = document.getElementById("synopsis-container");
  synDiv.innerHTML = info.synopsis || "暂无记录";
}

// --- 辅助功能 ---
function navigate(dir) {
  const newIdx = currentChapterIndex + dir;
  if (newIdx >= 0 && newIdx < chapterList.length) {
    window.location.hash = chapterList[newIdx].id;
  }
}

function updateNavButtons() {
  const btnPrev = document.getElementById("float-btn-prev");
  const btnNext = document.getElementById("float-btn-next");

  if (btnPrev && btnNext) {
      btnPrev.disabled = currentChapterIndex <= 0;
      btnNext.disabled = currentChapterIndex >= chapterList.length - 1;
  }
}

// --- 音乐控制 ---
function playBgm(src, forcePlay = false) {
  if (!bgmPlayer.src.includes(src)) {
      bgmPlayer.src = src;
  }

  if (forcePlay || isMusicPlaying) {
      const playPromise = bgmPlayer.play();

      if (playPromise !== undefined) {
          playPromise.then(() => {
              updateMusicUI(true);
          }).catch(error => {
              console.log("Auto-play blocked by browser. User interaction needed.");
              updateMusicUI(false);
          });
      }
  }
}

// --- BGM 滚动观察器 ---
function initBgmObserver() {
  if (bgmObserver) {
      bgmObserver.disconnect();
  }

  bgmObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const newBgm = entry.target.getAttribute('data-bgm');
              
              if (newBgm && newBgm !== lastTriggeredBgm) {
                  console.log(`[剧情点触发] 切换BGM: ${newBgm}`);
                  lastTriggeredBgm = newBgm;
                  playBgm(newBgm, false); 
              }
          }
      });
  }, {
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0
  });

  const rows = document.querySelectorAll('#script-content .message-row');
  rows.forEach(row => {
      if (row.hasAttribute('data-bgm')) {
          bgmObserver.observe(row);
      }
  });
}

function toggleMusic(action) {
  if (action === 'play') {
      bgmPlayer.play();
      updateMusicUI(true);
  } else {
      bgmPlayer.pause();
      updateMusicUI(false);
  }
}

function updateMusicUI(playing) {
  isMusicPlaying = playing;
  const btnPlay = document.getElementById('btn-play'); 
  const btnPause = document.getElementById('btn-pause'); 

  if (playing) {
      btnPlay.style.display = 'none';
      btnPause.style.display = 'block';
  } else {
      btnPlay.style.display = 'block';
      btnPause.style.display = 'none';
  }
}

// --- 新增：全局解除浏览器音频限制 ---
function setupAudioUnlock() {
  const unlockHandler = () => {
      // 如果当前有音乐路径，且处于被拦截的暂停状态，且我们的 UI 认为它没在播放
      if (bgmPlayer.src && bgmPlayer.paused && !isMusicPlaying) {
          const playPromise = bgmPlayer.play();
          if (playPromise !== undefined) {
              playPromise.then(() => {
                  // 解锁成功：同步更新动图和状态
                  updateMusicUI(true);
              }).catch(e => {
                  console.log("Global unlock failed or empty src:", e);
              });
          }
      }
      
      // 【关键】：无论成功与否，只要用户交互过一次，浏览器的“手势锁”就解除了。
      // 立即移除监听器，避免每次点击都重复执行。
      document.body.removeEventListener('click', unlockHandler, true);
      document.body.removeEventListener('touchstart', unlockHandler, true);
  };

  // 使用捕获阶段 (true)，确保在其他按钮事件触发前，先解除音频锁定
  document.body.addEventListener('click', unlockHandler, true);
  document.body.addEventListener('touchstart', unlockHandler, { passive: true, capture: true });
}
// --- 沉浸模式：隐藏顶部悬浮工具栏 ---
function enableImmersiveMode() {
  // 【修改点】：目标从 script-header 改为了新的绝对定位容器 script-tools-layer
  const toolsLayer = document.querySelector(".script-tools-layer");
  if (toolsLayer) {
      toolsLayer.style.display = 'none';
  }
}

// ==================== 视觉特效 ====================

document.addEventListener("DOMContentLoaded", () => {
  initTypewriter();
});

function initTypewriter() {
  const titleEl = document.querySelector('.main-title');
  const subEl = document.querySelector('.sub-title');
  
  if (!titleEl || !subEl) return;

  const titleText = "運命の織機";
  const subText = ">./USER_LOGS.EXE";

  titleEl.textContent = "";
  subEl.textContent = "";

  function typeString(element, text, speed, cursorColor, callback) {
      let i = 0;
      element.style.borderRight = `3px solid ${cursorColor}`;
      
      function step() {
          if (i < text.length) {
              element.textContent += text.charAt(i);
              i++;
              setTimeout(step, Math.random() * speed[1] + speed[0]);
          } else {
              element.style.borderRight = "none"; 
              if (callback) callback();
          }
      }
      step();
  }

  setTimeout(() => {
      typeString(titleEl, titleText, [320, 80], "#D40F30", () => {
          typeString(subEl, subText, [120, 30], "#555", () => {
              subEl.style.borderRight = "2px solid #555";
              setInterval(() => {
                   const currentColor = subEl.style.borderRightColor;
                   subEl.style.borderRightColor = (currentColor === 'transparent') ? '#555' : 'transparent';
              }, 500);
          });
      });
  }, 200); 
}

// ==================== 语音与自动播放管理器 ====================

const VoiceManager = {
  audio: new Audio(),       
  isAutoMode: false,        
  currentIndex: 0,          
  scriptData: [],           
  timer: null,              

  init() {
      this.audio.preload = 'auto';
      
      this.audio.onended = () => {
          this.setButtonState(this.currentIndex, false); 
          if (this.isAutoMode) {
              this.playNext(); 
          }
      };

      this.audio.onerror = () => {
          console.warn("语音文件加载失败，1秒后跳过");
          this.setButtonState(this.currentIndex, false);
          if (this.isAutoMode) {
              this.timer = setTimeout(() => this.playNext(), 1000);
          }
      };
  },

  reset(newScriptData) {
      this.stop(); 
      this.isAutoMode = false;
      this.updateAutoSwitchUI();
      this.currentIndex = 0;
      this.scriptData = newScriptData || [];
  },

  toggleAuto() {
      this.isAutoMode = !this.isAutoMode;
      this.updateAutoSwitchUI();

      if (this.isAutoMode) {
          this.playSequence(this.currentIndex);
      } else {
          clearTimeout(this.timer);
      }
  },

  updateAutoSwitchUI() {
      const btn = document.getElementById('auto-play-btn');
      if (!btn) return;
      if (this.isAutoMode) btn.classList.add('active');
      else btn.classList.remove('active');
  },

  playSequence(index) {
    if (!this.isAutoMode) return;
    if (index >= this.scriptData.length) {
        this.finishAuto();
        return;
    }

    this.currentIndex = index;
    const line = this.scriptData[index];
    const rowEl = document.getElementById(`msg-row-${index}`);
    if (rowEl) rowEl.scrollIntoView({ behavior: "smooth", block: "center" });

    if (line.voice) {
        let src = '';
        if (Array.isArray(line.voice)) {
            src = line.voice[0].path;
        } else {
            src = line.voice;
        }
        this.playAudio(src, index, 0); 
    } else {
        this.timer = setTimeout(() => {
            if (this.isAutoMode) this.playNext();
        }, 1000);
    }
  },

  playNext() {
      this.playSequence(this.currentIndex + 1);
  },

  playAudio(src, index, subIndex = 0) {
    document.querySelectorAll('.voice-btn, .voice-tag').forEach(b => b.classList.remove('playing'));

    this.currentIndex = index;
    this.audio.src = src.replace(/#/g, '%23'); 
    
    this.setButtonState(index, subIndex, true);

    try {
      const fileName = src.split('/').pop();
      let currentChapTitle = "Unknown";
      if (typeof chapterList !== 'undefined' && typeof currentChapterIndex !== 'undefined') {
           if (chapterList[currentChapterIndex]) {
               currentChapTitle = chapterList[currentChapterIndex].title;
           }
      }

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
          'event': 'voice_play',              
          'voice_filename': fileName,         
          'voice_path': src,                  
          'chapter_title': currentChapTitle,  
          'play_mode': this.isAutoMode ? 'auto' : 'manual' 
      });
  } catch (err) {
      console.error("GTM Tracking Error:", err);
  }

    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(err => {
            console.log("Play error:", err);
            this.setButtonState(index, subIndex, false);
            if (this.isAutoMode) this.timer = setTimeout(() => this.playNext(), 1000);
        });
    }
  },

  playManual(index, src, subIndex) {
      this.isAutoMode = false; 
      this.updateAutoSwitchUI();
      clearTimeout(this.timer);
      this.playAudio(src, index, subIndex);
  },

  setButtonState(index, subIndex, isPlaying) {
    const btnId = `voice-btn-${index}-${subIndex}`;
    const btn = document.getElementById(btnId);
    
    if (btn && isPlaying) {
        btn.classList.add('playing');
    } else if (btn) {
        btn.classList.remove('playing');
    }
  },

  stop() {
      this.audio.pause();
      this.audio.currentTime = 0;
      clearTimeout(this.timer);
      this.setButtonState(this.currentIndex, false);
  },
  
  finishAuto() {
      this.isAutoMode = false;
      this.updateAutoSwitchUI();
      console.log("End of Auto Play");
  }
};

VoiceManager.init();



// --- 新增：正文背景主题切换 (白天 / 黑夜) ---
function setTheme(mode) {
  const wrapper = document.querySelector('.script-wrapper');
  const btnNight = document.getElementById('btn-night');
  const btnDay = document.getElementById('btn-day');

  if (mode === 'light') {
      // 开启白天模式
      wrapper.classList.add('light-mode');
      btnDay.classList.add('active');
      btnNight.classList.remove('active');
  } else {
      // 恢复黑夜模式 (默认)
      wrapper.classList.remove('light-mode');
      btnNight.classList.add('active');
      btnDay.classList.remove('active');
  }
}