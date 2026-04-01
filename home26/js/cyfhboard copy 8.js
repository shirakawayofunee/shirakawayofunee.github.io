
  const connections = [
/*     { from: 0, to: 1, label: "Lの主観:\n栽培、愛する部下", color: "#b2160b", dashed: false, isObjective: false },
    { from: 0, to: 1, label: "客観的関係:\n上司と部下", color: "#f39c12", dashed: true, isObjective: true },
    { from: 1, to: 0, label: "Severoの主観:\n劣情、求不得苦", color: "#b2160b", dashed: false, isObjective: false }, */

    // 其他关系（保持原有）
/*     { from: 0, to: 2, label: "栽培、野放し", color: "#b2160b", dashed: false },
    { from: 2, to: 0, label: "尊敬", color: "#b2160b", dashed: false },
    { from: 0, to: 3, label: "栽培、教導", color: "#b2160b", dashed: false },
    { from: 3, to: 0, label: "敬愛", color: "#b2160b", dashed: false }, */
    { 
      from: 0, to: 4, 
      label: "やり返す", 
      color: "#b2160b",
      // --- 自定义控制参数 ---
      side: "left",       // 强制从 L 的左边出发
      sideIn: "right",      // 强制进入 X 的顶部
      slot: -1,           // 在左边边缘的排队位置（-1偏上, 0居中, 1偏下）
      bendOffset: 50,     // 第一段横线走多远才转弯（像素）
      laneOffset: -30     // 转弯后的纵向偏移（用于避开其他线）
    },
/*     { from: 4, to: 0, label: "敬慕の愛、利用", color: "#b2160b", dashed: true },
    { from: 0, to: 6, label: "元同僚", color: "#b2160b", dashed: true },
    { from: 6, to: 0, label: "利用", color: "#b2160b", dashed: true },
    { from: 6, to: 7, label: "リーダー", color: "#b2160b", dashed: false },
    { from: 0, to: 7, label: "元の組織、反逆", color: "#b2160b", dashed: true },
    { from: 0, to: 8, label: "探り、GB", color: "#b2160b", dashed: true },
    { from: 4, to: 5, label: "反逆", color: "#b2160b", dashed: true }, */
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

  // ==================== 核心画线函数（优化） ====================
// ==================== 核心画线函数（修正起点重叠 + 路径分离） ====================
// ==================== 核心画线函数（电路板优化版） ====================
function drawLines() {
  const svg = document.getElementById("lines");
  if (!svg) return;
  const defs = svg.querySelector("defs");
  svg.innerHTML = "";
  svg.appendChild(defs);

  connections.forEach((conn) => {
    const p1 = state.nodePositions[conn.from];
    const p2 = state.nodePositions[conn.to];
    if (!p1 || !p2) return;

    // 1. 获取自定义参数（如果没有，则给默认值）
    const side = conn.side || (p2.x > p1.x ? 'right' : 'left');
    const sideIn = conn.sideIn || (p2.x > p1.x ? 'left' : 'right');
    const slot = conn.slot || 0; // 控制在节点边缘的上下/左右偏移
    const bendOffset = conn.bendOffset || 40; // 决定“转接头”离起始点的距离

    // 2. 计算精确起点 (sX, sY)
    let sX = p1.x, sY = p1.y;
    const step = 20; // 这里的 20 是插槽间距
    if (side === 'left') { sX -= p1.radius; sY += slot * step; }
    else if (side === 'right') { sX += p1.radius; sY += slot * step; }
    else if (side === 'top') { sY -= p1.radius; sX += slot * step; }
    else if (side === 'bottom') { sY += p1.radius; sX += slot * step; }

    // 3. 计算精确终点 (eX, eY)
    let eX = p2.x, eY = p2.y;
    const margin = 15;
    if (sideIn === 'left') eX -= (p2.radius + margin);
    else if (sideIn === 'right') eX += (p2.radius + margin);
    else if (sideIn === 'top') eY -= (p2.radius + margin);
    else if (sideIn === 'bottom') eY += (p2.radius + margin);

    // 4. 构建路径：起点 -> 转点1(转接头) -> 转点2 -> 终点
    let pathD, lx, ly;

    if (side === 'left' || side === 'right') {
      // 水平出发
      const cornerX = side === 'left' ? sX - bendOffset : sX + bendOffset;
      // 这里你可以通过 conn.laneOffset 进一步微调转弯后的 Y 轴
      const midY = conn.laneOffset ? sY + conn.laneOffset : eY; 
      
      pathD = `M ${sX} ${sY} L ${cornerX} ${sY} L ${cornerX} ${midY} L ${eX} ${midY} L ${eX} ${eY}`;
      lx = cornerX; ly = sY; // 标签就在第一个转弯点
    } else {
      // 垂直出发
      const cornerY = side === 'top' ? sY - bendOffset : sY + bendOffset;
      const midX = conn.laneOffset ? sX + conn.laneOffset : eX;

      pathD = `M ${sX} ${sY} L ${sX} ${cornerY} L ${midX} ${cornerY} L ${midX} ${eY} L ${eX} ${eY}`;
      lx = sX; ly = cornerY;
    }

    // 5. 渲染线条
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathD);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", conn.color);
    path.setAttribute("stroke-width", "2.8");
    path.style.strokeLinejoin = "round"; // 产生你想要的圆角效果

    if (!conn.isObjective) {
      const mId = ensureMarker(defs, conn.color);
      path.setAttribute("marker-end", `url(#${mId})`);
    }
    svg.appendChild(path);

    // 6. 渲染“转接头”标签
    svg.appendChild(createLabel(conn.label, lx, ly));
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