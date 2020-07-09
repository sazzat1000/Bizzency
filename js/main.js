$(document).ready(function () {
  // Sticky Nav
  
  var menu_top_offset = $("nav").offset().top;

  $(window).on("scroll", function () {
    var scrollSize = $(window).scrollTop();

    if (scrollSize > menu_top_offset) {
      $("nav").addClass("sticky-nav");
    } else {
      $("nav").removeClass("sticky-nav");
    }
  });

  // Back to Top Button

  $(".footer-icon").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
});
