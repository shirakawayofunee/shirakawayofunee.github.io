//suggest.jsに対する独自実装部分のoverride
//
//



//constructor parameter
//	configUrl='{{$config.url}}';
//	tgt='author|voice_actor|goods';
Suggest.Local.prototype.initialize = function(configUrl, subdir, input, suggestArea) {

	this.configUrl = configUrl;
	this.subdir = subdir;

// console.log("construct: configUrl="+configUrl+subdir);
	this.interval = 200;
	this.dispMax = 50;

	this.input = this._getElement(input);
	this.suggestArea = this._getElement(suggestArea);
	this.candidateList = [];
	this.oldText = this.getInputText();

	if (arguments[4]) this.setOptions(arguments[4]);

	// reg event
	this._addEvent(this.input, 'focus', this._bind(this.checkLoop));
	this._addEvent(this.input, 'blur', this._bind(this.inputBlur));
	this._addEvent(this.suggestArea, 'blur', this._bind(this.inputBlur));

	this._addEvent(this.input, 'keydown', this._bindEvent(this.keyEvent));

	// init
	this.clearSuggestArea();
};



//this.candidateListには2次元配列で
//[]['id'] []['caption'] を格納
Suggest.Local.prototype.hookBeforeSearch = function(obj,text){

	$.ajaxSetup({scriptCharset:'utf-8',async:false,cache : false});

// console.log("hookBeforeSearch ");
//	this._show(this.suggestArea);	//小窓表示

	obj.candidateList = [];
	var act = 'restGetSuggest';


	//this.suggestArea.html("");


	var url = this.configUrl+act+"/?kw="+encodeURIComponent(text)+"&opt="+this._getOption();	//PC,SP共通
//// console.log("ajax url="+url);
	$.getJSON(
		url,
		function(result){
// console.log("ajax result="+result['state']+","+result['count']+","+result['lists']);
			if(result['state']) {
				if(result['count']>0) {
					for (var cur in result['lists']) {
						obj.candidateList.push(result['lists'][cur]);
					}
				}
				else {
					//候補なし
					//this.suggestArea.innerHtml = "候補がありません。";
				}
			}
			else {
				//エラー　「件数多すぎる」含む
				var errMsg = result['error'];
				if (errMsg.length == 0) errMsg="エラー";
				console.error(errMsg);
				//this.suggestArea.innerHtml = errMsg;
			}
		}
	);

};

Suggest.Local.prototype.search = function() {
// console.log("search");
    // init
    this.clearSuggestArea();

    var text = this.getInputText();
    if (text == '' || text == null || text.length < 2) return;
//    if (text == '' || text == null ) return;

// console.log("search="+text);

    this.hookBeforeSearch(this, text);
    var resultList = [];
    resultList = this._search(text);
    if (resultList.length != 0) this.createSuggestArea(resultList);

};


Suggest.Local.prototype._search = function(text) {
// console.log("_search");

    var resultList = [];
    var temp; 
    this.suggestIndexList = [];


    for (var i = 0, length = this.candidateList.length; i < length; i++) {
// console.log("_search candidateList["+i+"]="+this.candidateList[i]['caption']);

        resultList.push(this.candidateList[i]);
        this.suggestIndexList.push(i);

        if (this.dispMax != 0 && resultList.length >= this.dispMax) break;
   }

// console.log("_search resultList="+resultList);

    return resultList;
};



Suggest.Local.prototype.clearSuggestArea = function() {
// console.log("clearSuggestArea");

    this.suggestArea.innerHTML = '';
    this.suggestArea.style.display = 'none';
    this.suggestList = null;
    this.suggestIndexList = null;
    this.activePosition = null;

};

Suggest.Local.prototype.createSuggestArea = function(resultList) {
// console.log("createSuggestArea");

	this.suggestList = [];
	this.inputValueBackup = this.input.value;

	var ulEle = document.createElement('ul');

	for (var i = 0, length = resultList.length; i < length; i++) {
		var element = null;
		if(resultList[i] != null) {
			element =this._createSuggestRow(resultList[i]);

			if((i%2)==0) {
			//偶奇背景なし	element.className = "even";
			//	element.style = "background: #FFF4F5;";
			}

		}
		ulEle.appendChild(element);


		this._addEvent(element, 'click', this._bindEvent(this.listClick, i));

		this.suggestList.push(element);

	}

	//閉じる[X]ボタン
	var divEle = document.createElement('div');
	divEle.setAttribute('class', "h-suggest_close");
	divEle.setAttribute('id', "js-h-suggest_close");
	var iEle = document.createElement('i');
	iEle.setAttribute('class', "fa fa-times");
	divEle.appendChild(iEle);

	this.suggestArea.appendChild(ulEle);
	this.suggestArea.appendChild(divEle);

// console.log(ulEle);

	if(resultList.length>0) this._show(this.suggestArea);	//表示

};

Suggest.Local.prototype.listClick= function(event, index) {

	this.changeUnactive();
	this.activePosition = index;
	//this.changeActive(index);
	this.clearSuggestArea();
	this.moveEnd();


	this._hide(this.suggestArea);	//閉じる


	//---- 選択確定
	this._selected(this.candidateList[index]['caption']);

 };

Suggest.Local.prototype.changeActive= function(index) {

    this.setStyleActive(this.suggestList[index]);

    this.setInputText(this.candidateList[this.suggestIndexList[index]]['caption']);

    this.oldText = this.getInputText();
    this.input.focus();
};


Suggest.Local.prototype.keyEventReturn = function() {


	var index = this.activePosition;


	if(this.candidateList[index]){
		//リスト選択

		var id = this.candidateList[index]['id'];
		var caption = this.candidateList[index]['caption'];

	 console.log("keyEventReturn id="+id);

	    this.clearSuggestArea();
	    this.moveEnd();

		this._hide(this.suggestArea);	//閉じる

		//選択確定
		this._selected(caption);
	}
	else {
		//リスト未選択でenter
		this._doSearch();	//検索
	
	}

};



//----- appended
Suggest.Local.prototype._selected = function(caption) {

	this.input.value = caption;
	this._doSearch();	//即検索実行
};


Suggest.Local.prototype._createSuggestRow = function(resultRow) {
// console.log("_createSuggestRow");

	var element = document.createElement('li');
//// console.log(resultRow);
	var rowHtml = '';


	//候補一覧
	rowHtml = resultRow['caption'];


	element.innerHTML = rowHtml;

//// console.log(element);

	return element;
};


Suggest.Local.prototype._show = function(ele) {

	var id = ele.id;
	$("#"+id).show();
/*
	ele.style.display = 'block';	//表示
	ele.scrollTop = 0;
*/

};


Suggest.Local.prototype._hide = function(ele) {
	var id = ele.id;
	$("#"+id).hide();
/*
	ele.style.display = 'none';	//非表示
*/
};

Suggest.Local.prototype._doSearch = function() {
	$('#head_seach').submit();
};

Suggest.Local.prototype._getOption = function() {
	var option = $("#ss01").val();
	return option;
};


