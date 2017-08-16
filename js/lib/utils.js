/**
 * util 工具类
 */
;
(function(win,doc,util){
	
	/**
	 * 用户登录
	 **/
	util.login = function(loginInfo, callback) {
		loginInfo = loginInfo || {};
		loginInfo.phone = loginInfo.phone || '';
		loginInfo.msgCode = loginInfo.msgCode || '';
		if(!loginInfo.phone){
			util.toast("请输入手机号");
			return false;
		}
		if(!util.checkPhone(loginInfo.phone)){
			util.toast("不是正确的手机号！");
			return false;
		}
		if(!loginInfo.msgCode) {
			util.toast("请输入短信验证码");
			return false;
		}
//		util.ajax("http://h5.xinyzx.com/?s=/h5/public/login",{
//			phone:loginInfo.phone,
//			phone_code:loginInfo.msgCode
//		}).done(function(resp) {
//			callback(resp)
//		}).fail(function(err){
//			util.toast(JSON.stringify(data));
//		})
	};
	// 验证码
	util.Code = function(loginInfo, callback) {
		loginInfo = loginInfo || {};
		loginInfo.phone = loginInfo.phone || '';
		if(!loginInfo.phone){
			util.toast("请输入手机号");
			return false;
		}
		if(!util.checkPhone(loginInfo.phone)){
			util.toast("不是正确的手机号！");
			return false;
		}
		
	};
	/**
	 * 手机号码验证
	 * @param {String} phone
	 */
	util.checkPhone = function(phone) {
		if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){ 
	        return false; 
	    }else{
	    	return true; 
	    }
	}
	/**
	 * 身份证验证
	 * @param {String} card
	 */
	util.isCardNo = function(card){  
   		// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
   		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;   
       	return  reg.test(card);  
   	};
 
	/**
	 * 手机端toast提示
	 * @param {String} msg
	 * @param {String} time
	 */
	util.toast = function(msg,time){
		var time = time || 1500;
		if($('.util-toast').length >= 1){
			return false;
		}
		$('body').append('<div class="util-toast">' + msg + '</div>');
        setTimeout(function() {$('.util-toast').remove();}, time);
	};
	/**
     * 获取url参数
     * @param  {String} name 参数值
     * @return {Boolean}      [description]
     */
    util.getUrlparam = function(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    };
    /**
     * ajax封装
     * @param {Object} url
     * @param {Object} param
     * @param {Object} type
     */
    util.ajax = function(url,param,type) {
    	return $.ajax({
			url: url || "",
			data:  param || {},
			dataType:"json",
			type:type || "post"
		}) 
    }
})(window, window.document, window.util || (window.util = {}));
