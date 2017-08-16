/**
 * 待还记录页
 */
;
(function() {
	var Mod = {
		init: function() {
			var self = this;
			self.bindEvent();
		},
		//事件绑定
		bindEvent: function() {
			var self = this;
			$('.tab-list').on('click',function(){
				var index = $(this).index();
				$(this).addClass('active').siblings().removeClass('active');
				$('.page-list').eq(index).show().siblings().hide();
			})
		}
	}
	//页面初始化
	Mod.init();
})();