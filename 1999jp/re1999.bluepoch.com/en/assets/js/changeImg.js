//1.获取ul
var cur_ul = document.getElementById("banner");
var cur_ul_change_left = document.getElementById("cur_ul_change_left");
var cur_ul_change_right = document.getElementById("cur_ul_change_right");
var imgLen = 6; // 图的数量
var currentIndex = 0;
var nextIndex = currentIndex === imgLen - 1 ? 0 : currentIndex + 1;
var timer = null;
var arrImg = new Array();
// 创建轮播图
function initImg(arr) {
  if (arr.length > 0) {
    imgLen = arr.length;
    nextIndex = currentIndex === imgLen - 1 ? 0 : currentIndex + 1;
  }
  // 创建轮播图
  crSwiperImg(arr);
  // 创建星星
  crStar(imgLen);
  // 声明一个定时器，然后把轮播图函数放进间歇函数，3秒进行一次轮播
  // timer = setInterval(get_next, 3000);
}

// 创建轮播图
function crSwiperImg(list) {
  // 2.创建一个数组实例
  // 用js来创建li、img元素，有多少张图片要轮播就循环多少次
  for (i = 1; i <= imgLen; i++) {
    // 创建li元素
    var cur_li = document.createElement("li");
    // 创建img元素
    var cur_img = document.createElement("img");
    // 给img元素设置src、width、height属性
    // 这里src是轮播图的路径
    // 在img文件夹下的图片命名为1.jpg、2.jpg、3.jpg....才可以这样写
    cur_img.src = list.length
      ? list[i - 1]
      : "./assets/img/third/" + i + ".png";
    cur_img.style.width = "59.4375rem";
    cur_img.style.height = "33.375rem";
    cur_li.setAttribute("data-index", i);
    // 把img元素插入到创建的li里面
    cur_li.appendChild(cur_img);
    // 然后在把li插入到ul里面
    cur_ul.appendChild(cur_li);
    // 然后给ul元素设置事件，鼠标移进来停止轮播
    cur_ul.onmouseenter = function () {
      clearInterval(timer);
    };
    // 鼠标移出ul又继续轮播图片
    cur_ul.onmouseleave = function () {
      // timer = setInterval(get_next, 3000);
    };
    // 当创建完一个li（li里已经有img元素）就把li添加到arr数组里
    // arr里存的li 相当于一个对象，在其他地方在把arr里的li取出来，还是指向原来那个，并不是一个新的li
    // 相当于对象的浅拷贝，指针指向问题
    arrImg.push(cur_li);
  }
  // 小于3张不适合用这种立体轮播
  if (imgLen > 2) {
    arrImg.forEach((e) => {
      e.style.filter = "brightness(0.3)";
      e.style.transform = "scale(0.8)";
      e.style.zIndex = 1;
    });
    // 因为所写的轮播图是中间图片放大大，左右两边图片正常，所以要进行下面的操作
    // 如果你只需要那种一张张图片轮播，即没有左右两边的轮播图，可以去掉下面代码
    // 我们要三张图片进行展示， 左 中 右
    var len = arrImg.length - 1;
    // 这是取得左边图片并调整位置
    arrImg[len].style.left = "-0rem";
    arrImg[len].style.filter = "brightness(0.3)";
    arrImg[len].style.transform = "scale(0.8)";
    // 这是取得中间图片并调整位置
    arrImg[currentIndex].style.left = "17.5rem";
    // 这是取得右边图片并调整位置
    arrImg[currentIndex + 1].style.left = "36rem";
    arrImg[currentIndex + 1].style.filter = "brightness(0.3)";
    arrImg[currentIndex + 1].style.transform = "scale(0.8)";
    // 然后中间图片调用scale使其变大
    arrImg[currentIndex].style.transform = "scale(1)";
    arrImg[currentIndex].style.filter = "brightness(1)";
    // 中间图片也给其一个较大的堆叠数值，使其中间图片在左右图片上面
    arrImg[currentIndex].style.zIndex = 100;
  } else {
    arrImg.forEach((e) => {
      e.style.left = "36rem";
      e.style.filter = "brightness(0.3)";
      e.style.transform = "scale(0.8)";
      e.style.zIndex = 1;
    });
    arrImg[currentIndex].style.left = "17.5rem";
    arrImg[currentIndex].style.filter = "brightness(1)";
    arrImg[currentIndex].style.transform = "scale(1)";
    arrImg[currentIndex].style.zIndex = 100;
  }
}

// 封装轮播图函数
// 然后开始进行轮播，原理就是换arr里的li元素的位置，越靠后的li元素z-index越大
// z-index越大，就会叠在其他li元素上面，所以换arr里的li位置就可以实现轮播
function get_next() {
  if (imgLen <= 1) return;
  currentIndex++;
  nextIndex = currentIndex === imgLen - 1 ? 0 : currentIndex + 1;
  // console.log(currentIndex, nextIndex, "当前index");
  arrImg.forEach((e) => {
    e.style.filter = "brightness(0.3)";
    e.style.transform = "scale(0.8)";
    e.style.zIndex = 1;
  });
  // 因为所写的轮播图是中间图片放大大，左右两边图片正常，所以要进行下面的操作
  // 如果你只需要那种一张张图片轮播，即没有左右两边的轮播图，可以去掉下面代码
  // 我们要三张图片进行展示， 左 中 右
  // 这是取得左边图片并调整位置
  arrImg[currentIndex - 1].style.left = "-0rem";
  arrImg[currentIndex - 1].style.filter = "brightness(0.3)";
  arrImg[currentIndex - 1].style.transform = "scale(0.8)";
  arrImg[currentIndex - 1].style.zIndex = 2;

  if (currentIndex === imgLen) {
    currentIndex = 0;
    nextIndex = currentIndex + 1;
  }
  // 然后中间图片调用scale使其变大
  arrImg[currentIndex].style.left = "17.5rem";
  arrImg[currentIndex].style.transform = "scale(1)";
  arrImg[currentIndex].style.filter = "brightness(1)";
  arrImg[currentIndex].style.zIndex = 100;
  changePage(currentIndex);

  // 这是取得右边图片并调整位置
  arrImg[nextIndex].style.left = "36rem";
  arrImg[nextIndex].style.filter = "brightness(0.3)";
  arrImg[nextIndex].style.transform = "scale(0.8)";
  arrImg[nextIndex].style.zIndex = 2;
}

// 用js创建左箭头
var pre_img = document.createElement("img");
pre_img.src = "./assets/img/third/pre.png"; //左箭头图片
pre_img.className = "pre-img";
pre_img.style.position = "absolute";
pre_img.style.left = "75%";
pre_img.style.top = "50%";
pre_img.style.transform = "translate(-75%, -50%)";
pre_img.style.margin = "auto";
pre_img.style.zIndex = 100;
pre_img.style.width = "100%";
cur_ul_change_left.appendChild(pre_img);

// 用js创建右箭头
var next_img = document.createElement("img");
next_img.src = "./assets/img/third/next.png"; //右箭头的图片
next_img.className = "next-img";
next_img.style.position = "absolute";
next_img.style.right = "75%";
next_img.style.top = "50%";
next_img.style.transform = "translate(75%, -50%)";
next_img.style.margin = "auto";
next_img.style.zIndex = 100;
next_img.style.width = "100%";
cur_ul_change_right.appendChild(next_img);

// 给左箭头点击绑定事件
pre_img.onclick = function () {
  get_pre();
};
// 右箭头的作用就是向前轮播一直图片，和我们上面写的get_next()方法要实现的功能一样，直接引用
next_img.onclick = function () {
  get_next();
};

// 左箭头的绑定事件 和get_next()思路一样，就是要改一下就行。
function get_pre() {
  if (imgLen <= 1) return;
  currentIndex--;
  nextIndex = currentIndex + 1;
  console.log(currentIndex, nextIndex, "当前index");
  arrImg.forEach((e) => {
    e.style.filter = "brightness(0.3)";
    e.style.transform = "scale(0.8)";
    e.style.zIndex = 1;
  });
  if (currentIndex < 0) {
    currentIndex = imgLen - 1;
    nextIndex = 0;
  }
  // 这是取得左边图片并调整位置
  arrImg[currentIndex - 1 < 0 ? imgLen - 1 : currentIndex - 1].style.left =
    "-0rem";
  arrImg[currentIndex - 1 < 0 ? imgLen - 1 : currentIndex - 1].style.filter =
    "brightness(0.3)";
  arrImg[currentIndex - 1 < 0 ? imgLen - 1 : currentIndex - 1].style.transform =
    "scale(0.8)";
  arrImg[currentIndex - 1 < 0 ? imgLen - 1 : currentIndex - 1].style.zIndex = 2;

  // 然后中间图片调用scale使其变大
  arrImg[currentIndex].style.left = "17.5rem";
  arrImg[currentIndex].style.transform = "scale(1)";
  arrImg[currentIndex].style.filter = "brightness(1)";
  arrImg[currentIndex].style.zIndex = 100;
  changePage(currentIndex);

  // 这是取得右边图片并调整位置
  arrImg[nextIndex].style.left = "36rem";
  arrImg[nextIndex].style.filter = "brightness(0.3)";
  arrImg[nextIndex].style.transform = "scale(0.8)";
  arrImg[nextIndex].style.zIndex = 2;
}

// 创建下面的星星
function crStar(num) {
  for (let i = 0; i < num; i++) {
    var star_img = document.createElement("img");
    star_img.src =
      i === 0 ? "assets/img/third/xc.png" : "assets/img/third/xn.png";
    star_img.className = "page-img";

    $(".page").append(star_img);
  }
}

function changePage(index) {
  $(".page-img").attr("src", "./assets/img/third/xn.png");
  $(".page-img").get(index).src = `./assets/img/third/xc.png`;
}

// $(".next-img").mouseenter(function () {
//   this.src = "./assets/img/third/nn.png";
// });
// $(".next-img").mouseleave(function () {
//   this.src = "./assets/img/third/next.png";
// });
// $(".pre-img").mouseenter(function () {
//   this.src = "./assets/img/third/pn.png";
// });
// $(".pre-img").mouseleave(function () {
//   this.src = "./assets/img/third/pre.png";
// });
