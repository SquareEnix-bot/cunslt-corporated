import Swiper, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],

  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

// const swiper_box1 = new Swiper('.swiper__box', {
//   modules: [Pagination],

//   direction: 'horizontal',
//   loop: true,

//   pagination: {
//     el: '.swiper__box-pagination',
//     type: 'bullets',
//     clickable: true,
//   },
// });

const swiper_box = new Swiper('.swiper__box', {
  // Optional parameters
  modules: [Pagination],

  direction: 'horizontal',

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper__box-pagination',
    type: 'bullets',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
