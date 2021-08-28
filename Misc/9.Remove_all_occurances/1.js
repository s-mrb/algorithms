/*
Given an integer array nums and an integer val,
remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
*/

/*
Algo:

- have one pointer, ptr_val
- iterate array until u find first val
- initialize ptr_val, ptr_val points to first val

- loop from ptr_val to size of array
        if current element is not ptr_val
            swap
            update ptr_val BY ONE
- keep increasing ptr_not_val until current element is val

MOST IMPORTANT:

update ptr_val BY ONE
- 
*/

/*
Runtime: 108 ms, faster than 6.73% of JavaScript online submissions for Remove Element.
Memory Usage: 38.3 MB, less than 96.01% of JavaScript online submissions for Remove Element.
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let ptr_val
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      ptr_val = i
      break
    }
  }


  for (let i = ptr_val; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[ptr_val] = nums[i]
      ptr_val++
    }
    else{
        k++
    }
  }
  return nums.length-k
}

// [0, 1, 2, 2, 3, 0, 4, 2]
// [0, 1, 3, 0, 4, 0, 4, 2]
let nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2

console.log(removeElement(nums, val))
console.log(nums)