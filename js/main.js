$(document).ready(function () {
  // Preloader Start
  $(window).on("load", function () {
    $("#preloader").fadeOut(1000);
  });

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
    $("html, body").animate({ scrollTop: 0 }, 1500);
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
    nextArrow: "<i class='fas fa-long-arrow-alt-right service-next'></i>",
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
    centerPadding: "0",
    prevArrow: "<i class='fas fa-angle-left blog-prev'></i>",
    nextArrow: "<i class='fas fa-angle-right blog-next'></i>",
  });
  // Progress Bar
  $(".ps-bar").rProgressbar({
    percentage: 90,
    fillBackgroundColor: "#2A4896",
  });
  $(".ai-bar").rProgressbar({
    percentage: 85,
    fillBackgroundColor: "#392960",
  });
  $(".dw-bar").rProgressbar({
    percentage: 75,
    fillBackgroundColor: "#344A1F",
  });

  $(".ae-bar").rProgressbar({
    percentage: 80,
    fillBackgroundColor: "#2A4896",
  });

  // Animated Headline
  $(".animated-text-container").animatedHeadline({
    animationType: "clip",
    animationDelay: 2500,
    barAnimationDelay: 3800,
    barWaiting: 800,
    lettersDelay: 50,
    typeLettersDelay: 150,
    selectionDuration: 500,
    typeAnimationDelay: 1300,
    revealDuration: 600,
    revealAnimationDelay: 1500,
  });
  // Smooth Scroll
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
  });
  // Wow JS
  new WOW().init();
  // Venobox JS
  $(".intro-video").venobox();
  $(".venobox").venobox({
    framewidth: "350px",
    frameheight: "420px",
    closeColor: "#ffc712",
  });
});
