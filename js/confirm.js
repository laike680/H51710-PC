$(function(){
	$.cookie.json=true;

	var allshangpins=$.cookie("cartCookie");
	
	var zongji=$.cookie("jieshuan");
	console.log(zongji)

		$(".con_top_shangpin").text("已选"+zongji.kuan+"款商品，共"+zongji.shuangliang+"件，总计¥"+zongji.zongjia)
	



	// $.getJSON("/mock/list.json", function(json){
	// 	// 渲染模板
	// 	var cart_all=[];
	// 	json= json.res_body.data;
	// 	for(var i=0,len1=json.length;i<len1;i++){
	// 		for(var j=0,len2=allshangpins.length;j<len2;j++){
	// 			if(allshangpins[j].id==json[i].id){
	// 				json[i].shuliang=allshangpins[j].shuangliang;
	// 				cart_all.push(json[i]);
	// 			}
	// 		}
	// 	};
	// 	// 渲染数据
	// 	var rendData = { 
	// 		products : cart_all
	// 	};
	// 	var html = template("con_box", rendData); 
	// 	// 显示
	// 	$(".con_top_box").prepend(html);




	// });
})