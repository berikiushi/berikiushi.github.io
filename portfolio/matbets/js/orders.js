$(function() {

  var $items = $('.js-carousel-item');
  var $carousel = $('.js-carousel');

  $('.js-carousel-view-all').on('click', function() {
    if (!$(this).hasClass('is-opened')) {
      $(this).addClass('is-opened');

      $items.each(function(i, el) {
        if (!$(el).hasClass('open')) {
          $(el).addClass('open');
          $(el).find('.js-carousel-container').slideToggle();
        }
      });
    } else {
      $(this).removeClass('is-opened');

      $items.each(function(i, el) {
        if ($(el).hasClass('open')) {
          $(el).removeClass('open');
          $(el).find('.js-carousel-container').slideToggle();
        }
      });
    }

    $carousel.removeClass('is-new');
  });



  var $ordersSlider = $('.js-orders-product-images');
  var $ordersTotalSlide = $('.js-img-counter');
  var $ordersCancelLink = $('.js-orders-cancel-link');
  var $ordersCancelBtn = $('.js-orders-cancel-btn');

  $ordersSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $ordersTotalSlide.text(i + ' / ' + slick.slideCount);
  });

  $ordersSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:false,
    loop: true,
    swipe: true,
    speed: 300,
    arrows: true
  });

  $ordersCancelLink.on('click', function() {
    $(this).closest('.js-orders-cancel').toggleClass('is-canceled');
  });

  $ordersCancelBtn.on('click', function() {
    $(this).closest('.js-orders-cancel').toggleClass('is-canceled');
  });



  $('.js-datepicker').pikaday({ firstDay: 1 });
});