$(function() {
  $(document).on('click', '.js-dropbox-link', toggleDropbox);

  function toggleDropbox(e) {
    e.preventDefault();

    var $dropbox = $(this).closest('.js-item-tools');
    var $collectionForm = $dropbox.find('.js-dropbox-collections');
    var $collectionInput = $dropbox.find('.tools-collections-input');
    var $collectionSubmit = $dropbox.find('.tools-collections-add');
    var $collectionList = $dropbox.find('.tools-collections-list');
    var $collectionItem = $dropbox.find('.tools-collections-item');
    var $collection = $dropbox.find('.tools-collections');
    var $collectionPosition = $collection.offset();

    if (!$dropbox.data('clickOut')) {
      $dropbox.clickOut(function() {
        $dropbox.removeClass('more-active');
        $collectionForm.off();
        $collectionItem.off();
      });
      $dropbox.data('clickOut', true);
    }

    if ($collectionPosition.left < 55) {
      $collection.css({'right': '-100%'});
    }

    $dropbox.toggleClass('more-active');

    if ($dropbox.hasClass('more-active')) {
      $collectionForm.on('submit', function(e) {

        if ($collectionInput.val() !== '') {
          $collectionInput.parent().css({'border-color':'#dcdcdc'});
          $collectionList.prepend( '<li class="tools-collections-item">' + $collectionInput.val() + '</li>' );
          $collectionInput.val('');

          $collectionItem.off();
          $collectionItem = $dropbox.find('.tools-collections-item');
          $collectionItem.on('click', function() {
            $(this).toggleClass('is-added');
          });
        } else {
          $collectionInput.parent().css({'border-color':'#ff0000'});
        }

        e.preventDefault();
      });

    } else {
      $collectionForm.off();
      $collectionItem.off();
    }

    $collectionItem.on('click', function() {
      $(this).toggleClass('is-added');
    });
  }
});