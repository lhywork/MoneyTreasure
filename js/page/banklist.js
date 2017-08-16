/**
 * 银行卡列表
 */
;
(function() {
	var flag = 1;
	var del=1;
	var desc=1;
	$('.gouxuan').on('click',function(){
		
		if(del == 1 && desc == 1){
			$('.gouxuan').removeClass('activebank');
			$(this).addClass('activebank');
			$('.page-button').addClass('activejie');
		}else if(del == 2 && desc == 2){
			$('.tcdelz').css('display','block');
		}
		
	})
	$('.page-submit').on('click',function(){
		desc =2;
		if(del == 1){
			$('.gouxuan').removeClass('activebank');
			$('.gouxuan').addClass('delbank');
			$('.page-button').removeClass('activejie');
			del = 2;
			desc =2;
		}else if(del == 2){
			$('.gouxuan').removeClass('activebank');
			$('.gouxuan').removeClass('delbank');
			$('.page-button').removeClass('activejie');
			del = 1;
			desc =1;
		}
	})
	$('.hswz').on('click',function(){
		$('.tcdelz').css('display','none');
	})
})();