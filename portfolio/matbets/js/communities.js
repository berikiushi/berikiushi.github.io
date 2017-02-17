$(document).ready(function() {
	$(window).on('scroll', fixPlusBtn);
	$(document).on('click', '.js-post-pin', pinPost);
	$(document).on('click', '.js-comments-toggle', toggleComments);

	function fixPlusBtn() {
		var $header = $('.js-header');
		var $footer = $('.js-footer');
		var scrollTop = $(document).scrollTop();
		var windowHeight = window.innerHeight;
		var active = scrollTop > $header.offset().top + 550; // когда кнопка Создать публикацию вне экрана
		var float = scrollTop > $footer.offset().top - windowHeight + 20; // когда кнопка + наезжает на подвал
		
		$('.js-plus-pub').toggleClass('active', active);
		$('.js-plus-pub').toggleClass('float', float);
	}

	function pinPost(e) {
		e.preventDefault();
		var $this = $(this);

		if ($this.hasClass('icon-pin')) {
			$this.removeClass('icon-pin');
			$this.addClass('icon-pin-pinned');
		} else {
			$this.removeClass('icon-pin-pinned');
			$this.addClass('icon-pin');
		}

		$(this).toggleClass('active');
	}

	function toggleComments(e) {
		e.preventDefault();

		var $comments = $(this).closest('.js-comments');
		var $commentsBody = $comments.find('.js-comments-body');

		$(this).toggleClass('active');
		$commentsBody.toggle();
	}


	// Remove Publications
	$(document).on('click', '.js-post-remove', removePost);
	$(document).on('click', '.js-post-remove-cancel', removePost);
	$(document).on('submit', '.js-post-remove-form', removeFormSubmit);

	function removePost(e) {
		e.preventDefault();

		var $post = $(this).closest('.post-list-item');
		var $postHeader = $post.find('.post-header');

		if ($post.hasClass('is-remove-reason')) {
			$postHeader.find('.post-image').css({opacity: 1});
			$postHeader.find('.post-author, .post-date, .post-name').css({color: 'inherit'});
			$post.find('.post-body, .post-remove').show();
			$post.find('.post-remove-reasons, .post-remove-cancel').hide();
		} else {
			$postHeader.find('.post-image').css({opacity: .3});
			$postHeader.find('.post-author, .post-date, .post-name').css({color: '#ccc'});
			$post.find('.post-body, .post-remove').hide();
			$post.find('.post-remove-reasons, .post-remove-cancel').show();
		}

		$post.toggleClass('is-remove-reason');
	}

	function removeFormSubmit(e) {
		e.preventDefault();

		var inputSelected = false;
		var $post = $(this).closest('.post-list-item');

		$('.js-post-remove-form input[type="radio"]').each(function() {
			if ($(this).is(":checked")) {
				inputSelected = true;
				$post.find('.post-removed span').text( $(this).parent().text() );
			}
		});

		if (inputSelected == false) {
			alert('Please select a reason');
			return false;
		}

		$post.find('.post-remove-reasons, .post-remove-cancel').hide();
		$post.find('.post-removed').show();
	}

});