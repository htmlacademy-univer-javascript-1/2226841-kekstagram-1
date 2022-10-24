import {createArrOfPhoto} from './data.js';
import {viewPhotoInFullSize} from './bigrendering.js';
const photoListElement = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

export const photos = createArrOfPhoto ();

const photoListFragment = document.createDocumentFragment();

photos.forEach(({url, likes, comments}) => {
  const photoElement = photoTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;
  photoListFragment.appendChild(photoElement);
});

photoListElement.appendChild(photoListFragment);
const arr = document.querySelectorAll('.pictures');
for (let i = 0; i <= arr.length-1; i++) {
  arr[i].addEventListener('click', () => {
    viewPhotoInFullSize(photos[i]);
  });
}

