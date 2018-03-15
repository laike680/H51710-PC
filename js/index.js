$(function(){

	// cookie信息只保存id和数量
	$.cookie.json=true;

	// 模拟网站公告
	$.getJSON(
		"/mock/message.json", 
		function(json){
			json=json.res_body.data;
			var i=0;
			setInterval(function(){
				$(".message_box").text(json[i].title);
				i++;
				if(i==json.length){
					i=0;
				};	
			},2500);
		});

	// 模板加载优选品牌
	$.getJSON("/mock/youxuanpinpai.json", function(data){
		// 渲染模板
		var rendData = { // 准备渲染的数据
			products : data.res_body.data
		};
		var html = template("youxuanpinpai_template", rendData); // 渲染
		// 显示
		$(".youxuanpinpai .shangpin_neirong").prepend(html);
		// 点击加入购物车
		// $.dianji();	
	});


	// 模板加载人气单品
	$.getJSON("/mock/renqidanpin.json", function(data){
		// 渲染模板
		var rendData = { // 准备渲染的数据
			products : data.res_body.data
		};
		var html = template("renqidanpin_template", rendData); // 渲染
		// 显示
		$(".renqidanpin .shangpin_neirong").prepend(html);
		// 点击加入购物车
		// $.dianji();	
	});

	// 模板加载最新上架
	$.getJSON("/mock/zuixinshangjia.json", function(data){
		// 渲染模板
		var rendData = { // 准备渲染的数据
			products : data.res_body.data
		};
		var html = template("zuixinshangjia_template", rendData); // 渲染
		// 显示
		$(".zuixinshangjia .shangpin_neirong").prepend(html);
		// 点击加入购物车
		// $.dianji();	
	});

	// 模板加载潮流女装
	$.getJSON("/mock/chaoliunvzhuang.json", function(data){
		// 渲染模板
		var rendData = { // 准备渲染的数据
			products : data.res_body.data
		};
		var html = template("chaoliunvzhuang_template", rendData); // 渲染
		// 显示
		$(".chaoliunvzhuang .shangpin_neirong").prepend(html);

	});

	// 模板加载精品男装
	$.getJSON("/mock/jingpinnanzhuang.json", function(data){
		// 渲染模板
		var rendData = { // 准备渲染的数据
			products : data.res_body.data
		};
		var html = template("jingpinnanzhuang_template", rendData); // 渲染
		// 显示
		$(".jingpinnanzhuang .shangpin_neirong").prepend(html);

	});

	// 模板加载惊喜折扣
	$.getJSON("/mock/jingxizhekou.json", function(data){
		// 渲染模板
		var rendData = { // 准备渲染的数据
			products : data.res_body.data
		};
		var html = template("jingxizhekou_template", rendData); // 渲染
		// 显示
		$(".jingxizhekou .shangpin_neirong").prepend(html);


	});

	// 点击加入购物车函数
		// 所有需要加载的元素加载完成后
		window.onload = full;
		function full(){
		// 点击加入购物车，添加到cookie
		$(".shangpin_neirong_box2_cart").on("click",function(){
			// 判断是否登录
			var _zhuangtai=$(".login_on").css("display");
			if(_zhuangtai=="block"){

					var _now=$(this).parent().find("a").eq(0).attr("href");
					var _nowId=_now.split("?")[1];

					var nowshangpin={id:_nowId,shuangliang:1};
					var _cookieshuliang=0;
					var _index=-2;
					// 判断新添加还是改数量
					var allshangpins=$.cookie("cartCookie")||[];
					for(var i=0,len=allshangpins.length;i<len;i++){
						_cookieshuliang+=allshangpins[i].shuangliang;
						if(allshangpins[i].id==_nowId){
							_index=i;
						}
					};
					if(_index>-1){
							allshangpins[_index].shuangliang++;
					}else{
							allshangpins.push(nowshangpin);		
					};
					$(".shangpinzhonglei").text(_cookieshuliang)
					// 保存到cookie
					$.cookie("cartCookie",allshangpins,{path:"/"});
					// 页面效果
					$(this).text("已加入购物车").css({"background-color":"#04b4ae","color":"#fff","border-color":"#04b4ae"});
					setTimeout(function(){
						$(".shangpin_neirong_box2_cart").text("加入购物车").css({"background-color":"#fff","color":"#000","border-color":"#000"});
							},1500);
			}else{
					window.location.href="/html/login.html"
			}
		});
	}

					
});