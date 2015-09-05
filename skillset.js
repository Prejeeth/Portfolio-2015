var hasAnimated = false;

    function isScrolledIntoView(elem) {
      var $elem = $(elem);
      var $window = $(window);

      var docViewTop = $window.scrollTop();
      var docViewBottom = docViewTop + $window.height();

      var elemTop = $elem.offset().top - ($elem.height() / 2);
      var elemBottom = elemTop + $elem.height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function animateSkills() {
        jQuery('.skillbar').each(function() {
      jQuery(this).find('.skillbar-bar').animate({
        width: jQuery(this).attr('data-percent')
      }, 2000);
    });
    }

    $(window).scroll(function() {
      if(isScrolledIntoView($('#skills-container')) && !hasAnimated) {
        animateSkills()
      }
    })