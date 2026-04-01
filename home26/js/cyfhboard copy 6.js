
  const connections = [
    { from: 0, to: 1, label: "Lの主観:\n栽培、愛する部下", color: "#b2160b", dashed: false, isObjective: false },
    { from: 0, to: 1, label: "客観的関係:\n上司と部下", color: "#f39c12", dashed: true, isObjective: true },
    { from: 1, to: 0, label: "Severoの主観:\n劣情、求不得苦", color: "#b2160b", dashed: false, isObjective: false },

    // 其他关系（保持原有）
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

  // ==================== 状态 ====================
  const state = {
    nodes: [],
    nodePositions: [], // 缓存坐标
    resizeTimer: null,
  };

  // ==================== 动态创建箭头 ====================
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

  // ==================== 初始化布局（你原来的版本，删除了拖动相关） ====================
  function initLayout() {
    const board = document.getElementById("board");
    if (!board) return;
    const viewportWidth = window.innerWidth;
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const isMobile = viewportWidth <= 576;
    const baseRadius = isMobile ? Math.min(viewportWidth, viewportHeight) * 0.35 : Math.min(viewportWidth, viewportHeight) * 0.25;

    const positions = [
      [0, 0],   // Leopold (0)
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
      const x = Math.max(60, Math.min(viewportWidth - 60, viewportWidth / 2 + dx * baseRadius));
      const y = Math.max(80, Math.min(viewportHeight - 80, viewportHeight / 2 + dy * baseRadius));
      
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      node.style.transform = "translate(-50%, -50%)";

      state.nodePositions[index] = { 
        x: x, 
        y: y, 
        radius: (node.offsetWidth || (isMobile ? 60 : 120)) / 2 
      };
    });

    board.style.minHeight = `${viewportHeight}px`;
  }

  // ==================== 核心画线函数（已优化） ====================
// ==================== 核心画线函数（已修正起点重叠 + 路径分离） ====================
function drawLines() {
  const svg = document.getElementById("lines");
  if (!svg) return;

  const defs = svg.querySelector("defs") || document.createElementNS("http://www.w3.org/2000/svg", "defs");
  svg.innerHTML = "";
  svg.appendChild(defs);

  // 按 pair 分组
  const pairMap = new Map();

  connections.forEach(conn => {
    if (conn.from >= state.nodes.length || conn.to >= state.nodes.length) return;
    const key = `${Math.min(conn.from, conn.to)}-${Math.max(conn.from, conn.to)}`;
    if (!pairMap.has(key)) pairMap.set(key, []);
    pairMap.get(key).push(conn);
  });

  pairMap.forEach((pairConns, pairKey) => {
    const [fromIdx, toIdx] = pairKey.split('-').map(Number);
    const pos1 = state.nodePositions[fromIdx];
    const pos2 = state.nodePositions[toIdx];
    if (!pos1 || !pos2) return;

    const dx = pos2.x - pos1.x;
    const dy = pos2.y - pos1.y;
    const isHorizontalPair = Math.abs(dy) < 25;

    // === 特殊处理：L-S 三条线（纯水平平行，不变）===
    if (pairConns.length === 3 && isHorizontalPair) {
      pairConns.sort((a, b) => {
        if (a.isObjective) return 0;
        if (a.from === 0 && a.to === 1) return -1;
        return 1;
      });

      const baseGap = window.innerWidth <= 576 ? 22 : 70;

      pairConns.forEach((conn, index) => {
        const offset = (index - 1) * baseGap;
        const startX = pos1.x + pos1.radius + 8;
        const endX = pos2.x - pos2.radius - 12;
        const y = pos1.y + offset;

        const pathD = `M ${startX} ${y} L ${endX} ${y}`;

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", pathD);
        path.classList.add("relation-line");
        if (conn.dashed) path.classList.add("dashed-line");
        path.style.stroke = conn.color;
        path.style.strokeWidth = "2.8";

        if (!conn.isObjective) {
          const markerId = ensureMarker(defs, conn.color);
          path.setAttribute("marker-end", `url(#${markerId})`);
        }

        svg.appendChild(path);

        const labelX = (startX + endX) / 2;
        const labelY = y - (index === 0 ? 18 : index === 2 ? -18 : 0);
        const textGroup = createLabel(conn.label, labelX, labelY);
        svg.appendChild(textGroup);
      });
      return;
    }

    // === 普通情况：1条或2条线（关键修正在这里）===
    pairConns.forEach((conn, subIndex) => {
      const gap = window.innerWidth <= 576 ? 18 : 45;           // 增大间距，减少重叠
      const offset = (subIndex - (pairConns.length - 1) / 2) * gap;

      // 新增：弯点独特偏移（解决垂直/水平段重叠）
      const bendShift = subIndex * 12 - (pairConns.length - 1) * 6;

      const isHoriz = Math.abs(dx) > Math.abs(dy);

      let pathD = "";
      let labelX = 0, labelY = 0;

      if (isHoriz) {
        const dirX = dx >= 0 ? 1 : -1;
        const startX = pos1.x + dirX * pos1.radius;
        const endX = pos2.x - dirX * (pos2.radius + 12);
        const sY = pos1.y + offset;
        const eY = pos2.y + offset;
        const mX = (pos1.x + pos2.x) / 2 + bendShift;   // ← 关键：弯点错开

        pathD = `M ${startX} ${sY} L ${mX} ${sY} L ${mX} ${eY} L ${endX} ${eY}`;
        labelX = mX;
        labelY = (sY + eY) / 2 - 8;
      } else {
        const dirY = dy >= 0 ? 1 : -1;
        const startY = pos1.y + dirY * pos1.radius;
        const endY = pos2.y - dirY * (pos2.radius + 12);
        const sX = pos1.x + offset;
        const eX = pos2.x + offset;
        const mY = (pos1.y + pos2.y) / 2 + bendShift;   // ← 关键：弯点错开

        pathD = `M ${sX} ${startY} L ${sX} ${mY} L ${eX} ${mY} L ${eX} ${endY}`;
        labelX = (sX + eX) / 2;
        labelY = mY - 8;
      }

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", pathD);
      path.classList.add("relation-line");
      if (conn.dashed) path.classList.add("dashed-line");
      path.style.stroke = conn.color;
      path.style.strokeWidth = "2.6";

      if (!conn.isObjective) {
        const markerId = ensureMarker(defs, conn.color);
        path.setAttribute("marker-end", `url(#${markerId})`);
      }

      svg.appendChild(path);

      const textGroup = createLabel(conn.label, labelX, labelY);
      svg.appendChild(textGroup);
    });
  });
}

  // ==================== 创建标签（优化版） ====================
  function createLabel(text, x, y) {
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    const padding = window.innerWidth <= 576 ? 5 : 8;

    const lines = text.split(/[、\n]/);

    const textEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textEl.setAttribute("x", x);
    textEl.setAttribute("y", y);
    textEl.setAttribute("text-anchor", "middle");
    textEl.setAttribute("dominant-baseline", "middle");
    textEl.setAttribute("font-size", window.innerWidth <= 576 ? "9.5px" : "12.5px");
    textEl.setAttribute("fill", "#ffffff");

    lines.forEach((line, i) => {
      if (!line.trim()) return;
      const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      tspan.setAttribute("x", x);
      tspan.setAttribute("dy", i === 0 ? "0" : "1.35em");
      tspan.textContent = line.trim();
      textEl.appendChild(tspan);
    });

    // 计算真实尺寸
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
    rect.setAttribute("rx", window.innerWidth <= 576 ? "4" : "6");
    rect.setAttribute("fill", "rgba(30, 35, 55, 0.75)");
    rect.setAttribute("stroke", "rgba(255,255,255,0.12)");

    group.appendChild(rect);
    group.appendChild(textEl);
    return group;
  }

  // ==================== 初始化函数（已删除拖动） ====================
  function initialize() {
    const slideContainer = document.getElementById("slide3");
    if (!slideContainer) return;
    
    state.nodes = Array.from(slideContainer.querySelectorAll(".node, .large-node, .small-node"));
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