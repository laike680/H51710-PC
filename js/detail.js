$(function(){
	// 读取url信息
	var _id=window.location.search;
	var prod_id=_id.slice(1);
	// 加载商品信息
	$.getJSON("/mock/list.json", function(data){
		// 渲染模板
		data=data.res_body.data;
		var index=0;
		for(var i=0,len=data.length;i<len;i++){
			if(data[i].id==prod_id)
				index=i;
		};
		// 渲染
		$(".detail_top_neirong_left").prepend(template("detail_tupian1_template", data[index]));
		$(".detail_top_neirong_imgbox").prepend('<img src='+data[index].img1+'>');
		$(".detail_top_neirong_imgbigbox").prepend('<img src='+data[index].img1+'>');
		$(".detail_bottom_tupian_main").prepend(template("detail_tupian_template", data[index]));
		$(".detail_style1").text(data[index].style1);
		$(".detail_style2").text(data[index].style2);
		$(".detail_style3").text(data[index].style3);
		$(".detail_title").text(data[index].title);



		// 放大镜
	$(".detail_top_neirong_imgbox").on("mouseenter",function(){
		$(".detail_top_neirong_img_jingtou").css({"display":"block"});
		$(".detail_top_neirong_imgbigbox").css({"display":"block"});
	}).on("mousemove",function(e){
			//鼠标相对于元素的x,y坐标
    		 var y=e.pageY-$(this).offset().top,
    		     x=e.pageX -$(this).offset().left,
			     _width=parseInt($(".detail_top_neirong_imgbox img").css("width")),
			     _height=parseInt($(".detail_top_neirong_imgbox").css("height"));

			 if(x<50){
			 	x=50;
			 }else if(x>_width-50){
			 	x=_width-50
			 };
			  if(y<50){
			 	y=50;
			 }else if(y>_height-75){
			 	y=_height-75
			 };
			// 镜头移动
			 $(".detail_top_neirong_img_jingtou").css({"top":y-50,"left":x-50});
			 // 放大图片移动
			 var _y=200-y*4,
			 	 _x=200-x*4;
			 	 if(_y<-1980){
			 	 	_y=-1980;
			 	 };
			 	 if(_x<-1458){
			 	 	_x=-1458;
			 	 }
			 $(".detail_top_neirong_imgbigbox img").css({"top":_y,"left":_x})
		}).on("mouseleave",function(){
			$(".detail_top_neirong_img_jingtou").css({"display":"none"});
			$(".detail_top_neirong_imgbigbox").css({"display":"none"});
		});	

		// 点击切换图片
	
		$(".detail_top_neirong_left_img1").on("click",function(){
			$(".detail_top_neirong_imgbox").html('<img src='+data[index].img1+'><div class="detail_top_neirong_img_jingtou"></div>');
			$(".detail_top_neirong_imgbigbox").html('<img src='+data[index].img1+'>');
			$(".detail_top_neirong_left div").css({"border":"1px solid #fff"});
			$(".detail_top_neirong_left_img1").css({"border":"1px solid #04b4ae"});
		});

		$(".detail_top_neirong_left_img1").on("click",function(){
			$(".detail_top_neirong_imgbox").html('<img src='+data[index].img1+'><div class="detail_top_neirong_img_jingtou"></div>');
			$(".detail_top_neirong_imgbigbox").html('<img src='+data[index].img1+'>');
			$(".detail_top_neirong_left div").css({"border":"1px solid #fff"});
			$(".detail_top_neirong_left_img1").css({"border":"1px solid #04b4ae"});
		});
		$(".detail_top_neirong_left_img2").on("click",function(){
			$(".detail_top_neirong_imgbox").html('<img src='+data[index].img2+'><div class="detail_top_neirong_img_jingtou"></div>');
			$(".detail_top_neirong_imgbigbox").html('<img src='+data[index].img2+'>');
			$(".detail_top_neirong_left div").css({"border":"1px solid #fff"});
			$(".detail_top_neirong_left_img2").css({"border":"1px solid #04b4ae"});
		});
		$(".detail_top_neirong_left_img3").on("click",function(){
			$(".detail_top_neirong_imgbox").html('<img src='+data[index].img3+'><div class="detail_top_neirong_img_jingtou"></div>');
			$(".detail_top_neirong_imgbigbox").html('<img src='+data[index].img3+'>');
			$(".detail_top_neirong_left div").css({"border":"1px solid #fff"});
			$(".detail_top_neirong_left_img3").css({"border":"1px solid #04b4ae"});
		});
		$(".detail_top_neirong_left_img4").on("click",function(){
			$(".detail_top_neirong_imgbox").html('<img src='+data[index].img4+'><div class="detail_top_neirong_img_jingtou"></div>');
			$(".detail_top_neirong_imgbigbox").html('<img src='+data[index].img4+'>');
			$(".detail_top_neirong_left div").css({"border":"1px solid #fff"});
			$(".detail_top_neirong_left_img4").css({"border":"1px solid #04b4ae"});
		});
		$(".detail_top_neirong_left_img5").on("click",function(){
			$(".detail_top_neirong_imgbox").html('<img src='+data[index].img5+'><div class="detail_top_neirong_img_jingtou"></div>');
			$(".detail_top_neirong_imgbigbox").html('<img src='+data[index].img5+'>');
			$(".detail_top_neirong_left div").css({"border":"1px solid #fff"});
			$(".detail_top_neirong_left_img5").css({"border":"1px solid #04b4ae"});
		});
		$(".detail_top_neirong_left_img6").on("click",function(){
			$(".detail_top_neirong_imgbox").html('<img src='+data[index].img6+'><div class="detail_top_neirong_img_jingtou"></div>');
			$(".detail_top_neirong_imgbigbox").html('<img src='+data[index].img6+'>');
			$(".detail_top_neirong_left div").css({"border":"1px solid #fff"});
			$(".detail_top_neirong_left_img6").css({"border":"1px solid #04b4ae"});
		});


		// 渲染价格
		$(".detail_top_neirong_right_price b").text('¥'+data[index].price);

		// 原价
		var yuanjia=(data[index].price/0.95).toFixed(2);
		$(".detail_top_neirong_right_price del").text('¥'+yuanjia);




	});




	// 滚动显示右侧边栏
	$(window).scroll(function(){
		var _top=$(window).scrollTop();
		if(_top>900){
			$(".detail_right").css({"display":"block"});
			// 动画
		}else{
			$(".detail_right").css({"display":"none"});
		};
		if(_top>890&&_top<1140){
			$(".detail_right ul li").css({"background-color": "#000"});
			$(".detail_right_goumaixuzhi").css({"background-color":"#04b4ae"});
		}else if(1140<_top&_top<1340){
			$(".detail_right ul li").css({"background-color": "#000"});
			$(".detail_right_shejishi").css({"background-color":"#04b4ae"});
		}else if(1340<_top&_top<3650){
			$(".detail_right ul li").css({"background-color": "#000"});
			$(".detail_right_shangpin").css({"background-color":"#04b4ae"});
		}else if(3650<_top&_top<4050){
			$(".detail_right ul li").css({"background-color": "#000"});
			$(".detail_right_tongkuan").css({"background-color":"#04b4ae"});
		}else{
			$(".detail_right ul li").css({"background-color": "#000"});
			$(".detail_right_tongdian").css({"background-color":"#04b4ae"});
		};
	});
	$(".detail_right_goumaixuzhi").on("click",function(){
		$(window).scrollTop(901);
	});
	$(".detail_right_shejishi").on("click",function(){
		$(window).scrollTop(1141);
	});
	$(".detail_right_shangpin").on("click",function(){
		$(window).scrollTop(1341);
	});
	$(".detail_right_tongkuan").on("click",function(){
		$(window).scrollTop(3651);
	});
	$(".detail_right_tongdian").on("click",function(){
		$(window).scrollTop(4051);
	});

	// 点击颜色

	$(".detail_top_neirong_right_yanse_hei").on("click",function(){
		$(".detail_top_neirong_right_yanse .detail_top_neirong_right_biaoji").css({"display":"none"});
		$(".detail_top_neirong_right_yanse_hei .detail_top_neirong_right_biaoji").css({"display":"block"});
	});
	$(".detail_top_neirong_right_yanse_hui").on("click",function(){
		$(".detail_top_neirong_right_yanse .detail_top_neirong_right_biaoji").css({"display":"none"});
		$(".detail_top_neirong_right_yanse_hui .detail_top_neirong_right_biaoji").css({"display":"block"});
	});
	$(".detail_top_neirong_right_yanse_bai").on("click",function(){
		$(".detail_top_neirong_right_yanse .detail_top_neirong_right_biaoji").css({"display":"none"});
		$(".detail_top_neirong_right_yanse_bai .detail_top_neirong_right_biaoji").css({"display":"block"});
	});
	// 点击尺码
	$(".detail_top_neirong_right_chima_s").on("click",function(){
		$(".detail_top_neirong_right_chima .detail_top_neirong_right_biaoji").css({"display":"none"});
		$(".detail_top_neirong_right_chima_s .detail_top_neirong_right_biaoji").css({"display":"block"});
	});
	$(".detail_top_neirong_right_chima_m").on("click",function(){
		$(".detail_top_neirong_right_chima .detail_top_neirong_right_biaoji").css({"display":"none"});
		$(".detail_top_neirong_right_chima_m .detail_top_neirong_right_biaoji").css({"display":"block"});
	});
	$(".detail_top_neirong_right_chima_l").on("click",function(){
		$(".detail_top_neirong_right_chima .detail_top_neirong_right_biaoji").css({"display":"none"});
		$(".detail_top_neirong_right_chima_l .detail_top_neirong_right_biaoji").css({"display":"block"});
	});
	$(".detail_top_neirong_right_chima_xl").on("click",function(){
		$(".detail_top_neirong_right_chima .detail_top_neirong_right_biaoji").css({"display":"none"});
		$(".detail_top_neirong_right_chima_xl .detail_top_neirong_right_biaoji").css({"display":"block"});
	});
	// 加
	$(".detail_shuliang_jia").on("click",function(){
		var _shuliang=$(".detail_shuliang").val();
		_shuliang++;
		if(_shuliang>40)
			_shuliang=40;
		$(".detail_shuliang").val(_shuliang);
		$(".detail_shuliang_kucun").text(40-_shuliang)
	});
	// 减
	$(".detail_shuliang_jian").on("click",function(){
		var _shuliang=$(".detail_shuliang").val();
		_shuliang--;
		if(_shuliang<1)
			_shuliang=1;
		$(".detail_shuliang").val(_shuliang);
		$(".detail_shuliang_kucun").text(40-_shuliang);
	});
	// 手动修改
	$(".detail_shuliang").on("blur",function(){
		var _shuliang=$(this).val();
		if(!/^[0-3][0-9]$/.test(_shuliang))
			_shuliang=1;
		$(this).val(_shuliang);
		$(".detail_shuliang_kucun").text(40-_shuliang);
	})

	// 渲染同款
	$.getJSON("/mock/tongkuan.json",function(json){
		json=json.res_body.data;
		var tk_html=""
		for(var i=0,len=json.length;i<len;i++){
			tk_html+=template("tongkuan_template", json[i]);
		}
		$(".detail_bottom_tongkuan_mian").prepend(tk_html);
	});
	// 同店
	$.getJSON("/mock/tongdian.json",function(td_json){
		td_json=td_json.res_body.data;
		var td_html=""
	
		for(var i=0,len=td_json.length;i<len;i++){
			
			td_html+=template("tongdian_template", td_json[i]);
		};

		$(".detail_bottom_tongdian_mian").prepend(td_html);

	});
	window.onload=full;
	function full(){
		// 点击加入购物车
		$(".detail_addCart").on("click",function(){
			var _nowId=prod_id;
			var nowshangpin={id:_nowId,shuangliang:1};
			var _cookieshuliang=0;
			var _index=-2;
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
			$(".shangpinzhonglei").text(_cookieshuliang);
			$.cookie("cartCookie",allshangpins,{path:"/"})
		});
	}

});