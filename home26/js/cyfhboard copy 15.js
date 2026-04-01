const connections = [
    { from: 0, to: 1, label: "(恩師)守護 / 栽培 / 出資、我が子のように大切にする、最も愛する部下", color: "#b2160b", side: "right", sideIn: "left", fromSlot: -1, toSlot: -1, bendOffset: 60 },
    { from: 1, to: 0, label: "劣情 / 湿度高めの激重愛 / 求不得苦", color: "#b2160b", side: "left", sideIn: "right", fromSlot: 3, toSlot:3, bendOffset: 60 },/* 
    { from: 0, to: 2, label: "(恩師)栽培、野放し", color: "#b2160b", side: "bottom", sideIn: "top", fromSlot: 1, toSlot: 0, bendOffset: 40 }, *//* 
    { from: 2, to: 0, label: "尊敬", color: "#b2160b", side: "top", sideIn: "bottom", fromSlot: 1, toSlot: 2, bendOffset: 60 }, */
    { from: 0, to: 2, label: "(恩師)守護 / 栽培 / 出資", color: "#b2160b", side: "bottom", sideIn: "left", fromSlot: 3, toSlot: 1, bendOffset: 50 },/* 
    { from: 3, to: 0, label: "敬愛", color: "#b2160b", side: "top", sideIn: "bottom", fromSlot: 0, toSlot: 3, bendOffset: 100 }, */

    { from: 0, to: 4, label: "嫌い→不倶戴天 / やり返す→理解", color: "#b2160b",  side: "left", sideIn: "right", fromSlot: 3, toSlot: 3, bendOffset: 60 },
    { from: 0, to: 4, label: "宿命のライバル / 好敵手 / 腐れ縁、複雑な協力关系", color: "#b2160b",  side: "left", sideIn: "right", fromSlot: 0, toSlot: 0, bendOffset: 60, isObjective: true },
    { from: 4, to: 0, label: "探す→理解し 憐れみ やがて愛に", color: "#b2160b",  side: "right", sideIn: "left", fromSlot: -3, toSlot: -3, bendOffset: 60 },

    { from: 7, to: 0, label: "元同僚 / 今は顧客", color: "#b2160b",  side: "left", sideIn: "top", fromSlot: 0, toSlot: 0, bendOffset: 70, isObjective: false },
    { from: 4, to: 5, label: "反逆", color: "#b2160b",  side: "top", sideIn: "left", fromSlot: 0, toSlot: -1, bendOffset: 80 },
    { from: 5, to: 7, label: "宿敵", color: "#b2160b",  side: "right", sideIn: "left", fromSlot: -2, toSlot: -2, bendOffset: 20, isObjective: true },
    { from: 6, to: 7, label: "幹部", color: "#b2160b",  side: "left", sideIn: "right", fromSlot: 0, toSlot: 0, bendOffset: 40, isObjective: false },
    { from: 8, to: 0, label: "救いたい", color: "#b2160b",  side: "right", sideIn: "bottom", fromSlot: -2, toSlot: -3, bendOffset: 20, isObjective: false },
    { from: 0, to: 8, label: "疑う", color: "#b2160b",  side: "bottom", sideIn: "right", fromSlot: -1, toSlot: 2.4, bendOffset: 20, isObjective: false },
  ];

  // 其他特定逻辑连线
  /*       { 
      from: 6, to: 7, label: "リーダー", color: "#b2160b", 
      side: "right", sideIn: "left", fromSlot: 0, toSlot: 0, bendOffset: 30 
    },
    { 
      from: 0, to: 7, label: "元の組織、反逆", color: "#b2160b", 
      side: "top", sideIn: "bottom", fromSlot: -1, toSlot: 0, bendOffset: 70 ,isObjective: false
    },
    { 
      from: 0, to: 8, label: "探り、GB、女攻め男受け", color: "#b2160b", 
      side: "left", sideIn: "right", fromSlot: 2, toSlot: 0, bendOffset: 40 
    },*/

// ==================== 状态 ====================
const state = {
  nodes: [],
  nodePositions: [], // 缓存坐标
  resizeTimer: null,
};

// ==================== 初始化布局 ====================
function initLayout() {
  const board = document.getElementById("board");
  if (!board) return;
  const viewportWidth = window.innerWidth;
  const viewportHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  const isMobile = viewportWidth <= 576;
  const baseRadius = isMobile
    ? Math.min(viewportWidth, viewportHeight) * 0.35
    : Math.min(viewportWidth, viewportHeight) * 0.25;

  const positions = [
    [0, 0], // Leopold (0)
    [2.3, 0], // Severo (1)  —— 与 L 同一水平线
    [2, 1], // Jin (2)
    [2.7, 1], // Ji (3)
    [-2.7, 0], // X (4)
    [-1.5, -1.2], // ST (5)
    [3.1, -1], // LY (6)
    [1.5, -1.2], // DD (7)
    [-1.6, 1.2], // Player (8)
  ];

  state.nodePositions = [];
  state.nodes.forEach((node, index) => {
    const [dx, dy] = positions[index];
    const x = Math.max(
      60,
      Math.min(viewportWidth - 60, viewportWidth / 2 + dx * baseRadius)
    );
    const y = Math.max(
      80,
      Math.min(viewportHeight - 80, viewportHeight / 2 + dy * baseRadius)
    );

    node.style.left = `${x}px`;
    node.style.top = `${y}px`;
    node.style.transform = "translate(-50%, -50%)";

    state.nodePositions[index] = {
      x: x,
      y: y,
      radius: (node.offsetWidth || (isMobile ? 60 : 120)) / 2,
    };
  });

  board.style.minHeight = `${viewportHeight}px`;
}

// ==================== 动态创建箭头 ====================
function ensureMarker(defs, color) {
  const id = `arrow-${color.replace("#", "")}`;
  if (!document.getElementById(id)) {
    const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    marker.setAttribute("id", id);
    marker.setAttribute("viewBox", "0 0 10 10");
    marker.setAttribute("refX", "9");
    marker.setAttribute("refY", "5");
    marker.setAttribute("markerWidth", "6");
    marker.setAttribute("markerHeight", "6");
    marker.setAttribute("orient", "auto");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M 0 0 L 10 5 L 0 10 z");
    path.setAttribute("fill", color);
    marker.appendChild(path);
    defs.appendChild(marker);
  }
  return id;
}

// ==================== 创建标签 ====================
function createLabel(text, x, y, strokeColor) {
  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const isMobile = window.innerWidth <= 576;
  const padding = isMobile ? 5 : 8;

  const lines = text.split(/[、\n]/);

  const textEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
  textEl.setAttribute("x", x);
  textEl.setAttribute("y", y);
  textEl.setAttribute("text-anchor", "middle");
  textEl.setAttribute("dominant-baseline", "middle");
  textEl.setAttribute("font-size", isMobile ? "9.5px" : "12.5px");
  textEl.setAttribute("fill", "#ffffff");

  lines.forEach((line, i) => {
    if (!line.trim()) return;
    const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    tspan.setAttribute("x", x);
    tspan.setAttribute("dy", i === 0 ? "0" : "1.35em");
    tspan.textContent = line.trim();
    textEl.appendChild(tspan);
  });

  // 使用隐藏SVG计算真实尺寸（避免因未渲染导致测量失效）
  const tempSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  tempSvg.style.position = "absolute";
  tempSvg.style.visibility = "hidden";
  document.body.appendChild(tempSvg);
  tempSvg.appendChild(textEl.cloneNode(true));
  const bbox = tempSvg.querySelector("text").getBBox();
  document.body.removeChild(tempSvg);

  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", bbox.x - padding);
  rect.setAttribute("y", bbox.y - padding);
  rect.setAttribute("width", bbox.width + padding * 2);
  rect.setAttribute("height", bbox.height + padding * 2);
  rect.setAttribute("rx", isMobile ? "4" : "6");
  rect.setAttribute("fill", "rgba(30, 35, 55, 0.85)");
  rect.setAttribute("stroke", strokeColor || "rgba(255,255,255,0.2)");
  rect.setAttribute("stroke-width", "1");

  group.appendChild(rect);
  group.appendChild(textEl);
  return group;
}

// ==================== 核心画线函数（电路板式精密版） ====================
function drawLines() {
  const svg = document.getElementById("lines");
  if (!svg) return;

  const defs =
    svg.querySelector("defs") ||
    document.createElementNS("http://www.w3.org/2000/svg", "defs");
  svg.innerHTML = "";
  svg.appendChild(defs);

  connections.forEach((conn) => {
    const p1 = state.nodePositions[conn.from];
    const p2 = state.nodePositions[conn.to];
    if (!p1 || !p2) return;

    // --- 1. 参数初始化 (处理旧版 slot 兼容性) ---
    const side = conn.side || (p2.x > p1.x ? "right" : "left");
    const sideIn = conn.sideIn || (p2.x > p1.x ? "left" : "right");

    const fSlot = conn.fromSlot !== undefined ? conn.fromSlot : conn.slot || 0;
    const tSlot = conn.toSlot !== undefined ? conn.toSlot : conn.slot || 0;

    const bendOffset = conn.bendOffset || 45;
    const slotStep = 20;
    const margin = 12;

    // --- 2. 计算起点 (sX, sY) ---
    let sX = p1.x,
      sY = p1.y;
    if (side === "left") {
      sX -= p1.radius;
      sY += fSlot * slotStep;
    } else if (side === "right") {
      sX += p1.radius;
      sY += fSlot * slotStep;
    } else if (side === "top") {
      sY -= p1.radius;
      sX += fSlot * slotStep;
    } else if (side === "bottom") {
      sY += p1.radius;
      sX += fSlot * slotStep;
    }

    // --- 3. 计算终点 (eX, eY) ---
    let eX = p2.x,
      eY = p2.y;
    if (sideIn === "left") {
      eX -= p2.radius + margin;
      eY += tSlot * slotStep;
    } else if (sideIn === "right") {
      eX += p2.radius + margin;
      eY += tSlot * slotStep;
    } else if (sideIn === "top") {
      eY -= p2.radius + margin;
      eX += tSlot * slotStep;
    } else if (sideIn === "bottom") {
      eY += p2.radius + margin;
      eX += tSlot * slotStep;
    }

// --- 4. 路由逻辑（智能正交版） ---
let pathD, lx, ly;
const isStartVert = (side === "top" || side === "bottom");
const isEndVert = (sideIn === "top" || sideIn === "bottom");

if (isStartVert !== isEndVert) {
  // 情况 A: 正交连接（一纵一横），使用 L 型折线确保方向正确
  if (isStartVert) {
    // 纵向出发 -> 水平进入 (例如 top -> left)
    pathD = `M ${sX} ${sY} L ${sX} ${eY} L ${eX} ${eY}`;
    lx = sX; ly = eY; 
  } else {
    // 水平出发 -> 纵向进入 (例如 right -> top)
    pathD = `M ${sX} ${sY} L ${eX} ${sY} L ${eX} ${eY}`;
    lx = eX; ly = sY;
  }
} else {
  // 情况 B: 平行连接（同为纵或同为横），使用你原有的三段式 Z 型折线
  if (!isStartVert) { 
    // 全水平方向
    const cornerX = side === "left" ? sX - bendOffset : sX + bendOffset;
    pathD = `M ${sX} ${sY} L ${cornerX} ${sY} L ${cornerX} ${eY} L ${eX} ${eY}`;
    lx = cornerX; ly = (sY + eY) / 2;
  } else {
    // 全垂直方向
    const cornerY = side === "top" ? sY - bendOffset : sY + bendOffset;
    pathD = `M ${sX} ${sY} L ${sX} ${cornerY} L ${eX} ${cornerY} L ${eX} ${eY}`;
    lx = (sX + eX) / 2; ly = cornerY;
  }
}

    // --- 5. 渲染 ---
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathD);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", conn.color);
    path.setAttribute("stroke-width", "2.8");
    if (conn.dashed) {
      path.setAttribute("stroke-dasharray", "5,5");
    }
    path.style.strokeLinejoin = "round";

    if (!conn.isObjective) {
      const markerId = ensureMarker(defs, conn.color);
      path.setAttribute("marker-end", `url(#${markerId})`);
    }
    svg.appendChild(path);

    if (conn.label) {
      // 传入颜色供 createLabel 边框使用
      svg.appendChild(createLabel(conn.label, lx, ly, conn.color));
    }
  });
}

// ==================== 初始化函数 ====================
function initialize() {
  const slideContainer = document.getElementById("slide3");
  if (!slideContainer) return;

  state.nodes = Array.from(
    slideContainer.querySelectorAll(".node, .large-node, .small-node")
  );
  if (state.nodes.length === 0) return;

  initLayout();
  drawLines();

  // 响应式
  window.addEventListener("resize", () => {
    clearTimeout(state.resizeTimer);
    state.resizeTimer = setTimeout(() => {
      initLayout();
      drawLines();
    }, 200);
  });
}

// ==================== 启动 ====================
window.addEventListener("load", initialize);