$(document).ready(function() {
	function priceMadeOf(e, t) {
		var tP = t.parent();
		if (tP.hasClass('active') ) {
			tP.removeClass('active');
		} else {
			e.preventDefault();
			e.stopPropagation();
			tP.addClass('active');
			tP.css('height', t.css('height'));
		}
	}
	$('.js-price-made-of').each(function() {
		var t = $( this );
		var tP = t.parent();
		if ( parseInt(tP.css('height')) > parseInt(t.find('a').css('line-height')) ) {
			tP.addClass('product-info-i-long');
			t.on('click', function(e){
				var t = $( this );
				priceMadeOf(e, t);
			});
			t.siblings('p').on('click', function(e){
				var t = $( this ).siblings('.price-made-of');
				priceMadeOf(e, t);
			});
		}
	});

	$('.js-product-image-main').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots:false,
		loop: true,
		swipe: true,
		speed: 300,
		asNavFor: '.product-image-row',
		arrows: true
	});
	$('.js-product-image-row').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.product-image-main',
		focusOnSelect: true,
		arrows: false
	});
	$('.js-product-recently-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		focusOnSelect: true,
		infinite: false
	});

	$('.js-tumbler > li').on('click', function() {
		var t = $( this );
		var i = t.index();

		if ( !t.hasClass('active') ) {
			t.parent().find('li')
				.removeClass('active');
			t.addClass('active');
			t.parent().parent().find('.js-tumbler-i')
				.removeClass('active')
				.eq(i).addClass('active');
			t.parent().parent().find('.slick-slider').slick('setPosition');
		}
	});

	$('.js-input-number').on('input', function() {
		var v = $( this ).val();
		if ( v < 1 ) {
			$( this ).val(1);
		}
		$( this ).val($( this ).val().replace(/[^0-9]/g));
	});

	$('.js-input-i').on('click', function() {
		var t = $( this );
		var i = t.parent().find('.js-input-number');
		var v = i.val();
		var a = t.parent().find('i.product-input-down');

		if ( t.hasClass('product-input-up') ) {
			i.val(++v);
			t.parent().find('i').removeClass('disabled');
		} else {
			if ( v > 1 ) {
				i.val(--v);
				if ( v < 2 ) {
					a.addClass('disabled');
				} else {
					a.removeClass('disabled');
				}
			}
		}
	});

});