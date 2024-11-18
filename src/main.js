
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";




import { loadPhoto } from './js/pixabay-api'

import { renderPhoto, clearList } from './js/render-functions'

const inputSearch = document.querySelector('.inputSearch');
const btnSearch = document.querySelector('.btnSearch');
const loadingText = document.querySelector('.loading-text');
const searchForm = document.querySelector('.search-form');


searchForm.addEventListener('submit', getInfo);


function getInfo(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchStr = formData.get('inputSearch').trim();
    
    if (!searchStr) {
        iziToast.warning({
            title: 'Caution',
            message: 'You forgot to write search. Please try again!',
            position: 'topRight',
        });
        return
    }

    console.log(searchStr);
    clearInput();
    clearList();

    showLoad();

    loadPhoto(searchStr)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        })
        .then(data => {

            hideLoad();
            
            if (data.hits.length === 0) {
                iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                });
                return
            }

            renderPhoto(data);
            const lightbox = new SimpleLightbox('.list a', {
            captionDelay: 250,  
            captionData: 'alt',
    nav: true,
});


        })
        .catch(error => {
            hideLoad();
            console.log('error', error);
            iziToast.error({
                title: 'Error',
                message: 'Something go wrong. Please try again!',
                position: 'topRight',
                });
                return
        })
}

function showLoad() {
    loadingText.innerHTML = 'Loading images, please wait...';
}

function hideLoad() {
    loadingText.innerHTML = '';
}


function clearInput() {
    inputSearch.value = '';

}

















