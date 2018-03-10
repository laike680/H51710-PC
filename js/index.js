$(function(){

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

});