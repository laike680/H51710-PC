$(function(){

$.cookie.json=true;

// 登录点击事件
$(".login_form_btn").on("click",function(){

	$(".login_form_tishi").text("").css({"display":"none"})
	var _text=$(".login_form_text").val();
	var _password=$(".login_form_password").val();
	if(_text==""){
		$(".login_form_tishi").text("账号不能为空").css({"display":"block"});
		return;
	}
	if(_password==""){
		$(".login_form_tishi").text("账号不能为空").css({"display":"block"});
		return;
	}

	$.getJSON(
		"/mock/zhanghu.json",
		function(data){
		var	_zhanghu=data.res_body.data

		for(var i=0,len=_zhanghu.length;i<len;i++){
			// 账号正确
			if(_zhanghu[i].username==_text){
				// 账号密码正确
				if(_zhanghu[i].password==_password){
					// 提示登录成功
					$(".login_form_tishi").text("登录成功").css({"display":"block"});
					// 修改头部登录状态
					$.cookie("now_login",_zhanghu[i].username,{path:"/"})
				
					$(".login .login_off").css({"display":"none"});
					$(".login .login_on").css({"display":"block"});
					

					// 1秒后跳转页面到主页
					setTimeout(function(){
						window.location.href="/index.html"
					},1000);
					return;
				}else{
					$(".login_form_tishi").text("密码错误").css({"display":"block"});
					return;
				}
			}else{
				$(".login_form_tishi").text("账号错误").css({"display":"block"});
				return;
			}
		}
		
			

		});

	
})

});