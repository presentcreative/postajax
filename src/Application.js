import ui.TextView as TextView;
import ui.widget.ButtonView as ButtonView;

import util.ajax as ajax;

exports = Class(GC.Application, function () {

	this.initUI = function () {
		
		this.view.style.backgroundColor = "#00f";
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
		
		var bigArray = [];
		
		for(var i=0; i<100; i++) {
			bigArray.push("09876"+i);
		}
		
		newObj = {
			string: "string",
			int: 19,
			arr: [1,2,3]
		}

		ajax.post({
			url: 'http://beta.presentcreative.com',
			data: {
				q: 'closure', 
				type: 'post',
				bigArray: bigArray,
				obj: newObj
			},
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		}, function (err, response) {
			if (err) {
				console.error('someting went wrong');
				var responseText = new TextView({
					superview: GC.app.view,
					width: 300,
					height: 300,
					x:0,
					y:104,
					text:err,
					color: "#fff"
				});
			} else {
				console.log(response);
				var responseText = new TextView({
					superview: GC.app.view,
					width: 300,
					height: 300,
					x:0,
					y:104,
					text:response,
					color: "#fff"
				});
			}
		});	
	}
});
