jQuery(function($) {
    $('.js-guy').on('touchstart click', function() {
        $(this).toggleClass('active');
    });
});