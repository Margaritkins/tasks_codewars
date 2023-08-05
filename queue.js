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
  en(value) {
    this[`${this._tail}`] = value;
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

const queue = new Queue(4, 5, "tyu");
// console.log(queue);
// console.log(queue.en(678));
// console.log(queue.de());

//task

const queue1 = new Queue("asd", "true", "aaa");
const queue2 = new Queue(4, 5, 6, 2, 5, 8, 5, 8);

const mergeQueue = (queue1, queue2) => {
  const queue3 = new Queue();
  let index
  while (queue1.size !== 0 || queue2.size !== 0) {
    index++
    if (queue1.size !== 0) {
      queue3.en(queue1.de());
    }
    if (queue2.size !== 0) {
      
      queue3.en(queue2.de());
    }
  }
  return queue3;
};

console.log(mergeQueue(queue1, queue2));
