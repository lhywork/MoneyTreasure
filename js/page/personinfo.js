/**
 * 个人信息页
 */
;
(function() {
	var personInfo = {
		init: function() {
			var self = this;
			self.bindEvent();
		},
		//事件绑定
		bindEvent: function() {
			var self = this;
			var $cityBtn = $('#city');
		    //现居城市select
		    $cityBtn.bind('click', function () {
		    	var $this = $(this);
		    	var $showDom = $this.find('.form-show');
		        var oneLevelId = $showDom.attr('data-province-code');
		        var twoLevelId = $showDom.attr('data-city-code');
		        var threeLevelId = $showDom.attr('data-district-code');
		        var iosSelect = new IosSelect(3, [iosProvinces, iosCitys, iosCountys],{
		                title: '地址选择',
		                itemHeight: 35,      
		                relation: [1, 1, 0, 0],
		                oneLevelId: "130000",
		                twoLevelId: "130300",
		                threeLevelId: "130304",
		                callback: function (selectOneObj, selectTwoObj, selectThreeObj) {		
		                    $showDom.attr('data-province-code', selectOneObj.id);
		                    $showDom.attr('data-city-code', selectTwoObj.id);
		                    $showDom.attr('data-district-code', selectThreeObj.id);
		                    $showDom.html(selectOneObj.value + ' ' + selectTwoObj.value + ' ' + selectThreeObj.value);
		                }
		        });
		    });
		    //居住时长select
		    $('#time').on('click', function () {
		    	var $this = $(this);
		        var timeSelect = new IosSelect(1, [timeData],{
		                container: '.container',
		                title: '',
		                itemHeight: 50,
		                itemShowCount: 3,
		                itemShowCount: 5,
	                	oneLevelId:'3',
		                callback: function (data) {
		                    $this.find('.form-show').html(data.value);
		                }
		        });
		    });
		}
	}
	//页面初始化
	personInfo.init();
	//现居城市
	$('.page-button').on('click',function(){
		var NowCity = $('#NowCity').html();
		var DetailedAddress = $('#DetailedAddress').val();
		var LiveTime = $('#LiveTime').html();
		if(!NowCity){
			util.toast("请输入您的现居城市");
			return false;
		}
		if(!DetailedAddress){
			util.toast("请输入您的详细地址");
			return false;
		}
		if(!LiveTime){
			util.toast("请输入您的居住时长");
			return false;
		}
	})
})();