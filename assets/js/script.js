var swiper = new Swiper(".mySwiperFitur", {
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: false,
  slidesPerView: "auto",
  autoplay: {
    delay: 1200,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiperTesti", {
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 1200,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

const navbar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    navbar.classList.replace("bg-transparent", "nav-color");
  } else if (this.window.scrollY <= 0) {
    navbar.classList.replace("nav-color", "bg-transparent");
  }
});
