import Swiper, {Pagination } from 'swiper';;
import "swiper/swiper-bundle.min.css";


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

