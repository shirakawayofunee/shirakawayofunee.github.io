// 数据配置
const connections = [
  // L 和 Severo 之间的三条平行线演示：
  { from: 0, to: 1, label: "Lの主観:\n栽培、愛する部下", color: "#b2160b", dashed: false }, // L -> Severo
  { from: 1, to: 0, label: "Severoの主観:\n劣情、求不得苦", color: "#2980b9", dashed: false }, // Severo -> L
  { from: 0, to: 1, label: "客観的関係:\n上司と部下", color: "#f39c12", dashed: true, isObjective: true }, // 客观中立线（isObjective: true 表示不带箭头）

  // 其他人物的关系（按原样保留，自动分配锚点）
  { from: 0, to: 2, label: "栽培、野放し", color: "#2980b9", dashed: false },
  { from: 2, to: 0, label: "尊敬", color: "#b2160b", dashed: false },
  { from: 0, to: 3, label: "栽培、教導", color: "#2980b9", dashed: false },
  { from: 3, to: 0, label: "敬愛", color: "#b2160b", dashed: false },
  { from: 0, to: 4, label: "やり返す、複雑な協力", color: "#2980b9", dashed: true },
  { from: 4, to: 0, label: "敬慕の愛、利用", color: "#b2160b", dashed: true },
  { from: 0, to: 6, label: "元同僚、今は顧客", color: "#2980b9", dashed: true },
  { from: 6, to: 0, label: "利用", color: "#2980b9", dashed: true },
  { from: 6, to: 7, label: "リーダー", color: "#b2160b", dashed: false },
  { from: 0, to: 7, label: "元の組織、反逆", color: "#555555", dashed: true },
  { from: 0, to: 8, label: "探り、GB", color: "#555555", dashed: true },
  { from: 4, to: 5, label: "反逆", color: "#555555", dashed: true },
];

const state = {
  nodes: [],
  lines: [], // 存放 LeaderLine 实例
  resizeTimer: null,
};

// 1. 初始化排版布局
function initLayout() {
  const board = document.getElementById("board");
  const viewportWidth = window.innerWidth;
  const viewportHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  const isMobile = viewportWidth <= 576;
  const baseRadius = isMobile
    ? Math.min(viewportWidth, viewportHeight) * 0.35
    : Math.min(viewportWidth, viewportHeight) * 0.25;

  // 你原有的排版位置逻辑
  const positions = [
    [0, 0],       // 0: L
    [-1.3, 1.2],  // 1: Severo
    [1.7, 0.9],   // 2: Jin
    [-1.1, -1.2], // 3: Ji
    [-2.7, 0],    // 4: X
    [-3, -1.2],   // 5: ST
    [2.1, -1],    // 6: LY
    [3, 0],       // 7: DD
    [-2.9, 1.2],  // 8: Player
  ];

  state.nodes.forEach((node, index) => {
    const [dx, dy] = positions[index];
    const x = Math.max(60, Math.min(viewportWidth - 60, viewportWidth / 2 + dx * baseRadius));
    const y = Math.max(80, Math.min(viewportHeight - 80, viewportHeight / 2 + dy * baseRadius));
    
    Object.assign(node.style, {
      left: `${x}px`,
      top: `${y}px`,
      transform: "translate(-50%, -50%)",
      position: "absolute"
    });
  });

  board.style.minHeight = `${viewportHeight}px`;
}

// 2. 为每个头像注入三个分离的锚点（解决多条线重叠问题）
function injectAnchors() {
  state.nodes.forEach(node => {
    const avatar = node.querySelector(".avatar");
    // 如果已经注入过就不再注入
    if (avatar.querySelector('.anchor-1')) return; 
    
    for (let i = 1; i <= 3; i++) {
      const anchor = document.createElement("div");
      anchor.className = `line-anchor anchor-${i}`;
      avatar.appendChild(anchor);
    }
  });
}

// 3. 绘制连线
function drawLines() {
  // 清除旧的连线
  state.lines.forEach(line => line.remove());
  state.lines = [];

  const pairCounts = {}; // 记录每一对角色之间已经画了几条线

  connections.forEach((conn) => {
    if (conn.from >= state.nodes.length || conn.to >= state.nodes.length) return;

    // 确定这对角色的唯一键值 (例如 L和Severo 永远是 "0-1")
    const min = Math.min(conn.from, conn.to);
    const max = Math.max(conn.from, conn.to);
    const pairKey = `${min}-${max}`;

    if (!pairCounts[pairKey]) pairCounts[pairKey] = 0;
    pairCounts[pairKey]++;
    const lineIndex = pairCounts[pairKey]; // 第几条线 (1, 2, 或 3)

    // 根据是第几条线，选择不同的锚点
    // 第1条线连中间，第2条线连左上，第3条线连右下
    let anchorClass = ".anchor-2";
    if (lineIndex === 2) anchorClass = ".anchor-1";
    if (lineIndex === 3) anchorClass = ".anchor-3";

    const startElement = state.nodes[conn.from].querySelector(`.avatar ${anchorClass}`);
    const endElement = state.nodes[conn.to].querySelector(`.avatar ${anchorClass}`);

    // 配置 LeaderLine
    const line = new LeaderLine(
      startElement,
      endElement,
      {
        path: 'grid',         // 90度折线模式 (电路图风格)
        color: conn.color,
        size: window.innerWidth <= 576 ? 2 : 3, // 手机上线条稍微细一点
        dash: conn.dashed ? { animation: true } : false, // 虚线带流动动画，非常酷！
        endPlug: conn.isObjective ? 'behind' : 'arrow1', // 客观线不要箭头
        startPlug: conn.isObjective ? 'behind' : 'behind',
        // 渲染中间的文字标签
        middleLabel: LeaderLine.captionLabel(conn.label, {
          color: '#ecf0f1',
          outlineColor: '#2c3e50', // 文字描边，防止看不清
          fontSize: window.innerWidth <= 576 ? '10px' : '13px',
          padding: 0.3
        })
      }
    );
    state.lines.push(line);
  });
}

// 4. 响应式处理（窗口缩放时重排）
function initResponsive() {
  window.addEventListener("resize", () => {
    clearTimeout(state.resizeTimer);
    state.resizeTimer = setTimeout(() => {
      initLayout();
      // 调用 LeaderLine 自带的 position 方法更新线条位置
      state.lines.forEach(line => line.position());
    }, 200);
  });
}

// 5. 启动函数
function initialize() {
  state.nodes = Array.from(document.querySelectorAll(".node, .large-node"));
  if (state.nodes.length === 0) return;

  // 图片加载逻辑保留
  const bgImage = new Image();
  bgImage.src = "../img/bg_full.png";
  bgImage.onload = () => document.body.classList.add("loaded");
  bgImage.onerror = () => document.body.classList.add("loaded");

  injectAnchors();     // 注入不可见锚点
  initLayout();        // 设置节点位置
  drawLines();         // 画线
  initResponsive();    // 绑定缩放事件
  
  setTimeout(() => document.body.classList.add("loaded"), 3000);
}

window.addEventListener("load", initialize);