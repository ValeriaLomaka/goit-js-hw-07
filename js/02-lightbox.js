import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector(".gallery");
const createPhotosMarkup = galleryItems
  .map(({ original, preview, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
  }).join("");

const photosMarkup = createPhotosMarkup;
gallery.insertAdjacentHTML("beforeend", photosMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
captionsData: "alt",
captionDelay: 250,
captionPosition: "bottom",
});


