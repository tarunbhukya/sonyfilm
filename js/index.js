$("#services-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#sy-services").offset().top
    }, 1500);
});

$(function () {
  $(document).scroll(function () {
	  var $nav = $(".sy-nav");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});
