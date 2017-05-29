$(function() {
  // Company slider
  var $companySlider = $('.js-company-slider').flickity({
    pageDots: false,
    initialIndex: 1,
    arrowShape: { 
      x0: 25,
      x1: 60, y1: 35,
      x2: 65, y2: 35,
      x3: 30
    }
  });


  // Documents slider
  var $documentSlider = $('.js-document-slider').flickity({
    pageDots: false,
    contain: true,
    arrowShape: { 
      x0: 25,
      x1: 60, y1: 35,
      x2: 65, y2: 35,
      x3: 30
    }
  });


  // Scroll to top
  var $btnTopScroll = $('.btn--to-top');
  var winH = $(window).height();

  $(window).scroll(function() {
    if ($(window).width() < 1600) return false;

    var winTop = $(window).scrollTop();

    if (winTop > winH) {
      $btnTopScroll.fadeIn();
    } else {
      $btnTopScroll.fadeOut();
    }
  });

  $btnTopScroll.click(function() {
    $('html, body').animate({scrollTop: 0}, 'slow');
  });


  // Sticky Sub-menu
  var navStyles = {
    position: 'relative'
  };

  var navPos, navState = 0, $nav = $('.sub-menu'), _winTop, scrollDown, navInit = false, headH, navH, winTop, footerTop, winH;

  function updateVars() {
    headH = $('.aside').offset().top;
    navH = $nav.outerHeight(true);
    winTop = $(window).scrollTop();
    footerTop = $('.footer').offset().top;
    winH = $(window).height();
  }

  function updateNav() {
    _winTop = $(window).scrollTop();
    navPos = $nav.offset().top;
    scrollDown = (winTop < _winTop) ? true : false;

    if (!scrollDown && navPos <= headH) {
      navStyles = {
        position: 'relative',
        top: '',
        bottom: '',
        marginTop: ''
      }
      navState = 0;
    }

    if (!scrollDown && navState === 1) {
      navStyles = {
        position: 'absolute',
        top: '',
        bottom: '',
        marginTop: winH + _winTop - navH - headH
      }
      navState = 6;
    }

    if (!scrollDown && _winTop <= navPos && navState !== 0 || navInit === false && _winTop >= headH && _winTop < (navPos + navH - winH)) {
      navStyles = {
        position: 'fixed',
        top: 0,
        bottom: '',
        marginTop: ''
      }
      navState = 3;
    }

    if (scrollDown && winH > navH && _winTop >= headH) {
      navStyles = {
        position: 'fixed',
        top: 0,
        bottom: '',
        marginTop: ''
      }
    }

    if (scrollDown && winH < navH && _winTop >= (navPos + navH - winH) && _winTop < (footerTop - winH) && navState !== 3 || navInit === false && winH < navH && _winTop >= (navPos + navH - winH)) {
      navStyles = {
        position: 'fixed',
        top: '',
        bottom: 0,
        marginTop: ''
      }
      navState = 1;
    }

    if (navInit === false && winH > navH && _winTop >= (navPos + navH - winH)) {
      navStyles = {
        position: 'fixed',
        top: 0,
        bottom: '',
        marginTop: ''
      }
      navState = 1;
    }

    if (scrollDown && _winTop >= (footerTop - winH) && navStyles.position === 'fixed' || navInit === false && _winTop >= (footerTop - winH)) {
      navStyles = {
        position: 'absolute',
        top: '',
        bottom: 0,
        marginTop: ''
      }
       navState = 2;
    }

    if (scrollDown && navState === 3) {
      navStyles = {
        position: 'absolute',
        top: '',
        bottom: '',
        marginTop: navPos - headH
      }
      navState = 5;
    }

    navInit = true;

    $nav.css(navStyles);
    winTop = _winTop;
  }

  if ($(window).width() > 780) {
    updateVars();
  }

  $(window).scroll(function() {
    if ($(window).width() > 780) {
      updateNav();
    }
  });

  $(window).resize(function() {
    if ($(window).width() > 780) {
      updateVars();
    }
  });
});


// Map
var map;

DG.then(function () {
  map = DG.map('map', {
    center: [43.119191, 131.90255],
    zoom: 17
  });

  DG.marker([43.119237, 131.902767]).addTo(map).bindPopup('Вы кликнули по мне!');
});
