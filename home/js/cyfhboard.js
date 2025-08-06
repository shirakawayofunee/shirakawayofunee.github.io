const connections = [
  { from: 0, to: 1, label: " .我が子のように大切にする. ", dashed: false },
  { from: 0, to: 2, label: "野放し", dashed: false },
  { from: 0, to: 3, label: "慈しむ、憐憫", dashed: false },
  { from: 0, to: 4, label: "やり返す、敵であり味方", dashed: true },
  { from: 0, to: 6, label: "反逆", dashed: true },
  { from: 6, to: 7, label: "リーダー", dashed: false },
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
    [-1.0, 1.2],  // Severo
    [1.8, 0.9], // Jin
    [-1.4, -0.9], // Ji
    [-2.5, 1.0], // X
    [-3, -0.5], // ST
    [2.1, -1], // LY
    [3, 0.3], // DD
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

  connections.forEach((conn) => {
    if (conn.from >= state.nodes.length || conn.to >= state.nodes.length) return;

    const fromNode = state.nodes[conn.from];
    const toNode = state.nodes[conn.to];
    const fromAvatar = fromNode.querySelector(".avatar");
    const toAvatar = toNode.querySelector(".avatar");
    const fromRect = fromAvatar.getBoundingClientRect();
    const toRect = toAvatar.getBoundingClientRect();
    const boardRect = document.getElementById("board").getBoundingClientRect();

    const start = {
      x: fromRect.left + fromRect.width / 2 - boardRect.left,
      y: fromRect.top + fromRect.height / 2 - boardRect.top,
    };
    const end = {
      x: toRect.left + toRect.width / 2 - boardRect.left,
      y: toRect.top + toRect.height / 2 - boardRect.top,
    };

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.classList.add("relation-line");
    if (conn.dashed) path.classList.add("dashed-line");

    const isReverse = connections.some(
      (c) => c.from === conn.to && c.to === conn.from && c.label !== conn.label
    );

    if (isReverse) {
      const curvature = 0.3;
      const ctrl = {
        x: (start.x + end.x) / 2 + curvature * (end.y - start.y),
        y: (start.y + end.y) / 2 + curvature * (start.x - end.x),
      };
      path.setAttribute("d", `M ${start.x} ${start.y} Q ${ctrl.x} ${ctrl.y} ${end.x} ${end.y}`);
    } else {
      path.setAttribute("d", `M ${start.x} ${start.y} L ${end.x} ${end.y}`);
    }

    const textGroup = createConnectionLabel(conn.label, start, end, isReverse);
    svg.appendChild(path);
    svg.appendChild(textGroup);
  });
}

function createConnectionLabel(text, start, end, isCurve) {
  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const padding = 6;

  const lines = text.split(/[、\n]/);
  const angle = Math.atan2(end.y - start.y, end.x - start.x);
  const labelPos = {
    x: (start.x + end.x) / 2 + Math.cos(angle) * (isCurve ? 10 : 0),
    y: (start.y + end.y) / 2 + Math.sin(angle) * (isCurve ? 10 : -5),
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
    const avatar = node.querySelector(".avatar");
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