/*
Runtime: 88 ms, faster than 71.78% of JavaScript online submissions for Reverse Integer.
Memory Usage: 40.4 MB, less than 75.15% of JavaScript online submissions for Reverse Integer.
*/

const reverse = (num) => {
  let res = 0
  while (num) {
    res = res * 10 + (num % 10)
    num = parseInt(num / 10)
  }
  if (res < -2147483648 || res > 2147483647) {
    return 0
  }
  return res
}

console.log(reverse(-234))
