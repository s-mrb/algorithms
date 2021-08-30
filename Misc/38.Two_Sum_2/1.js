// see 2 sum 1 for explanation


/*
Runtime: 72 ms, faster than 82.93% of JavaScript online submissions for Two Sum II - Input array is sorted.
Memory Usage: 39.4 MB, less than 38.50% of JavaScript online submissions for Two Sum II - Input array is sorted.
*/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let map = {}

  for (let i = 0; i < numbers.length; i++) {
    if (map.hasOwnProperty(target - numbers[i])) {
      return [map[target - numbers[i]]+1,i+1 ]
    }
    map[numbers[i]] = i
  }
  return []  
};
