let menu = document.querySelector('#menu_btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

var swiper = new Swiper(".swiper_video", {
    slidesPerView: 2,
    spaceBetween: 15,

    breakpoints: {
      769: {
        slidesPerView: 3,
        spaceBetween: 10,
      }
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  var swiper = new Swiper(".results_container", {
    slidesPerView: 1,
    spaceBetween: 10,

    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: 40,
      }
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
  });