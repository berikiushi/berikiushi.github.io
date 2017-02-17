$(document).ready(function() {
	$('.js-review-remove-demo').on('click', function() {
		$(this).closest('.review-body').hide().next().show();
		return false;
	});
	$('.js-review-remove-cancel-demo').on('click', function() {
		$(this).closest('.review-remove-reason').hide().prev().show();
		return false;
	});
	$('.js-remove-reason-demo').on('click', function() {
		var
			$this = $(this),
			$reason = $(this).closest('.review-remove-reason'),
			$done = $reason.next()
			$reasonRadio = $reason.find('input:checked');
		$reason.hide();
		$done.show();
		if ($reasonRadio.length) {
			$done.find('span').text($reasonRadio.parent().text());
		}
		return false;
	});
	$('.js-review-answer-demo').on('click', function(e) {
		$(this).prev().show().find('textarea').text('Имя Фамилия, ').focus();
		return false;
	});
	$('.review-answer .textarea').on('click', function(e) {
		e.stopPropagation();
	});
	$(document).on('click', function() {
		$('.review-answer form').hide();
	});
});