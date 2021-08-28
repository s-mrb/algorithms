/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

/*
Algo:

- make map from char to int, assign each pair of brack a number, e.g. let ( and ) be called just 1
- whenever u see ( in str, add 1 on stack
- whenever u see ) in str, remove 1 from top of stack

- do same for every symbol
- at the end check if stack is empty or not

Problem with current algo:
"((" will pass

Solution:
( and ) must have different ints and int value for closing can be calculated by that of opening symbol

NOTE:

Don't use:
let char2int = { '(': 1, ')': 2, '{': 3, '}': 4, '[': 5, ']': 6 }

as if in stack u have 2 then for {, 3-1==2 and hence match!! 

*/


/*
Runtime: 76 ms, faster than 60.10% of JavaScript online submissions for Valid Parentheses.
Memory Usage: 40.8 MB, less than 14.09% of JavaScript online submissions for Valid Parentheses.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let len = s.length
  if (s <= 0 || len > 10000) {
    return false
  }
  let stack = []
  let char2int = { '(': 1, ')': 2, '{': 10, '}': 11, '[': 20, ']': 21 }
  for (let i = 0; i < len; i++) {
    if (char2int[s[i]] != (stack.slice(-1))[0]+1) {
      stack.push(char2int[s[i]])
      continue
    }
    stack.pop()
  }
  console.log(stack)
  if (stack.length) {
    return false
  }
  return true
}


