import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

(() => {
  let gallerySL = new SimpleLightbox('.clients__gallery a', { captionsData: 'alt', captionDelay: 250 });
})();