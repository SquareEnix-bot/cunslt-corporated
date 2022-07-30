import { galleryItems } from './galleryItems';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// ! тимчасове рішення бо не зрозуміло що з шляхами 

// const gallery = document.querySelector('.clienst__gallery');

// // * функція створення розмітки
// function createImageMarkup({ preview, original, description }) {
//   return `<a class="gallery__item" href="${original}">
//             <img class="gallery__image" src="${preview}"/>
//           </a>
//           `
// };

// // * створюється розмітка всієї галерея
// const createGalleryMarkup = galleryItems
//   .map(createImageMarkup)
//   .join('');

// // * додається розмітка галереї на сторінку в головний div.gallery
// gallery.insertAdjacentHTML("beforeend", createGalleryMarkup);

let gallerySL = new SimpleLightbox('.clienst__gallery a', { captionsData: 'alt', captionDelay: 250});
