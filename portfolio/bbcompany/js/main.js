$(document).ready(function () {
  // Mobile Menu
  $('.js-menu-open').click(function () {
    $('.js-nav').css({right: 0});
  });

  $('.js-menu-close').click(function () {
    $('.js-nav').css({right: '-100%'});
  });

  $('.js-subnav-toggle').click(function () {
    $(this).toggleClass('mobile-nav__link--active');
    $('.js-subnav').slideToggle(300);
  });


  // Slider Hero
  var $heroSlider = $('.js-main-slider').flickity({
    prevNextButtons: false,
    contain: true
  });


  // Package Toggle
  $('.js-packaging-btn-tablets').click(function (e) {
    e.preventDefault();
    $('.js-packaging-btn-blister').removeClass('btn--active');
    $(this).addClass('btn--active');
    $('.js-packaging-blister').fadeOut();
    $('.js-packaging-tablets').fadeIn();
  });

  $('.js-packaging-btn-blister').click(function (e) {
    e.preventDefault();
    $('.js-packaging-btn-tablets').removeClass('btn--active');
    $(this).addClass('btn--active');
    $('.js-packaging-tablets').fadeOut();
    $('.js-packaging-blister').fadeIn();
  });


  // Pain Toggle
  var $painInfo = $('.js-pain-info');
  var $painControl = $('[data-pain-control]');
  var $painContent = $('[data-pain-content]');
  var $painClose = $('[data-pain-close]');

  for (let i = 0; i < $painControl.length; i++) {
    $($painControl[i]).click(function (e) {
      e.preventDefault();
      $painControl.removeClass('pain__point--active');
      $(this).addClass('pain__point--active');
      $painInfo.hide();
      $painContent.hide();
      $($painContent[i]).fadeIn();
      $('.js-pain-instructions').fadeIn();
    });

    $($painClose[i]).click(function (e) {
      e.preventDefault();
      $painControl.removeClass('pain__point--active');
      $('.js-pain-instructions').fadeOut();
      $(this).parent().hide();
    });
  }


  // Product Desktop Toggle
  var $productSelectorControl = $('[data-product-selector-control]');
  var $productSelectorContent = $('[data-product-selector-content]');
  var $productSelectorName = $('[data-product-selector-name]');
  var $productFacts = $('[data-product-facts]');
  var $productFactsControl = $('[data-product-facts-control]');
  var $productFactsContent = $('[data-product-facts-content]');

  for (let i = 0; i < $productSelectorControl.length; i++) {
    $($productSelectorControl[i]).click(function (e) {
      e.preventDefault();

      $productSelectorControl.removeClass('product-selector__btn--active');
      $(this).addClass('product-selector__btn--active');

      $productSelectorContent.fadeOut();
      $($productSelectorContent[i]).fadeIn();

      $productSelectorName.hide();
      $($productSelectorName[i]).fadeIn();

      $productFacts.hide();
      $($productFacts[i]).fadeIn();
    });
  }

  for (let i = 0; i < $productFactsControl.length; i++) {
    $($productFactsControl[i]).click(function (e) {
      e.preventDefault();

      $($productSelectorControl[i]).closest('.product-facts-wrapper').find($productFactsControl).hide();

      $productFactsControl.removeClass('product-facts__link--active');
      $(this).addClass('product-facts__link--active');

      $productFactsContent.hide();
      $($productFactsContent[i]).fadeIn();
    });
  }


  // Slider Product
  if ($(window).width() < 1024) {
    var $productSliderName = $('[data-product-slider-name]');

    var $productSlider = $('.js-product-slider').flickity({
      prevNextButtons: false,
      pageDots: false,
      cellSelector: '.product-slider__item',
      contain: true
    });

    var productFlkty = $productSlider.data('flickity');

    $productSlider.on( 'select.flickity', function() {
      $productSliderName.hide();
      $($productSliderName[productFlkty.selectedIndex]).fadeIn();
    })
  }


  // Accordion Products
  var $productAccordionControl = $('[data-product-accordion-control]');
  var $productAccordionContent = $('[data-product-accordion-content]');

  for (let i = 0; i < $productAccordionControl.length; i++) {
    $($productAccordionControl[i]).click(function (e) {
      e.preventDefault();

      $(this).toggleClass('product-accordion__link--active');

      $($productAccordionContent[i]).slideToggle(300);
    });
  }

});
