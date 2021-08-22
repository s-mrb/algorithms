/*
HASHTABLE

EXPLANATION:

what must be added in current element to get sum
desired = sum - arr[i]
see if desired is in map, if present then fetch it's index
if not present then store index of current element
*/


/*
Runtime: 84 ms, faster than 62.77% of JavaScript online submissions for Two Sum.
Memory Usage: 40.2 MB, less than 51.48% of JavaScript online submissions for Two Sum.
*/

const twoSum = (arr, sum) => {
  let map = {}

  for (let i = 0; i < arr.length; i++) {
    if (map.hasOwnProperty(sum - arr[i])) {
      return [i, map[sum - arr[i]]]
    }
    map[arr[i]] = i
  }
  return []
}

console.log(two_sum([0, -1, 2, -3, 1], 0))
