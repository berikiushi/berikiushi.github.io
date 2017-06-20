$(document).ready(function () {
  // Mobile Menu
  var menuIsOpen = false;

  $('.js-menu-open').click(function (e) {
    e.preventDefault();
    menuIsOpen = true;
    $('.js-overlay').fadeIn();
    $('.js-nav').css({right: 0});
  });
  $('.js-menu-close').click(function (e) {
    e.preventDefault();
    menuIsOpen = false;
    $('.js-nav').css({right: '-100%'});
    $('.js-overlay').fadeOut();
  });


  // Overlay
  $('.js-overlay').click(function (e) {
    e.preventDefault();
    if (menuIsOpen) {
      $('.js-nav').css({right: '-100%'});
    }
    $(this).fadeOut();
  });


  // Search
  $('.js-search-show').css({opacity: 1});
  $('.js-search').select2({
    width: '100%'
  });


  // Scroll to top
  $('.to-top').click(function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 'slow');
  });


  // Sliders
  if ($(window).width() < 768) {
    var $bestListSlider = $('.js-best-list-slider').flickity({
      wrapAround: true,
      prevNextButtons: false,
      cellAlign: 'left'
    });
  }


  // Date Picker
  pickmeup.defaults.locales['ru'] = {
    days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
  };

  pickmeup('.js-calendar', {
    locale: 'ru',
    position: 'bottom',
    hide_on_select: true,
    calendars: 2,
    mode: 'range',
    format: 'd.m.Y',
    prev: '\u2190',
    next: '\u2192'
  });


  // Accordion
  $('.js-accordion').accordion({
    "transitionSpeed": 400
  });


});
