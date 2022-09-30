// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simpleLightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const createMarkup = createItemMarkup(galleryItems);

galleryList.insertAdjacentHTML('beforeend', createMarkup);

galleryList.addEventListener('click', galleryItemClick);

function createItemMarkup (items) {

    return items.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item"
         href="${original}">
          <img class="gallery__image"
           src="${preview}"
            alt="${description}" />
        </a>`;
    })
    .join('');

};

function galleryItemClick(evt) {
    evt.preventDefault();

};

var lightbox = new SimpleLightbox('.gallery a', { 
   
    captionDelay: 250,
    captionsData: 'alt',
   
 });