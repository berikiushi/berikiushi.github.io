/*!
== nSelect jQuery custom select plugin == 
Version: 1.0.1
Plugin URI: http://nselect.edbond.name/
Author: Ed Bond
Author URI: http://edbond.name/
License: MIT License (MIT)
*/
!function(e){e.nSelect=function(t,s){function l(){function s(){var t=e(this);c.hasClass("_active")?n(t,c):i(t,c),!_&&jQuery.mCustomScrollbar&&r(o.selectList)}function l(){var t=e(this);d(c,t),v.afterChange(t),n(t)}var c=a(t),o={selectBtn:e(".nselect__head",c),selectHeadInner:e(".nselect__head SPAN",c),selectList:e(".nselect__list",c),selectItem:e(".nselect__inner li",c)};o.selectBtn.on("click",s),o.selectItem.on("click",l)}function a(t){var s,l,a,n={top:"",disabled:""},i="",c={},d=!1,r=t.data("title")||"",o=t.attr("name")||"";return t.hide(),v.topList&&(n.top="_top"),(t.hasClass("_disabled")||v.disabled)&&(n.disabled="_disabled"),i=t.wrap('<div class="nselect ns-sys '+n.top+" "+v.theme+" "+n.disabled+'" data-name="'+o+'" data-val=""></div>').closest(".nselect.ns-sys").prepend('<div class="nselect__inner"><ul class="nselect__list"></ul></div>'),c={selectList:e(".nselect__list",i),selectItem:{}},t.find("option").each(function(){var t,l=e(this),a=l.val(),n=l.html(),i="",d="";l.attr("selected")?(s=l,i="_active",1==v.hideAfterSelect&&(d="_hide")):(i="",d=""),t='<li class="'+i+" "+d+'" data-val="'+a+'"><span>'+n+"</span></li>",c.selectList.append(t)}),c.selectItem=e(".nselect__inner li",i),void 0===s&&(d=!0,s=t.find("option"),c.selectItem.eq(0).addClass("_active"),1==v.hideAfterSelect&&c.selectItem.eq(0).addClass("_hide")),l=s.html(),a=s.val(),""!==v.firstTitle&&d&&(c.selectItem.removeClass("_active"),t.val(""),l=v.firstTitle,a=""),""!==r&&d&&(c.selectItem.removeClass("_active"),t.val(""),l=r,a=""),i.prepend('<h6 class="nselect__head" data-val="'+a+'"><span>'+l+"</span></h6>"),e(".nselect__head",i).attr("title",e(".nselect__head SPAN",i).html()),i}function n(t,s){return void 0===s?void e(".nselect").removeClass("_active"):(s.removeClass("_active"),void e(window).trigger("niceClose"))}function i(t,s){s.addClass("_active"),v.afterOpen(t),e(window).trigger("nOpen")}function c(e,s){t.val(e),s.data("val",e)}function d(t,s){var l=e(s),a=l.find("span").html(),n=l.data("val");l.addClass("_active").siblings("li").removeClass("_active"),1==v.hideAfterSelect&&l.addClass("_hide").siblings("li").removeClass("_hide"),t.addClass("_checked"),e(".nselect__head",t).attr("title",a),e(".nselect__head SPAN",t).html(a),c(n,t),e(window).trigger("nChange")}function r(e){e.mCustomScrollbar("destroy"),e.mCustomScrollbar({theme:v.scrollbarTheme}),_=!0}var o=this,_=!1,h={topList:!1,firstTitle:"",theme:"nsOrange",disabled:!1,scrollbarTheme:"dark",hideAfterSelect:!1,afterChange:function(){},afterOpen:function(){}},v=e.extend(h,s);return l(),o},e(document).on("click",function(t){e(t.target).closest(".nselect").length||0==e(".nselect._active").length||e(".nselect").removeClass("_active")}),e.fn.nSelect=function(t){return this.each(function(){new e.nSelect(e(this),t)})}}(jQuery);

$(document).ready(function() {
	$('.js-popup-link').on('click', function() {
		showPopup($(this).data('popup'));
		return false;
	});
	$('.js-popup .js-close').on('click', hidePopup);

	if ('ontouchstart' in document.documentElement) {
		$('.tools-dropbox').on('click', function() {
			var $this = $(this);
			$('.hover').not($this).removeClass('hover');
			$this.toggleClass('hover');
		})
	} else {
		$('.tools-dropbox').on('mouseover', function() {
			$(this).addClass('hover');
		}).on('mouseout', function() {
			$(this).removeClass('hover');
		});
	}

	$('.js-selectize').selectize();
});

$(function () {
	/**
	 * Наблюдатель за редактором, фиксирует редактор при скроллинге страницы
	 * скрывает верхний хэдэр и фиксирует дополнительные кнопки на тулбаре редактора
	 */
	var $redactor = $(".redactor-toolbar");
	if ($redactor.length) {
		var redactorObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				var $this = $(mutation.target);
				if ($this.hasClass('toolbar-fixed-box')) {
					$('.js-toolbar').hide();
					$(window).off('scroll', onWindowScroll);
				} else {
					$('.js-toolbar').show();
					$(window).on('scroll', onWindowScroll);
				}
				if ($this.css('visibility') == 'visible') {
					$('.js-message-send').css('top', $this.css('top'));
				} else {
					$('.js-message-send').css('top', 0);
				}
			});
		});
		redactorObserver.observe($redactor[0], {
			attributes: true
		});
	}
});

/* Demo scripts */
$(document).ready(function() {
	$('.js-demo-auth-form').on('submit', function() {
		hidePopup();
		$('.js-demo-vizitor').hide();
		$('.js-demo-user').show();
		return false;
	});

	$('.js-demo-forgot-form').on('submit', function() {
		hidePopup();
		showPopup('#forgot-form-error');
		return false;
	});

	$('.js-demo-forgot-form-error').on('submit', function() {
		hidePopup();
		showPopup('#forgot-form-done');
		return false;
	});

	$('.js-demo-logout').on('click', function() {
		$('.js-demo-vizitor').show();
		$('.js-demo-user').hide();
	});

	$('.js-demo-sms').on('click', function() {
		$(this).parent().hide().next().removeClass('hidden').parent().next().removeClass('hidden');
		return false;
	});
	$('.js-demo-sms-again').on('click', function() {
		$(this).hide().next().removeClass('hidden');
		return false;
	});

	$(document).on('click', '.js-demo-revive', function() {
		$(this).closest('.tile-list-item').removeClass('tile-list-item-removed')
			.find('.tile-list-item-state').remove();
		return false;
	});
	$(document).on('click', '.goods-item .js-demo-remove', function() {
		$(this).closest('.tile-list-item').addClass('tile-list-item-removed')
			.append($('<div class="tile-list-item-state"><div class="tile-list-item-info">Изделие удалено</div><button class="button js-demo-revive">Восстановить</button></div>'));
		return false;
	});
	$(document).on('click', '.collection-item .js-demo-remove', function() {
		$(this).closest('.tile-list-item').addClass('tile-list-item-removed')
			.append($('<div class="tile-list-item-state"><div class="tile-list-item-info">Коллекция удалена</div><button class="button js-demo-revive">Восстановить</button></div>'));
		return false;
	});
});