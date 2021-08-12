// Sieve of Eratosthenes

/*

EXPLANATION

make array arr of length n
fill array with non-negative num
set arr[0] = arr[1] = 0
loop i through arr untill 2*arr[i]<=n:
    mark all multiples of arr[i] as non-prime by setting arr[i]=0
    // since we r marking multiples that is why we loop until 2*arr[i]<=n

*/

/*
Runtime: 436 ms, faster than 34.14% of JavaScript online submissions for Count Primes.
Memory Usage: 158 MB, less than 20.02% of JavaScript online submissions for Count Primes
*/

// count prime number LESS THAN n
var countPrimes = function (n, upto_n = false) {
  var arr = Array.apply(null, Array(n + 1)).map((elem, i) => i)
  arr[0] = arr[1] = 0

  let limit = n
  if (!upto_n) {
    limit = n - 1
  }

  // do 2*i <=n if it's upto n, and not less than
  for (let i = 2; 2 * i <= limit; i++) {
    if (arr[i] == 0) {
      continue
    }

    for (let j = 2 * i; j <= limit; j = j + i) {
      arr[j] = 0
    }
  }

  let count = 0
  for (let k = 0; k <= limit; k++) {
    if (arr[k] > 0) {
      count++
    }
  }
  return count
}
