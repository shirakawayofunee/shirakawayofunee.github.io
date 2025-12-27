// --- 配置：章节列表 (这里充当数据库目录) ---
// 您可以在这里手动添加所有33个章节的ID和标题
const chapterList = [
        { id: "conversation1", title: "Blue Rain-001「招かれざる客」" },
        { id: "conversation2", title: "Blue Rain-002「穏やかな朝」" },
        { id: "conversation3", title: "Blue Rain-003「家」" },
        { id: "conversation4", title: "Blue Rain-004「異変」" },
        { id: "conversation5", title: "Blue Rain-005「何のために戦うか」" },
        { id: "conversation6", title: "Blue Rain-006「大切なこと」" },
        { id: "conversation7", title: "Blue Rain-007「登場」" },
        { id: "conversation8", title: "flowers-101「追悼式」" },
        { id: "conversation9", title: "flowers-101「探偵ゲーム」" },
        { id: "conversation10", title: "flowers-102「暗殺予告」" },
        { id: "conversation11", title: "flowers-103「廃墟」" },
        { id: "conversation12", title: "flowers-104「第二現場」" },
        { id: "conversation13", title: "flowers-105「业师」" },
        { id: "conversation14", title: "flowers-106「創傷」" },
        { id: "conversation15", title: "flowers-107「Shalom」" },
        { id: "conversation16", title: "flowers-108「第三現場」" },
        { id: "conversation17", title: "flowers-204「第四現場」" },
        { id: "conversation18", title: "flowers-205「二人目」" },
        { id: "conversation19", title: "flowers-206「誘餌」" },
        { id: "conversation20", title: "flowers-207「本当の目標」" },
        { id: "conversation21", title: "flowers-208「最後通牒」" },
        { id: "conversation22", title: "flowers-209「清理人」" },
        { id: "conversation23", title: "flowers-301「西区作战」" },
        { id: "conversation24", title: "flowers-302「露の世は露の世ながらさりながら」" },
        { id: "conversation25", title: "flowers-303「対決」" },
        { id: "conversation26", title: "flowers-304「失った正義」" },
        { id: "conversation27", title: "flowers-305「第五現場」" },
        { id: "conversation28", title: "flowers-401「残花の復仇」" },
        { id: "conversation29", title: "flowers-402「依頼」" },
        { id: "conversation30", title: "flowers-403「静默の背叛」" },
        { id: "conversation31", title: "flowers-404「後日談1」" },
        { id: "conversation32", title: "flowers-405「後日談2」" },
        { id: "conversation33", title: "弱者-501「」" },
];

// --- 状态管理 ---
let currentChapterIndex = 0;
let isMusicPlaying = false;
const bgmPlayer = document.getElementById('bgm-player');

// --- 初始化 ---
document.addEventListener('DOMContentLoaded', () => {
    renderDirectory();
    handleHashChange(); // 首次加载检查 URL
    
    // 监听 URL 变化 (前进/后退/分享链接)
    window.addEventListener('hashchange', handleHashChange);
    
    // 音乐按钮
    document.getElementById('music-toggle').addEventListener('click', toggleMusic);
    
    // 前后章按钮
    document.getElementById('btn-prev').addEventListener('click', () => navigate(-1));
    document.getElementById('btn-next').addEventListener('click', () => navigate(1));
});

// --- 渲染目录 ---
function renderDirectory() {
    const listContainer = document.getElementById('chapter-list');
    listContainer.innerHTML = '';
    
    chapterList.forEach((chapter, index) => {
        const btn = document.createElement('div');
        btn.className = 'chapter-btn';
        btn.textContent = chapter.title;
        btn.onclick = () => {
            // 点击目录修改 Hash，触发 hashchange 事件加载内容
            window.location.hash = chapter.id;
        };
        btn.dataset.id = chapter.id; // 用于后续高亮查找
        listContainer.appendChild(btn);
    });
}

// --- 处理 Hash 变化 (核心路由) ---
function handleHashChange() {
    const hash = window.location.hash.substring(1); // 去掉 #
    let targetId = hash;

    // 如果没有 hash，默认加载列表第一个
    if (!targetId && chapterList.length > 0) {
        targetId = chapterList[0].id;
    }

    // 找到在列表中的索引
    const index = chapterList.findIndex(c => c.id === targetId);
    
    if (index !== -1) {
        currentChapterIndex = index;
        loadChapter(targetId);
        updateActiveDirectory(targetId);
        updateNavButtons();
    } else {
        console.error("Chapter not found:", targetId);
    }
}

// --- 高亮当前目录 ---
function updateActiveDirectory(id) {
    document.querySelectorAll('.chapter-btn').forEach(btn => {
        if (btn.dataset.id === id) {
            btn.classList.add('active');
            // 确保目录滚动到可见位置
            btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            btn.classList.remove('active');
        }
    });
}

// --- 加载 JSON 数据并渲染 ---
async function loadChapter(chapterId) {
    const contentDiv = document.getElementById('script-content');
    contentDiv.innerHTML = '<div class="narration">Loading...</div>';

    try {
        // 请求 JSON 文件
        const response = await fetch(`data/${chapterId}.json`);
        if (!response.ok) throw new Error("File not found");
        const data = await response.json();

        // 1. 设置 BGM
        if (data.meta && data.meta.bgm) {
            playBgm(data.meta.bgm);
        }

        // 2. 渲染中间正文
        renderScript(data.script);

        // 3. 渲染右侧信息栏
        renderInfoPanel(data.infoPanel);

        // 滚动回顶部
        document.getElementById('script-panel').scrollTop = 0;

    } catch (error) {
        console.error(error);
        contentDiv.innerHTML = `<div class="narration" style="color:red">无法加载章节数据: ${chapterId}<br>请确保 JSON 文件存在。</div>`;
    }
}

// --- 渲染剧本正文 (核心渲染引擎) ---
function renderScript(scriptData) {
    const container = document.getElementById('script-content');
    container.innerHTML = ''; // 清空旧内容

    scriptData.forEach(item => {
        let el = document.createElement('div');

        if (item.type === 'narration') {
            // 旁白
            el.className = 'message-row';
            el.innerHTML = `<div class="message narration">${item.text}</div>`;
        } 
        else if (item.type === 'image') {
            // 插图
            el.className = 'message-row';
            el.innerHTML = `<div class="message narration"><img src="${item.src}" class="cg-image"></div>`;
        }
        else if (item.type === 'dialogue') {
            // 对话
            // 根据 position 决定左右: pos-left 或 pos-right
            const posClass = item.position === 'right' ? 'pos-right' : 'pos-left';
            
            el.className = `message-row ${posClass}`;
            
            // 构建 HTML：头像 + 气泡
            // 注意：这里保留了 item.text 中的 <span> 标签
            el.innerHTML = `
                <img src="${item.avatar}" alt="${item.name}" class="avatar">
                <div class="message-bubble">
                    ${item.text}
                </div>
            `;
        }

        container.appendChild(el);
    });
}

// --- 渲染信息栏 ---
function renderInfoPanel(infoData) {
    // 1. 名词解释 (手风琴)
    const glossaryContainer = document.getElementById('glossary-container');
    glossaryContainer.innerHTML = '';
    if (infoData.glossary) {
        infoData.glossary.forEach(g => {
            const item = document.createElement('div');
            item.className = 'glossary-item';
            item.innerHTML = `
                <div class="glossary-term" onclick="toggleAccordion(this)">
                    ${g.term} <span>▼</span>
                </div>
                <div class="glossary-desc">${g.desc}</div>
            `;
            glossaryContainer.appendChild(item);
        });
    }

    // 2. 主要角色
    const charContainer = document.getElementById('characters-container');
    charContainer.innerHTML = '';
    if (infoData.characters) {
        infoData.characters.forEach(c => {
            const card = document.createElement('div');
            card.className = 'char-card';
            card.innerHTML = `
                <img src="${c.avatar}">
                <div class="char-info">
                    <strong>${c.name}</strong>
                    <p>${c.note}</p>
                </div>
            `;
            charContainer.appendChild(card);
        });
    }

    // 3. 前情提要
    const synopsisContainer = document.getElementById('synopsis-container');
    synopsisContainer.innerHTML = infoData.synopsis || "暂无前情提要";
    
    // 如果有跳转链接按钮
    if (infoData.relatedLink) {
        const btn = document.createElement('button');
        btn.className = 'link-btn';
        btn.textContent = infoData.relatedLink.text;
        btn.onclick = () => {
            window.location.hash = infoData.relatedLink.targetId;
        };
        synopsisContainer.appendChild(document.createElement('br'));
        synopsisContainer.appendChild(btn);
    }
}

// --- 手风琴交互 ---
window.toggleAccordion = function(element) {
    const parent = element.parentElement;
    parent.classList.toggle('active');
};

// --- 导航控制 ---
function navigate(direction) {
    const newIndex = currentChapterIndex + direction;
    if (newIndex >= 0 && newIndex < chapterList.length) {
        window.location.hash = chapterList[newIndex].id;
    }
}

function updateNavButtons() {
    document.getElementById('btn-prev').disabled = currentChapterIndex <= 0;
    document.getElementById('btn-next').disabled = currentChapterIndex >= chapterList.length - 1;
}

// --- 音乐控制 ---
function playBgm(src) {
    // 如果切歌了或者当前没在播
    if (!bgmPlayer.src.includes(src)) {
        bgmPlayer.src = src;
        // 如果之前是开启状态，自动播放；否则只加载不播放
        if (isMusicPlaying) {
            bgmPlayer.play().catch(e => console.log("Auto-play prevented"));
        }
    }
}

function toggleMusic() {
    isMusicPlaying = !isMusicPlaying;
    const btn = document.getElementById('music-toggle');
    if (isMusicPlaying) {
        bgmPlayer.play();
        btn.textContent = "♪ ON";
        btn.style.opacity = "1";
    } else {
        bgmPlayer.pause();
        btn.textContent = "♪ OFF";
        btn.style.opacity = "0.5";
    }
}