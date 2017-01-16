$(document).ready(function() {
	$('.js-discussion-remove-demo').on('click', function() {
		$(this).closest('.discussion-body').hide().next().show();
		return false;
	});
	$('.js-discussion-remove-cancel-demo').on('click', function() {
		$(this).closest('.discussion-remove-reason').hide().prev().show();
		return false;
	});
	$('.js-remove-reason-demo').on('click', function() {
		var
			$this = $(this),
			$reason = $(this).closest('.discussion-remove-reason'),
			$done = $reason.next()
			$reasonRadio = $reason.find('input:checked');
		$reason.hide();
		$done.show();
		if ($reasonRadio.length) {
			$done.find('span').text($reasonRadio.parent().text());
		}
		return false;
	});
});