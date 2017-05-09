$(document).ready(function () {
  // Mobile Menu
  var menuIsOpen = false;

  $('.js-menu-open').click(function () {
    menuIsOpen = true;
    $('.js-overlay').show();
    $('.js-nav').css({right: 0});
  });
  $('.js-menu-close').click(function () {
    menuIsOpen = false;
    $('.js-nav').css({right: '-100%'});
    $('.js-overlay').hide();
  });

  $('.js-submenu-toggle').click(function () {
    $(this).parent().toggleClass('nav__item--active');
    $(this).next('.nav__submenu').slideToggle(300);
  });


  // Toggle Search
  $('.js-search-toggle').click(function () {
    $('.js-search').toggleClass('_active');
    $('.js-search-input').focus();
  });


  // Callback
  var callbackIsOpen = false;

  $('.js-callback-open').click(function () {
    callbackIsOpen = true;
    $('.js-overlay').show();
    $('.js-callback').show();
  });
  $('.js-callback-close').click(function () {
    callbackIsOpen = false;
    $('.js-overlay').hide();
    $('.js-callback').hide();
  });


  // Overlay
  $('.js-overlay').click(function () {
    if (menuIsOpen) {
      $('.js-nav').css({right: '-100%'});
    }
    if (callbackIsOpen) {
      $('.js-callback').hide();
    }
    $(this).hide();
  });


  // Slider Hero - Main Page
  var $heroSlider = $('.js-hero-slider').flickity({
    wrapAround: true,
    arrowShape: { 
      x0: 10,
      x1: 35, y1: 25,
      x2: 40, y2: 20,
      x3: 20
    }
  });

  var $heroLeftSlider = $('.js-hero-slider-left').flickity({
    draggable: false,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false
  });

  var $heroRightSlider = $('.js-hero-slider-right').flickity({
    draggable: false,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false
  });

  var heroFlkty = $heroSlider.data('flickity');

  if (heroFlkty) {
    var heroDirection = heroFlkty.selectedIndex;

    $heroLeftSlider.flickity( 'select', heroFlkty.cells.length - 1 );
    $heroRightSlider.flickity( 'select', heroFlkty.selectedIndex + 1 );
  }

  $heroSlider.on('select.flickity', function () {
    if ( heroDirection === 0 && heroFlkty.selectedIndex === (heroFlkty.cells.length - 1) ) {
      $heroLeftSlider.flickity( 'previous', true );
      $heroRightSlider.flickity( 'previous', true );
    } else if ( heroDirection === (heroFlkty.cells.length - 1) && heroFlkty.selectedIndex === 0 ) {
      $heroLeftSlider.flickity( 'next', true );
      $heroRightSlider.flickity( 'next', true );
    } else if ( heroFlkty.selectedIndex > heroDirection ) {
      $heroLeftSlider.flickity( 'next', true );
      $heroRightSlider.flickity( 'next', true );
    } else if ( heroFlkty.selectedIndex < heroDirection ) {
      $heroLeftSlider.flickity( 'previous', true );
      $heroRightSlider.flickity( 'previous', true );
    }
    heroDirection = heroFlkty.selectedIndex;
  });


  // Sliders & Scrollbar
  var isMobile = false;
  var $worksSlider = $('.js-works-slider');
  var $equipmentSlider = $('.js-main-equipment-slider');
  var $articlesSlider = $('.js-articles-slider');
  var $imagesSlider = $('.js-images-slider');
  var $similarSlider = $('.js-similar-slider');

  $similarSlider.flickity({
    cellAlign: 'left'
  });

  if ($(window).width() < 768) {
    isMobile = true;

    $worksSlider.flickity({
      prevNextButtons: false
    });

    $articlesSlider.flickity({
      prevNextButtons: false
    });

    $equipmentSlider.flickity();

    $imagesSlider.flickity({
      prevNextButtons: false
    });
  } else {
    $equipmentSlider.flickity({
      groupCells: 3
    });

    $('.js-scroll').mCustomScrollbar({
      theme: 'dark-2',
      scrollButtons: {
        enable: false
      }
    });
  }


  // Resize window
  $(window).resize(function () {
    if ($(window).width() < 768) {
      $equipmentSlider.flickity('destroy');
      $equipmentSlider.flickity();
    } else if ($(window).width() >= 768)  {
      $equipmentSlider.flickity('destroy');
      $equipmentSlider.flickity({
        groupCells: 3
      });
    }

    if ($(window).width() < 768 && !isMobile) {
      isMobile = true;
      $worksSlider.flickity({
        prevNextButtons: false
      });
      $articlesSlider.flickity({
        prevNextButtons: false
      });
      $imagesSlider.flickity({
        prevNextButtons: false
      });

      $('.js-scroll').mCustomScrollbar('destroy');
    } else if ($(window).width() >= 768 && isMobile) {
      isMobile = false;
      $worksSlider.flickity('destroy');
      $articlesSlider.flickity('destroy');
      $imagesSlider.flickity('destroy');

      $('.js-scroll').mCustomScrollbar({
        theme: 'dark-2',
        scrollButtons: {
          enable: false
        }
      });
    }
  });


  // Accordion
  var allAccordionPanels = $('.js-accordion > dd').hide();
  var allAccordionLinks = $('.js-accordion > dt > a');

  $('.js-accordion > dt > a').click(function () {
    $this = $(this);
    $target = $this.parent().next();

    if (!$target.hasClass('_active')) {
      allAccordionPanels.removeClass('_active').slideUp();
      allAccordionLinks.removeClass('_active');
      $target.addClass('_active').slideDown();
      $this.addClass('_active');
    }

    return false;
  });


  // Tabs
  $('.js-tabs').responsiveTabs({
    startCollapsed: 'accordion'
  });


  // Product Slider
  var $productSlider = $('.js-product-slider');

  $productSlider.flickity({
    prevNextButtons: false,
    pageDots: false
  });

  $('.js-product-thumbs').on('click', '.product__thumb', function () {
    var index = $(this).index();
    $productSlider.flickity( 'select', index );

    $(this).parent().find('.product__thumb').removeClass('product__thumb--selected');
    $(this).addClass('product__thumb--selected');
  });


  // Input Count
  $('.js-input-count').on('click', '.input-count__btn', function () {
    var $input = $(this).parent().find('input');
    var count = $input.val();
    if ($(this).hasClass('input-count__btn--plus')) {
      count++;
    } else if ($(this).hasClass('input-count__btn--minus')) {
      count = count < 1 ? 0 : (count - 1);
    }
    $input.val(count);
    $input.change();
    return false;
  });


  // Gallery Slider
  var $gallerySlider = $('.js-gallery-slider-main').flickity({
    pageDots: false,
    accessibility: false,
    draggable: false
  });

  var galleryFlkty = $gallerySlider.data('flickity');
  var $galleryCount = $('.js-gallery-slider-count');

  if (galleryFlkty) {
    $galleryCount.children('span:first').text(galleryFlkty.selectedIndex + 1);
    $galleryCount.children('span:last').text(galleryFlkty.slides.length);
  }

  $gallerySlider.on('select.flickity', function () {
    $galleryCount.children('span:first').text(galleryFlkty.selectedIndex + 1);
    $galleryCount.children('span:last').text(galleryFlkty.slides.length);
  });

  $('.js-gallery-slider-nav').flickity({
    asNavFor: '.js-gallery-slider-main',
    contain: true,
    pageDots: false
  });


  // Textarea autoresize
  autosize($('textarea'));


  // Table hover
  var cellSelected = 2;
  var cellLenght = $('.js-table tr:nth-child(1) td').length;

  if ($(window).width() < 414) {
    $('.js-table').find('td:nth-child(2)').addClass('_active');
  } else {
    $('.js-table').find('td').removeClass('_active');

    $('.js-table td').hover(function () {
      var t = parseInt($(this).index()) + 1;
      $(this).parents('table').find('td').removeClass('_active');
      $(this).parents('table').find('td:nth-child(' + t + ')').addClass('_active');
    }, function () {
      $(this).parents('table').find('td').removeClass('_active');
    });
  }

  $('.js-table-next').click(function (e) {
    e.preventDefault();
    if (cellSelected < cellLenght) {
      cellSelected++;
      $(this).parent().find('.content-table__wrapper').animate( { scrollLeft: '+=140' }, 1000);
    } else {
      cellSelected = 2;
      $(this).parent().find('.content-table__wrapper').animate( { scrollLeft: 0 }, 1000);
    }
    $('.js-table').find('td').removeClass('_active');
    $('.js-table').find('td:nth-child(' + cellSelected + ')').addClass('_active');
  });
});
