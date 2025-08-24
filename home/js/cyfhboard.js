const connections = [
  { from: 0, to: 1, label: "栽培、我が子のように大切にする、最も愛する部下", color: "#E41900", dashed: false }, // L -> Severo (red)
  { from: 1, to: 0, label: "劣情、湿度高めの激重愛、求不得苦", color: "#E41900", dashed: false }, // Severo -> L (blue)
  { from: 0, to: 2, label: "栽培、野放し", color: "#E41900", dashed: false }, // L -> Jin
  { from: 2, to: 0, label: "尊敬", color: "#0000FE", dashed: false }, // Jin -> L
  { from: 0, to: 3, label: "栽培、教導", color: "#0000FE", dashed: false }, // L -> Ji
  { from: 3, to: 0, label: "敬愛", color: "#E41900", dashed: false }, // Ji -> L
  { from: 0, to: 4, label: "やり返す、敵であり味方、複雑な協力関係", color: "#0000FE", dashed: true }, // L -> X
  { from: 4, to: 0, label: "敬慕の愛、利用", color: "#E41900", dashed: true }, // X -> L
  { from: 0, to: 6, label: "元同僚、今は顧客", color: "#0000FE", dashed: true }, // L -> LY
  { from: 6, to: 0, label: "利用", color: "#0000FE", dashed: true }, // LY -> L
  { from: 6, to: 7, label: "リーダー", color: "#E41900", dashed: false }, // LY -> DD
  { from: 0, to: 7, label: "元の組織、反逆", color: "#000000", dashed: true }, // L -> DD
  { from: 0, to: 5, label: "嫌悪", color: "#000000", dashed: true }, // L -> ST
  { from: 0, to: 8, label: "探り、GB、女攻め男受け", color: "#000000", dashed: true }, // L -> player
  { from: 4, to: 5, label: "反逆", color: "#000000", dashed: true }, // X -> ST
];

const state = {
  dragging: false,
  nodes: [],
  resizeTimer: null,
};

function initLayout() {
  const board = document.getElementById("board");
  const viewportWidth = window.innerWidth;
  const viewportHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  const boardHeight = Math.max(board.scrollHeight, viewportHeight);
  const isMobile = viewportWidth <= 576;
  const baseRadius = isMobile
    ? Math.min(viewportWidth, viewportHeight) * 0.35
    : Math.min(viewportWidth, viewportHeight) * 0.25;

  const positions = [
    [0, 0], // Leopold
    [-1.3, 1.2], // Severo
    [1.7, 0.9], // Jin
    [-1.1, -1.2], // Ji
    [-2.7, 0], // X
    [-3, -1.2], // ST
    [2.1, -1], // LY
    [3, 0], // DD
    [-2.9, 1.2], // Player
  ];

  state.nodes.forEach((node, index) => {
    const avatar = node.querySelector(".avatar");
    const [dx, dy] = positions[index];
    const x = Math.max(60, Math.min(viewportWidth - 60, viewportWidth / 2 + dx * baseRadius));
    const y = Math.max(80, Math.min(viewportHeight - 80, viewportHeight / 2 + dy * baseRadius));
    Object.assign(node.style, {
      left: `${x}px`,
      top: `${y}px`,
      transform: "translate(-50%, -50%)",
      transition: state.dragging ? "none" : "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
      zIndex: 2,
    });
  });

  board.style.minHeight = `${boardHeight}px`;
  document.getElementById("lines").setAttribute("viewBox", `0 0 ${viewportWidth} ${boardHeight}`);
}

function drawLines() {
  const svg = document.getElementById("lines");
  const defs = svg.querySelector("defs");
  svg.innerHTML = "";
  svg.appendChild(defs);

  // 按from-to和to-from配对分组，确保双向关系按顺序处理
  const processedPairs = new Set();
  connections.forEach((conn, index) => {
    if (conn.from >= state.nodes.length || conn.to >= state.nodes.length) return;

    const fromNode = state.nodes[conn.from];
    const toNode = state.nodes[conn.to];
    const fromAvatar = fromNode.querySelector(".avatar");
    const toAvatar = toNode.querySelector(".avatar");
    const fromRect = fromAvatar.getBoundingClientRect();
    const toRect = toAvatar.getBoundingClientRect();
    const boardRect = document.getElementById("board").getBoundingClientRect();

    const centerStart = {
      x: fromRect.left + fromRect.width / 2 - boardRect.left,
      y: fromRect.top + fromRect.height / 2 - boardRect.top,
    };
    const centerEnd = {
      x: toRect.left + toRect.width / 2 - boardRect.left,
      y: toRect.top + toRect.height / 2 - boardRect.top,
    };

    // 计算箭头起点和终点到avatar边缘
    const angle = Math.atan2(centerEnd.y - centerStart.y, centerEnd.x - centerStart.x);
    const fromRadius = fromRect.width / 2 + 10; // 起点偏移到avatar边缘外10像素
    const toRadius = toRect.width / 2 + 10; // 终点偏移到avatar边缘外10像素
    const start = {
      x: centerStart.x + Math.cos(angle) * fromRadius,
      y: centerStart.y + Math.sin(angle) * fromRadius,
    };
    const end = {
      x: centerEnd.x - Math.cos(angle) * toRadius,
      y: centerEnd.y - Math.sin(angle) * toRadius,
    };

    // 为双向关系添加平行偏移
    let offsetX = 0, offsetY = 0;
    const pairKey = [Math.min(conn.from, conn.to), Math.max(conn.from, conn.to)].join('-');
    const isReverse = connections.some(
      (c, i) => i !== index && c.from === conn.to && c.to === conn.from
    );

    if (isReverse && !processedPairs.has(pairKey)) {
      // 处理双向关系的两条线
      const offset = 65; // 增加平行线间距到15像素
      const perpAngle = angle + Math.PI / 2;
      // 第一条线（from < to，例如L到其他角色）
      if (conn.from < conn.to) {
        offsetX = Math.cos(perpAngle) * offset;
        offsetY = Math.sin(perpAngle) * offset;
      } else {
        // 第二条线（from > to，例如其他角色到L）
        offsetX = -Math.cos(perpAngle) * offset;
        offsetY = -Math.sin(perpAngle) * offset;
      }
      processedPairs.add(pairKey);
    }

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.classList.add("relation-line");
    if (conn.dashed) path.classList.add("dashed-line");
    path.setAttribute("marker-end", `url(#arrowhead-${conn.color.replace("#", "")})`);
    path.setAttribute("d", `M ${start.x + offsetX} ${start.y + offsetY} L ${end.x + offsetX} ${end.y + offsetY}`);
    path.style.stroke = conn.color;
    path.style.zIndex = 3;

    // 动态创建箭头标记
    const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
    marker.setAttribute("id", `arrowhead-${conn.color.replace("#", "")}`);
    marker.setAttribute("markerWidth", "10");
    marker.setAttribute("markerHeight", "7");
    marker.setAttribute("refX", "9");
    marker.setAttribute("refY", "3.5");
    marker.setAttribute("orient", "auto");
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", "0 0, 10 3.5, 0 7");
    polygon.setAttribute("fill", conn.color);
    marker.appendChild(polygon);
    defs.appendChild(marker);

    const textGroup = createConnectionLabel(conn.label, start, end, offsetX, offsetY);
    svg.appendChild(path);
    svg.appendChild(textGroup);
  });
}

function createConnectionLabel(text, start, end, offsetX, offsetY) {
  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const padding = 6;

  const lines = text.split(/[、\n]/);
  const angle = Math.atan2(end.y - start.y, end.x - start.x);
  const labelPos = {
    x: (start.x + end.x) / 2 + offsetX,
    y: (start.y + end.y) / 2 + offsetY - 5,
  };

  const textEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
  textEl.setAttribute("x", labelPos.x);
  textEl.setAttribute("y", labelPos.y);
  textEl.setAttribute("text-anchor", "middle");
  textEl.setAttribute("dominant-baseline", "middle");
  textEl.setAttribute("fill", "#ecf0f1");
  textEl.setAttribute("font-size", window.innerWidth <= 576 ? "10px" : "14px");

  lines.forEach((line, index) => {
    if (!line) return;
    const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    tspan.setAttribute("x", labelPos.x);
    tspan.setAttribute("dy", index === 0 ? "0" : "1.2em");
    tspan.textContent = line;
    textEl.appendChild(tspan);
  });

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
  rect.setAttribute("fill", "rgba(26, 34, 85, 0.9)");
  rect.setAttribute("rx", window.innerWidth <= 576 ? "3" : "5");

  group.appendChild(rect);
  group.appendChild(textEl);
  return group;
}

function initDragSystem() {
  let dragInfo = null;

  state.nodes.forEach((node) => {
    node.addEventListener("mousedown", startDrag);
    node.addEventListener("touchstart", (e) => {
      e.preventDefault();
      startDrag(e.touches[0]);
    }, { passive: false });
  });

  function startDrag(e) {
    state.dragging = true;
    const targetNode = e.target.closest(".node, .large-node");
    const rect = targetNode.getBoundingClientRect();
    dragInfo = {
      node: targetNode,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
    };

    document.addEventListener("mousemove", onDrag);
    document.addEventListener("mouseup", onDragEnd);
    document.addEventListener("touchmove", onTouchDrag, { passive: false });
    document.addEventListener("touchend", onDragEnd);
  }

  function onDrag(e) {
    updatePosition(e.clientX, e.clientY);
  }

  function onTouchDrag(e) {
    e.preventDefault();
    updatePosition(e.touches[0].clientX, e.touches[0].clientY);
  }

  function updatePosition(clientX, clientY) {
    if (!dragInfo) return;
    const { node, offsetX, offsetY } = dragInfo;
    const boardRect = document.getElementById("board").getBoundingClientRect();
    
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const nodeWidth = node.offsetWidth;
    const nodeHeight = node.offsetHeight;

    const newX = Math.max(nodeWidth / 2, Math.min(
      clientX - offsetX,
      viewportWidth - nodeWidth / 2
    ));
    const newY = Math.max(nodeHeight / 2, Math.min(
      clientY - offsetY,
      viewportHeight - nodeHeight / 2
    ));

    Object.assign(node.style, {
      left: `${newX}px`,
      top: `${newY}px`,
      transform: "translate(-50%, -50%)",
      transition: "none",
      zIndex: 2,
    });

    requestAnimationFrame(drawLines);
  }

  function onDragEnd() {
    state.dragging = false;
    dragInfo = null;
    document.removeEventListener("mousemove", onDrag);
    document.removeEventListener("mouseup", onDragEnd);
    document.removeEventListener("touchmove", onTouchDrag);
    document.removeEventListener("touchend", onDragEnd);
  }
}

function initResponsive() {
  window.addEventListener("resize", () => {
    clearTimeout(state.resizeTimer);
    state.resizeTimer = setTimeout(() => {
      initLayout();
      drawLines();
    }, 200);
  });
}

function initialize() {
  state.nodes = Array.from(document.querySelectorAll(".node, .large-node"));
  if (state.nodes.length === 0) return;

  const bgImage = new Image();
  bgImage.src = "../img/bg_full.png";
  bgImage.onload = () => document.body.classList.add("loaded");
  bgImage.onerror = () => document.body.classList.add("loaded");

  initLayout();
  initDragSystem();
  initResponsive();
  drawLines();
  setTimeout(() => document.body.classList.add("loaded"), 3000);
}

window.addEventListener("load", initialize);