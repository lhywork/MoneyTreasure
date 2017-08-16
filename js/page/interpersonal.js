/**
 * 人际关系页
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
		    //人际关系select
		    $('.select').on('click', function () {
		    	var $this = $(this);
		        var timeSelect = new IosSelect(1, [interpersonalData],{
	                container: '.container',
	                title: '',
	                itemHeight: 50,
	                itemShowCount: 3,
	                oneLevelId:'2',
	                
	                callback: function (data) {
	                    $this.find('.form-show').html(data.value);
	                }
		        });
		    });
		}
	}
	//页面初始化
	Mod.init();
	$('.page-button').on('click',function(){
		var RelationOne = $('#RelationOne').html();
		var NameOne = $('#NameOne').val();
		var PhoneOne = $('#PhoneOne').val();
		var RelationTwo = $('#RelationTwo').html();
		var NameTwo = $('#NameTwo').val();
		var PhoneTwo = $('#PhoneTwo').val();
		if(!RelationOne){
			util.toast("请输入与您第一位亲属的关系");
			return false;
		}
		if(!NameOne){
			util.toast("请输入您第一位亲属的姓名");
			return false;
		}
		if(!PhoneOne){
			util.toast("请输入您第一位亲属的电话号码");
			return false;
		}
		if(!(/^1(3|4|5|7|8)\d{9}$/.test(PhoneOne))){
    	    util.toast("您输入第一位亲属的电话号码格式错误");
			return false;	 
    	}
		if(!RelationTwo){
			util.toast("请输入与您第二位亲属的关系");
			return false;
		}
		if(!NameTwo){
			util.toast("请输入您第二位亲属的姓名");
			return false;
		}
		if(!PhoneTwo){
			util.toast("请输入您第二位亲属的电话号码");
			return false;
		}
		if(!(/^1(3|4|5|7|8)\d{9}$/.test(PhoneTwo))){
    	    util.toast("您输入第二位亲属的电话号码格式错误");
			return false;	 
    	}
	})
})();