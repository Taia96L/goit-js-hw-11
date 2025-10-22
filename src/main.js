import iziToast from 'izitoast';
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, hideLoader, clearGallery, showLoader } from './js/render-functions';

export const form = document.querySelector('.form');

form.addEventListener('submit', handlerSubmit);
hideLoader();

function handlerSubmit(event) {
  event.preventDefault();
  clearGallery();

  const query = event.target.elements['search-text'].value.trim();

  if (query === '') {
    iziToast.error(fillText());
    return;
  }

  // ✅ Показуємо лоадер перед початком запиту
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.length === 0) {
        iziToast.info(infoText());
        return;
      }

      createGallery(data);
    })
    .catch(error => {
      iziToast.error(errorText(error));
    })
    .finally(() => {
      // ✅ Ховаємо лоадер після завершення запиту
      hideLoader();
      form.reset();
    });
}

function errorText(error) {
  return {
    title: 'Error',
    message: `Oops.. something goes wrong, error : ${error.status} !`,
    position: 'center',
    timeout: 5000,
    progressBar: false,
    close: false,
    icon: '',
    messageColor: 'white',
    titleColor: 'white',
  };
}

function infoText() {
  return {
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'center',
    timeout: 5000,
    progressBar: false,
    close: false,
    icon: '',
    messageColor: 'white',
  };
}

function fillText() {
  return {
    message: 'Sorry, you need to fill search query',
    position: 'topRight',
    timeout: 5000,
    progressBar: false,
    close: false,
    icon: '',
    messageColor: 'white',
  };
}
