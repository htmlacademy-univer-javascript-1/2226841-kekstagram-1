export function viewPhotoInFullSize (photo) {
  document.querySelector('.big-picture__img').src = photo.url;
  document.querySelector('.likes-count').textContent = photo.likes;
  document.querySelector('.comments-count').textContent = photo.comments.length;
  document.querySelector('.big-picture').classList.remove('hidden');
}

