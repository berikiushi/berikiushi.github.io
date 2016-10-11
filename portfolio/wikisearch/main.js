var suggest_count = 0;
var input_initial_value = '';
var suggest_selected = 0;

$(window).load(function() {
  $('.search-input input').keyup(function(I) {
    switch (I.keyCode) {
      case 13: // enter
      case 27: // escape
      case 38: // up
      case 40: // down
        break;

      default:
        if ($(this).val().length > 2) {
          input_initial_value = $(this).val();
          $.ajax({
            url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json',
            data: {
              'search': $(this).val()
            },
            type: 'POST',
            dataType: 'jsonp',
            crossDomain: true,
            headers: {
              'Api-User-Agent': 'Example/1.0'
            }
          }).done(function(data) {
            var list = '';
            suggest_count = data[1].length;
            if (suggest_count > 0) {
              $('.search-live-result').html("").show();
              for (var i = 0; i < data[1].length; i++) {
                list += '<li>' + data[1][i] + '</li>'
              }
              $('.search-live-result').html('<ul>' + list + '</ul>');
              $('.search-live-result').show();
            }
          });
        }
        break;

    }
  });

  $('.search-input input').keydown(function(I) {
    switch (I.keyCode) {
      case 13: // enter
      case 27: // escape
        $('.search-live-result').hide();
        getSearchResult();
        return false;
        break;
      case 38: // up
      case 40: // down
        I.preventDefault();
        if (suggest_count) {
          key_activate(I.keyCode - 39);
        }
        break;
    }
  });

  $('.search-live-result').on('click', 'li', function() {
    $('.search-input input').val($(this).text());
    $('.search-live-result').fadeOut(350).html('');
    getSearchResult();
  });

  $('.search-button').click(function(event) {
    $('.search-live-result').fadeOut(350).html('');
    getSearchResult();
  });

  $('html').click(function() {
    $('.search-live-result').hide();
  });

  $('.search-input input').click(function(event) {
    if (suggest_count) $('.search-live-result').show();
    event.stopPropagation();
  });
});


function key_activate(n) {
  $('.search-live-result li').eq(suggest_selected - 1).removeClass('active');

  if (n == 1 && suggest_selected < suggest_count) {
    suggest_selected++;
  } else if (n == -1 && suggest_selected > 0) {
    suggest_selected--;
  }

  if (suggest_selected > 0) {
    $('.search-live-result li').eq(suggest_selected - 1).addClass('active');
    $('.search-input input').val($('.search-live-result li').eq(suggest_selected - 1).text());
  } else {
    $('.search-input input').val(input_initial_value);
  }
}


function getSearchResult() {
  var val = $('.search-input input').val();
  if (val) {
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json',
      data: {
        'search': val
      },
      type: 'POST',
      dataType: 'jsonp',
      crossDomain: true,
      headers: {
        'Api-User-Agent': 'Example/1.0'
      }
    }).done(function(data) {
      var list = '';
      for (var i = 0; i < data[1].length; i++) {
        list += '<div class="search-result">' +
        '<h2><a target="_blank" href="' + data[3][i] + '">' + data[1][i] + '</a></h2>' +
        '<div class="url">' + data[3][i] + '</div>' +
        '<div class="text">' + data[2][i] + '</div>' +
        '</div>'
      }

      if (list != '') {
        $('.search-result-wrap').html(list);
      } else {
        $('.search-result-wrap').html('<div class="search-result"><h2>On request "' + val + '" no results.<h2></div>');
      }
    });
  }
}
