// Runtime: 272 ms, faster than 62.39% of JavaScript online submissions for Count Primes.
// Memory Usage: 79.3 MB, less than 64.96% of JavaScript online submissions for Count Primes.


// Runtime: 276 ms, faster than 61.56% of JavaScript online submissions for Count Primes.
// Memory Usage: 79.2 MB, less than 70.24% of JavaScript online submissions for Count Primes.

var countPrimes = function (n) {
  let arr = Array(n + 1).fill('0')

  let count = 0

  for (let i = 2; i < n; i++) {
    if (arr[i] == '-1') {
      continue
    }
    count++

    for (let j = 2 * i; j < n; j = j + i) {
      arr[j] = '-1'
    }
  }

  return count
}
