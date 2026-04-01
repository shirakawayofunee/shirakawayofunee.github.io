
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
// ==================== 核心画线函数（电路板式路由优化版） ====================
function drawLines() {
  const svg = document.getElementById("lines");
  if (!svg) return;

  const defs = svg.querySelector("defs") || document.createElementNS("http://www.w3.org/2000/svg", "defs");
  svg.innerHTML = "";
  svg.appendChild(defs);

  // 1. 初始化每个节点的接口计数器（上下左右四个方向）
  const nodeSlots = state.nodePositions.map(() => ({
    top: { current: 0, total: 0 },
    bottom: { current: 0, total: 0 },
    left: { current: 0, total: 0 },
    right: { current: 0, total: 0 }
  }));

  // 2. 第一遍预处理：统计每个方向的连线数，用于计算居中的槽位
  connections.forEach(conn => {
    const p1 = state.nodePositions[conn.from];
    const p2 = state.nodePositions[conn.to];
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;

    // 简易路由方向判断逻辑
    let dirOut, dirIn;
    if (Math.abs(dx) > Math.abs(dy)) {
      dirOut = dx > 0 ? 'right' : 'left';
      dirIn = dx > 0 ? 'left' : 'right';
    } else {
      dirOut = dy > 0 ? 'bottom' : 'top';
      dirIn = dy > 0 ? 'top' : 'bottom';
    }
    nodeSlots[conn.from][dirOut].total++;
    nodeSlots[conn.to][dirIn].total++;
  });

  // 3. 第二遍：正式绘制
  connections.forEach((conn, index) => {
    const p1 = state.nodePositions[conn.from];
    const p2 = state.nodePositions[conn.to];
    
    // 确定方向
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const isHoriz = Math.abs(dx) > Math.abs(dy);
    const dirOut = isHoriz ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'bottom' : 'top');
    const dirIn = isHoriz ? (dx > 0 ? 'left' : 'right') : (dy > 0 ? 'top' : 'bottom');

    // 计算槽位偏移 (让线在边缘均匀排开)
    const getOffset = (slotInfo) => {
      const step = 22; // 线与线之间的间距
      const startOffset = -(slotInfo.total - 1) * step / 2;
      return startOffset + (slotInfo.current++) * step;
    };

    const offsetOut = getOffset(nodeSlots[conn.from][dirOut]);
    const offsetIn = getOffset(nodeSlots[conn.to][dirIn]);

    // 起点和终点 (根据 Slot 偏移)
    let sX = p1.x, sY = p1.y, eX = p2.x, eY = p2.y;
    const r1 = p1.radius, r2 = p2.radius + 10;

    if (dirOut === 'right') { sX += r1; sY += offsetOut; }
    else if (dirOut === 'left') { sX -= r1; sY += offsetOut; }
    else if (dirOut === 'top') { sY -= r1; sX += offsetOut; }
    else { sY += r1; sX += offsetOut; }

    if (dirIn === 'right') { eX += r2; eY += offsetIn; }
    else if (dirIn === 'left') { eX -= r2; eY += offsetIn; }
    else if (dirIn === 'top') { eY -= r2; eX += offsetIn; }
    else { eY += r2; eX += offsetIn; }

    // === 核心：阶梯车道设计 (防止折线中段重合) ===
    const laneOffset = (index - connections.length / 2) * 14; 
    let pathD = "";
    let labelX, labelY;

    if (isHoriz) {
      // Z字型：水平 -> 垂直 -> 水平
      const midX = (sX + eX) / 2 + laneOffset;
      pathD = `M ${sX} ${sY} L ${midX} ${sY} L ${midX} ${eY} L ${eX} ${eY}`;
      // 标签放在第一个转弯点 (像转接头一样)
      labelX = midX;
      labelY = sY;
    } else {
      // Z字型：垂直 -> 水平 -> 垂直
      const midY = (sY + eY) / 2 + laneOffset;
      pathD = `M ${sX} ${sY} L ${sX} ${midY} L ${eX} ${midY} L ${eX} ${eY}`;
      labelX = sX;
      labelY = midY;
    }

    // 4. 绘线
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathD);
    path.style.stroke = conn.color;
    path.style.strokeWidth = "2.8";
    path.style.fill = "none";
    path.style.strokeLinejoin = "round"; // 关键：自动圆角效果
    path.style.strokeLinecap = "round";

    if (!conn.isObjective) {
      const markerId = ensureMarker(defs, conn.color);
      path.setAttribute("marker-end", `url(#${markerId})`);
    }
    svg.appendChild(path);

    // 5. 绘标签 (转接头位置)
    svg.appendChild(createLabel(conn.label, labelX, labelY));
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