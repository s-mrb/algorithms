/*
Algo:

Kadane Algo

NEXT: Reduce this algo in 3 line of code
*/

/*
Runtime: 64 ms, faster than 99.31% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 40.3 MB, less than 43.98% of JavaScript online submissions for Maximum Subarray.
*/

const maxSubArray = (nums) => {
  let n = nums.length
  let local_max = 0
  let global_max = Number.NEGATIVE_INFINITY

  for (let i = 0; i < n; i++) {
    local_max = nums[i] > nums[i] + local_max ? nums[i] : nums[i] + local_max
    if (local_max > global_max) {
      global_max = local_max
    }
  }
  return global_max
}



// let nums = [-1, 2, 1, -9]
let nums = [-2, 1, -3, 4]
// let nums = [-2,1,-3,4,-1,2,1,-5,4]

console.log(maxSubArray(nums))
