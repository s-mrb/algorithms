/*
Algo:

- have two pointers(indices) i.e. ptr_a, ptr_b
- get max element of list from last index
- loop while current element is not equal to max
- if current element is bigger than array[ptr_a]
    add it to array[ptr_a+1]
    increment ptr_a
- before returning add max to arr[ptr_a+1]
*/

/*
Runtime: 116 ms, faster than 35.77% of JavaScript online submissions for Remove Duplicates from Sorted Array.
Memory Usage: 40.6 MB, less than 99.65% of JavaScript online submissions for Remove Duplicates from Sorted Array.
*/


/*
Runtime: 80 ms, faster than 92.96% of JavaScript online submissions for Remove Duplicates from Sorted Array.
Memory Usage: 41.4 MB, less than 63.61% of JavaScript online submissions for Remove Duplicates from Sorted Array.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let max = nums[nums.length - 1]
  let ptr_a = 0
  let i = 1
  while (nums[ptr_a] < max) {
    if (nums[i] > nums[ptr_a]) {
      nums[ptr_a + 1] = nums[i]
      ptr_a++
      i++
    } else {
      i++
    }
  }

  return ptr_a+1
}

let nums = [1, 1, 2, 3, 3, 3, 3, 4]

let k = removeDuplicates(nums)
