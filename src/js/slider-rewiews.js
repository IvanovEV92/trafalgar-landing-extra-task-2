import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.min.css';

console.log(Swiper);
// init Swiper:
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoHeight: true, //enable auto height
  slidesPerView: 1,
  speed: 2000,
    autoplay: {
      delay: 5000,
    },
  // If we need pagination
  pagination: {
    type: 'progressbar',
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    snapOnRelease: false,
    hide: true,
  },
});
