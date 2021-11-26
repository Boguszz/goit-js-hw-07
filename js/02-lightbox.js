import { galleryItems } from "./gallery-items.js";

const galleryRefs = document.querySelector(".gallery");

(function createMarkup() {
  const itemMarkup = galleryItems
    .map(({ original, preview, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    `;
    })
    .join("");
  galleryRefs.insertAdjacentHTML("beforeend", itemMarkup);
})();

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
