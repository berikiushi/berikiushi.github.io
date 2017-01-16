$(document).ready(function() {
	var 
		$fader = $('<div class="fader js-fader"></div>'),
		$faderContent = $('.js-how-it-works').clone(true),
		$close = $('<div class="close icon icon-popup-close js-close" title="Скрыть"></div>');

	$faderContent.removeClass('js-how-it-works');
	$faderContent.append($close);
	$fader.append($faderContent);
	$fader.data('hidden', true);
	$('body').prepend($fader);
	
	/*
	$('.js-how-it-works-button').on('click', function() {
		var height = $('.js-how-it-works').outerHeight();
		$('.js-fader').data('hidden', false).css({height: height});
		$.smoothScroll(0);
		return false;
	});
	$('.js-fader .js-close').on('click', function() {
		$('.js-fader').css({height: 0});
	});
	*/

	// new begin
	var hiwHeight = $('.js-how-it-works').outerHeight();

	$('.js-how-it-works-button').on('click', function() {
		$('.js-fader').addClass('is-open').data('hidden', false).animate({ height: hiwHeight }, 700);
	});
	$('.js-fader .js-close').on('click', function() {
		$('.js-fader').removeClass('is-open').animate({ height: 0 }, 700);
	});

	$(window).on('scroll', function () {
		var scrollY = window.pageYOffset;

		if ( $('.js-fader').hasClass('is-open') && scrollY >= hiwHeight ) {
			$('.js-fader').removeClass('is-open').animate({ height: 0 }, 0);
		}
	});
	// new end


	$('.js-slick').slick({
		rows: 3,
		slidesPerRow: 1,
		slidesToScroll: 1,
		infinite: false,
		dots: false,
		loop: false,
		swipe: true,
		speed: 300,
		arrows: true
	});

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
});

window.onload = function() {
	$('video').get(0).play();
};

/* Demo scripts */
$(document).ready(function() {
	$('.js-demo-more-goods-of-day').on('click', function() {
		var 
			$list = $('.js-goods-of-day-list');

		$list.append($list.find('li').slice(0, 4).clone(true));
		return false;
	});

	$('.js-demo-favorite').on('click', function() {
		$(this).toggleClass('is-favorite');
		if ($(this).hasClass('is-favorite')) {
			$(this).attr('title', 'Убрать из избранного').text('Убрать из избранного');
		} else {
			$(this).attr('title', 'Добавить в избранное').text('Добавить в избранное');
		}
		return false;
	});

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
});