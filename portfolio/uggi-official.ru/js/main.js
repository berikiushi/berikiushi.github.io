(function () {

  // Open mobile menu
  let mobileMenuOpenButton = document.getElementsByClassName('js-open-mobile-menu')[0];
  let mobileMenu = document.getElementsByClassName('js-mobile-menu')[0];
  let overlay = document.getElementsByClassName('js-overlay')[0];

  mobileMenuOpenButton.addEventListener('click', openMobileMenu);
  overlay.addEventListener('click', closeMobileMenu);

  function openMobileMenu () {
    mobileMenu.classList.add('_open');
    overlay.classList.add('_show');
  }

  function closeMobileMenu () {
    mobileMenu.classList.remove('_open');
    overlay.classList.remove('_show');
  }

}());
