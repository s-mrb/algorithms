/*
Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list,
and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
*/

/*
Algo:

last_index = length of array-1

while last_index element is 9 and last_index!=0:
    update last_index element to 0
    last_index = last_index-1

if element at last index is 9 and last index is 0:
        update last_index element to 0
        unshift array with 1
        return
return arr[last_index] = arr[last_index]+1
*/


/*
Runtime: 100 ms, faster than 7.96% of JavaScript online submissions for Plus One.
Memory Usage: 38.3 MB, less than 96.93% of JavaScript online submissions for Plus One.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let index2incr = digits.length - 1
  while (digits[index2incr] == 9 && index2incr) {
    digits[index2incr] = 0
    index2incr--
  }
  if (index2incr == 0 && digits[index2incr] == 9) {
    digits[index2incr] = 0
    digits.unshift(1)
    return digits
  }
  digits[index2incr]++
  return digits
}

// test
let digits = [9]
console.log(plusOne(digits))
