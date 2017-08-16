/**
 * 身份认证页
 */
;
(function() {
	//验证JS
	$('.page-button').on('click',function(){
		var IdentityName = $('#IdentityName').val();
		var IdentityStatus = $('#IdentityStatus').val();
		var IdCard = $('#IdCard').val();
		if(!IdentityName){
			util.toast("请输入您的姓名");
			return false;
		}
		if(!IdentityStatus){
			util.toast("请输入您的有效期");
			return false;
		}
		if(!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(IdCard))){
    	    util.toast("您输入身份证格式有错误！");
			return false;	 
    	}
	})
})();