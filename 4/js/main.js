function getRandomDigit(from, to) {
  if (from === to) {return from;}
  if (from > to) {
    throw new Error('The value from cannot exceed or equal the value to');
  }
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function isStringFit(str, maxLength) {
  return maxLength >= str.length;
}

isStringFit('Hey!', 10);

const NUM_OF_COMMENTS = 3;
const ARR_OF_ID_FOR_PHOTO = Array.from({length: 25}, (_v, k) => k+1);
const ARR_OF_I_FOR_URL = Array.from({length: 25}, (_v, k) => k+1);
const DESCRIPTIONS = [
  'Я, снова я и опять я',
  'Типичный я',
  'Остаюсь верен традициям – воскресное селфи',
  'Рождена, чтобы блистать',
  'Разве можно быть счастливее?',
  'Я так классно одеваюсь, только чтобы впечатлить одного единственного человека, – себя',
  'Сначала мы работали тяжело, а потом стали работать еще тяжелее',
  'Было непросто, но оно того стоило',
  'Хейтеры – мощный мотиватор',
  'Разве не потрясающе?',
  'Угадайте, где я',
  'Не сижу на месте',
  'Можно вычеркнуть эту страну из списка',
  'Нечего добавить',
  'Моя жизнь – мои правила'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Ростислав',
  'Владислав',
  'Дмитрий',
  'Семён',
  'Таина',
  'Даниил',
  'Иван',
  'Андрей',
  'Михаил',
  'Алексей',
  'Виталий',
  'Светлана',
  'Анастасия',
  'София',
  'Полина'
];

function getRandomElementNotRep(array) {
  const newElement = getRandomElement(array);
  array.splice(array.indexOf(newElement), 1);
  return newElement;
}

function getRandomElement(array) {
  return array[getRandomDigit(0, array.length - 1)];
}

const createComment = () => ({
  id: getRandomDigit(0, 5000000),
  avatar: `img/avatar-${getRandomDigit(1, 6)}.svg`,
  message: getRandomElement(COMMENTS),
  name: getRandomElement(NAMES)
});

const createPhoto = () => ({
  id: getRandomElementNotRep(ARR_OF_ID_FOR_PHOTO),
  url: `photos/${getRandomElementNotRep(ARR_OF_I_FOR_URL)}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomDigit(15, 200),
  comments: Array.from({length: NUM_OF_COMMENTS}, createComment)
});

Array.from({length: 25}, createPhoto);
