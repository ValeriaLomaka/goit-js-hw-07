import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector(".gallery");
const createPhotosMarkup = galleryItems
  .map(({ original, preview ,description}) => {
    return `<li class="gallery__item">
               <a class="gallery__link" href="${original}">
               <img
               class="gallery__image"
               src="${preview}"
               data-source="${original}"
               alt="${description}"
               />
              </a>
              </li>`; }).join("");

const photosMarkup = createPhotosMarkup;
gallery.insertAdjacentHTML("beforeend", photosMarkup);
gallery.addEventListener("click", onImageClick);

function onImageClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">`);
    instance.show();

    gallery.addEventListener('keydown', e => {
        if (e.code === "Escape" ||
            e.code === "Space" ||
            e.code === "Enter") {
          instance.close();
        }
    })  
}
