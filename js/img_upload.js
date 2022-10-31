import {isEscapeKey} from './util.js';

const classImgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const inputForHashtags = document.querySelector('.text__hashtags');
const inputForDescription = document.querySelector('.text__description');
openForm();

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
};

const inputInFocus = () => {
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const inputInBlur = () => {
  document.addEventListener('keydown', onPopupEscKeydown);
};

function openForm() {
  uploadFile.addEventListener('change', () => {
    classImgUploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');
    document.addEventListener('keydown', onPopupEscKeydown);
    document.querySelector('#upload-cancel').addEventListener('click', closeForm);
    inputForHashtags.addEventListener('focus', inputInFocus);
    inputForDescription.addEventListener('focus', inputInFocus);
    inputForHashtags.addEventListener('blur', inputInBlur);
    inputForDescription.addEventListener('blur', inputInBlur);
  });
}

function closeForm() {
  classImgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  inputForHashtags.removeEventListener('focus', inputInFocus);
  inputForDescription.removeEventListener('focus', inputInFocus);
  inputForHashtags.removeEventListener('blur', inputInBlur);
  inputForDescription.removeEventListener('blur', inputInBlur);
  // eslint-disable-next-line no-return-assign
  document.querySelectorAll('input, textarea').forEach((el)=>el.value = '');
}

const pristine = new Pristine(uploadFile);


pristine.addValidator(inputForHashtags, (value) => {
  const arrOfHashtags = value.split(' ').map((v) => v.toLowerCase());
  const duplicates = arrOfHashtags.filter((number, index, numbers) => numbers.indexOf(number) !== index);
  return duplicates.length > 0;
}, 'Something Wrong');

const valid = pristine.validate();
