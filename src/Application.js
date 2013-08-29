import ui.TextView as TextView;
import ui.widget.ButtonView as ButtonView;

import util.ajax as ajax;

exports = Class(GC.Application, function () {

	this.initUI = function () {
		
		var button = new ButtonView({
			superview: this.view,
			width: 154,
			height: 83,
			layout: "box",
			centerX: true,
			y:20,
			images: {
				up: 'resources/images/button_blue_default.png',
				down: 'resources/images/button_blue_down.png'
			},
			title: "Ajax Me",
			text: {
				color: "#fff",
				size: 20
			},
			onClick: bind(this,function(){
				this.getAjax();
			})
		});
	};
	
	this.launchUI = function () {};
	
	this.getAjax = function() {
		console.log("getting data from server...");
		ajax.post({
			url: 'http://beta.presentcreative.com',
			data: {q: 'closure', type: 'post'}
		}, function (err, response) {
			if (err) {
				console.error('someting went wrong');
				console.error(err);
			} else {
				console.log(response);
			}
		});	
	}
});
