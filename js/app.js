const sliderMain = new Swiper(".slider_main", {
  // Optional parameters
  // without cssMode: true - swiper do not work
  cssMode: true,
  freeMode: true,
  centeredSlides: true,
  mousewheel: true,
  parallax: true,
  // slidesPerView: 3.5,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 3.5,
      spaceBetween: 60,
    },
  },
});
