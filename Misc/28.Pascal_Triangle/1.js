/*
Given an integer numRows, return the first numRows of Pascal's triangle.

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/

/*
Algo:

make a 2D array, each array initialized with 1
    start with i=1 upto i=n, and make array of size i and push in 2D array

*/

/*
Runtime: 64 ms, faster than 94.78% of JavaScript online submissions for Pascal's Triangle.
Memory Usage: 38.7 MB, less than 44.36% of JavaScript online submissions for Pascal's Triangle.

Runtime: 64 ms, faster than 94.78% of JavaScript online submissions for Pascal's Triangle.
Memory Usage: 38.6 MB, less than 77.20% of JavaScript online submissions for Pascal's Triangle.

Runtime: 60 ms, faster than 98.82% of JavaScript online submissions for Pascal's Triangle.
Memory Usage: 38.8 MB, less than 28.46% of JavaScript online submissions for Pascal's Triangle.
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let arr = []
  for (let i = 0; i < numRows; i++) {
    arr[i] = []
    arr[i][0] = 1
    for (let j = 1; j < i; j++) {
      arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
    }
    arr[i][i] = 1
  }
  return arr
}

console.log(generate(15))
