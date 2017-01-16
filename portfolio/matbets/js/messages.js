$(document).ready(function() {
	$(document).on('click', '.js-dropbox-link', toggleDropbox);
	$(document).on('click', '.js-lock-user', lockUser);
	$(document).on('click', '.js-message-cancel', closeEditMessage);

	function toggleDropbox(e) {
		e.preventDefault();

		var $dropbox = $(this).closest('.js-item-tools');

		if (!$dropbox.data('clickOut')) {
			$dropbox.clickOut(function() {
				$dropbox.removeClass('more-active');
			});
			$dropbox.data('clickOut', true);
		}

		$dropbox.toggleClass('more-active');
	}

	function lockUser(e) {
		e.preventDefault();

		var $texts = $(this).find('span');
		var $message = $(this).closest('.js-message-group');

		$texts.toggleClass('hidden');
		$message.toggleClass('message-blocked');
	}

	function closeEditMessage(e) {
		e.preventDefault();
		$('.js-message-group').first().removeClass('active');
	}

	function openEditMessage() {
		var person = $(this).val();
		$(this).val(null).trigger('change');
		$('.js-message-group').first().addClass('active');
	}

	$('.js-user-select').select2({
		placeholder: 'Написать сообщение',
		allowClear: true,
		theme: 'users',
		templateResult: formatState,
		maximumSelectionLength: 2
	}).on({
		'select2:open': function() {
			$('.select2-search__field').attr('placeholder', 'Поиск');
		},
		'select2:close': function() {
			$('.select2-search__field').attr('placeholder', null);
		},
		'select2:select': openEditMessage
	});

	function formatState (state) {
		if (!state.id) { return state.text; }
		// if user have avatar
		var $state = $('<span><img src="img/temporary/user.jpg" alt="">' + state.text + '</span>');
		// else
		// var $state = $('<span><img src="img/user_no_avatar.svg" alt="">' + state.text + '</span>');
		return $state;
	}

	/**
	 * Наблюдатель за редактором, фиксирует дополнительные кнопки (Отправить и Отмена)
	 * вместе с редактором при скроллинге страницы
	 */
	var $redactor = $(".redactor-toolbar");
	if ($redactor.length) {
		var redactorObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				var $this = $(mutation.target);
				console.log($this.css('visibility'));
				if ($this.css('visibility') == 'visible') {
					$('.js-message-send').css('top', $this.css('top'));
					$('.js-message-cancel').css('top', $this.css('top'));
				} else {
					$('.js-message-send').css('top', 0);
					$('.js-message-cancel').css('top', 0);
				}
			});
		});
		redactorObserver.observe($redactor[0], {
			attributes: true
		});
	}
});