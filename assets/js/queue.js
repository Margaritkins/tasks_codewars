class IteratorQueue {
  constructor(queue) {
    this.queue = queue;
    // this.curentElem = null;
    this.currentElemIndex = 0;
  }
  next() {
    const currentElem = this.queue[this.currentElemIndex];
    if (currentElem) {
      this.currentElemIndex++;}
    return {
      value: currentElem,
      done: !currentElem
    };
  }
}

class Queue {
  constructor(...args) {
    this._head = 0;
    this._tail = 0;
    for (const arg of args) {
      this.en(arg);
    }
  }
  get size() {
    return this._tail - this._head;
  }

  [Symbol.iterator]() {
    return new IteratorQueue(this);
  }
  en(value) {
    this[`${this._tail}`] = value;
    // console.log(this[`${this._tail}`]);
    this._tail++;
    return this.size;
  }
  de() {
    const delItem = this[`${this._head}`];
    delete this[`${this._head}`];
    this._head++;
    return delItem;
  }
  peek() {
    return this[`${this._head}`];
  }
}
const queue1 = new Queue("asd", "true", "aaa", "ttt");

// console.log(queue1);

// console.log(...queue1);

// console.log(queue1);
const queue2 = new Queue(4, 5, 6, 2, 5, 8, 5, 8);
const queue = new Queue(4, 5, "tyu");
const mergeQueue = (queue1, queue2) => {
  const queue3 = new Queue();
  while (queue1.size || queue2.size) {
    if (queue1.size) {
      queue3.en(queue1.de());
    }
    if (queue2.size) {
      queue3.en(queue2.de());
    }
  }
  return queue3;
};

// console.log(queue1.de());

// for (const item of queue1) {
//   console.log(item);
// }

// console.log(...queue2);
// console.log(itereatedQueue(queue1));
// console.log(queue1.de());
// console.log(queue1.de());
// console.log(queue1.de());
// console.log(mergeQueue(queue1, queue2));
