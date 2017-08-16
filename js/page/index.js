/**
 * 登录注册页
 */
;
(function() {
	var pageIndex = {
		init: function() {
			var self = this;
			self.bindEvent();
		},
		//事件绑定
		bindEvent: function() {
			var self = this;
			var $loginBtn = $('.login-button');
			//点击登录按钮
			$loginBtn.on('click', function() {
				var Phone = $('#phone').val();
				var msgCode = $('#msgCode').val();
				var loginInfo = {
					phone: Phone,
					msgCode: msgCode
				}
				util.login(loginInfo,function(data){
					console.log(data)
				})
			})
		}
	}
	//页面初始化
	pageIndex.init();
	//短信60秒发送
	var flag = true;
	var countdown = 60;
	var timer = null;
    function settime(obj) {
        if (countdown == 0) {
            flag = true;
            $(obj).removeClass('active');
            $(obj).html("获取验证码");
            countdown = 60;
            clearTimeout(timer);
            return;
        } else {
            flag = false;
            $(obj).addClass('active');
            $(obj).html("" + countdown + "秒后发送");
            countdown--;
        }
        timer = setTimeout(function () {
            settime(obj)
        }, 1000)
    }
    $('.form-code').click(function () {
		if(!flag){
			return false;
		}
        settime(this);
    });
})();