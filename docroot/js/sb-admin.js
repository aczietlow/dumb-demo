(function($) {

  var score = 42;
  // Toggle the side navigation
  $("#sidebarToggle").click(function(e) {

    e.preventDefault();

    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
  });


  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
  });

  $(document).on('click', 'a#calculateSentiment', function(event) {
    score = score + 1;
    $('#sentimentScore').html(score);
  });

})(jQuery); // End of use strict
