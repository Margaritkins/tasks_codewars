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
// console.log(getSumOfAllElements(array));

class Worker {
  constructor(firstName, lastName, rate, daysWorked = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.rate = rate;
    this.daysWorked = daysWorked;
  }
  getSalary(rate, days) {
    return this.rate * this.daysWorked;
  }
  static amountWorkers = 0;
  static createWorkerTest(){
    return new Worker(firstName, lastName, rate, daysWorked = 0);
  }
}
const worker1 = new Worker("Bruse", "Lee", 50, 20);
// console.log(worker1);
// console.log(worker1.getSalary(50, 20));
