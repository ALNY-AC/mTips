var mTips = {
	c: {
		//配置项
		x: 10, //x偏移量,相对于鼠标
		y: 10 //y偏移量,相对于鼠标
	},
	//show方法，用于显示提示

	s: function(text, a, b) {
		var style;
		var fun;

		if(typeof(a) == 'string') {
			style = a;
			fun = b;
		} else if(typeof(a) == 'function') {
			style = b;
			fun = a;
		}

		if(style == 'undefined' || style == null) {
			style = 'default';
		}

		$('<div></div>').addClass('mTips mTips-' + style).text(text).appendTo('body');
		$(document).on('mousemove', function(e) {
			$(".mTips").offset({
				top: e.pageY + mTips.c.x,
				left: e.pageX + mTips.c.y
			})
		});

		if(fun != null && typeof(fun) != 'undefined') {
			fun();
		}

	},

	//hide方法，用于隐藏和删除提示
	h: function(fun) {

		$('.mTips').remove();
		if(fun != 'undefined' && fun != null) {
			fun();
		}

	},

	//用于给相关属性添加提示功能
	m: function() {
		$('[data-mtpis]').each(function() {

			$(this).on('mouseenter', function(e) {

				mTips.s($(this).attr('data-mtpis'), $(this).attr('data-mtpis-style'));

			});

			$(this).on('mouseleave', function(e) {
				mTips.h();
			});

		});

	}

}
mTips.m();