$(document).ready(function() {

  // stick header
  const header = document.querySelector('.js-header');

  window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 142) {
      header.classList.add('header__top--fixed');
    } else {
      header.classList.remove('header__top--fixed');
    }
  }


  // menu open
  document.querySelector('.nav__btn').addEventListener('click', function(e) {
    header.classList.add('menu-is-open');
  });

  document.querySelector('.js-nav-close').addEventListener('click', function(e) {
    header.classList.remove('menu-is-open');
  });


  // menu link
  $('.js-start').click(function() {
    $('body, html').animate({
      scrollTop: 0
    }, 1000);
  });
  $('.js-delivery').click(function() {
    $('html, body').animate({
      scrollTop: $('.delivery').offset().top - 110
    }, 1000);
  });
  $('.js-steps').click(function() {
    $('html, body').animate({
      scrollTop: $('.steps').offset().top - 110
    }, 1000);
  });
  $('.js-reviews').click(function() {
    $('html, body').animate({
      scrollTop: $('.reviews').offset().top - 110
    }, 1000);
  });
  $('.js-footer').click(function() {
    $('html, body').animate({
      scrollTop: $('.footer').offset().top
    }, 1000);
  });
  $('.js-calc').click(function() {
    $('html, body').animate({
      scrollTop: $('.calc').offset().top - 110
    }, 1000);
  });


  // modals
  $('.js-discount').click(function() {
    $('.js-modal-discount').show();
  });
  $('.js-feedback').click(function() {
    $('.js-modal-feedback').show();
  });

  $('.js-modal-close').click(function() {
    $('.modal').hide();
  });
  $('.modal__overlay').click(function(e) {
    e.stopPropagation();
    $('.modal').hide();
  });


  // calc slider
  const weightSlider = document.querySelector('.js-cargo-weight-slider');
  const weightValue = document.querySelector('.js-cargo-weight-value');

  noUiSlider.create(weightSlider, {
    start: [0],
    connect: true,
    step: 100,
    format: {
      to: function (value) {
        return value;
      },
      from: function (value) {
        return value;
      }
    },
    range: {
      'min': [0],
      'max': [20000]
    }
  });

  weightSlider.noUiSlider.on('update', function (values, handle) {
    weightValue.value = values[handle];
  });

  weightValue.addEventListener('change', function() {
    weightSlider.noUiSlider.set([this.value, null]);
  });


  // video review carousel
  $('.js-reviews-carousel').owlCarousel({
    center: true,
    loop: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1900: {
        items: 4
      }
    }
  });


  // footer carousel
  $('.js-footer-carousel').owlCarousel({
    center: true,
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      }
    }
  });

});
