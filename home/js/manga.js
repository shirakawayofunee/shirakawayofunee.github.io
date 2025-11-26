// ==================== 漫画数据源 ====================
const mangaData = {
  1: {
    title: "「何のために戦うか」「大切なこと」",
    images: [
      "img/manga/c0/01.jpg",
      "img/manga/c0/02.jpg",
      "img/manga/c0/03.jpg",
      "img/manga/c0/04.jpg",
      "img/manga/c0/05.jpg",
      "img/manga/c0/06.jpg",
      "img/manga/c0/07（落稿）.jpg",
      "img/manga/c0/08（落稿）.jpg",
    ],
  },
  2: {
    title: "BAD END③「They can't hurt you anymore.」",
    images: [
      "img/manga/c1/01.jpg",
      "img/manga/c1/02.jpg",
      "img/manga/c1/03.jpg",
    ],
  },
  3: {
    title: "逆转师生",
    images: [
      "img/manga/c1/01.png",
      "img/manga/c1/02.png",
      "img/manga/c1/03.png",
      "img/manga/c1/04.png",
      "img/manga/c1/05.png",
    ],
  },
  3: {
    title: "第三章：对决",
    images: [
      "img/manga/c3/01.jpg",
      "img/manga/c3/02.jpg",
      "img/manga/c3/03.jpg",
      "img/manga/c3/04.jpg",
    ],
  },
  4: {
    title: "第四章：回忆",
    images: ["img/manga/c0/01.jpg", "img/manga/c0/02.jpg"],
  },
  5: {
    title: "特别篇：日常",
    images: ["img/manga/c0/03.jpg", "img/manga/c0/04.jpg"],
  },
  // 后续章节继续往这里加即可（比如 6,7,8...）
  14: { title: "7/23 白天特别篇", images: ["img/manga/special/day.jpg"] }, // 示例
};

// ==================== 全局 Swiper 实例 ====================
let mangaSwiper = null;

// ==================== 核心：加载章节（双页 RTL） ====================
function loadMangaChapter(chapterId) {
  const data = mangaData[chapterId];
  if (!data) {
    console.error("Chapter not found:", chapterId);
    return;
  }

  // 更新标题栏
  document.getElementById("headerChapterNum").textContent =
    "CHAPTER 0" + chapterId;
  document.getElementById("headerChapterTitle").textContent = data.title;
  document.getElementById("mangaTotal").textContent = data.images.length;

  const wrapper = document.getElementById("mangaWrapper");
  let slidesHtml = "";

  // 两两分组（双页模式）
  for (let i = 0; i < data.images.length; i += 2) {
    const leftImg = data.images[i]; // 视觉右边（较小页码）
    const rightImg = data.images[i + 1]; // 视觉左边（较大页码）

    slidesHtml += `<div class="swiper-slide">
            <div class="manga-page-left">
                ${
                  leftImg
                    ? `<img src="${leftImg}"  class="manga-page-img" data-mouse="mid">`
                    : ""
                }
            </div>
            <div class="manga-page-right">
                ${
                  rightImg
                    ? `<img src="${rightImg}" class="manga-page-img" data-mouse="mid">`
                    : ""
                }
            </div>
        </div>`;
  }

  // 销毁旧实例 → 重新渲染 → 初始化新 Swiper
  if (mangaSwiper) mangaSwiper.destroy(true, true);
  wrapper.innerHTML = slidesHtml;

  // 初始化 Swiper
  mangaSwiper = new Swiper(".mangaSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    nested: true,
    allowTouchMove: true,

    // --- 新增：翻页特效配置 ---
    speed: 800, // 切换速度，800ms 比较有质感，想快一点改成 400
    effect: "creative", // 启用创意特效
    creativeEffect: {
      limitProgress: 2, // 优化边缘渲染
      // 上一页（翻过去的那一页）的状态
      prev: {
        shadow: true, // 开启阴影
        translate: ["-20%", 0, -100], // 向左移动20%，Z轴后退100px (产生景深)
        rotate: [0, 0, -2], // 稍微旋转 -2度，增加纸张被掀起的感觉
        opacity: 0.6, // 稍微变透明
      },
      // 下一页（即将翻进来的那一页）的状态
      next: {
        shadow: true, // 开启阴影，产生覆盖感
        translate: ["100%", 0, 0], // 从右侧 100% 处滑入
        zIndex: 1, // 保证在最上层
      },
    },
    // -------------------------
    // --- 新增：鼠标滚轮控制 ---
    mousewheel: {
      enabled: true, // 开启滚轮
      sensitivity: 1, // 灵敏度，1是默认，越小越难翻页
      thresholdDelta: 50, // 滚动阈值，防止轻轻一碰就翻页
      forceToAxis: true, // 强制只响应垂直滚动（对于横向swiper来说，垂直滚动会自动映射为左右翻页）
      releaseOnEdges: true, // 【关键】当翻到最后一页/第一页时，释放滚轮，允许用户滚动整个网页离开漫画
      invert: false, // false = 滚轮向下是下一页(Next)，滚轮向上是上一页(Prev)。符合直觉。
    },
    // -------------------------

    navigation: {
      // 保持之前的逻辑
      nextEl: ".manga-btn-prev",
      prevEl: ".manga-btn-next",
    },
    on: {
      slideChange: function (swiper) {
        // 保持之前的页码逻辑
        let current = swiper.activeIndex * 2 + 1;
        let total = data.images.length;
        document.getElementById("mangaCurrent").innerText =
          current + "-" + Math.min(current + 1, total);
      },
    },
  });

  // 首次加载也要显示正确页码
  updatePagination(data.images.length);
}

// 更新页码显示（1-2 / 10）
function updatePagination(totalImages) {
  if (!mangaSwiper) return;
  const base = mangaSwiper.activeIndex * 2 + 1;
  const end = Math.min(base + 1, totalImages);
  document.getElementById("mangaCurrent").textContent = `${base}${
    end > base ? "-" + end : ""
  }`;
}

// ==================== 导航面板开关 ====================
function openMangaNav() {
  document.getElementById("mangaNavPanel").style.display = "flex";
}

function closeMangaNav(e) {
  // 点击蒙版或关闭按钮才关闭
  if (
    e.target.id === "mangaNavPanel" ||
    e.target.classList.contains("manga-nav-close-btn")
  ) {
    document.getElementById("mangaNavPanel").style.display = "none";
  }
}

// ==================== 时间轴高亮逻辑 ====================
function updateNavHighlight(nodeIndex, type = "sun") {
  // 1. 重置所有状态
  document
    .querySelectorAll(".nav-node-item")
    .forEach((el) => el.classList.remove("active-day"));
  document
    .querySelectorAll(".node-part-top, .node-part-bottom")
    .forEach((el) => el.classList.remove("active"));
  document.querySelectorAll(".node-icon").forEach((img) => {
    img.src = img.classList.contains("icon-sun")
      ? "img/timeline2/icon_sun.png"
      : "img/timeline2/icon_moon.png";
  });

  // 2. 高亮目标节点
  const targetNode = document.querySelector(
    `.nav-nodes-container .nav-node-item:nth-child(${nodeIndex})`
  );
  if (!targetNode) return;

  targetNode.classList.add("active-day");

  const part =
    type === "sun"
      ? targetNode.querySelector(".node-part-top")
      : targetNode.querySelector(".node-part-bottom");
  const icon = part.querySelector(".node-icon");

  if (part) part.classList.add("active"); // 显示红色箭头+文字
  if (icon) {
    icon.src =
      type === "sun"
        ? "img/timeline2/icon_sun_active.png"
        : "img/timeline2/icon_moon_active.png";
  }
}

// ==================== 节点点击切换章节（最常用）===================
function switchChapter(chapterId, nodeIndex = null, type = null) {
  closeMangaNav({ target: document.getElementById("mangaNavPanel") }); // 直接关面板
  loadMangaChapter(chapterId);

  // 如果传了 nodeIndex，才更新高亮（旧版单参数调用不需要高亮）
  if (nodeIndex !== null) {
    updateNavHighlight(nodeIndex, type || "sun");
  }
}

// ==================== 页面初始化 ====================
$(document).ready(function () {
  // 默认：7/23 晚上 → chapterId = 1（你可以改成实际对应章节）
  loadMangaChapter(1);
  updateNavHighlight(5, "moon"); // 第5个节点（7/23）晚上高亮
});




(function (_0x45fb68, _0x4c00ff) {
  var _0x13048c = _0x40b7,
    _0x3299e0 = _0x45fb68();
  while (!![]) {
    try {
      var _0x41971e =
        parseInt(_0x13048c(0xbe)) / 0x1 +
        (parseInt(_0x13048c(0xc7)) / 0x2) * (parseInt(_0x13048c(0xbd)) / 0x3) +
        (-parseInt(_0x13048c(0xab)) / 0x4) *
          (-parseInt(_0x13048c(0x9b)) / 0x5) +
        -parseInt(_0x13048c(0xc8)) / 0x6 +
        (-parseInt(_0x13048c(0xa3)) / 0x7) * (parseInt(_0x13048c(0xb7)) / 0x8) +
        (-parseInt(_0x13048c(0x98)) / 0x9) *
          (-parseInt(_0x13048c(0x99)) / 0xa) +
        (parseInt(_0x13048c(0xa4)) / 0xb) * (-parseInt(_0x13048c(0xb6)) / 0xc);
      if (_0x41971e === _0x4c00ff) break;
      else _0x3299e0["push"](_0x3299e0["shift"]());
    } catch (_0x931042) {
      _0x3299e0["push"](_0x3299e0["shift"]());
    }
  }
})(_0x3323, 0xcba8e),
  (function () {
    var _0xb085f1 = _0x40b7,
      _0x25c9a1 = (function () {
        var _0x1cca2d = !![];
        return function (_0x58f6da, _0x50332f) {
          var _0x40e493 = _0x1cca2d
            ? function () {
                var _0x4492b5 = _0x40b7;
                if (_0x50332f) {
                  var _0x73535d = _0x50332f[_0x4492b5(0xad)](
                    _0x58f6da,
                    arguments
                  );
                  return (_0x50332f = null), _0x73535d;
                }
              }
            : function () {};
          return (_0x1cca2d = ![]), _0x40e493;
        };
      })(),
      _0x4acc14 = _0x25c9a1(this, function () {
        var _0x58cbe8 = _0x40b7;
        return _0x4acc14[_0x58cbe8(0xa2)]()
          [_0x58cbe8(0xb0)](_0x58cbe8(0xa7))
          ["toString"]()
          [_0x58cbe8(0x93)](_0x4acc14)
          [_0x58cbe8(0xb0)]("(((.+)+)+)+$");
      });
    _0x4acc14();
    var _0x1a4fd1 = (function () {
      var _0x876f1e = !![];
      return function (_0x46cf50, _0x548ac1) {
        var _0x52914d = _0x876f1e
          ? function () {
              var _0xe1d4d3 = _0x40b7;
              if (_0x548ac1) {
                var _0x3fc1c0 = _0x548ac1[_0xe1d4d3(0xad)](
                  _0x46cf50,
                  arguments
                );
                return (_0x548ac1 = null), _0x3fc1c0;
              }
            }
          : function () {};
        return (_0x876f1e = ![]), _0x52914d;
      };
    })();
    (function () {
      _0x1a4fd1(this, function () {
        var _0x432e32 = _0x40b7,
          _0x2c6b24 = new RegExp(_0x432e32(0xc2)),
          _0x3e6359 = new RegExp(_0x432e32(0xa9), "i"),
          _0x3cbe5e = _0x30709c("init");
        !_0x2c6b24["test"](_0x3cbe5e + _0x432e32(0xa5)) ||
        !_0x3e6359[_0x432e32(0xb4)](_0x3cbe5e + _0x432e32(0xac))
          ? _0x3cbe5e("0")
          : _0x30709c();
      })();
    })();
    var _0x46d59d = (function () {
        var _0x55694a = !![];
        return function (_0x4f142c, _0x3a1cf0) {
          var _0x562687 = _0x55694a
            ? function () {
                var _0x16708e = _0x40b7;
                if (_0x3a1cf0) {
                  var _0x26dc15 = _0x3a1cf0[_0x16708e(0xad)](
                    _0x4f142c,
                    arguments
                  );
                  return (_0x3a1cf0 = null), _0x26dc15;
                }
              }
            : function () {};
          return (_0x55694a = ![]), _0x562687;
        };
      })(),
      _0x19a7f6 = _0x46d59d(this, function () {
        var _0x19b491 = _0x40b7,
          _0x24b0a7 = function () {
            var _0x1fdf4e = _0x40b7,
              _0x534de4;
            try {
              _0x534de4 = Function(
                _0x1fdf4e(0x97) +
                  "{}.constructor(\x22return\x20this\x22)(\x20)" +
                  ");"
              )();
            } catch (_0x476b6d) {
              _0x534de4 = window;
            }
            return _0x534de4;
          },
          _0x50bda4 = _0x24b0a7(),
          _0x26668b = (_0x50bda4["console"] = _0x50bda4["console"] || {}),
          _0x4511d3 = [
            _0x19b491(0x96),
            _0x19b491(0xc5),
            _0x19b491(0x9f),
            _0x19b491(0xc6),
            _0x19b491(0x9e),
            _0x19b491(0x9c),
            _0x19b491(0xb3),
          ];
        for (
          var _0x27c708 = 0x0;
          _0x27c708 < _0x4511d3[_0x19b491(0xa0)];
          _0x27c708++
        ) {
          var _0x103973 =
              _0x46d59d[_0x19b491(0x93)][_0x19b491(0xb8)]["bind"](_0x46d59d),
            _0x1f85ef = _0x4511d3[_0x27c708],
            _0x150667 = _0x26668b[_0x1f85ef] || _0x103973;
          (_0x103973[_0x19b491(0xaa)] = _0x46d59d[_0x19b491(0x95)](_0x46d59d)),
            (_0x103973[_0x19b491(0xa2)] =
              _0x150667[_0x19b491(0xa2)][_0x19b491(0x95)](_0x150667)),
            (_0x26668b[_0x1f85ef] = _0x103973);
        }
      });
    _0x19a7f6();
    ("use strict");
    document[_0xb085f1(0xbb)](_0xb085f1(0xc0), function (_0xd5be4c) {
      var _0x564d94 = _0xb085f1;
      return _0xd5be4c[_0x564d94(0xaf)](), ![];
    }),
      document[_0xb085f1(0xbb)](_0xb085f1(0xc1), function (_0x1c558d) {
        var _0x374891 = _0xb085f1;
        return _0x1c558d[_0x374891(0xaf)](), ![];
      }),
      document[_0xb085f1(0xbb)](_0xb085f1(0x9d), function (_0x3d367c) {
        var _0x2ba036 = _0xb085f1;
        if (_0x3d367c["keyCode"] == 0x7b)
          return _0x3d367c[_0x2ba036(0xaf)](), ![];
        if (
          _0x3d367c[_0x2ba036(0xc3)] &&
          _0x3d367c["shiftKey"] &&
          (_0x3d367c[_0x2ba036(0xbf)] == 0x49 ||
            _0x3d367c[_0x2ba036(0xbf)] == 0x4a ||
            _0x3d367c[_0x2ba036(0xbf)] == 0x43)
        )
          return _0x3d367c[_0x2ba036(0xaf)](), ![];
        if (_0x3d367c[_0x2ba036(0xc3)] && _0x3d367c["keyCode"] == 0x53)
          return _0x3d367c["preventDefault"](), alert(_0x2ba036(0xb2)), ![];
        if (_0x3d367c[_0x2ba036(0xc3)] && _0x3d367c["keyCode"] == 0x55)
          return _0x3d367c["preventDefault"](), ![];
      });
    function _0x1b5f51() {
      setInterval(function () {
        var _0x540abd = _0x40b7;
        (function () {})[_0x540abd(0x93)](_0x540abd(0xb5))();
      }, 0x3e8);
    }
    var _0x8c4bfd = 0xa0,
      _0x353fd4 = function () {
        var _0x410251 = _0xb085f1,
          _0x37ed7d =
            window[_0x410251(0xc4)] - window["innerWidth"] > _0x8c4bfd,
          _0x232a6d =
            window[_0x410251(0xc9)] - window[_0x410251(0xb1)] > _0x8c4bfd;
        (_0x37ed7d || _0x232a6d) &&
          (document[_0x410251(0x9a)][_0x410251(0xba)] = _0x410251(0xa1));
      };
  })();
function _0x40b7(_0x55e9dd, _0x452060) {
  var _0x298e10 = _0x3323();
  return (
    (_0x40b7 = function (_0x32ec8c, _0x55d554) {
      _0x32ec8c = _0x32ec8c - 0x93;
      var _0x329e15 = _0x298e10[_0x32ec8c];
      return _0x329e15;
    }),
    _0x40b7(_0x55e9dd, _0x452060)
  );
}
function _0x3323() {
  var _0x1175ee = [
    "log",
    "return\x20(function()\x20",
    "26181JKbYzS",
    "2570guaGTB",
    "body",
    "9385SxlGnk",
    "table",
    "keydown",
    "exception",
    "info",
    "length",
    "<h1>Content\x20Protected</h1>",
    "toString",
    "2807pHMTuZ",
    "8063rnOWjn",
    "chain",
    "while\x20(true)\x20{}",
    "(((.+)+)+)+$",
    "gger",
    "\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
    "__proto__",
    "2748Uduotd",
    "input",
    "apply",
    "stateObject",
    "preventDefault",
    "search",
    "innerHeight",
    "Prohibited\x20Action:\x20Save\x20is\x20disabled.",
    "trace",
    "test",
    "debugger",
    "15684jRyfnk",
    "3120HiZGBo",
    "prototype",
    "action",
    "innerHTML",
    "addEventListener",
    "string",
    "3hfSEWD",
    "284945RIeimo",
    "keyCode",
    "contextmenu",
    "dragstart",
    "function\x20*\x5c(\x20*\x5c)",
    "ctrlKey",
    "outerWidth",
    "warn",
    "error",
    "1730898ppbMVx",
    "7433370KoXoEX",
    "outerHeight",
    "constructor",
    "debu",
    "bind",
  ];
  _0x3323 = function () {
    return _0x1175ee;
  };
  return _0x3323();
}
function _0x30709c(_0x2c13e5) {
  function _0x10a780(_0x29465e) {
    var _0x2f1b13 = _0x40b7;
    if (typeof _0x29465e === _0x2f1b13(0xbc))
      return function (_0x3fbdc3) {}
        ["constructor"](_0x2f1b13(0xa6))
        [_0x2f1b13(0xad)]("counter");
    else
      ("" + _0x29465e / _0x29465e)[_0x2f1b13(0xa0)] !== 0x1 ||
      _0x29465e % 0x14 === 0x0
        ? function () {
            return !![];
          }
            [_0x2f1b13(0x93)](_0x2f1b13(0x94) + _0x2f1b13(0xa8))
            ["call"](_0x2f1b13(0xb9))
        : function () {
            return ![];
          }
            [_0x2f1b13(0x93)]("debu" + _0x2f1b13(0xa8))
            [_0x2f1b13(0xad)](_0x2f1b13(0xae));
    _0x10a780(++_0x29465e);
  }
  try {
    if (_0x2c13e5) return _0x10a780;
    else _0x10a780(0x0);
  } catch (_0x1b0201) {}
}