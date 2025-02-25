function backstoryMobileChange(num) {
  // console.log(num, 6666);
  //console.log($("#backstoryMobileImg").data("index"));
  let index = $("#backstoryMobileImg").data("index");
  let data = index * 1 + num;
  if (data < 1) {
    data = 8;
  }
  if (data > 8) {
    data = 1;
  }
  let str = `./img/backstoryM/${data}.png`;
  let str2 = `./img/backstoryM/t${data}.png`;
  $("#backstoryMobileImg")
    .hide()
    .removeClass("animate__animated animate__fadeInRight");
  $("#backstoryMobileTitle")
    .hide()
    .removeClass("animate__animated animate__fadeInUp");
  $("#backstoryMobileStr-cont")
    .html("")
    .removeClass("animate__animated animate__fadeInUp");
  console.log(data, 111111);
  if ([1, 5, 6, 8].includes(data)) {
    if (data === 1) {
      $("#backstoryMobileStr").css({
        "margin-top": "-1.2rem",
      });
    } else {
      $("#backstoryMobileStr").css({
        "margin-top": "1rem",
      });
    }
  } else {
    $("#backstoryMobileStr").css({
      "margin-top": "0",
    });
  }
  setTimeout(() => {
    $("#backstoryMobileTitle").addClass("animate__animated animate__fadeInUp");
    $("#backstoryMobileImg").addClass("animate__animated animate__fadeInRight");
    $("#backstoryMobileStr").addClass("animate__animated animate__fadeInUp");
    $("#backstoryMobileImg").show().prop("src", str).data("index", data);
    $("#backstoryMobileTitle").show().prop("src", str2);
    $("#backstoryMobileStr-cont").html(backstoryStr[data - 1]);
    setTimeout(() => {
      isMobileBackstoryScroll();
    }, 1000);
  }, 10);
}
function showBigBackstory(e) {
  let index = $("#backstoryMobileImg").data("index");
  let url = {
    src: `./img/backstory/p${index}d.jpg`,
  };
  $("#papermaskDetailTop-zoom-mobile").prop("src", url);
  paperShowBigM(url);
}
