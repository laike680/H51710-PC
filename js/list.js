$(function(){

	$.getJSON("/mock/list.json",function(_list){

		var rendData = { // 准备渲染的数据
			products : _list.res_body.data
		};
		var html = template("list_template", rendData); // 渲染
		// 显示
		$(".list_bottom_box").prepend(html);
	});

	$(".list_nav_sex span").on("click",function(){
		var _text=$(this).text();
		$(".list_nav_yixuan_sex").text(_text)
	});

	$(".list_nav_style1 span").on("click",function(){
		var _text=$(this).text();
		$(".list_nav_yixuan_style1").text(_text)
	});
	$(".list_nav_style2 span").on("click",function(){
		var _text=$(this).text();
		$(".list_nav_yixuan_style2").text(_text)
	});
	$(".list_nav_price span").on("click",function(){
		var _text=$(this).text();
		$(".list_nav_yixuan_price").text(_text)
	});

	$(".list_top_sortBox div").on("click",function(){
		$(".list_top_sortBox div").css({"background-color":"#fff","color":"#000"});
		$(this).css({"background-color":"#04b4ae","color":"#fff"});
	});
});