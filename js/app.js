(function($) {
	function closeModal(modal) {
		$('body').removeClass('no-scroll');
		modal.removeClass('modal-open');
	}
 
	$('.modal-link').on('click', function() {
		$('body').addClass('no-scroll');
  		$('#' + $(this).data('reveal-id')).addClass('modal-open')
	})

	$('.modal-close').click(function() {
		closeModal($(this).parents('.modal-container'))
	})

	$('.modal-container').click(function(ev) {
		if(!$.contains($(this).find('section').get(0), ev.target)) {
			closeModal($(this))
		}

	})
	$(document).foundation();
})(jQuery)

