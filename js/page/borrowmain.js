/**
 * 借款主界面
 */
;
(function() {
	var borrowMain = {
		init: function() {
			var self = this;
			self.bindEvent();
		},
		//事件绑定
		bindEvent: function() {
			var self = this;
			var $amoutBtn = $('.amout-button');
			var $timeBtn = $('.time-button');
			var $detailBtn = $('.detail-button');
			//点击金额选择按钮
			$amoutBtn.on('click', function() {
				$(this).addClass('active').siblings().removeClass('active');
			});
			//点击时间选择按钮
			$timeBtn.on('click', function() {
				$(this).addClass('active').siblings().removeClass('active');
			});
			//产品详情弹窗
			$detailBtn.on('click', function() {
				$('.detail-mask').show(.5);
			});
			$('.mask-close').on('click',function(){
				$('.detail-mask').hide(.5);
			})
		}
	}
	//页面初始化
	borrowMain.init();
})();