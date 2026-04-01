const connections = [
    { from: 0, to: 1, label: "栽培、我が子のように大切にする、最も愛する部下", color: "#b2160b", side: "right", sideIn: "left", fromSlot: -1, toSlot: -1, bendOffset: 60 },
    { from: 1, to: 0, label: "劣情、湿度高めの激重愛、求不得苦", color: "#b2160b", side: "left", sideIn: "right", fromSlot: 1, toSlot: 1, bendOffset: 60 },
    { from: 0, to: 2, label: "栽培、野放し", color: "#b2160b", side: "bottom", sideIn: "top", fromSlot: 1, toSlot: 0, bendOffset: 40 },
    { from: 2, to: 0, label: "尊敬", color: "#b2160b", side: "top", sideIn: "bottom", fromSlot: 1, toSlot: 2, bendOffset: 60 },
    { from: 0, to: 3, label: "栽培、教導", color: "#b2160b", side: "bottom", sideIn: "top", fromSlot: 2, toSlot: 0, bendOffset: 80 },
    { from: 3, to: 0, label: "敬愛", color: "#b2160b", side: "top", sideIn: "bottom", fromSlot: 0, toSlot: 3, bendOffset: 100 },
    // L 与 X 的复杂关系
    { from: 0, to: 4, label: "やり返す", color: "#b2160b",  side: "left", sideIn: "right", fromSlot: 1, toSlot: 1, bendOffset: 60 },
    { from: 0, to: 4, label: "宿命のライバル/好敵手、複雑な協力关系", color: "#b2160b",  side: "left", sideIn: "right", fromSlot: -2, toSlot: -2, bendOffset: 60, isObjective: true },
    { from: 4, to: 0, label: "敬慕の愛、利用/理解→怜れみ、やがて愛", color: "#b2160b",  side: "right", sideIn: "left", fromSlot: -5, toSlot: -5, bendOffset: 60 },
    // 其他
    { from: 0, to: 6, label: "元同僚、今は顧客", color: "#b2160b",  side: "top", sideIn: "left", fromSlot: 1, toSlot: 0, bendOffset: 50 },
    { from: 6, to: 0, label: "利用", color: "#b2160b",  side: "bottom", sideIn: "top", fromSlot: 0, toSlot: 2, bendOffset: 40 },
    { from: 0, to: 7, label: "元の組織、反逆", color: "#b2160b",  side: "top", sideIn: "bottom", fromSlot: -1, toSlot: 0, bendOffset: 70, isObjective: false },
    { from: 4, to: 5, label: "反逆", color: "#b2160b",  side: "top", sideIn: "left", fromSlot: 0, toSlot: -1, bendOffset: 140 }
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
    [2.7, 0], // Severo (1)  —— 与 L 同一水平线
    [1, 1.2], // Jin (2)
    [2, 1.2], // Ji (3)
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
    marker.setAttribute("orient", "auto-start-reverse");

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

    // --- 4. 路由逻辑 ---
    let pathD, lx, ly;
    const threshold = 5;

    if (
      Math.abs(sX - eX) < threshold &&
      (side === "top" || side === "bottom")
    ) {
      pathD = `M ${sX} ${sY} L ${eX} ${eY}`;
      lx = sX;
      ly = (sY + eY) / 2;
    } else if (
      Math.abs(sY - eY) < threshold &&
      (side === "left" || side === "right")
    ) {
      pathD = `M ${sX} ${sY} L ${eX} ${eY}`;
      lx = (sX + eX) / 2;
      ly = sY;
    } else {
      if (side === "left" || side === "right") {
        const cornerX = side === "left" ? sX - bendOffset : sX + bendOffset;
        pathD = `M ${sX} ${sY} L ${cornerX} ${sY} L ${cornerX} ${eY} L ${eX} ${eY}`;
        lx = cornerX;
        ly = sY;
      } else {
        const cornerY = side === "top" ? sY - bendOffset : sY + bendOffset;
        pathD = `M ${sX} ${sY} L ${sX} ${cornerY} L ${eX} ${cornerY} L ${eX} ${eY}`;
        lx = sX;
        ly = cornerY;
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