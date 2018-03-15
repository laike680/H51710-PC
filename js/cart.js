$(function(){
	$.cookie.json=true;
	var cart_all=[];

	var allshangpins=$.cookie("cartCookie")||[];

	if(allshangpins[0]){
		$(".cart_empty").css({"display":"none"});
		$(".cart_full").css({"display":"block"});	
	}else{
		$(".cart_empty").css({"display":"block"});
		$(".cart_full").css({"display":"none"});
	};
	
	
	$.getJSON("/mock/list.json",function(json){		
		json= json.res_body.data;
		// 通过cookie值在list中查找已选购的商品，并添加数量
		
		for(var i=0,len1=json.length;i<len1;i++){
			for(var j=0,len2=allshangpins.length;j<len2;j++){
				if(allshangpins[j].id==json[i].id){
					json[i].shuliang=allshangpins[j].shuangliang;
					cart_all.push(json[i]);
				}
			}
		};

		// 渲染数据
		var rendData = { 
			products : cart_all
		};
		var html = template("allcart_template", rendData); 
		// 显示
		$(".cart_full_main").prepend(html);
	});

	window.onload = full;
	function full(){

		// 全选
		$(".quanxuan").on("click",function(){
			var xuanzhongzhuangtai=$(".cart_full_xuanzhe input").prop("checked");
			$(".xuanzhe").prop("checked", xuanzhongzhuangtai);


			$.yixuanzongjia();
		});
		// 点击减
		$(".cart_jian").on("click",function(){
			var zongshu=0;
			var _num=$(this).siblings(".cart_shangpin_shuliang").val();
			_num--;
			if(_num<1)
				_num=1;
			$(this).siblings(".cart_shangpin_shuliang").val(_num);
			var thisId=$(this).parent().parent().find(".xuanzhe").attr("name")
			for(var i=0,len=cart_all.length;i<len;i++){
				if(allshangpins[i].id==thisId){
					allshangpins[i].shuangliang=_num;
					$.cookie("cartCookie",allshangpins,{path:"/"});
				}
				zongshu+=allshangpins[i].shuangliang;
			}
			// 修改头部总商品数量
			$(".shangpinzhonglei").text(zongshu);	
			// // 修改小计
			var _jiage=$(this).parent().parent().find(".cart_full_jiage").text().slice(1);
			var _xiaoji=(_jiage*_num).toFixed(2);
			$(this).parent().parent().find(".cart_full_xiaoji").text(_xiaoji);


			$.yixuanzongjia();
		});
		// 点击加
		$(".cart_jia").on("click",function(){
		
			var zongshu=0;
			var _num=$(this).siblings(".cart_shangpin_shuliang").val();
			_num=Number(_num);
			_num++;
			if(_num>99)
				_num=99;
			$(this).siblings(".cart_shangpin_shuliang").val(_num);
			var thisId=$(this).parent().parent().find(".xuanzhe").attr("name");
			for(var i=0,len=cart_all.length;i<len;i++){
				if(allshangpins[i].id==thisId){
					allshangpins[i].shuangliang=_num;
					$.cookie("cartCookie",allshangpins,{path:"/"});
				}
				zongshu+=allshangpins[i].shuangliang;
			}
			// 修改头部总商品数量	
			$(".shangpinzhonglei").text(zongshu);

			// 修改小计
			var _jiage=$(this).parent().parent().find(".cart_full_jiage").text().slice(1);
			var _xiaoji=(_jiage*_num).toFixed(2);
			$(this).parent().parent().find(".cart_full_xiaoji").text(_xiaoji);
			

			$.yixuanzongjia();



		});
		// 手动修改数量
		$(".cart_shangpin_shuliang").on("blur",function(){
			var _num=$(this).val();
			var again_unm;
			// 获取修改商品的id
			var thisId=$(this).parent().parent().find(".xuanzhe").attr("name");
			var zongshu=0;
			for(var i=0,len=cart_all.length;i<len;i++){
				if(allshangpins[i].id==thisId){
					again_unm=allshangpins[i].shuangliang
					allshangpins[i].shuangliang=parseInt(_num);	
				}
				zongshu+=allshangpins[i].shuangliang;
			}
			if(/^[0-9][1-9]$/.test(_num)){
				$.cookie("cartCookie",allshangpins,{path:"/"});
				$(".shangpinzhonglei").text(zongshu);// 修改头部总商品数量
			}else{
				$(this).val(again_unm);
			};
			// // 修改小计
			var _jiage=$(this).parent().parent().find(".cart_full_jiage").text().slice(1);
			var _xiaoji=(_jiage*_num).toFixed(2);
			$(this).parent().parent().find(".cart_full_xiaoji").text(_xiaoji);


			$.yixuanzongjia();
		});
		// 点击删除
		$(".cart_full_shanchu").on("click",function(){
			var thisId=$(this).parent().parent().find(".xuanzhe").attr("name");
			for(var i=0,len=cart_all.length;i<len;i++){
				if(allshangpins[i].id==thisId){
					allshangpins.splice(i,1)
					$.cookie("cartCookie",allshangpins,{path:"/"});
					window.location.reload();
				}
			};



			$.yixuanzongjia();
		});
		// 选择商品
		$(".xuanzhe").on("click",function(){
			$.yixuanzongjia();
		});
		// 清空购物车
		$(".qignkong").on("click",function(){
			alert("确定要删除所有商品吗？");
			$.removeCookie("cartCookie",{path:"/"});
			window.location.reload();
		});
		// 点击结算
		$(".cart_jieshuan").on("click",function(){
			var _jieshuan=$.cookie("jieshuan")||0;
			if(_jieshuan.zongjia==0){
				alert("未选择需要结算的商品")
			}else{
				window.location.replace("/html/confirm.html");
			}
			
		});
		// 计算总价
		$.extend({
			yixuanzongjia:function(){			
				var zongjia=0;
				var index=0;
				var jian=0;
						for(var i=0,len=$(".xuanzhe").length;i<len;i++){
							if($($(".xuanzhe")[i]).prop("checked")){
							index++;
							jian+=Number($($(".xuanzhe")[i]).parent().siblings(".cart_full_shuliang").find(".cart_shangpin_shuliang").val());	
							zongjia+=Number($($(".xuanzhe")[i]).parent().siblings(".cart_full_xiaoji").text().slice(1));
							}
						};
						zongjia=zongjia.toFixed(2)					
						$(".cart_kuan").text(index);
						$(".cart_all_shuliang").text(jian);
						$(".cart_all_zongjia").text(zongjia);
					var jieshuan={"kuan":index,"shuangliang":jian,"zongjia":zongjia};
					$.cookie("jieshuan",jieshuan,{path:"/"});
			}
		});

		
	};




});
		