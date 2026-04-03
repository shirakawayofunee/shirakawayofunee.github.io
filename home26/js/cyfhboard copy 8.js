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

// 连线关系配置
const connections = [
  { from: 0, to: 1, label: "(恩師)守護 / 栽培 / 出資\n我が子のように大切にする、最も愛する部下", color: "#b2160b", side: "right", sideIn: "left", fromSlot: -1, toSlot: -1, bendOffset: 60 },
  { from: 1, to: 0, label: "劣情、湿度高めの激重愛、求不得苦", color: "#b2160b", side: "left", sideIn: "right", fromSlot: 3, toSlot: 3, bendOffset: 80 },
  { from: 0, to: 2, label: "(恩師)守護 / 栽培 / 出資", color: "#b2160b", side: "bottom", sideIn: "left", fromSlot: 3, toSlot: -1, bendOffset: 50 },
  { from: 0, to: 4, label: "嫌い→不倶戴天、やり返す→理解", color: "#b2160b", side: "left", sideIn: "right", fromSlot: 3, toSlot: 3, bendOffset: 130 },
  { from: 0, to: 4, label: "宿命のライバル / 好敵手 / 腐れ縁\n複雑な協力关系", color: "#b2160b", side: "left", sideIn: "right", fromSlot: 0, toSlot: 0, bendOffset: 60, isObjective: true },
  { from: 4, to: 0, label: "賞賛→理解し、憐れみ、やがて愛に", color: "#b2160b", side: "right", sideIn: "left", fromSlot: -3, toSlot: -3, bendOffset: 130 },
  { from: 7, to: 0, label: "元同僚 / 今は顧客", color: "#b2160b", side: "left", sideIn: "top", fromSlot: 2, toSlot: 0, bendOffset: 70 },
  { from: 4, to: 5, label: "反逆", color: "#b2160b", side: "top", sideIn: "left", fromSlot: 0, toSlot: -1, bendOffset: 80 },
  { from: 0, to: 7, label: "反逆", color: "#b2160b", side: "right", sideIn: "bottom", fromSlot: -4, toSlot: 0, bendOffset: 80 },
  { from: 5, to: 7, label: "宿敵", color: "#b2160b", side: "right", sideIn: "left", fromSlot: -1, toSlot: -1, bendOffset: 80, isObjective: true },
  { from: 6, to: 7, label: "幹部", color: "#b2160b", side: "left", sideIn: "right", fromSlot: 0, toSlot: 0, bendOffset: 70 },
  { from: 8, to: 0, label: "救いたい", color: "#b2160b", side: "right", sideIn: "left", fromSlot: -2, toSlot: 5, bendOffset: 20 },
  { from: 0, to: 8, label: "疑う", color: "#b2160b", side: "bottom", sideIn: "right", fromSlot: -2, toSlot: 2, bendOffset: 10 }
];

// ==================== 2. 状态管理 ====================

const state = {
  nodes: [],
  nodePositions: [], // 存储计算后的像素坐标和半径
  resizeTimer: null
};

// ==================== 3. 核心功能函数 ====================

/**
* 计算并设置节点位置
*/
function initLayout() {
  const board = document.getElementById("board");
  if (!board) return;

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const isMobile = vw <= 768;
  
  // 基础半径：决定了节点分布的疏密程度
  const baseRadius = isMobile ? Math.min(vw, vh) * 0.4 : Math.min(vw, vh) * 0.28;

  state.nodes = Array.from(document.querySelectorAll('.node'));
  state.nodePositions = [];

  state.nodes.forEach((node, index) => {
      const config = nodeConfig[index];
      if (!config) return;

      const [dx, dy] = config.pos;
      // 以屏幕中心为原点进行偏移
      const x = vw / 2 + dx * baseRadius;
      const y = vh / 2 + dy * baseRadius;

      // 应用位置（脱离文档流）
      node.style.left = `${x}px`;
      node.style.top = `${y}px`;
      node.style.transform = "translate(-50%, -50%)";

      // 记录数据供连线使用
      // 特别注意：radius 只取头像部分的宽度一半，避免由于 Label 过宽导致连线起点偏移
      const avatarEl = node.querySelector('.avatar');
      state.nodePositions[index] = {
          x: x,
          y: y,
          radius: (avatarEl ? avatarEl.offsetWidth : node.offsetWidth) / 2
      };
  });
}

/**
* 动态创建 SVG 箭头定义
*/
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

// 专门用于测量文字尺寸的离屏临时 SVG 元素
let tempSvgForMeasure = null;

function getTempSvg() {
  if (!tempSvgForMeasure) {
      tempSvgForMeasure = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      tempSvgForMeasure.style.position = "absolute";
      tempSvgForMeasure.style.visibility = "hidden";
      tempSvgForMeasure.style.pointerEvents = "none";
      // 确保足够大以便测量，且不受Swiper容器影响
      tempSvgForMeasure.setAttribute("width", "500");
      tempSvgForMeasure.setAttribute("height", "200");
      document.body.appendChild(tempSvgForMeasure);
  }
  // 确保测量前清空
  tempSvgForMeasure.innerHTML = "";
  return tempSvgForMeasure;
}

/**
* 创建连线上的文字标签（SVG 组）
* 改进：使用独立的离屏 SVG 进行文字测量
*/
/**
 * 改进版：多行文字垂直居中算法
 */
 function createLineLabel(text, x, y, color) {
  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const isMobile = window.innerWidth <= 768;
  const paddingH = isMobile ? 6 : 10; // 水平边距
  const paddingV = isMobile ? 4 : 6;  // 垂直边距
  const fontSize = isMobile ? 10 : 12;
  const lineHeight = fontSize * 1.4; // 定义固定行高

  const textEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
  // 关键：不再依赖 baseline，手动计算偏移
  textEl.setAttribute("text-anchor", "middle");
  textEl.style.fontSize = fontSize + "px";
  textEl.style.fill = "#ffffff";
  textEl.style.fontFamily = "sans-serif"; // 确保与 CSS 一致
  textEl.style.pointerEvents = "none";

  const lines = text.split('\n');
  const totalHeight = lines.length * lineHeight;
  
  // 计算起始 Y 坐标，使整个文字块垂直居中
  // 公式：目标Y - (总高度/2) + 第一行的上升空间
  const startY = y - (totalHeight / 2) + (lineHeight / 1.5);

  lines.forEach((line, i) => {
      const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      tspan.setAttribute("x", x); // 每一行都必须显式设置 x 才能居中
      tspan.setAttribute("y", startY + (i * lineHeight));
      tspan.textContent = line;
      textEl.appendChild(tspan);
  });

  // 1. 测量：必须先插入 DOM 树才能获得准确 BBox
  const svg = document.getElementById("lines");
  svg.appendChild(textEl);
  const bbox = textEl.getBBox();
  
  // 2. 创建背景矩形
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", bbox.x - paddingH);
  rect.setAttribute("y", bbox.y - paddingV);
  rect.setAttribute("width", bbox.width + paddingH * 2);
  rect.setAttribute("height", bbox.height + paddingV * 2);
  rect.setAttribute("rx", "4");
  rect.setAttribute("fill", "rgba(20, 20, 20, 0.9)"); // 略微调深背景
  rect.setAttribute("stroke", color);
  rect.setAttribute("stroke-width", "1");

  // 3. 层级整理：矩形在下，文字在上
  group.appendChild(rect);
  group.appendChild(textEl);
  return group;
}

/**
* 核心：绘制电路板式正交连线
*/
/**
 * 核心：绘制连线逻辑（优化版）
 */
 function drawLines() {
  const svg = document.getElementById("lines");
  if (!svg) return;

  let defs = svg.querySelector("defs");
  if (!defs) {
      defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  }
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
    const slotStep = 15; // 多个插槽之间的间距
    const bendOffset = conn.bendOffset || 40;

          // 1. 计算起点
          let sX = p1.x, sY = p1.y;
          if (side === "left") { sX -= p1.radius; sY += fSlot * slotStep; }
          else if (side === "right") { sX += p1.radius; sY += fSlot * slotStep; }
          else if (side === "top") { sY -= p1.radius; sX += fSlot * slotStep; }
          else if (side === "bottom") { sY += p1.radius; sX += fSlot * slotStep; }
    
          // 2. 计算终点
          let eX = p2.x, eY = p2.y;
          const margin = 10; // 离目标的间隙Margin
          if (sideIn === "left") { eX -= p2.radius + margin; eY += tSlot * slotStep; }
          else if (sideIn === "right") { eX += p2.radius + margin; eY += tSlot * slotStep; }
          else if (sideIn === "top") { eY -= p2.radius + margin; eX += tSlot * slotStep; }
          else if (sideIn === "bottom") { eY += p2.radius + margin; eX += tSlot * slotStep; }

      let pathD = "";
      let lx, ly;

      if (conn.isObjective) {
          // 宿命线：强制直线，绝对居中
          pathD = `M ${sX} ${sY} L ${eX} ${eY}`;
          lx = (sX + eX) / 2;
          ly = (sY + eY) / 2;
      } else {
          // 普通线：正交路由算法
          const side = conn.side || "right";
          const sideIn = conn.sideIn || "left";
          const isStartVert = (side === "top" || side === "bottom");
          const isEndVert = (sideIn === "top" || sideIn === "bottom");
          const bendOffset = conn.bendOffset || 40;

          if (isStartVert !== isEndVert) {
              // L型弯折
              if (isStartVert) {
                  pathD = `M ${sX} ${sY} L ${sX} ${eY} L ${eX} ${eY}`;
                  // 标签放在转角（或者长段中心，这里我们取转角位置便于对齐）
                  lx = sX; ly = eY;
              } else {
                  pathD = `M ${sX} ${sY} L ${eX} ${sY} L ${eX} ${eY}`;
                  lx = eX; ly = sY;
              }
          } else {
              // Z型/U型弯折
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
          const markerId = ensureMarker(defs, conn.color);
          path.setAttribute("marker-end", `url(#${markerId})`);
      }
      svg.appendChild(path);

      if (conn.label) {
          svg.appendChild(createLineLabel(conn.label, lx, ly, conn.color));
      }
  });
}

// ==================== 4. 生命周期控制 ====================

function initialize() {
  initLayout();
  // 必须等待一帧确保 CSS 尺寸渲染完成，再进行 SVG 计算
  requestAnimationFrame(() => {
      drawLines();
  });
}

window.addEventListener("load", initialize);

window.addEventListener("resize", () => {
  clearTimeout(state.resizeTimer);
  state.resizeTimer = setTimeout(() => {
      initLayout();
      drawLines();
  }, 200);
});