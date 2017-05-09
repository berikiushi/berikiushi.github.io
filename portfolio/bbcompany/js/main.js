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
    $(this).next('.js-subnav').slideToggle(300);
  });


  // Slider Hero
  var $heroSlider = $('.js-main-slider').flickity({
    imagesLoaded: true,
    prevNextButtons: false,
    contain: true,
    autoPlay: true,
    selectedAttraction: 0.020, //default 0.025
    friction: 0.2 //default 0.28
  });


  // Package Toggle
  var isToggleInteraction = false;
  var isPackageActive = 'blister';
  var $tabletsBtn = $('.js-packaging-btn-tablets');
  var $blisterBtn = $('.js-packaging-btn-blister')
  var $tabletsContent = $('.js-packaging-tablets');
  var $blisterContent = $('.js-packaging-blister');

  $tabletsBtn.click(function (e) {
    e.preventDefault();
    isToggleInteraction = true;
    packageToggle('tablets');
  });
  $blisterBtn.click(function (e) {
    e.preventDefault();
    isToggleInteraction = true;
    packageToggle('blister');
  });

  function packageToggle (el) {
    if (el && el === 'tablets') {
      isPackageActive = 'tablets';
      $blisterBtn.removeClass('btn--active');
      $tabletsBtn.addClass('btn--active');
      $blisterContent.fadeOut();
      $tabletsContent.fadeIn();
    } else if (el && el === 'blister') {
      isPackageActive = 'blister';
      $tabletsBtn.removeClass('btn--active');
      $blisterBtn.addClass('btn--active');
      $tabletsContent.fadeOut();
      $blisterContent.fadeIn();
    }
  }

  if ($tabletsBtn.length) {
    setTimeout(function autoToggle() {
      if (isToggleInteraction) return;

      if (isPackageActive === 'blister') {
        packageToggle('tablets');
      } else if (isPackageActive === 'tablets') {
        packageToggle('blister');
      }
      setTimeout(autoToggle, 5000);
    }, 5000);
  }


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

  $(".product-facts__radio form input[name='radio']").change(function(e){
    $val = $(this).val();
    $('.product-facts__faq .accordion__item').hide();
    if($val=='') {
      $('.product-facts__faq .accordion__item').fadeIn();
    } else {
      $('.product-facts__faq .accordion__item-' + $val).fadeIn();
    }
  });


  // Slider Product
  var isMobile = false;
  var productFlkty = false;
  var $productSlider = $('.js-product-slider');
  var $productSliderName = $('[data-product-slider-name]');

  if ($(window).width() < 1024) {
    isMobile = true;

    $productSlider.flickity({
      prevNextButtons: false,
      pageDots: false,
      cellSelector: '.product-slider__item',
      contain: true
    });

    productFlkty = $productSlider.data('flickity');

    $productSlider.on('select.flickity', function () {
      $productSliderName.hide();
      $($productSliderName[productFlkty.selectedIndex]).fadeIn();
    })
  }

  $(window).resize(function () {
    if ($(window).width() < 1024 && !isMobile) {
      isMobile = true;

      $productSlider.flickity({
        prevNextButtons: false,
        pageDots: false,
        cellSelector: '.product-slider__item',
        contain: true
      });

      productFlkty = $productSlider.data('flickity');

      $productSlider.on('select.flickity', function () {
        $productSliderName.hide();
        $($productSliderName[productFlkty.selectedIndex]).fadeIn();
      })
    } else if ($(window).width() >= 1024 && isMobile) {
      isMobile = false;
      $productSlider.flickity('destroy');
      productFlkty = false;
    }
  });


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


  // Slider Mission
  $('.js-mission-slider').css({'opacity': 1});
  var $missionSlider = $('.js-mission-slider').flickity({
    imagesLoaded: true,
    prevNextButtons: false,
    contain: true
  });


  // Search
  $('.js-search-open').click(function (e) {
    e.preventDefault();
    $(this).hide();
    $('.js-search').fadeIn();
    $('.js-search-input').focus();
  });
  $('.js-search-input').blur(function () {
    $('.js-search-open').fadeIn();
    $('.js-search').fadeOut();
  });

  $('.js-locator-results-btn').click(function (e) {
    e.preventDefault();
    $('.js-locator-results').toggle();
  });


  // Accordion
  $('.js-accordion .accordion__control').click(function () {
    $(this).toggleClass('accordion__control--active');
    $(this).next('.accordion__content').slideToggle(300);
  });


  // FAQs Filter (Mobile)
  $('.js-product-filter .product-filter__control').click(function () {
    $(this).next('.product-filter__content').fadeIn();
  });
  $('.js-product-filter .product-filter__close').click(function () {
    $(this).parent('.product-filter__content').fadeOut();
  });


  //faux deep linking based on fragment
  if(window.location.hash) {
    var hash = window.location.hash.substring(1);
    $("a[data-fragment='" + hash + "']").click();
  }


});
