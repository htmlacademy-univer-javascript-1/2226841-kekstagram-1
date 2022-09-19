function getRandomDigit(from, to) {
  if (from >= to) {
    throw new Error('The value from cannot exceed or equal the value to');
  }
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function isStringFit(str, maxLength) {
  return maxLength >= str.length;
}
getRandomDigit(1,0);
isStringFit('Hey!', 10);
