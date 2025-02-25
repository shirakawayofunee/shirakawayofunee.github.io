var interleaveOffset = 0.8; //视差比值
var backstoryStr = [
  `<span>It was 23:59.December 31, 1999. Out of the gap between the two centuries, a"Storm" poured upwards into the sky.
    The next second, all the parties, neon signs, and late night buses faded away. The world returned to a strange old era. <p></p>
    This young girl, the "Timekeeper," the only one immune to the Storm, has witnessed the beginnings and ends of countless eras. During her time travel, she makes friends with arcanists from different times and countries and then guides them ... to escape the "Storm."
    </span>`,
  `<span>Every era has its own symbolic city. For the 60s, it was London; while for the 20s, most would agree it was New York.<p></p>
    At that time in the Big Apple, modern science was making the unthinkable into reality. The Ford Motor Company and broadcast radio spread the word across the world. Jazz music playing all night, people dancing the Charleston or on the way to the next party.<p></p>
    No one could say no to this carnival.
    </span>`,
  `<span>Anything seemed possible in the 60s. Pop art and the hippie movement rose in popularity among the nation's youth, and London became the Capital of Cool. More importantly, this era witnessed the rise of Pirate Radio and rock music.</span>`,
  `<span>This may sound like an odd tale: when the first drop of rain reached the sky, bizarre changes would happen to people.<p></p>
    From the pop art and the bold colors in the 60s, to the platinum and the jazz in the 20s ... As the character of each era changed, so did the corresponding syndrome on people. These changes were like an illusion, or the mirage of their time.
    </span>`,
  `<span>Over the course of thousands of years, SPDM has adopted countless homeless arcanist children and provided them with systematic arcanum training.<p></p>
    Most of its graduates are seen as role models and sent to work in international organizations, such as the St. Pavlov Foundation, Zeno Academy, etc.<p></p>
    No matter where they are, the children who grew up in gray and white uniforms have never forgotten their motto and principle: "For the welfare and peace of mankind."</span>`,
  `<span>Between all things lies causality, within Ouroboros loops the world.<p></p>
    After multiple industrial revolutions, the LSCC has risen to fame and grown into the largest R&D organization in the world by virtue of their cutting-edge technology and understanding history's lessons. They are committed to bringing forth a fourth industrial revolution by combining scientifc technology with arcane skill.
    Since the advent of the first "Storm," the LSCC has enshrined the law of causality as their core theory. Now they search for the reason behind the reversal of time through their algorithms.</span>`,
  `<span>The windows in the suitcase often show strange views within. However, one remains unchanging; the lake and the broken spinning wheel always remain the same.<p></p>
    Walk to the spinning wheel on the flowing water of time and spin it to summon arcanists.</span>`,
  `<span>A dark purple suitcase with a diamond check pattern. It can be unlocked by a relatively simple incantation and leads to an implausibly spacious residence.<p></p>
    There are countless doors and windows inside, each containing a different view. Since it can protect the features of different times from the erosion of the "Storm," one may anticipate that many arcanists will find their place here in the future.</span>`,
];
var pcbackstory = new Swiper("#pcbackstory", {
  speed: 1000,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  // watchSlidesProgress: true,
  loop: true,
  navigation: {
    nextEl: "#backstoryNext",
    prevEl: "#backstoryPre",
  },
  // on:{

  // }
  on: {
    slideChange: function () {
      //console.log(this.realIndex)
      changeBackstory(this.realIndex);
    },
    // progress: function(swiper) {
    //   for (var i = 0; i < swiper.slides.length; i++) {
    //   var slideProgress = swiper.slides[i].progress;
    //   var innerOffset = swiper.width * interleaveOffset;
    //   var innerTranslate = slideProgress * innerOffset;
    //   swiper.slides[i].querySelector(".slide-inner").style.transform =
    //     "translate3d(" + innerTranslate + "px, 0, 0)";
    //   }
    // },
    // touchStart: function(swiper) {
    //   for (var i = 0; i < swiper.slides.length; i++) {
    //   swiper.slides[i].style.transition = "";
    //   }
    // },
    // setTransition: function(swiper, speed) {
    //   for (var i = 0; i < swiper.slides.length; i++) {
    //   swiper.slides[i].style.transition = speed + "ms";
    //   swiper.slides[i].querySelector(".slide-inner").style.transition =
    //     speed + "ms";
    //   }
    // }
  },
});
function changeBackstory(num) {
  for (let i = 1; i < 9; i++) {
    let strId = `#backstoryImg${i}`;
    $(strId).attr("src", `./img/backstory/${i}.png`);
  }
  let checkId = `#backstoryImg${num + 1}`;
  $(checkId).attr("src", `./img/backstory/${num + 1}_1.png`);
  $("#backstoryTitle")
    .attr("src", `./img/backstory/t${num + 1}.png`)
    .removeClass("animate__animated animate__fadeInUp");
  if ([1, 7, 8].includes(num + 1)) {
    $("#backstoryTitle").css({
      "margin-bottom": "-1rem",
    });
  } else {
    $("#backstoryTitle").css({
      "margin-bottom": "0",
    });
  }
  $("#backstoryStr")
    .html(backstoryStr[num])
    .removeClass("animate__animated animate__fadeInUp");
  setTimeout(function () {
    $("#backstoryTitle").addClass("animate__animated animate__fadeInUp");
    $("#backstoryStr").addClass("animate__animated animate__fadeInUp");
  }, 10);
}
changeBackstory(0);
function changeBackstoryClick(num) {
  pcbackstory.slideTo(num + 1);
}
