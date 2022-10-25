export function viewPhotoInFullSize (photo) {
  document.querySelector('.big-picture__img').querySelector('img').src = photo.url;
  document.querySelector('.likes-count').textContent = photo.likes;
  document.querySelector('.comments-count').textContent = photo.comments.length;
  document.querySelector('.social__caption').textContent = photo.description;
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.querySelector('.big-picture').classList.remove('hidden');
}

export function closeFullSizePhoto() {
  const classBigPicture = document.querySelector('.big-picture');
  if (!classBigPicture.classList.contains('hidden')) {
    classBigPicture.classList.add('hidden');
  }
}

/* Логика заключается в том, чтобы клонировать один комментарий (т.к он всегда есть).
Далее мы не знаем, сколько комментариев есть (не будем пользоваться тем, что кол-во константа)
и удаляем все, которые имеются. Затем создаем столько комментариев, сколько под фото и редактируем
их.
*/

export function createComments (comments) {
  let clone = document.querySelector('.social__comment').cloneNode(true);
  deleteComments();
  for (let i = 0; i <= comments.length - 1; i++) {
    const classImg = clone.querySelector('img');
    classImg.src = comments[i].avatar;
    classImg.alt = comments[i].name;
    clone.querySelector('.social__text').textContent = comments[i].message;
    document.querySelector('.social__comments').appendChild(clone);
    clone = document.querySelector('.social__comment').cloneNode(true);
  }
}

function deleteComments () {
  const arrOfCom = document.querySelectorAll('.social__comment');
  for (let i = 0; i <= arrOfCom.length - 1; i++) {
    document.querySelector('.social__comment').remove();
  }
}
