/*
Algo: XOR between all elements of array.
*/

/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

/*
Runtime: 68 ms, faster than 98.76% of JavaScript online submissions for Single Number.
Memory Usage: 41.5 MB, less than 79.44% of JavaScript online submissions for Single Number.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = nums[0]
    for(var i=1; i<nums.length; i++){
        res ^= nums[i]
    }
    return res
};

console.log(1^4)