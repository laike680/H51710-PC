$(function(){
	$.cookie.json=true;

	// 模拟验证码(随机生成6位数)
	var _code=""
	for(var i=0;i<6;i++){
		_code+=Math.floor(Math.random()*10)};


	$(".register_form_fangshi input").on("click",function(){
		$(".register_form_fangshi input").prop("checked=checked");
		var _xuanzhongfangshi=$(".register_form_fangshi input:checked").val();
		if(_xuanzhongfangshi=="youxiang"){
			$(".register_form_text_zhanghao").attr("placeholder","请输入电子邮箱");
			$(".register_form_text_yangzhengma").attr("placeholder","请输入邮箱验证码");
		}else{
			$(".register_form_text_zhanghao").attr("placeholder","请输入手机号");
			$(".register_form_text_yangzhengma").attr("placeholder","请输入短信验证码");
		};
	});

	$(".get_yanzhengma").on("click",function(){
		$(".get_yanzhengma").css({"background-color":"#ddd","color":"#000"}).text("验证码是"+_code);
	});
	
	$(".register_form_btn").on("click",function(){

		var _zhanghao=$(".register_form_text_zhanghao").val(),
			_yanzhengma=$(".register_form_text_yangzhengma").val(),
			_password1=$(".register_form_password_new").val(),
			_password2=$(".register_form_password_again").val();

			console.log(_zhanghao,_yanzhengma,_password1,_password2)

		if(_zhanghao==""){
			$(".register_form_tishi").text("账号不能为空").css({"display":"block"});
			return;
		}else{
			if(_yanzhengma!=_code){
				$(".register_form_tishi").text("验证码错误").css({"display":"block"});
				return;
			}else{
				if(_password1==""){
					$(".register_form_tishi").text("密码不能为空").css({"display":"block"});
					return;
				}else{
					if(_password1!==_password2){
						$(".register_form_tishi").text("两次密码输入不一致").css({"display":"block"});
						return;
					}else{
						$(".register_form_tishi").text("注册成功").css({"display":"block"});
						$.cookie("now_login",_zhanghao,{path:"/"})
				
						$(".login .login_off").css({"display":"none"});
						$(".login .login_on").css({"display":"block"});

						// 1秒后跳转页面到主页
						setTimeout(function(){
							window.location.href="/index.html"
						},1000);
						return;
					}
				}
			}
		}



	});


});