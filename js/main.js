(function ($) {
	$.extend({
		silence: (options) => {
			var silence = new Silence();
			silence.init(options);
		}
	});

	class Silence {
		constructor() {
			this.version = '1.0.0';
		}

		get cnblogs() {
			return {
				header: '#gw-grid-col grid-col-pc-12',
			};
		}

		/**
		 * 初始化
		 * @param {Object} options 全局配置选项
		 */
		init(options) {
			if (options) {
				$.extend(true, this.defaluts, options);
			}
			this.buildCustomElements();
			this.goIntoNormalMode();
			this.scrollDy();
		}



		/**
		 * 进入正常模式
		 */
		goIntoNormalMode() {
			let $win = $(window);
			let _that = this;
			var oldScrollY = 0;
			if ($win.width() > 767) {
				$('#main').css({'min-width': '800px'});
				//鼠标悬浮判断，如果页面不是位于顶部则head不消失
				$(_that.cnblogs.header).hover(function () {
					$(_that.cnblogs.header).css('opacity', '1');
				}, function () {
					if ($(document).scrollTop() < 0) {
						$(_that.cnblogs.header).css('opacity', '1');
					} else {
						$(_that.cnblogs.header).css('opacity', '0');
					}

				})
				//鼠标悬浮logo判断
				$('.site-branding').hover(function () {
					$(_that.cnblogs.header).css('opacity', '1');
					$('#header #navList').css('margin-left', '0px');
				}, function () {
					if ($(document).scrollTop() > 0) {
						$(_that.cnblogs.header).css('opacity', '1');
						$('#header #navList').css('margin-left', '0px');
					} else {
						$(_that.cnblogs.header).css('opacity', '0');
						$('#header #navList').css('margin-left', '100px');
					}

				})
				//页面滚动判断
				$win.scroll(function () {
					oldScrollY = this.scrollY;
					if (oldScrollY > 0) {
						$(_that.cnblogs.header).css('opacity', '1');
						$('#header #navList').css('margin-left', '0px');
					} else {
						$(_that.cnblogs.header).css('opacity', '0');
						$('#header #navList').css('margin-left', '100px');
					}
				});
			}
		}

		/**
		 * 构建自定义 DOM 元素
		 */
		buildCustomElements() {
			
			//回到顶部特效
			$('body').prepend(`<a href="#" class="cd-top faa-float animated cd-fade-out"></a>`);
			let $win = $(window);
			let oldScrollY = 0;
			$win.scroll(function () {
				oldScrollY = this.scrollY;
				let height = window.innerHeight;
				let top = '-' + (900 - height + 80) + 'px';
				if (oldScrollY > 0) {
					$('.cd-top').css('top', top);
				} else {
					$('.cd-top').css('top', '-900px');
				}
			});
		}

		/**
		 * 构建顶部滚动进度条 需要在页面dom元素构建成功之后再计算文档高度。
		 */
		scrollDy() {
			let that = this;
			$('body').prepend(`<div class="scrollCls" id="scrollInfo"></div>`);
			// 可滚动的总高度
			var scrollTotal = this.getScrollHeight() - this.getWindowHeight();
			// 获取dom元素
			var scrollEl = document.getElementById('scrollInfo')
			$(window).scroll(function () {
				// 已经滚动距离
				var sHeight = that.getScrollTop();
				// 占比
				var bl = Math.min((sHeight / scrollTotal) * 100, 100);
				// 设置
				scrollEl.style.width = bl + '%';
			})

		}

		// 已经滚动距离
		getScrollTop() {
			var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
			if (document.body) {
				bodyScrollTop = document.body.scrollTop;
			}
			if (document.documentElement) {
				documentScrollTop = document.documentElement.scrollTop;
			}
			scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
			return scrollTop;
		}

		// 文档的总高度
		getScrollHeight() {
			var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
			if (document.body) {
				bodyScrollHeight = document.body.scrollHeight;
			}
			if (document.documentElement) {
				documentScrollHeight = document.documentElement.scrollHeight;
			}
			scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
			return scrollHeight;
		}

		// 窗体高度
		getWindowHeight() {
			var windowHeight = 0;
			if (document.compatMode == "CSS1Compat") {
				windowHeight = document.documentElement.clientHeight;
			} else {
				windowHeight = document.body.clientHeight;
			}
			return windowHeight;
		}

		/**
		 * 随机数
		 */
		randomNum = function (minNum, maxNum) {
			switch (arguments.length) {
				case 1:
					return parseInt(Math.random() * minNum + 1);
					break;
				case 2:
					return parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
					break;
				default:
					return 0;
					break;
			}
		};
	}
})(jQuery);