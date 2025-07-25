var musicTimer;

function muteMusic(num) {
    const bgm = document.getElementById('bgm');
    if (num == 1) {
        // 点击播放图标 (v2.gif)，执行播放
        bgm.play().catch(err => console.log("播放失败：", err));
        document.querySelectorAll('.imgMusicPlay').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.imgMusicStop').forEach(el => el.style.display = 'block');
    }
    if (num == 2) {
        // 点击暂停图标 (v2c.png)，执行暂停
        bgm.pause();
        document.querySelectorAll('.imgMusicPlay').forEach(el => el.style.display = 'block');
        document.querySelectorAll('.imgMusicStop').forEach(el => el.style.display = 'none');
    }
}

function changeGalleryMusic(type) {
    if (typeof jQuery === 'undefined') {
        console.error('jQuery 未加载，跳过 changeGalleryMusic');
        return;
    }
    if (type == "play") {
        muteMusic(1);
        $(".music-z").show();
        $(".music-pc").hide();
        $("#allMusic")[0].play();
        // $(".musicmask-player-con-mid-img-img").addClass("music-rotate");
        $(".musicmaskDetail-con-left-record").addClass("music-rotate");
        // $(".musicmask-player-left-mobile").addClass("music-rotate");
        $(".musicmaskDetail-con-top-record-mobile").addClass("music-rotate");
        musicTimer = setInterval(changeMusicProgress, 500);
    }
    if (type == "stop") {
        $(".music-z").hide();
        $(".music-pc").show();
        $("#allMusic")[0].pause();
        // $(".musicmask-player-con-mid-img-img").removeClass("music-rotate");
        $(".musicmaskDetail-con-left-record").removeClass("music-rotate");
        // $(".musicmask-player-left-mobile").removeClass("music-rotate");
        $(".musicmaskDetail-con-top-record-mobile").removeClass("music-rotate");
        //console.log($("#allMusic"));
    }
}

function changeMusicProgress() {
    if (typeof jQuery === 'undefined') {
        console.error('jQuery 未加载，跳过 changeMusicProgress');
        return;
    }
    // 音乐结束
    if ($("#allMusic")[0].ended) {
        //console.log(777)
        $(".music-z").hide();
        $(".music-pc").show();
        // $(".musicmask-player-con-mid-img-img").removeClass("music-rotate");
        $(".musicmaskDetail-con-left-record").removeClass("music-rotate");
        clearInterval(musicTimer);
        return;
    }
    let percent = (($("#allMusic")[0].currentTime) / ($("#allMusic")[0].duration)).toFixed(4);
    //console.log(percent, 666666666)
    let width = $("#progress1")[0].offsetWidth * percent;
    $("#progressNow1").css("width", width);
    $("#progressNow2").css("width", width);
    // 手机端进度条
    let widthMobile = $("#progressM")[0].offsetWidth * percent;
    $("#progressNowM").css("width", widthMobile);
    let data = getTimeFromSeconds($("#allMusic")[0].currentTime);
    let allData = getTimeFromSeconds($("#allMusic")[0].duration);
    //console.log(data, 999)
    $(".musicmaskDetail-con-right-bottom-bottom-time-start-pc").text(data);
    $(".musicmaskDetail-con-right-bottom-bottom-time-end-pc").text(allData);
    $(".musicmaskDetail-con-right-bottom-bottom-time-mobile-start").text(data);
    $(".musicmaskDetail-con-right-bottom-bottom-time-mobile-end").text(allData);
}

// 初始化音频播放
document.addEventListener('DOMContentLoaded', function() {
    const bgm = document.getElementById('bgm');
    // 确保音频加载
    bgm.load();
    // 确保 loop 属性启用
    bgm.loop = true;
    // 初始化图标状态：默认显示播放图标
    document.querySelectorAll('.imgMusicPlay').forEach(el => el.style.display = 'block');
    document.querySelectorAll('.imgMusicStop').forEach(el => el.style.display = 'none');

    // 检查 jQuery 是否加载
    if (typeof jQuery === 'undefined') {
        console.error('jQuery 未加载，使用原生 JavaScript 处理图标');
    } else {
        $('.imgMusicPlay').css('display', 'block');
        $('.imgMusicStop').css('display', 'none');
    }

    // 添加音频事件监听以调试停止原因
    bgm.addEventListener('play', () => console.log('背景音乐开始播放'));
    bgm.addEventListener('pause', () => console.log('背景音乐暂停，可能由脚本或浏览器触发'));
    bgm.addEventListener('ended', () => console.log('背景音乐结束，未循环，可能 loop 属性失效或文件问题'));
    bgm.addEventListener('error', (e) => console.log('背景音乐加载或播放错误：', e));

    // 尝试自动播放
    const playPromise = bgm.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            // 播放成功，显示暂停图标
            if (typeof jQuery === 'undefined') {
                document.querySelectorAll('.imgMusicPlay').forEach(el => el.style.display = 'none');
                document.querySelectorAll('.imgMusicStop').forEach(el => el.style.display = 'block');
            } else {
                $('.imgMusicPlay').hide();
                $('.imgMusicStop').show();
            }
            console.log("背景音乐自动播放成功");
        }).catch(error => {
            console.log("自动播放失败，可能需要用户交互：", error);
            // 创建覆盖层
            const overlay = document.createElement('div');
            overlay.id = 'musicOverlay';
            overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); color: white; display: flex; align-items: center; justify-content: center; z-index: 9999; font-size: 24px; text-align: center;';
            overlay.innerText = 'クリックして閲覧を開始してください。';
            document.body.appendChild(overlay);

            // 定义播放函数
            const startPlayback = () => {
                bgm.play().then(() => {
                    if (typeof jQuery === 'undefined') {
                        document.querySelectorAll('.imgMusicPlay').forEach(el => el.style.display = 'none');
                        document.querySelectorAll('.imgMusicStop').forEach(el => el.style.display = 'block');
                    } else {
                        $('.imgMusicPlay').hide();
                        $('.imgMusicStop').show();
                    }
                    overlay.remove();
                    console.log("用户交互后背景音乐播放成功");
                }).catch(err => console.log("用户交互后播放失败：", err));
            };

            // 监听点击、滚轮和触摸事件（一次性）
            document.body.addEventListener('click', startPlayback, { once: true });
            document.body.addEventListener('wheel', startPlayback, { once: true });
            document.body.addEventListener('touchstart', startPlayback, { once: true });
        });
    }
});