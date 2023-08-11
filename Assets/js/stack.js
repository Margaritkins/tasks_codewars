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
    return this[`_${this._size - 1}`];
  }

  pop() {
    if (this.isEmpty) {
      return "underflow";
    }
    const deleted = this[`_${this._size - 1}`];
    delete this[`_${this._size - 1}`];
    this._size--;
    return deleted;
  }
}

const options = {
  brackets: {
    "(": ")",
    "{": "}",
    "[": "]",
    "<": ">",
  },
};

const string = "<(2+2)*(3-4)>";

/**
 *
 * @param {string} str
 * @param {object} options
 * @param {object} options.brackets
 * @returns {boolean}
 */
const checkSequence = (str, options) => {
  let stack = new Stack(str.length);
  for (const item of str) {
    if (Object.keys(options.brackets).includes(item)) {
      stack.push(item);
      continue;
    }
    // if (stack.isEmpty) {
    //   return false;
    // }
    if (item === options.brackets[stack.peek()]) {
      stack.pop();
    } else if (
      Object.keys(options.brackets).includes(item) ||
      Object.values(options.brackets).includes(item)
    ) {
      return false;
    }
  }
  return stack.isEmpty;
};

// console.log(checkSequence(string, options));
