/**
 * 工作信息页
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
		    var $showDom = $('.city-show');
		    //本单位工作年限select
		    $('#time').on('click', function () {
		        var timeSelect = new IosSelect(1, [timeData],{
		                container: '.container',
		                title: '',
		                itemHeight: 50,
		                itemShowCount: 5,
	               	 	oneLevelId:'3',
		                callback: function (data) {
		                    $('.time-show').html(data.value);
		                }
		        });
		    });
		    //本单位工作年限select
		    $('#aftertx').on('click', function () {
		        var timeSelect = new IosSelect(1, [timeData1],{
		                container: '.container',
		                title: '',
		                itemHeight: 50,
		                itemShowCount: 5,
	                	oneLevelId:'10003',
		                callback: function (data) {
		                    $('.time-show1').html(data.value);
		                }
		        });
		    });
		    //现居城市select
		    $cityBtn.bind('click', function () {
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
		}
	}
	//页面初始化
	personInfo.init();
	//验证JS
	$('.page-button').on('click',function(){
		var WorkUnit = $('#WorkUnit').val();
		var JobTitle = $('#JobTitle').val();
		var WorkTime = $('#WorkTime').html();
		var Income = $('#Income').html();
		var WorkCity = $('#WorkCity').html();
		var DetailedAddress = $('#DetailedAddress').val();
		if(!WorkUnit){
			util.toast("请输入您的工作单位");
			return false;
		}
		if(!JobTitle){
			util.toast("请输入您的职务名称");
			return false;
		}
		if(!WorkTime){
			util.toast("请输入您的工作年限");
			return false;
		}
		if(!Income){
			util.toast("请输入您的税后年收入");
			return false;
		}
		if(!WorkCity){
			util.toast("请输入您的单位所在地");
			return false;
		}
		if(!DetailedAddress){
			util.toast("请输入您的详细地址");
			return false;
		}
	})
})();