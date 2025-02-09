$(function() {
	var kujibikiW = $("#KujibikiBox").width()/2;
//	$("#HeaderWrapper")
	$("#header")
		.css({ 'position' : 'relative' })
		.css({ 'z-index' : 1000 })
	$("#KujibikiBox")
		.velocity({ 'margin-left' : -kujibikiW })
		.velocity({ delay : 1000 })
		.velocity({ 'z-index' : 10000 },1)
		.velocity({ opacity : 1 }, 500, function() {
		$("#KujibikiBox")
			.velocity({ display : 'block' },4000)
			.velocity({ opacity : 0 },500)
			.velocity({ 'z-index' : 0 },1);
		});
});