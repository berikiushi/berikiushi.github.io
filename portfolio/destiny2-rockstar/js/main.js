'use strict';

(function () {

  // nav
  var $navEl = $('.nav');
  var $navOpenBtn = $('.nav__user');
  var $navCloseBtn = $('.nav__close');
  var $navMenu = $('.nav__menu');

  $navOpenBtn.click(function () {
    if ($(window).width() <= 414) {
      $('body').addClass('no-scroll');
    }

    $navEl.addClass('nav--open');

    $('html').click(function (e) {
      if ($(e.target).parents('.nav').length == 0) {

        if ($(window).width() <= 414) {
          $('body').removeClass('no-scroll');
        }

        $navEl.removeClass('nav--open');

        $(this).unbind(e);
      }
    });
  });

  $navCloseBtn.click(function () {
    if ($(window).width() <= 414) {
      $('body').removeClass('no-scroll');
    }

    $navEl.removeClass('nav--open');
  });


  // masked input
  var codeMask = [/[0-9a-zA-Z]/, /[0-9a-zA-Z]/, /[0-9a-zA-Z]/, /[0-9a-zA-Z]/, '-', /[0-9a-zA-Z]/, /[0-9a-zA-Z]/, /[0-9a-zA-Z]/, /[0-9a-zA-Z]/, '-', /[0-9a-zA-Z]/, /[0-9a-zA-Z]/, /[0-9a-zA-Z]/, /[0-9a-zA-Z]/];
  var codeInput = document.querySelector('.hero__input')
  var maskedInputController = vanillaTextMask.maskInput({
    inputElement: codeInput,
    mask: codeMask
  })

}());
