// ==================== 1. 配置数据 ====================

// 节点位置配置 (虚拟坐标系)
const nodeConfig = [
  { id: 0, pos: [0, 0] },         // 中心主角 L
  { id: 1, pos: [2.3, 0] },       // Severo
  { id: 2, pos: [1.7, 1.2] },     // 堇
  { id: 3, pos: [2.5, 1.2] },     // 蓟
  { id: 4, pos: [-2.7, 0] },      // X
  { id: 5, pos: [-1, -1.1] },     // 上庭
  { id: 6, pos: [2.5, -1.1] },      // 牧者
  { id: 7, pos: [1, -1.1] },      // 福音地
  { id: 8, pos: [-1.6, 1.2] }     // Shp-13
];

// ==================== 1. 配置数据 ====================

// 连线关系配置
const connections = [
  // 宿命线：无箭头，直线，绝对居中
  { from: 0, to: 4, label: "宿命のライバル / 好敵手 / 腐れ縁\n複雑な協力关系", color: "#b2160b", isObjective: true, side: "left", sideIn: "right", fromSlot: 0, toSlot: 0 },
  
  // 直连带箭头：X -> L (赏赞)，标签靠右侧目标端
  { from: 4, to: 0, label: "賞賛→理解し 憐れみ やがて愛に", color: "#b2160b", isStraight: true, side: "right", sideIn: "left", fromSlot: -3, toSlot: -3 },
  
  // 直连带箭头：L -> X (厌恶)，标签靠左侧目标端
  { from: 0, to: 4, label: "嫌い→不倶戴天 / やり返す→理解", color: "#b2160b", isStraight: true, side: "left", sideIn: "right", fromSlot: 3, toSlot: 3 },
  
  // 弯折线：常规逻辑
  { from: 0, to: 1, label: "(恩師)守護 / 栽培 / 出資\n我が子のように大切にする\n最も愛する部下", color: "#b2160b", side: "right", sideIn: "left", fromSlot: -1, toSlot: -1, bendOffset: 60 },
  { from: 1, to: 0, label: "劣情\n湿度高めの激重愛\n求不得苦", color: "#b2160b", side: "left", sideIn: "right", fromSlot: 3, toSlot: 3, bendOffset: 60 },
  { from: 0, to: 2, label: "(恩師)守護 / 栽培 / 出資", color: "#b2160b", side: "bottom", sideIn: "left", fromSlot: 3, toSlot: -1, bendOffset: 50 },
  { from: 7, to: 0, label: "元同僚 / 今は顧客", color: "#b2160b", side: "left", sideIn: "top", fromSlot: 2, toSlot: 0, bendOffset: 70 },
  { from: 4, to: 5, label: "反逆", color: "#b2160b", side: "top", sideIn: "left", fromSlot: 0, toSlot: -1, bendOffset: 80 },
  { from: 0, to: 7, label: "反逆", color: "#b2160b", side: "right", sideIn: "bottom", fromSlot: -4, toSlot: 0, bendOffset: 80 },
  { from: 5, to: 7, label: "宿敵", color: "#b2160b", side: "right", sideIn: "left", fromSlot: -1, toSlot: -1, bendOffset: 20, isObjective: true },
  { from: 6, to: 7, label: "幹部", color: "#b2160b", side: "left", sideIn: "right", fromSlot: 0, toSlot: 0, bendOffset: 40 },
  { from: 8, to: 0, label: "救いたい", color: "#b2160b", side: "right", sideIn: "left", fromSlot: -2, toSlot: 5, bendOffset: 20 },
  { from: 0, to: 8, label: "疑う", color: "#b2160b", side: "bottom", sideIn: "right", fromSlot: -2, toSlot: 2, bendOffset: 10 }
];

const state = {
  nodes: [],
  nodePositions: [],
  resizeTimer: null
};

// ==================== 2. 核心布局函数 ====================

function initLayout() {
  const board = document.getElementById("board");
  if (!board) return;

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const isMobile = vw <= 768;
  const baseRadius = isMobile ? Math.min(vw, vh) * 0.38 : Math.min(vw, vh) * 0.26;

  state.nodes = Array.from(document.querySelectorAll('.node'));
  state.nodePositions = [];

  state.nodes.forEach((node, index) => {
      const config = nodeConfig[index]; // 引用外部 nodeConfig
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

// ==================== 3. 标签与箭头渲染 ====================

/**
* 改进版：多行文字垂直居中且背景框精准跟随
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
  
  // 手动计算 y 偏移实现垂直居中：startY = 目标Y - (总高度/2) + 第一行基准修正
  const startY = y - (totalHeight / 2) + (lineHeight / 1.5);

  lines.forEach((line, i) => {
      const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      tspan.setAttribute("x", x);
      tspan.setAttribute("y", startY + (i * lineHeight));
      tspan.textContent = line;
      textEl.appendChild(tspan);
  });

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
* 唯一 Marker 生成：支持 className 注入
*/
function ensureUniqueMarker(defs, color, className) {
  const cleanColor = color.replace("#", "");
  const id = `arrow-${cleanColor}-${className || 'default'}`;
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

// ==================== 4. 绘线核心逻辑 ====================

function drawLines() {
  const svg = document.getElementById("lines");
  if (!svg) return;

  let defs = svg.querySelector("defs") || document.createElementNS("http://www.w3.org/2000/svg", "defs");
  svg.innerHTML = "";
  svg.appendChild(defs);

  connections.forEach((conn) => {
      const p1 = state.nodePositions[conn.from];
      const p2 = state.nodePositions[conn.to];
      if (!p1 || !p2) return;

      const side = conn.side || "right";
      const sideIn = conn.sideIn || "left";
      const fSlot = conn.fromSlot || 0;
      const tSlot = conn.toSlot || 0;
      const slotStep = 15;

      // 计算起点
      let sX = p1.x, sY = p1.y;
      if (side === "left") { sX -= p1.radius; sY += fSlot * slotStep; }
      else if (side === "right") { sX += p1.radius; sY += fSlot * slotStep; }
      else if (side === "top") { sY -= p1.radius; sX += fSlot * slotStep; }
      else if (side === "bottom") { sY += p1.radius; sX += fSlot * slotStep; }

      // 计算终点
      let eX = p2.x, eY = p2.y;
      const headMargin = conn.isObjective ? 0 : 10;
      if (sideIn === "left") { eX -= p2.radius + headMargin; eY += tSlot * slotStep; }
      else if (sideIn === "right") { eX += p2.radius + headMargin; eY += tSlot * slotStep; }
      else if (sideIn === "top") { eY -= p2.radius + headMargin; eX += tSlot * slotStep; }
      else if (sideIn === "bottom") { eY += p2.radius + headMargin; eX += tSlot * slotStep; }

      let pathD = "";
      let lx, ly;

      if (conn.isObjective) {
          // 类型1：宿命直线 (无箭头，居中)
          pathD = `M ${sX} ${sY} L ${eX} ${eY}`;
          lx = (sX + eX) / 2;
          ly = (sY + eY) / 2;
      } else if (conn.isStraight) {
          // 类型2：直连箭头线 (不弯折，标签自动靠末端)
          pathD = `M ${sX} ${sY} L ${eX} ${eY}`;
          const ratio = 0.72; // 靠近目标端的比例
          lx = sX + (eX - sX) * ratio;
          ly = sY + (eY - sY) * ratio;
      } else {
          // 类型3：正交弯折线
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

      if (!conn.isObjective) {
          const mId = ensureUniqueMarker(defs, conn.color, conn.className);
          path.setAttribute("marker-end", `url(#${mId})`);
      }
      svg.appendChild(path);

      if (conn.label) {
          svg.appendChild(createLineLabel(conn.label, lx, ly, conn.color));
      }
  });
}

// ==================== 5. 生命周期 ====================

function start() {
  initLayout();
  requestAnimationFrame(drawLines);
}

window.addEventListener("load", start);
window.addEventListener("resize", () => {
  clearTimeout(state.resizeTimer);
  state.resizeTimer = setTimeout(start, 150);
});