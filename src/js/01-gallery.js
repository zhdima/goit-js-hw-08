// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

function createGalleryMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) =>
    `<li>
      <a class="gallery__item" href="${original}">
        <img 
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`).join('');  
}

function doTask01() {

  const gallery = document.querySelector('.gallery');
 
  if (!gallery) {
    console.log('Error: invalid markup!');
    return;
  }

  gallery.innerHTML = createGalleryMarkup(galleryItems); 

  const opts = {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  };

  const lightbox = new SimpleLightbox('.gallery .gallery__item', opts);
}

doTask01();
