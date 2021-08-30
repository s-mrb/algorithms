/*
Algo:
1 stack and two nums

- min_num -> stores current_minimum
- min_degree -> stores how many occurances of min_num are there in stack
- update min only when on pop min_degree becomes 0
- each time the popped element is similar to min_num, reduce min_degree

*/

/*
Runtime: 127 ms, faster than 46.19% of JavaScript online submissions for Min Stack.
Memory Usage: 46.3 MB, less than 50.64% of JavaScript online submissions for Min Stack.
*/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.min = Number.POSITIVE_INFINITY
  this.min_degree = 0
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val)
  if (this.min > val) {
    this.min = val
    this.min_degree = 1
  } else if (this.min == val) {
    this.min_degree = this.min_degree + 1
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.min == this.stack.pop()) {
    this.min_degree = Math.max(this.min_degree - 1, 0)
    if (this.min_degree == 0) {
      this.min = Number.POSITIVE_INFINITY
      for (var i = 0; i < this.stack.length; i++) {
        if (this.stack[i] < this.min) {
          this.min = this.stack[i]
          this.min_degree = 1
        } else if (this.stack[i] == this.min) {
          this.min_degree = this.min_degree + 1
        }
      }
    }
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min
}
