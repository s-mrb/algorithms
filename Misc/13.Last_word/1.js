/*
Given a string s consisting of some words separated by some number of spaces,
return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
*/

/*
Runtime: 103 ms, faster than 6.78% of JavaScript online submissions for Length of Last Word.
Memory Usage: 37.9 MB, less than 99.81% of JavaScript online submissions for Length of Last Word.
*/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
  let arr = s.trim().split(' ')
  return arr[arr.length - 1].length
  // return arr.splice(arr.length-1)[0].length
}

let s = 'Hello World'

console.log(lengthOfLastWord(s))
