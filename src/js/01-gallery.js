// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryListEl = document.querySelector('.gallery')

const makeGalleryImage = ({ preview, original, description } = {}) => {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
    
  `;
  };

  const galleryCardsArr = galleryItems.map(el => {
    return makeGalleryImage(el);
  });

  const galleryCardsString=galleryCardsArr.join('')

  galleryListEl.insertAdjacentHTML('afterbegin', galleryCardsString);

  const onGalaryClick = (event)=>{
    event.preventDefault()
   
    const lightbox = new SimpleLightbox('.gallery a',{
        captionsData: "alt",
        captionDelay: 250,
        overlayOpacity:0.9,
    } );
   
  }

  galleryListEl.addEventListener('click',onGalaryClick)

