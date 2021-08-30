/*
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/

/*
Algo: 
Can be optimized to great extent, written like this for easier understanding
and for similarity with Kadane to be evident

Two for loop algo is trivial. Using Kadane Algo here
make a relative_prices array (prices[i]-prices[i-1])
set first element of relative prices to be 0 
find max subarray sum of relative_pricess and return it.
*/


/*
Runtime: 148 ms, faster than 11.04% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 52.3 MB, less than 5.50% of JavaScript online submissions for Best Time to Buy and Sell Stock.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProfit = function (nums) {
  var max = (moving_sum = Number.NEGATIVE_INFINITY)
  var relative_prices = nums.map((e, i) => nums[i] - nums[i - 1])
  relative_prices[0] = 0
  for (var i = 0; i < relative_prices.length; i++) {
    moving_sum =
      moving_sum + relative_prices[i] > relative_prices[i]
        ? moving_sum + relative_prices[i]
        : relative_prices[i]
    if (moving_sum > max) {
      max = moving_sum
    }
  }
  return max
}

console.log(maxSubArray([7, 1, 5, 3, 6, 4]))
