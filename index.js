const array = [10, 2, 3, 5];
let result = 0;
for (let index = 0; index < array.length; index++) {
  result += array[index];
}
// console.log(result);

const getMax = (arr) => {
  let max = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] > max) {
      max = array[index];
    }
  }
  return max;
};
// console.log(getMax(array));

const getMin = (arr) => {
  let min = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < min) {
      min = arr[index];
    }
  }
  return min;
};
// console.log(getMin(array));

const getAverage = (array) => {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[index];
  }
  return sum / array.length;
};
// console.log(array);
// console.log(getAverage(array));

// const getEvenIndex = (array) => {
//   let even = 0;
//   for (let index = 0; index < array.length; index++) {
//     if (index % 2 === 0) {
//       even += array[index];
//     }
//   }
//   return even;
// };

const getEvenIndex = (array) => {
  let even = 0;
  for (let index = 0; index < array.length; index = index + 2) {
    even += array[index];
  }
  return even;
};
// console.log(getEvenIndex(array));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);
arr1.reverse();
console.log(arr1);
arr1.reverse();
console.log(arr1);
arr1.push(4, 5, 6);
console.log(arr1);
arr1.unshift(6, 7, 8);
console.log(arr1);
const arr4 = ["aaa", "bbb", "ccc"];
const arr5 = arr4.pop();
console.log(arr4);
console.log(arr5);
const arr7 = ["ddd", "eee", "ccc"];
console.log(arr7.shift());
const arr8 = [1,2,3,4,5,6];
const arr9 = arr8.slice(3,6);
console.log(arr8);
console.log(arr9);
arr10 = [1,2,3,4,5];
console.log(arr10.slice(-2));
arr11 = [1,2,3,4,5]
console.log(arr11);
const arr12 = arr11.splice(1,3)
console.log(arr12);
arr13 = [1,2,3,4,5]
arr13.splice(1,0,'w','fr')
console.log(arr13);
arr13.splice(-1,1,'vv',5,'a')
console.log(arr13);
