jQuery(function ($) {
  $('.js-guy').on('touchstart click', function () {
    $(this).toggleClass('active');
  });


  $('.js-guys').slick({
    slidesToShow: 1,
    infinite: false,
    dots: false,
    loop: false,
    swipe: true,
    speed: 300,
  });
});