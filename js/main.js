import './data.js';
import './rendering.js';
import './img_upload.js';
import { showAlert } from './util.js';
import { getData } from './api.js';
import { render } from './rendering.js';
getData((photos) => {render(photos);}, () => {
  showAlert('Не удалось загрузить данные. Попробуйте перезагрузить страницу', 5000);
});
