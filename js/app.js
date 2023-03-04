const sliderMain = new Swiper(".slider_main", {
  // Optional parameters
  // without cssMode: true - swiper do not work
  // cssMode: true,
  // freeMode: true,
  // speed: 1000,
  centeredSlides: true,
  // centeredSlidesBounds: true,
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

const sliderBg = new Swiper(".slider_bg", {
  // Optional parameters
  // cssMode: true,
  centeredSlides: true,
  parallax: true,
  spaceBetween: 60,
  slidesPerView: 3.5,
});

//responsible for the background slider movement
sliderMain.controller.control = sliderBg;

// document.querySelectorAll(".slider_item").forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("activated");
//   });
// });

// clicking functionality with checking if the other items have the class "activated":

let clickMe = document.querySelectorAll(".slider_item");

const handleClick = (e) => {
  e.preventDefault();
  clickMe.forEach((item) => {
    if (e.currentTarget !== item) item.classList.remove("activated");
    else if (e.currentTarget.classList.contains("activated"))
      e.currentTarget.classList.remove("activated");
    else e.currentTarget.classList.add("activated");
  });
};

clickMe.forEach((item) => {
  item.addEventListener("click", handleClick);
});

let desc = document.querySelector(".description");

sliderMain.on("slideChange", (e) => {
  sliderMain.activeIndex > 0
    ? desc.classList.add("hidden")
    : desc.classList.remove("hidden");
});
