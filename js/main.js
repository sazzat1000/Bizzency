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

  // Service Slider
  $(".service-slider").slick({
    // autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: false,
    prevArrow: "<i class='fas fa-long-arrow-alt-left service-prev'></i>",
    nextArrow: "<i class='fas fa-long-arrow-alt-right service-next'></i>"
  });

  // Portfolio Slider 
  $(".portfolio-slider").slick({
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: false,
    prevArrow: "<i class='fas fa-angle-left portfolio-prev'></i>",
    nextArrow: "<i class='fas fa-angle-right portfolio-next'></i>",
  });
  
  // Testimonial Slider 
  $(".testimonial-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2,
    draggable: false,
    prevArrow: "<i class='fas fa-angle-left testimonial-prev'></i>",
    nextArrow: "<i class='fas fa-angle-right testimonial-next'></i>",
  });

  // Blog Slider 
  $(".blog-slider").slick({
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: false,
    centerPadding: '0',
    prevArrow: "<i class='fas fa-angle-left blog-prev'></i>",
    nextArrow: "<i class='fas fa-angle-right blog-next'></i>",
  });
});
