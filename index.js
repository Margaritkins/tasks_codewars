const array = [2, 3, 2, 1, [4, 2, 3, [6, 3, 2, [3], 3, 3]]];
const getSumOfAllElements = (array) => {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    if (Array.isArray(array[index])) {
      sum += getSumOfAllElements(array[index]);
    } else {
      sum += array[index];
    }
  }
  return sum;
};
console.log(getSumOfAllElements(array));
