define(function (require){
	//引入jquery与jquerymobile
	var $ = require('jquery');

	//避免闪烁 但是会出现顶部与内容遮盖的现在，所以触发一次window的resize事件进行设定
    // $('body').css('display','block');
    // $(window).resize();

	$(document).on('mobileinit', function () {
		console.log('这是初始化')
	});
})