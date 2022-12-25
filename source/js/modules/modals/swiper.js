import Swiper, {Navigation} from 'swiper';

// init Swiper:
const coachesSwiper = new Swiper('.coaches__slider', {
  // configure Swiper to use modules
  modules: [Navigation],
  slidesPerView: 4,
  slidesPerGroup: 1,
  observer: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    autoHeight: true,
  },
});

const feedbackSwiper = new Swiper('.feedback__swiper', {
  modules: [Navigation],
  observer: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  infinite: false,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      spaceBetween: 30,
    },
    1200: {
      spaceBetween: 40,
    },
  },
});
