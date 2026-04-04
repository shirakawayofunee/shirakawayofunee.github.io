// 节点位置配置 (虚拟坐标系)
const nodeConfig = [
  { id: 0, pos: [0, 0] },         // 中心主角 L
  { id: 1, pos: [2.5, 0] },       // Severo
  { id: 2, pos: [1.7, 1.2] },     // 堇
  { id: 3, pos: [2.5, 1.2] },     // 蓟
  { id: 4, pos: [-3, 0] },      // X
  { id: 5, pos: [-1, -1.1] },     // 上庭
  { id: 6, pos: [3.2, -1.1] },      // 牧者
  { id: 7, pos: [1, -1.1] },      // 福音地
  { id: 8, pos: [-2, 1.2] }     // Shp-13
];

// ==================== 1. 配置数据 ====================

// 连线关系配置
const connections = [
  // 客观描述线：无箭头，直线
  { from: 0, to: 4, label: "宿命のライバル / 好敵手 / 腐れ縁\n複雑な協力关系", color: "#b2160b", isObjective: true, side: "left", sideIn: "right", fromSlot: 0, toSlot: 0 },

  // 直连带箭头：X -> L标签靠左侧
  { from: 4, to: 0, label: "賞賛→理解し、憐れみ、やがて愛に", color: "#b2160b", isStraight: true, side: "right", sideIn: "left", fromSlot: -3, toSlot: -3 },

  // 直连带箭头：L -> X标签靠右侧
  { from: 0, to: 4, label: "嫌い→不倶戴天、やり返す→理解", color: "#b2160b", isStraight: true, side: "left", sideIn: "right", fromSlot: 3, toSlot: 3 },
  
  // 折线：常规逻辑
  { from: 0, to: 1, label: "(恩師)守護 / 栽培 / 出資\n我が子同然に慈しむ\n最も愛する部下", color: "#b2160b", isStraight: true, side: "right", sideIn: "left", fromSlot: -1, toSlot: -1,},
  { from: 1, to: 0, label: "(弟子)劣情\n湿度高めの激重愛\n求不得苦", color: "#b2160b", side: "left", sideIn: "right", isStraight: true, fromSlot: 3, toSlot: 3,},
  { from: 0, to: 2, label: "(恩師)守護 / 栽培 / 出資\n我が子同然に慈しむ", color: "#b2160b", side: "bottom", sideIn: "left", fromSlot: 3, toSlot: -1, bendOffset: 50 },
  { from: 7, to: 0, label: "元同僚 / 今は顧客", color: "#b2160b", side: "left", sideIn: "top", fromSlot: 2, toSlot: 0, bendOffset: 70 },
  { from: 4, to: 5, label: "反逆", color: "#b2160b", side: "top", sideIn: "left", fromSlot: 0, toSlot: -1, bendOffset: 80 },
  { from: 0, to: 7, label: "反逆", color: "#b2160b", side: "right", sideIn: "bottom", fromSlot: -5, toSlot: 0, bendOffset: 80 },
  { from: 5, to: 7, label: "宿敵", color: "#b2160b", side: "right", sideIn: "left", fromSlot: -1, toSlot: -1, bendOffset: 20, isObjective: true },
  { from: 6, to: 7, label: "幹部", color: "#b2160b", side: "left", sideIn: "right",isStraight: true,  fromSlot: 0, toSlot: 0,},
  { from: 8, to: 0, label: "救いたい\n一切の不純物を含まない人類愛", color: "#b2160b", side: "right", sideIn: "left", fromSlot: -4, toSlot: 5, bendOffset: 50 },
  { from: 0, to: 8, label: "疑う→認める", color: "#b2160b", side: "bottom", sideIn: "right", fromSlot: -2, toSlot: 2, bendOffset: 10 },
  /* { from: 6, to: 8, label: "姉弟", color: "#b2160b", side: "bottom", sideIn: "bottom", fromSlot: -1, toSlot: -1, bendOffset: 20, isObjective: true }, */
{ from: 0, to: 8, label: "友達", color: "#b2160b", side: "bottom", sideIn: "right", fromSlot: -4, toSlot: -1, bendOffset: 20, isObjective: true },
];

 const state = {
  nodes: [],
  nodePositions: [], // 存储计算后的像素坐标和半径
  resizeTimer: null
};

// ==================== 1. 布局初始化 ====================

function initLayout() {
  const board = document.getElementById("board");
  if (!board) return;

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const isMobile = vw <= 768;
  
  // 基础分布半径
  const baseRadius = isMobile ? Math.min(vw, vh) * 0.38 : Math.min(vw, vh) * 0.26;

  state.nodes = Array.from(document.querySelectorAll('.node'));
  state.nodePositions = [];

  state.nodes.forEach((node, index) => {
      const config = nodeConfig[index]; // 假设 nodeConfig 在外部定义
      if (!config) return;

      const [dx, dy] = config.pos;
      const x = vw / 2 + dx * baseRadius;
      const y = vh / 2 + dy * baseRadius;

      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      node.style.transform = "translate(-50%, -50%)";

      const avatarEl = node.querySelector('.avatar');
      state.nodePositions[index] = {
          x: x,
          y: y,
          radius: (avatarEl ? avatarEl.offsetWidth : node.offsetWidth) / 2
      };
  });
}

// ==================== 2. 标签与 Marker 渲染 ====================

/**
* 创建多行文字标签
* 逻辑：手动计算总高度并偏移，确保整体垂直居中
*/
function createLineLabel(text, x, y, color) {
  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const isMobile = window.innerWidth <= 768;
  const paddingH = isMobile ? 6 : 10;
  const paddingV = isMobile ? 4 : 6;
  const fontSize = isMobile ? 10 : 12;
  const lineHeight = fontSize * 1.4;

  const textEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
  textEl.setAttribute("text-anchor", "middle");
  textEl.style.fontSize = fontSize + "px";
  textEl.style.fill = "#ffffff";
  textEl.style.fontFamily = "sans-serif";
  textEl.style.pointerEvents = "none";

  const lines = text.split('\n');
  const totalHeight = lines.length * lineHeight;
  
  // 垂直居中核心计算
  const startY = y - (totalHeight / 2) + (lineHeight / 1.5);

  lines.forEach((line, i) => {
      const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      tspan.setAttribute("x", x);
      tspan.setAttribute("y", startY + (i * lineHeight));
      tspan.textContent = line;
      textEl.appendChild(tspan);
  });

  // 必须先临时加入 DOM 才能测量 BBox
  const svg = document.getElementById("lines");
  svg.appendChild(textEl);
  const bbox = textEl.getBBox();
  
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", bbox.x - paddingH);
  rect.setAttribute("y", bbox.y - paddingV);
  rect.setAttribute("width", bbox.width + paddingH * 2);
  rect.setAttribute("height", bbox.height + paddingV * 2);
  rect.setAttribute("rx", "4");
  rect.setAttribute("fill", "rgba(25, 25, 25, 0.88)");
  rect.setAttribute("stroke", color);
  rect.setAttribute("stroke-width", "1");

  group.appendChild(rect);
  group.appendChild(textEl);
  return group;
}

/**
* 唯一箭头定义生成
* 修复：解决 ID 引用在某些环境下失效的问题
*/
function ensureUniqueMarker(defs, color, className) {
  const cleanColor = color.replace("#", "");
  const safeClassName = className ? className.replace(/[^a-zA-Z0-9]/g, '-') : 'default';
  const id = `arrow-${cleanColor}-${safeClassName}`;

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
      if (className) path.classList.add(`${className}-head`);
      
      marker.appendChild(path);
      defs.appendChild(marker);
  }
  return id;
}

// ==================== 3. 绘线核心逻辑 ====================

function drawLines() {
  const svg = document.getElementById("lines");
  if (!svg) return;

  let defs = svg.querySelector("defs") || document.createElementNS("http://www.w3.org/2000/svg", "defs");
  svg.innerHTML = "";
  svg.appendChild(defs);

  connections.forEach((conn) => { // 假设 connections 在外部定义
      const p1 = state.nodePositions[conn.from];
      const p2 = state.nodePositions[conn.to];
      if (!p1 || !p2) return;

      const side = conn.side || "right";
      const sideIn = conn.sideIn || "left";
      const fSlot = conn.fromSlot || 0;
      const tSlot = conn.toSlot || 0;
      const slotStep = 15;
      
      // 连线间距：防止线条紧贴头像图片
      const nodeMargin = 15; 

      // 计算起点 (sX, sY)
      let sX = p1.x, sY = p1.y;
      if (side === "left") { sX -= p1.radius + nodeMargin; sY += fSlot * slotStep; }
      else if (side === "right") { sX += p1.radius + nodeMargin; sY += fSlot * slotStep; }
      else if (side === "top") { sY -= p1.radius + nodeMargin; sX += fSlot * slotStep; }
      else if (side === "bottom") { sY += p1.radius + nodeMargin; sX += fSlot * slotStep; }

      // 计算终点 (eX, eY)
      let eX = p2.x, eY = p2.y;
      const headMargin = conn.isObjective ? 0 : 10;
      if (sideIn === "left") { eX -= p2.radius + headMargin; eY += tSlot * slotStep; }
      else if (sideIn === "right") { eX += p2.radius + headMargin; eY += tSlot * slotStep; }
      else if (sideIn === "top") { eY -= p2.radius + headMargin; eX += tSlot * slotStep; }
      else if (sideIn === "bottom") { eY += p2.radius + headMargin; eX += tSlot * slotStep; }

      let pathD = "";
      let lx, ly;

      if (conn.isObjective) {
          // 类型1：无头直线（如宿命线），绝对居中
          pathD = `M ${sX} ${sY} L ${eX} ${eY}`;
          lx = (sX + eX) / 2;
          ly = (sY + eY) / 2;
      } else if (conn.isStraight) {
          // 类型2：直连带箭头（如 X/L 并排线），标签靠目标端 (72%)
          pathD = `M ${sX} ${sY} L ${eX} ${eY}`;
          const ratio = 0.28; 
          lx = sX + (eX - sX) * ratio;
          ly = sY + (eY - sY) * ratio;
      } else {
          // 类型3：常规正交弯折线
          const isStartVert = (side === "top" || side === "bottom");
          const isEndVert = (sideIn === "top" || sideIn === "bottom");
          const bendOffset = conn.bendOffset || 40;

          if (isStartVert !== isEndVert) {
              if (isStartVert) {
                  pathD = `M ${sX} ${sY} L ${sX} ${eY} L ${eX} ${eY}`;
                  lx = sX; ly = eY;
              } else {
                  pathD = `M ${sX} ${sY} L ${eX} ${sY} L ${eX} ${eY}`;
                  lx = eX; ly = sY;
              }
          } else {
              if (!isStartVert) {
                  const midX = side === "left" ? sX - bendOffset : sX + bendOffset;
                  pathD = `M ${sX} ${sY} L ${midX} ${sY} L ${midX} ${eY} L ${eX} ${eY}`;
                  lx = midX; ly = (sY + eY) / 2;
              } else {
                  const midY = side === "top" ? sY - bendOffset : sY + bendOffset;
                  pathD = `M ${sX} ${sY} L ${sX} ${midY} L ${eX} ${midY} L ${eX} ${eY}`;
                  lx = (sX + eX) / 2; ly = midY;
              }
          }
      }

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", pathD);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", conn.color);
      path.setAttribute("stroke-width", "2");
      if (conn.className) path.classList.add(conn.className);

      // 核心修复：带上 location.href 以确保 Marker 引用在任何时候都生效
      if (!conn.isObjective) {
          const mId = ensureUniqueMarker(defs, conn.color, conn.className);
          const markerUrl = `url(${window.location.href.split('#')[0]}#${mId})`;
          path.setAttribute("marker-end", markerUrl);
      }
      
      svg.appendChild(path);

      if (conn.label) {
          svg.appendChild(createLineLabel(conn.label, lx, ly, conn.color));
      }
  });
}

// ==================== 4. 生命周期管理 ====================

function renderAll() {
  initLayout();
  // 使用 requestAnimationFrame 确保在下次重绘前更新，避免布局抖动
  requestAnimationFrame(drawLines);
}

window.addEventListener("load", renderAll);

window.addEventListener("resize", () => {
  clearTimeout(state.resizeTimer);
  state.resizeTimer = setTimeout(renderAll, 150);
});