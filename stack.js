class Stack {
  constructor(maxSize, ...args) {
    this._maxSize = maxSize;
    this._size = 0;
    for (const arg of args) {
      this.push(arg);
    }
  }
  get size() {
    return this._size;
  }
  get isEmpty() {
    return this._size === 0;
  }
  push(item) {
    if (this._size >= this._maxSize) {
      throw new RangeError("stack overflow");
    }
    this[`_${this._size}`] = item;
    return ++this._size;
  }

  peek() {
    return this[`_${this._size -1}`];
  }

  pop() {
    if(this.isEmpty){
      return;
    }
    const deleted = this[`_${this._size - 1}`];
    delete this[`_${this._size - 1}`];
    this._size--;
    return deleted;
  }
}
const stack = new Stack(3, 2, 3, 4);
console.log(stack);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.push(20));
console.log(stack);
console.log(stack.push(20));
