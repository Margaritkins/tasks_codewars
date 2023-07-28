const array = [10, 2, 3, 5];
let result = 0;
for (let index = 0; index < array.length; index++) {
  result += array[index];
}
// console.log(result);

const getMax = (arr) => {
  let max = 0;
  for (let index = 0; index < arr.length; index++) {
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
const arrayWithDuplNumbers = [1, 2, 3, 1, 5, 6, 1, 2,10, 5];

const sortedNumbers = arrayWithDuplNumbers.sort();
console.log(sortedNumbers);

findDupls = (arr) => {
  let checker = arr[0];
  const arraDupl = [];
  for (let index = 0; index < arr.length; index++) {
    if (checker === arr[index]) {
      arraDupl.push(checker);
      checker = arr[index];
    }
    else if(checker !== arr[index]) {
      checker = arr[index+1];
      
    }
  }
  return arraDupl;
};
console.log(findDupls(sortedNumbers));

// const arrayDuplicates = (arr) => {
//   let checker = [0];
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] === checker) {
//       checker = arr[index];
//     }
//   }
//   return checker;
// };

// console.log(arrayDuplicates(arrayWithDuplNumbers));

// const getAverage = (array) => {
//   let sum = 0;
//   for (let index = 0; index < array.length; index++) {
//     sum += array[index];
//   }
//   return sum / array.length;
// };
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

// const getEvenIndex = (array) => {
//   let even = 0;
//   for (let index = 0; index < array.length; index = index + 2) {
//     even += array[index];
//   }
//   return even;
// };
// console.log(getEvenIndex(array));

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = arr1.concat(arr2);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// arr1.reverse();
// console.log(arr1);
// arr1.reverse();
// console.log(arr1);
// arr1.push(4, 5, 6);
// console.log(arr1);
// arr1.unshift(6, 7, 8);
// console.log(arr1);
// const arr4 = ["aaa", "bbb", "ccc"];
// const arr5 = arr4.pop();
// console.log(arr4);
// console.log(arr5);
// const arr7 = ["ddd", "eee", "ccc"];
// console.log(arr7.shift());
// const arr8 = [1, 2, 3, 4, 5, 6];
// const arr9 = arr8.slice(3, 6);
// console.log(arr8);
// console.log(arr9);
// arr10 = [1, 2, 3, 4, 5];
// console.log(arr10.slice(-2));
// arr11 = [1, 2, 3, 4, 5];
// console.log(arr11);
// const arr12 = arr11.splice(1, 3);
// console.log(arr12);
// arr13 = [1, 2, 3, 4, 5];
// arr13.splice(1, 0, "w", "fr");
// console.log(arr13);
// arr13.splice(-1, 1, "vv", 5, "a");
// console.log(arr13);

// // const getBiger = (num1, num2) => (num1 > num2 ? num1 : num2);

// // const getMinMaxValues = (array) => [Math.min(...array),Math.max(...array)]
// // console.log(getMinMaxValues(array));

// const str = "tO be OR noT To BE";
// const getJadenCase = () => {};
// const newStr = str.split();
// console.log(str);
// const lowerCase = newStr.slice();
// console.log(lowerCase);
// const toLowerCase = lowerCase.join();
// console.log(toLowerCase);
// const newLowerCase = toLowerCase.toLowerCase();
// console.log(newLowerCase);
// const newLowerCaseArr = newLowerCase.split();
// console.log(newLowerCaseArr);
