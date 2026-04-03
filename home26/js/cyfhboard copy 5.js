/**
 * 角色关系图谱核心逻辑
 * 功能：动态布局、正交折线路由、响应式缩放
 */

// ==================== 1. 配置数据 ====================

// 节点位置配置 (虚拟坐标系)
// [0, 0] 是中心点，数值代表相对基础半径的偏移
const nodeConfig = [
  { id: 0, name: "Leopold", pos: [0, 0] },         // 中心主角
  { id: 1, name: "Severo", pos: [2.3, 0] },       // 右侧
  { id: 2, name: "Jin", pos: [1.9, 1.3] },        // 右下
  { id: 3, name: "Ji", pos: [2.6, 1.3] },         // 右下远端
  { id: 4, name: "X", pos: [-2.7, 0] },           // 左侧
  { id: 5, name: "ST", pos: [-1, -1.2] },         // 左上
  { id: 6, name: "LY", pos: [3.1, -1] },          // 右上远端
  { id: 7, name: "DD", pos: [1, -1.2] },          // 右上
  { id: 8, name: "Player", pos: [-1.6, 1.2] }     // 左下
];

// 连线关系配置
const connections = [
  { from: 0, to: 1, label: "(恩師)守護 / 栽培 / 出資\n最も愛する部下", color: "#b2160b", side: "right", sideIn: "left", fromSlot: -1, toSlot: -1, bendOffset: 60 },
  { from: 1, to: 0, label: "劣情、湿度高めの激重愛", color: "#b2160b", side: "left", sideIn: "right", fromSlot: 3, toSlot: 3, bendOffset: 60 },
  { from: 0, to: 2, label: "(恩師)守護 / 栽培", color: "#b2160b", side: "bottom", sideIn: "left", fromSlot: 3, toSlot: -1, bendOffset: 50 },
  { from: 0, to: 4, label: "嫌い→不倶戴天 / やり返す", color: "#b2160b", side: "left", sideIn: "right", fromSlot: 3, toSlot: 3, bendOffset: 60 },
  { from: 0, to: 4, label: "宿命のライバル / 好敵手", color: "#b2160b", side: "left", sideIn: "right", fromSlot: 0, toSlot: 0, bendOffset: 60, isObjective: true },
  { from: 4, to: 0, label: "賞賛→理解し 憐れみ やがて愛に", color: "#b2160b", side: "right", sideIn: "left", fromSlot: -3, toSlot: -3, bendOffset: 60 },
  { from: 7, to: 0, label: "元同僚 / 今は顧客", color: "#b2160b", side: "left", sideIn: "top", fromSlot: 2, toSlot: 0, bendOffset: 70 },
  { from: 4, to: 5, label: "反逆", color: "#b2160b", side: "top", sideIn: "left", fromSlot: 0, toSlot: -1, bendOffset: 80 },
  { from: 0, to: 7, label: "反逆", color: "#b2160b", side: "right", sideIn: "bottom", fromSlot: -4, toSlot: 0, bendOffset: 80 },
  { from: 5, to: 7, label: "宿敵", color: "#b2160b", side: "right", sideIn: "left", fromSlot: -1, toSlot: -1, bendOffset: 20, isObjective: true },
  { from: 6, to: 7, label: "幹部", color: "#b2160b", side: "left", sideIn: "right", fromSlot: 0, toSlot: 0, bendOffset: 40 },
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

/**
* 创建连线上的文字标签（SVG 组）
*/
function createLineLabel(text, x, y, color) {
  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const isMobile = window.innerWidth <= 768;
  const padding = isMobile ? 4 : 6;

  const textEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
  textEl.setAttribute("x", x);
  textEl.setAttribute("y", y);
  textEl.setAttribute("text-anchor", "middle");
  textEl.setAttribute("dominant-baseline", "middle");
  textEl.style.fontSize = isMobile ? "10px" : "12px";
  textEl.style.fill = "#ffffff";
  textEl.style.pointerEvents = "none";

  const lines = text.split('\n');
  lines.forEach((line, i) => {
      const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      tspan.setAttribute("x", x);
      tspan.setAttribute("dy", i === 0 ? "0" : "1.2em");
      tspan.textContent = line;
      textEl.appendChild(tspan);
  });

  // 绘制背景框（先加入 DOM 测量尺寸）
  const tempSvg = document.getElementById("lines");
  tempSvg.appendChild(textEl);
  const bbox = textEl.getBBox();
  
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", bbox.x - padding);
  rect.setAttribute("y", bbox.y - padding);
  rect.setAttribute("width", bbox.width + padding * 2);
  rect.setAttribute("height", bbox.height + padding * 2);
  rect.setAttribute("rx", "4");
  rect.setAttribute("fill", "rgba(30, 30, 30, 0.85)");
  rect.setAttribute("stroke", color);
  rect.setAttribute("stroke-width", "1");

  group.appendChild(rect);
  group.appendChild(textEl);
  return group;
}

/**
* 核心：绘制电路板式正交连线
*/
function drawLines() {
  const svg = document.getElementById("lines");
  if (!svg) return;

  // 清空画布并保留 defs
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
      const margin = 10; // 离目标的间隙
      if (sideIn === "left") { eX -= p2.radius + margin; eY += tSlot * slotStep; }
      else if (sideIn === "right") { eX += p2.radius + margin; eY += tSlot * slotStep; }
      else if (sideIn === "top") { eY -= p2.radius + margin; eX += tSlot * slotStep; }
      else if (sideIn === "bottom") { eY += p2.radius + margin; eX += tSlot * slotStep; }

      // 3. 正交路由算法
      let pathD = `M ${sX} ${sY}`;
      let lx, ly; // 标签坐标

      const isStartVert = (side === "top" || side === "bottom");
      const isEndVert = (sideIn === "top" || sideIn === "bottom");

      if (isStartVert !== isEndVert) {
          // L型弯折
          if (isStartVert) {
              pathD += ` L ${sX} ${eY} L ${eX} ${eY}`;
              lx = sX; ly = eY;
          } else {
              pathD += ` L ${eX} ${sY} L ${eX} ${eY}`;
              lx = eX; ly = sY;
          }
      } else {
          // Z型或 U型弯折
          if (!isStartVert) { // 横向出发
              const cornerX = side === "left" ? sX - bendOffset : sX + bendOffset;
              pathD += ` L ${cornerX} ${sY} L ${cornerX} ${eY} L ${eX} ${eY}`;
              lx = cornerX; ly = (sY + eY) / 2;
          } else { // 纵向出发
              const cornerY = side === "top" ? sY - bendOffset : sY + bendOffset;
              pathD += ` L ${sX} ${cornerY} L ${eX} ${cornerY} L ${eX} ${eY}`;
              lx = (sX + eX) / 2; ly = cornerY;
          }
      }

      // 4. 渲染路径
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", pathD);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", conn.color);
      path.setAttribute("stroke-width", "2.5");
      path.style.transition = "all 0.3s";

      if (!conn.isObjective) {
          const markerId = ensureMarker(defs, conn.color);
          path.setAttribute("marker-end", `url(#${markerId})`);
      }
      
      svg.appendChild(path);

      // 5. 渲染标签
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