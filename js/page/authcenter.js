/**
 * 认证中心页
 */
;
(function() {
	var Mod = {
		init: function() {
			var self = this;
			self.bindEvent();
		},
		//判断是否填写
		hasWrite(obj){
			var self = this;
			return !$(obj).hasClass("auth_active");	
		},
		//事件绑定
		bindEvent: function() {
			var self = this;
			$("#button").on('click',function(){
				if(self.hasWrite("#identity")){
					util.toast("身份认证没有填写")
				}
				else if(self.hasWrite("#workinfo")){
					util.toast("工作信息没有填写");
				}
				else if(self.hasWrite("#personal")){
					util.toast("个人信息没有填写");
				}
				else if(self.hasWrite("#interpersonal")){
					util.toast("人际关系没有填写");
				}
				else if(self.hasWrite("#credit")){
					util.toast("信用认证没有填写");
				}
				else if(self.hasWrite("#bankinfo")){
					util.toast("银行卡信息没有填写");
				}
			})
		}
	}
	//页面初始化
	Mod.init();
})();