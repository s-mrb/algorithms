/*
Algo:
2 stacks

- each time u push in mainStack, add element in minStack too
- if current element being pushed in mainStack is < top of minStack then push new one in minStack
- else push top of minStack over it again

- each time u pop from mainStack, do a pop from minStack too.

THAT's IT
*/

const MinStack = function() {
    this.minStack = [];
    this.stack = [];
};

MinStack.prototype.push = function (x) {
  if (!this.stack.length) {
    this.minStack.push(x);
  } else {
    if (x < this.minStack[this.minStack.length - 1]) {
      this.minStack.push(x);
    } else {
      this.minStack.push(this.minStack[this.minStack.length - 1]);
    }
  }
  this.stack.push(x);
};

MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

MinStack.prototype.top = function () {
  let top = this.stack[this.stack.length - 1];
  return top;
};

MinStack.prototype.getMin = function () {
  let min = this.minStack[this.minStack.length - 1];
  return min;
};

var n = new MinStack()
n.push(3)
n.push(2)
// n.push(2)
console.log(n.minStack)
console.log(n.getMin())
// n.push(1)
console.log(n.getMin())
n.pop()
console.log(n.getMin())
