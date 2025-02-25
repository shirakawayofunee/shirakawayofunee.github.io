var mySwiperM = null;
// new Swiper("#newsLeftM", {
//   autoplay: {
//     delay: 10000,
//   },
//   on: {
//     slideChange: function () {
//       changePageM(this.realIndex);
//     },
//   },
// });
//分页
function changePageM(num) {
  //console.log(num,9999)
  let id = `#newsPageM${num}`;
  $("#newsPageM").children(".page-icon").removeClass("page-icon-active");
  $(id).addClass("page-icon-active");
  //mySwiperM.slideTo(num)
}

//新闻导航切换
function changeNewsM(num) {
  let id = `#newsM${num}`;
  $(".news-right-head-bg-mobile")
    .children(".news-right-head-bg-list")
    .removeClass("news-right-head-bg-list-active");
  $(id).addClass("news-right-head-bg-list-active");
  let numdata = {
    id: "",
    informationType: num ? num + 1 : "",
    current: 1,
    pageSize: 5,
    isTop: "",
  };

  getNewsList(numdata).then((data) => {
    //console.log(data,12345);
    newsData = data.pageData;
    setNewsM(num);
  });
}
function setNewsM(num) {
  var title;
  let tagMap = {
    0: "LATEST",
    1: "NOTICE",
    2: "EVENTS",
    3: "NEWS",
    undefined: "",
  };
  title = tagMap[num];
  $(".newsMobile-mid-list").empty();
  newsData.map((v, index) => {
    let time = v.onlineTime.split(" ");
    let str = `<div class="news-right-con-list" data-news="${v.id}" onclick="goNewsM(${v.id})">
                    <div class="news-right-con-list-left">
                      <div class="news-right-con-list-left-type">${title}</div>
                      <div class="news-right-con-list-left-title">${v.title}</div>
                    </div>
                    <div class="news-right-con-list-left-time">${time[0]}</div>
                  </div>`;
    $(".newsMobile-mid-list").append(str);
  });
}

function goToMoreM() {
  var path = "";
  if (window.location.pathname != "/") {
    path = window.location.pathname;
  }
  window.open(`./detail.html#news`, "_blank");
}
function goNewsM(index) {
  //console.log(index);
  window.open(`./detail.html#newsId?${index}`, "_blank");
}
function newMobileImgRender() {
  imgList.map((v, index) => {
    let str = `<div class="swiper-slide news-left-con" onclick="goImg(${index})" ><img src="${v.guideUrl}" style="width:100%;" data-mouse="mid" class="newsMobileImg"></div>`;
    let str2 = `<div class="page-icon" data-mouse="small" id="newsPageM${index}"></div>`;
    $("#imgNewsM").append(str);
    $("#newsPageM").append(str2);
  });
  changePageM(0);
  setTimeout(function () {
    mySwiperM = new Swiper("#newsLeftM", {
      autoplay: {
        delay: 10000,
      },
      on: {
        slideChange: function () {
          changePageM(this.realIndex);
        },
      },
    });
  }, 2000);

  // setTimeout(function(){
  //   // $("#newsLeftM").show();
  //   // $(".news-right-head-bg").show();
  // },1000)
}
