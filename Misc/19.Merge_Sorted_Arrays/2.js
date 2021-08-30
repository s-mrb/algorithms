/*
Runtime: 64 ms, faster than 97.50% of JavaScript online submissions for Merge Sorted Array.
Memory Usage: 38.9 MB, less than 69.44% of JavaScript online submissions for Merge Sorted Array.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let len = n + m - 1
  m--
  n--
  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[len--] = nums1[m--]
      continue
    }
    nums1[len--] = nums2[n--]
  }
}

let nums1 = [1, 2, 4, 5, 6, 0],
  m = 5,
  nums2 = [3],
  n = 1
merge(nums1, m, nums2, n)
console.log(nums1)
