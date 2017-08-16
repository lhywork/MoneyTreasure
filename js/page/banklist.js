/**
 * 工作信息页
 */
;
(function() {
	var kaiguan=true;
	var kaiguan2=true;
	$('.gouxuan').on('click',function(){
		kaiguan2 = false;
		if(kaiguan){
			$('.gouxuan').removeClass('activebank');
			$(this).addClass('activebank');
			kaiguan = false;
		}else{
			$('.gouxuan').removeClass('activebank');
			$(this).addClass('activebank');
			kaiguan = true;
		}
		if(!kaiguan2){
			$('.page-button').addClass('activejie');
		}else{
			$('.page-button').removeClass('activejie');
		}
	})
})();