/*
Runtime: 146 ms, faster than 24.05% of JavaScript online submissions for Two Sum.
Memory Usage: 39.2 MB, less than 95.96% of JavaScript online submissions for Two Sum.


For better version see 2.js
*/

var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){

        // j=i+1
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+nums[j] == target){
                return [i,j]
            }
        }
    }
};