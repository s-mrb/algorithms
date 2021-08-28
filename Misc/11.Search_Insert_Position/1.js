// bad code

/*
Given a sorted array of distinct integers and a target value, return the index if the target is found.
If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
*/

/*
Runtime: 68 ms, faster than 89.98% of JavaScript online submissions for Search Insert Position.
Memory Usage: 40 MB, less than 21.14% of JavaScript online submissions for Search Insert Position.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let end = nums.length - 1
  if (end == -1) {
    return 0
  }
  if (target < -10000 || target > 10000) {
    return -1
  }
  let start = 0
  let mid = Math.ceil((start + end) / 2)
  while (true) {
    if (nums[mid] > target) {
      if (mid == start) {
        return mid 
      }
      end = mid - 1
      mid = Math.floor((start + end) / 2)
      continue
    }
    if (nums[mid] < target) {
      if (mid == end) {
        return mid + 1
      }
      start = mid + 1
      mid = Math.floor((start + end) / 2)
      continue
    }
    if (nums[mid] == target) {
      return mid
    }
  }
}

let nums = [1,3,5,6]
let target = 2
console.log(searchInsert(nums, target))
