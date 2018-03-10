$(function(){

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
			},2000);
		});

});