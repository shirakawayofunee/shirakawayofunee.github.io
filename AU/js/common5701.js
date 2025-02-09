/* =================================================
JavaScript
=================================================*/

/* スクロール判定 --------------------------------------------------------------------------*
 *  
 *  jQuery scrollstop event
 *  
 *  MIT-style license. 
 *  
 *  2012 Kazuma Nishihata 
 *  http://www.to-r.net
 *  http://blog.webcreativepark.net/2012/09/06-152317.html
 *  
 *--------------------------------------------------------------------------*/
!function(factory){"function"==typeof define&&define.amd?define(["jquery"],factory):"object"==typeof exports?module.exports=factory(require("jquery")):factory(jQuery)}(function($){var dispatch=$.event.dispatch||$.event.handle,special=$.event.special,uid1="D"+ +new Date,uid2="D"+(+new Date+1);special.scrollstart={setup:function(data){var timer,_data=$.extend({latency:special.scrollstop.latency},data),handler=function(evt){var _self=this,_args=arguments;timer?clearTimeout(timer):(evt.type="scrollstart",dispatch.apply(_self,_args)),timer=setTimeout(function(){timer=null},_data.latency)};$(this).bind("scroll",handler).data(uid1,handler)},teardown:function(){$(this).unbind("scroll",$(this).data(uid1))}},special.scrollstop={latency:250,setup:function(data){var timer,_data=$.extend({latency:special.scrollstop.latency},data),handler=function(evt){var _self=this,_args=arguments;timer&&clearTimeout(timer),timer=setTimeout(function(){timer=null,evt.type="scrollstop",dispatch.apply(_self,_args)},_data.latency)};$(this).bind("scroll",handler).data(uid2,handler)},teardown:function(){$(this).unbind("scroll",$(this).data(uid2))}}});

/* ====================================
高さを揃える
==================================== */
$(document).ready(function(){
/*** 2019.06.10 TOPページ matchHeightなしで高さ揃え
	// トップページ メインエリア
	$('.c-latest_main').matchHeight();
	$('.c-latest_main .img').matchHeight();

	// トップページ BL NEWS
	$('.c-bl_news .c-item').matchHeight();

	// トップページ NOVEL CD
	$('.js-line_ranking01').matchHeight();
***/
	// 関連記事、最新ニュース
	$('.c-related_news .c-item').matchHeight();

	// アワード
	$(".js-line_award01a").matchHeight();
	$(".js-line_award01b").matchHeight();
	$(".js-line_award01c").matchHeight();
	$(".js-line_award02a").matchHeight();
	$(".js-line_award02b").matchHeight();
	$(".js-line_award03a").matchHeight();
	$(".js-line_award03b").matchHeight();
	$(".js-line_award04a").matchHeight();
	$(".js-line_award04b").matchHeight();
	$(".js-line_award05a").matchHeight();
	$(".js-line_award05b").matchHeight();
	$(".js-line_award06a").matchHeight();
	$(".js-line_award06b").matchHeight();
	$(".js-line_award07a").matchHeight();
	$(".js-line_award07b").matchHeight();
	$(".js-line_award08").matchHeight();
	$(".js-line_award08a").matchHeight();
	$(".js-line_award08b").matchHeight();
	$(".js-line_award09").matchHeight();
	$(".js-line_award09a").matchHeight();
	$(".js-line_award09b").matchHeight();
	$(".js-line_award10a").matchHeight();
	$(".js-line_award10b").matchHeight();
	$(".js-line_award11a").matchHeight();
	$(".js-line_award11b").matchHeight();
	$(".js-line_award12a").matchHeight();
	$(".js-line_award12b").matchHeight();
	$(".js-line_award13a").matchHeight();
	$(".js-line_award13b").matchHeight();
	$(".js-line_award14a").matchHeight();

});

/* ====================================
ページトップへ戻る/ページ内リンク
==================================== */
$(document).ready(function(){
	var setScroll;
	$(window)
	.on("scrollstop", function() { //スクロールしていない時非表示
		setScroll = setTimeout(function(){
			$('#c-pagetop').fadeOut();
			$('#js-pagenav').fadeOut();
		},2000);
	})
	.on("scrollstart", function() { //スクロールしたら表示
		if(document.activeElement.id != 'review_0'
			&& document.activeElement.id != 'review_1') {//2017.12.07 レビュー書き込みにフォーカスが入ってる場合は表示させない
			$('#c-pagetop').fadeIn();
			$('#js-pagenav').fadeIn();
			clearTimeout(setScroll);
		}

	})

	$('#c-pagetop').click(function () { //ページトップへ戻る
		$('body, html').animate({ scrollTop: 0 }, 500);
		return false;
	});

	var headerHight = 42; //固定ヘッダの高さ
	$("#js-pagenav a[href^='#']").click(function(){ //ページ内リンク
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top-headerHight;
		$("html, body").animate({scrollTop:position}, 500);
		return false;
	});
	$(".js-pagelink").click(function(){ //ページ内リンク
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top-headerHight;
		$("html, body").animate({scrollTop:position}, 500);
		return false;
	});

});

/*====================================
ヘッダ
====================================*/
$(document).ready(function(){

	/* ヘッダ位置固定（SP） */
	var box    = $("#h-search");
	if (box.length){
		var boxTop = box.offset().top;
		$(window).scroll(function () {
			if($(window).scrollTop() >= boxTop) {
				box.addClass("fixed");
				$("body").addClass("js-fixedhead");
			} else {
				box.removeClass("fixed");
				$("body").removeClass("js-fixedhead");
			}
		});
	}

	/* メニューを開いた時ヘッダ固定解除（SP） */
	$('#h-menu_btn').click(function () {
		$(this).toggleClass('js-open');
	});

	/* サブメニュー開閉（SP） */
	var gNavSlide = $('.g-has_sub');
	gNavSlide.next('ul').hide();
	gNavSlide.click(function () {
		$(this).next('ul').slideToggle(250);
		$(this).toggleClass('js-open');
	});

	/* グローバルナビ ドロップダウン（PC） */
	$(".js-dropdown").hover(
		function() {
			$('.js-dropdown_menu', this).not('.in .js-dropdown_menu').stop(true,true).delay(100).fadeIn();
			$(this).addClass('js-open');
		},
		function() {
			$('.js-dropdown_menu', this).not('.in .js-dropdown_menu').stop(true,true).delay(100).fadeOut();
			$(this).removeClass('js-open');
		}
	);
	$(".js-dropdown_second").hover(
		function() {
			$('.js-dropdown_menu_second', this).not('.in .js-dropdown_menu_second').stop(true,true).delay(100).fadeIn();
			$(this).addClass('js-open');
		},
		function() {
			$('.js-dropdown_menu_second', this).not('.in .js-dropdown_menu_second').stop(true,true).delay(100).fadeOut();
			$(this).removeClass('js-open');
		}
	);
	
});


/* 検索カテゴリセレクト */
function chgAct() {
	$('input#act').attr('name', $('select#ss01').val());
	if($('select#ss01').val()=='action_sp_compNewsSearch') $('input#k').val('blnews');
}

/* 検索キーワードサジェスト表示 */
$(document).ready(function(){
	var searchInput = $('#js-h-search_keywords');
	var searchList = $('#js-h-search_suggest');
	if (searchInput.length) {
/*
		searchInput.keyup(function() {
			searchList.show();
		});
		$('#js-h-search_suggest li').on('click',function() {
			var selectedSuggest = $(this).text();
			searchInput.val(selectedSuggest);
			searchList.hide();
		});
*/
		$('#js-h-suggest_close').on('click',function() {
			searchList.hide();
		});
	}
});

/*====================================
アコーディオン
====================================*/
/* 初期状態：アコーディオンが開いている */
$(document).ready(function(){
	$(document).on('click', '.js-accordion_btn',function(event){
		$(this).next('.js-accordion_cont').slideToggle(250);
		$(this).toggleClass('js-close');
	});
	/* 絞り込み（発売日） */
	$('.js-refine_btn').click(function () {
		$(this).next('.js-refine_cont').slideToggle(250);
		$(this).toggleClass('js-open');
		$(this).toggleClass('js-close');
	});
});

/*====================================
トップページ
====================================*/
$(document).ready(function(){


	/* ランキング（期間を指定してもっと見る） */
	$('.c-ranking_btn').click(function () {
		$(this).next().fadeIn(150);
	});
	$('.c-ranking_close').click(function () {
		$(this).parents('.c-ranking_panel').fadeOut(150);
	});

	/* ランキング ツールチップ（Bootstrap） */
	$('[data-toggle="tooltip"]').tooltip();

});

/* 攻め受け検索（キーワード） */
function seme_uke_search() {
	if ("" == $("#seme").val() && "" == $("#uke").val()) {
		alert("キーワード（攻め）またはキーワード（受け）を指定してください。");
	} else {
		$("#form_search_seme_uke").submit();

/*
		var url1 = "";
		var url2 = "";
		if ("" != $("#seme").val()) {
			url1 = "&fashion_seme%5B%5D=" + $("#seme").val();
		}
		if ("" != $("#uke").val()) {
			url2 = "&fashion_uke%5B%5D=" + $("#uke").val();
		}
		location.href = "http://www.chil-chil.net/sp/goodsList/?freeword=" + url1 + url2;
*/
	}
}

/* 攻め受け検索（声優カップリング） */
function couple_search() {
	if ("" == $("#voice_actor_seme").val() && "" == $("#voice_actor_uke").val()) {
		alert("声優（攻め）または声優（受け）を指定してください。");
	} else {
		$("#form_couple_search").submit();
	}
}

/* 超詳細検索 */
$(document).ready(function() {
	
	//初期設定
	$('.js-checked_list label').each(function(){

//console.debug("init :"+$(this).prev('input').attr("id"));
		var vl = $(this).prev('input').val();
		var ck = $(this).prev('input').attr('checked');


		//チェックあり
		if (vl.substr(0,1) != "-" && ck=="checked") {
			$(this).removeClass('js-unchecked')
			$(this).removeClass('js-excluded')
			$(this).addClass('js-checked');
//console.debug("checkあり");

		//除外時
		} else if (vl.substr(0,1) == "-" && ck=="checked")  {
			$(this).removeClass('js-unchecked')
			$(this).removeClass('js-checked')
			$(this).addClass('js-excluded');
			$(this).prev('input').attr("checked", "checked");  //チェックを入れる
			$(this).prev('input').prop('checked',true);  //チェックを入れる
//console.debug("Notcheckあり");

		//チェックなし
		} else {
			$(this).removeClass('js-checked')
			$(this).removeClass('js-excluded')
			$(this).addClass('js-unchecked');
			$(this).prev('input').removeAttr('checked'); //チェックを解除
			$(this).prev('input').prop('checked',false); //チェックを解除
//console.debug("checkなし");
		}
	});

	//debug
	$('.js-checked_list input[type="checkbox"]').click(function () {
//console.debug("★checkbox clicked :"+$(this).attr('id'));
//console.debug("　checked  :"+$(this).attr('checked'));
//console.debug("　prop  :"+$(this).prop('checked'));
		if($(this).attr('checked')=='checked') $(this).prop('checked', true);
		else $(this).prop('checked', false);
	});

	//チェックボックスクリック時の動作
	$('.js-checked_list label').click(function () {

//console.debug("label clicked :"+$(this).prev('input').attr('id'));
//console.debug("val="+$(this).prev('input').val());
//console.debug("value="+$(this).prev('input').attr('value'));
//console.debug("chk="+$(this).prev('input').attr('checked'));


		//チェックなし（class名がjs-unchecked）はjs-checkedに変更
		if ( $(this).hasClass("js-unchecked") ) {
			$(this).removeClass('js-unchecked').addClass('js-checked');
			var chkRespons = $(this).prev('input').val();
			//$(this).prev('input').trigger('click');
			$(this).prev('input').attr("checked", "checked");  //チェックを入れる
//			$(this).prev('input').prop('checked',true);  //チェックを入れる

//console.debug("check #1");

		//チェックあり（class名がjs-checked）はjs-excludedに変更
		} else if  ( $(this).hasClass("js-checked") ) {
			$(this).removeClass('js-checked').addClass('js-excluded');
			var chkRespons = '-'+$(this).prev('input').val();//先頭に「-」を追加
			$(this).prev('input').val(chkRespons);
			$(this).prev('input').attr("checked", "checked");  //チェックを入れる
//			$(this).prev('input').prop('checked',true);  //チェックを入れる
//console.debug("check #2");

		//除外時（class名がjs-excluded）はjs-uncheckedに変更
		} else if ( $(this).hasClass("js-excluded") )  {
			$(this).removeClass('js-excluded').addClass('js-unchecked');
			var chkRespons = $(this).prev('input').val();
			var chkDef = chkRespons.substr(1); //先頭の「-」を削除
			$(this).prev('input').val(chkDef);
			$(this).prev('input').removeAttr('checked'); //チェックを解除
//			$(this).prev('input').prop('checked',false); //チェックを解除

//console.debug("check #3");
		}

//console.debug("----AFTER :"+$(this).prev('input').attr('id'));
//console.debug("val="+$(this).prev('input').val());
//console.debug("value="+$(this).prev('input').attr('value'));
//console.debug("chk="+$(this).prev('input').attr('checked'));


	});

	//リセットボタンの動作
	$('.js-reset_btn').click(function () {
		$('.js-checked_list label').each(function(){
			if  ( $(this).hasClass("js-checked") ) {
				$(this).removeClass('js-checked').addClass('js-unchecked');
			} else if  ( $(this).hasClass("js-excluded") ) {
				$(this).removeClass('js-excluded').addClass('js-unchecked');
				var chkRespons = $(this).prev('input').val();
				var chkDef = chkRespons.substr(1);
				$(this).prev('input').val(chkDef);
			} else {
			}
			$(this).prev('input').removeAttr('checked'); //チェックを解除
			$(this).prev('input').prop('checked',false); //チェックを解除

		});
	});

});


/*====================================
作品一覧ページ
====================================*/
$(document).ready(function(){

	/* タブ切り替え */
	$("#js-tab_btn").click(function () {
		$('#js-tab_cont').slideToggle(250);
		$(this).toggleClass("js-open");
		$(this).toggleClass("js-close");
		$(this).nextAll().toggleClass("js-close");
	});
	$("#js-tab_close").click(function () {
		$('#js-tab_cont').slideUp(250);
		$("#js-tab_btn").removeClass("js-open");
		$("#js-tab_btn").addClass("js-close");
		$("#js-tab_btn").nextAll().removeClass("js-close");
	});

	/* レイアウト切り替え */
	$("#js-layout_btn div").click(function () {
		$("#js-layout_btn div").removeClass("active");
		$(this).addClass("active");
	});

	/* 絞り込み（発売日） */
	$("#js-refine_select01 li").click(function () {
		var getText = $(this).text();
		$("input#js-rel").val($(this).attr('data-val'));	//2016.08.27
		$("#js-refine_selected01").text(getText);
		$("#js-refine_selected01").removeClass("js-close");
		$("#js-refine_selected01").addClass("js-open");
		$("#js-refine_select01").slideUp(250);
		$("#js-refine_select01 li").removeClass("js-selected");
		$(this).addClass("js-selected");
	});

	/* 絞り込み（ランキング） */
	$("#js-refine_select02 li").click(function () {
		var getText = $(this).text();
		$("#js-refine_selected02").text(getText);
		$("#js-refine_selected02").removeClass("js-close");
		$("#js-refine_selected02").addClass("js-open");
		$("#js-refine_select02").slideUp(250);
		$("#js-refine_select02 li").removeClass("js-selected");
		$(this).addClass("js-selected");
	});

	/* ユーザーランキング（年度一覧） */
	$("#js-refine_select03 a").click(function () {
		var getTextYear = $(this).parents(".js-dropdown_menu_second").prev("a").text();
		var getTextMonth = $(this).text();
		$("#js-refine_selected03").text(getTextYear + " " + getTextMonth);
	});

	/* 商品購入（PC） */
/*
	$(".js-pulldown_area").hover(
		function(){
			$('.js-pulldown_cont', this).not('.in .js-pulldown_cont').stop(true,true).slideDown(250);
			$(this).find(".js-pulldown_btn").addClass("js-open");
		},
		function(){
			$('.js-pulldown_cont', this).not('.in .js-pulldown_cont').stop(true,true).slideUp(250);
			$(this).find(".js-pulldown_btn").removeClass("js-open");
		}
	);
*/




	/* 商品購入（タブレット,SP） */
	$(".js-pulldown_btn").click(function () {
		if($(this).hasClass("js-open")) {
			$(this).next('.js-pulldown_cont').slideUp(250);
			$(this).removeClass("js-open");
		}
		else {
			$(this).next('.js-pulldown_cont').slideDown(250);
			$(this).addClass("js-open");
		}
	});
	$(".js-close").click(function () {
		$(this).parent('.js-pulldown_cont').slideUp(250);
		$(this).parents().prev('.js-pulldown_btn').removeClass("js-open");
	});

});


/*====================================
作品データベース（詳細ページ）
====================================*/
$(document).ready(function(){

	/* 評価・レビュー本文 テキストエリアフォーカス時 */
	$("#js-review_post_none").hide();
	$("#review_0").on('focus', function(){
		$("#js-review_post_none").slideDown(250);
		$(this).addClass("js-review_focus");//テキストエリアの高さを広げる
	});

	/* レビュー本文内 続きを読む */
	$(".js-more_text_cont").hide();
	$(document).on('click', '.js-more_text_btn',function(event){
		$(this).next('.js-more_text_cont').show();
		$(this).hide();
	});

	/* 書籍（タブ切替） */
	$('.c-book02 .tab_btn li').on('click', function(){
		var index = $('.c-book02 .tab_btn li').index(this);
		$('.c-book02 .tab_btn li').removeClass('active');
		$(this).addClass('active');
		$('.c-book02 .tab_cont').removeClass('active');
		$('.c-book02 .tab_cont').eq(index).addClass('active');
	});

	/* もっと見る（あらすじ、作品情報） */
	$(document).on('click', '.js-text_more_btn',function(event){
		$(this).prev('.js-text_cont').toggleClass('js-height_auto');
		$(this).hide();
		$(this).next('.js-text_close_btn').show();
	});
	/* 閉じる（あらすじ、作品情報） */
	$(".js-text_close_btn").hide();
	$(document).on('click', '.js-text_close_btn',function(event){
		$(this).prev('.js-text_more_btn').prev('.js-text_cont').removeClass('js-height_auto');
		$(this).prev('.js-text_more_btn').show();
		$(this).hide();
	});


});

/*====================================
声優（詳細ページ）
====================================*/
/* 攻め受け検索 */
function reverse(){
	strTmp=$("#voice_actor_seme").val();
	$("#voice_actor_seme").val($("#voice_actor_uke").val());
	$("#voice_actor_uke").val(strTmp);
}

$(document).ready(function(){
	/* お気に入り登録 */
/* ajax処理として別実装しているコメントアウト 2017.07.21
	$("#js-favorite").click(function () {
		$(this).toggleClass('selected')
	});
	$(".js-favorite").click(function () {
		$(this).toggleClass('selected')
	});
*/
	/* 関連記事 */
	$("#js-related_btn").click(function () {
		if ($('.c-item').hasClass('news_visible')) {
			$('.c-item').toggleClass('news_hidden');
		}
	});
});


/*====================================
アワード
====================================*/
/* 言語切り替え(Bootstrap) */
$(document).ready(function(){
	$('#js-award_tab a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
		return false;
	})
});


/*====================================
ニュース詳細 記事本文/SNSWidgets/YouTube 下方余白調整
====================================*/
$(window).on('load orientationchange resize', function(){
	newsHeight();
	newsTwitterHeight();
	newsYoutubeHeight();
	newsInstagramHeight();
});
$(window).on('lazybeforeunveil', function(){
	newsHeight();
	newsTwitterHeight();
	newsYoutubeHeight();
	newsInstagramHeight();
});
function newsHeight() {
	var newsCont = $('#js-news_height');
	var newsHeight = newsCont.height();
	newsCont.css("margin-bottom", "-" + newsHeight / 2 + "px");
}
function newsTwitterHeight() {
	$('#js-news_height .twitter').each(function() {
		$(this).css("margin-bottom", $(this).height() + "px");
	});
}
function newsYoutubeHeight() {
	var newsYoutubeCont = $('#js-news_height .youtube');
	var newsYoutubeHeight = $('#js-news_height .youtube iframe').height();
	newsYoutubeCont.css("margin-bottom", newsYoutubeHeight + "px");
}
function newsInstagramHeight() {
	$('#js-news_height .instagram').each(function() {
		$(this).css("margin-bottom", $(this).height() + "px");
	});
}


/*====================================
ニュース詳細 UA判定
====================================*/
$(document).ready(function(){
	var ua = window.navigator.userAgent
	if (/Android/.test(ua) && /Linux; U;/.test(ua) && !/Chrome/.test(ua)) {
		$('#js-ua_news').css('display','block');
	}
});
