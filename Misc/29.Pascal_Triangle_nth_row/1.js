/*
Runtime: 72 ms, faster than 70.51% of JavaScript online submissions for Pascal's Triangle II.
Memory Usage: 38.8 MB, less than 62.14% of JavaScript online submissions for Pascal's Triangle II.

Runtime: 68 ms, faster than 86.73% of JavaScript online submissions for Pascal's Triangle II.
Memory Usage: 38.6 MB, less than 88.67% of JavaScript online submissions for Pascal's Triangle II.

Runtime: 56 ms, faster than 99.90% of JavaScript online submissions for Pascal's Triangle II.
Memory Usage: 38.7 MB, less than 73.27% of JavaScript online submissions for Pascal's Triangle II.
*/


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    
    var arr = !rowIndex?[1]:[1,1]
    
    if(rowIndex<=1){
        return arr
    }
      return combinations(rowIndex)
    
  }
  
  const combinations = (n) => {
      if(!n) {
          return []
      }
    var numerator = n
    var denomerator = 1
  
    var arr = [1, n]
  
    for (let i = 2; i < n; i++) {
      numerator = numerator * (n - (i-1))
      denomerator = denomerator * i
      arr.push(numerator / denomerator)
    }
    arr.push(1)
    return arr
  }