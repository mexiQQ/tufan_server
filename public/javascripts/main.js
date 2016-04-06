$(document).ready(function() {

	/*
	 * 图片加载后删除loading图标
	 */
	$(".essay_img img").one("load", function() {
		$(".essay_loading").remove();
	}).each(function() {
		if(this.complete) $(this).load();
	});

	/*
	 * QQ分享
	 */
	shrareQQ();

	function shrareQQ (arg) {
		var title = $(".essay_recommend .ctx").text();
		var desc = $(".essay_content .ctx").text();
		var url = window.location.href;
		setShareInfo({
			title   : title, // 分享标题
			summary : desc, // 分享内容
			pic     : '../img/share.png', // 分享图片
			url     : url, // 分享链接
			// 微信权限验证配置信息，若不在微信传播，可忽略
	/*		WXconfig: {
				swapTitleInWX : false, // 是否标题内容互换（仅朋友圈，因朋友圈内只显示标题）
				appId         : wxa4c897a6c9835ecb, // 公众号的唯一标识
				timestamp     : timestamp, // 生成签名的时间戳
				nonceStr      : nonceStr, // 生成签名的随机串
				signature     : signature // 签名
			}*/
		});
	}
});