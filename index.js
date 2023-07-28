const base = 5;
const power = 7;
const pow = (base, power) => (power === 1 ? base : base * pow(base, power - 1));

// console.log(pow(base,power));
// debugger

const array = [2, 3, 2, 1, [4, 2, 3, [6, 3, 2, [3], 3, 3]]];

const sumOfElements = (array) => {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    if (Array.isArray(array[index])) {
      sum += sumOfElements(array[index]);
    } else {
      sum += array[index];
    }
  }
  return sum;
};
console.log(array);
console.log(sumOfElements(array));
