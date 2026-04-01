// 数据配置
const connections = [
  // L 和 Severo 之间的三条线演示
  { from: 0, to: 1, label: "Lの主観:\n栽培、愛する部下", color: "#b2160b", dashed: false },
  { from: 1, to: 0, label: "Severoの主観:\n劣情、求不得苦", color: "#b2160b", dashed: false },
  { from: 0, to: 1, label: "客観的関係:\n上司と部下", color: "#f39c12", dashed: true, isObjective: true },

  // 其他人物关系
  { from: 0, to: 2, label: "栽培、野放し", color: "#b2160b", dashed: false },
  { from: 2, to: 0, label: "尊敬", color: "#b2160b", dashed: false },
  { from: 0, to: 3, label: "栽培、教導", color: "#b2160b", dashed: false },
  { from: 3, to: 0, label: "敬愛", color: "#b2160b", dashed: false },
  { from: 0, to: 4, label: "やり返す", color: "#b2160b", dashed: true },
  { from: 4, to: 0, label: "敬慕の愛、利用", color: "#b2160b", dashed: true },
  { from: 0, to: 6, label: "元同僚", color: "#b2160b", dashed: true },
  { from: 6, to: 0, label: "利用", color: "#b2160b", dashed: true },
  { from: 6, to: 7, label: "リーダー", color: "#b2160b", dashed: false },
  { from: 0, to: 7, label: "元の組織、反逆", color: "#b2160b", dashed: true },
  { from: 0, to: 8, label: "探り、GB", color: "#b2160b", dashed: true },
  { from: 4, to: 5, label: "反逆", color: "#b2160b", dashed: true },
];

const state = {
  nodes: [],
  nodePositions: [], // 缓存坐标，避免 Swiper 导致坐标错乱
  resizeTimer: null,
};

function initLayout() {
  const board = document.getElementById("board");
  if (!board) return;
  const viewportWidth = window.innerWidth;
  const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  const isMobile = viewportWidth <= 576;
  const baseRadius = isMobile ? Math.min(viewportWidth, viewportHeight) * 0.35 : Math.min(viewportWidth, viewportHeight) * 0.25;

  const positions = [
    [0, 0], // Leopold
    [2.7, 0], // Severo
    [-1.6, 1.2], // Jin
    [2, 1.2], // Ji
    [-2.7, 0], // X
    [-1.5, -1.2], // ST
    [3.1, -1], // LY
    [1.5, -1.2], // DD
    [0, 2], // Player
  ];

  state.nodePositions = [];
  state.nodes.forEach((node, index) => {
    const [dx, dy] = positions[index];
    const x = Math.max(60, Math.min(viewportWidth - 60, viewportWidth / 2 + dx * baseRadius));
    const y = Math.max(80, Math.min(viewportHeight - 80, viewportHeight / 2 + dy * baseRadius));
    
    node.style.left = `${x}px`;
    node.style.top = `${y}px`;
    node.style.transform = "translate(-50%, -50%)";

    // 缓存绝对坐标，完全无视 Swiper 的隐藏机制
    state.nodePositions[index] = { 
      x: x, 
      y: y, 
      radius: (node.offsetWidth || (isMobile ? 60 : 120)) / 2
    };
  });

  board.style.minHeight = `${viewportHeight}px`;
}

// 动态创建箭头
function ensureMarker(defs, color) {
  const colorClean = color.replace("#", "");
  const id = `arrow-${colorClean}`;
  if (!document.getElementById(id)) {
    const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    marker.setAttribute("id", id);
    marker.setAttribute("markerWidth", "10");
    marker.setAttribute("markerHeight", "7");
    marker.setAttribute("refX", "9");
    marker.setAttribute("refY", "3.5");
    marker.setAttribute("orient", "auto");
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", "0 0, 10 3.5, 0 7");
    polygon.setAttribute("fill", color);
    marker.appendChild(polygon);
    defs.appendChild(marker);
  }
  return id;
}

// 核心：横平竖直 90° 折线 + 多线平行算法
function drawLines() {
  const svg = document.getElementById("lines");
  if (!svg) return;
  const defs = svg.querySelector("defs") || document.createElementNS("http://www.w3.org/2000/svg", "defs");
  svg.innerHTML = "";
  svg.appendChild(defs);

  const pairCounts = {};

  connections.forEach((conn) => {
    if (conn.from >= state.nodes.length || conn.to >= state.nodes.length) return;

    const pos1 = state.nodePositions[conn.from];
    const pos2 = state.nodePositions[conn.to];
    if (!pos1 || !pos2) return;

    // 分配平行通道
    const pairKey = [Math.min(conn.from, conn.to), Math.max(conn.from, conn.to)].join('-');
    pairCounts[pairKey] = (pairCounts[pairKey] || 0) + 1;
    const lineIndex = pairCounts[pairKey]; // 1, 2, 3...
    
    // 平行线的偏移量 (16px 间距)
    const gap = window.innerWidth <= 576 ? 12 : 18;
    let offset = 0;
    if (lineIndex === 1) offset = -gap;
    if (lineIndex === 3) offset = gap;

    const dx = pos2.x - pos1.x;
    const dy = pos2.y - pos1.y;
    const isHoriz = Math.abs(dx) > Math.abs(dy); // 判断是横向为主还是竖向为主

    let pathD = "";
    let labelX = 0, labelY = 0;

    if (isHoriz) {
      // 横 -> 竖 -> 横 (Z字型)
      const dirX = dx >= 0 ? 1 : -1;
      const startX = pos1.x + dirX * pos1.radius; // 从头像边缘出发
      const endX = pos2.x - dirX * (pos2.radius + 12); // 给箭头留 12px 空间
      const sY = pos1.y + offset;
      const eY = pos2.y + offset;
      const mX = pos1.x + dx / 2 + offset;

      pathD = `M ${startX} ${sY} L ${mX} ${sY} L ${mX} ${eY} L ${endX} ${eY}`;
      labelX = mX;
      labelY = (sY + eY) / 2;
    } else {
      // 竖 -> 横 -> 竖 (Z字型)
      const dirY = dy >= 0 ? 1 : -1;
      const startY = pos1.y + dirY * pos1.radius;
      const endY = pos2.y - dirY * (pos2.radius + 12);
      const sX = pos1.x + offset;
      const eX = pos2.x + offset;
      const mY = pos1.y + dy / 2 + offset;

      pathD = `M ${sX} ${startY} L ${sX} ${mY} L ${eX} ${mY} L ${eX} ${endY}`;
      labelX = (sX + eX) / 2;
      labelY = mY;
    }

    // 画线
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathD);
    path.classList.add("relation-line");
    if (conn.dashed) path.classList.add("dashed-line");
    path.style.stroke = conn.color;
    
    if (!conn.isObjective) {
      const markerId = ensureMarker(defs, conn.color);
      path.setAttribute("marker-end", `url(#${markerId})`);
    }
    
    svg.appendChild(path);

    // 画文字标签
    const textGroup = createLabel(conn.label, labelX, labelY);
    svg.appendChild(textGroup);
  });
}

function createLabel(text, x, y) {
  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const padding = window.innerWidth <= 576 ? 4 : 6;
  const lines = text.split(/[、\n]/);
  
  const textEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
  textEl.setAttribute("x", x);
  textEl.setAttribute("y", y - 2);
  textEl.setAttribute("text-anchor", "middle");
  textEl.setAttribute("dominant-baseline", "middle");
  textEl.setAttribute("font-size", window.innerWidth <= 576 ? "9px" : "12px");

  lines.forEach((line, index) => {
    if (!line) return;
    const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    tspan.setAttribute("x", x);
    tspan.setAttribute("dy", index === 0 ? "0" : "1.3em");
    tspan.textContent = line;
    textEl.appendChild(tspan);
  });

  // 临时添加到页面计算宽度
  const tempSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  tempSvg.style.position = "absolute";
  tempSvg.style.visibility = "hidden";
  document.body.appendChild(tempSvg);
  tempSvg.appendChild(textEl);
  const bbox = textEl.getBBox();
  document.body.removeChild(tempSvg);

  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", bbox.x - padding);
  rect.setAttribute("y", bbox.y - padding);
  rect.setAttribute("width", bbox.width + padding * 2);
  rect.setAttribute("height", bbox.height + padding * 2);

  group.appendChild(rect);
  group.appendChild(textEl);
  return group;
}

function initialize() {
  const slideContainer = document.getElementById("slide3");
  if (!slideContainer) return;
  
  state.nodes = Array.from(slideContainer.querySelectorAll(".node, .large-node, .small-node"));
  if (state.nodes.length === 0) return;

  // 由于脱离了 DOM 渲染依赖，直接按坐标计算，轮播图隐藏也能完美画出！
  initLayout();        
  drawLines();         

  window.addEventListener("resize", () => {
    clearTimeout(state.resizeTimer);
    state.resizeTimer = setTimeout(() => {
      initLayout();
      drawLines();
    }, 200);
  });
}

window.addEventListener("load", initialize);