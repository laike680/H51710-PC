$(function(){
	// 加载头部
	$("header").load("/html/include/header.html",function(){

		// 点击任务，美衣与设计师切换
		$(".search .search_name").on("click",function(e){
			if($(e.target).text()=="美衣"){
				$(".search .search_name .search_1").css({"background-color":"#fff","color":"#000"});
				$(".search .search_name .search_2").css({"background-color":"#000","color":"#fff"});
				$(".search_list1 a").css({"display":"inline"});
				$(".search_list2 a").css({"display":"none"});
			};
			if($(e.target).text()=="设计师"){
				$(".search .search_name .search_2").css({"background-color":"#fff","color":"#000"});
				$(".search .search_name .search_1").css({"background-color":"#000","color":"#fff"});
				$(".search_list2 a").css({"display":"inline"});
				$(".search_list1 a").css({"display":"none"});
			}
		});
		// 点击任务，分类下拉导航
		// 划入下拉
		$(".nav_all").on("mouseenter",function(){
			$(".nav_pull_woman").css({"display":"block"});

		}).on("mouseleave",function(){
			$(".nav_pull_woman").css({"display":"none","color":"#f1dead"});
			$(".nav_pull_man").css({"display":"none"});
			$(".nav_pull_man_btn").css({"color":"#fff"});
			$(".nav_pull_woman_btn").css({"color":"#f1dead"});
		});
		// 点击女装
		$(".nav_pull_woman_btn").on("click",function(){
			$(".nav_pull_woman").css({"display":"block"});
			$(".nav_pull_man").css({"display":"none"});
			$(".nav_pull_man_btn").css({"color":"#fff"});
			$(".nav_pull_woman_btn").css({"color":"#f1dead"})
		});
		// 点击男装
		$(".nav_pull_man_btn").on("click",function(){
			$(".nav_pull_man_btn").css({"color":"#f1dead"});
			$(".nav_pull_woman_btn").css({"color":"#fff"})
			$(".nav_pull_man").css({"display":"block"});
			$(".nav_pull_woman").css({"display":"none"});
		});
		
		
	});
});