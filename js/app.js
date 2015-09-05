(function($) {
	function closeModal(modal) {
		$('body').removeClass('no-scroll');
		modal.removeClass('modal-open');
	}
 
	$('#modal-1-link').on('click', function() {
		$('body').addClass('no-scroll');
  		$('#modal-1').addClass('modal-open')
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

