$(function(){
	$.cookie.json=true;
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
		// 划出
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
		

		// 获取cookie中账号信息，显示在头部
		var _now_login=$.cookie("now_login");


			var allshangpins=$.cookie("cartCookie")||[];
			var _carts_num=0;
					
			for(var i=0,len=allshangpins.length;i<len;i++){
						_carts_num+=allshangpins[i].shuangliang
						
			};

		// 判断是否已登录
		if ($.cookie("now_login")) {
			$(".login_on").css({"display":"block"});
			$(".login_off").css({"display":"none"});
		}else{
			$(".login_on").css({"display":"none"});
			$(".login_off").css({"display":"block"});
		};

		// 退出
		$(".login_tuichu").on("click",function(){	
			$(".login_on").css({"display":"none"});
			$(".login_off").css({"display":"block"});
			$.removeCookie("now_login",{path:"/"});
			$.removeCookie("carts",{path:"/"});
		});

		// 滚动吸顶
		$(window).scroll(function(){
			var _top=$(window).scrollTop();
			if(_top>130){
				$(".header_bottom_box").css({"position":"fixed","top":0,"z-index":9});
				$(".login_on").html('<a href="#" class="login_zhanghao">'+_now_login+'</a><a href="#">欢迎您！</a><span>|</span> <a href="#">我的订单</a><br/><a href="#">我的定制</a><span>|</span> <a href="#" class="login_cart">购物车</a><span class="shangpinzhonglei">'+_carts_num+'</span><span>|</span> <a href="#">退出</a><div class="xinxi">请点击完善个人信息</div><div class="shanjiao"></div></div></div></div></div>');
				$(".login_on").css({"position":"position","top":5,"left":-80})
			}else{
				$(".header_bottom_box").css({"position":"static"});
				$(".login_on").html('<a href="#" class="login_zhanghao">'+_now_login+'</a><a href="#">欢迎您！</a><span>|</span> <a href="#">我的订单</a><span>|</span><a href="#">我的定制</a><span>|</span><a href="#" class="login_cart">购物车</a><span class="shangpinzhonglei">'+_carts_num+'</span><span>|</span> <a href="#">退出</a><div class="xinxi">请点击完善个人信息</div><div class="shanjiao"></div></div></div></div></div>');
				$(".login_on").css({"position":"position","top":-20,"left":-180});
				
			};
			if(_top>4960){
				$(".link_top").css({"background":"url(/images/scroll_top.png) no-repeat left"})
			}else{
				$(".link_top").css({"background":"url(/images/scroll_top.png) no-repeat right"})
			};
			if(_top>400){
				$(".link_top").css({"display":"block"})
			}else{
				$(".link_top").css({"display":"none"})
			};
		});

		$(".search .search_box :text").keyup(function(){	
					var q=$(this).val();
					var html="";
					$.ajax({
					type:"get",
					dataType:"jsonp",
					url:"https://suggest.taobao.com/sug?code=utf-8&q="+q+"&callback=?;", 
					success:function(data){			
							data=data.result
							for(var i=0,len=data.length;i<len;i++){
								html+="<div>"+data[i][0]+"</div>"
							}

							$(".search_soso").html(html);			
							$(".search_soso div").on("click",function(){				
								$(".search .search_box :text").val($(this).text());
								$(".search_soso").html("");

							});
						}
					});						
			});

					
	

	});


});