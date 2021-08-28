/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
representing the number of elements in nums1 and nums2 respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

/*
Algo:

STUPID ONE, SEE 4.js for good algo
if n == 0 return nums1
let tail = m

take first element of nums1 and place it at tail

head1 = pointer to first element of nums1
head2 = pointer to first element of nums2

while(head1+1<=m):
    if head1 element is smaller or equal to that of head2:
        inrement head1
        continue
    place head1 element at tail
    place head2 element at head1
    inrement head1
    increment head2
    increment tail

copy left over nums2 in nums1

Above approach causes error for 
nums1 = [4,0,0,0,0,0],
m = 1,
nums2 = [1,2,3,5,6],
n = 5

Order is correct but there are some undefined elements

*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (!n) {
    return nums1
  }
  let tail = m
  let head1 = (head2 = 0)

  while (head1 + 1 <= m) {
    if (nums1[head1] <= nums2[head2] && tail != head1) {
      head1++
      continue
    }
    nums1[tail] = nums1[head1]
    nums1[head1] = nums2[head2]
    head1++
    head2++
    tail++
  }

  while (head2 + 1 <= n) {
    if (nums1[head1] <= nums2[head2] && tail != head1) {
      head1++
      continue
    }
    nums1[tail] = nums1[head1]
    nums1[head1] = nums2[head2]
    head1++
    head2++
    tail++
  }
  let ind = nums1.indexOf(undefined)
  while (ind != -1) {
    nums1.splice(ind, 1)
    ind = nums1.indexOf(undefined)
  }
  return nums1
}
let nums1 = [1, 2, 4, 5, 6, 0],
  m = 5,
  nums2 = [3],
  n = 1

/*
  [4,0,0,0,0,0]
1
[1,2,3,5,6]
5


[1,2,4,5,6,0]
5
[3]
1
  */

console.log(merge(nums1, m, nums2, n))
