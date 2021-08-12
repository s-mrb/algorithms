// Optimization on 1.js

/*
HOW to optimize?

Sieving till root

Obviously, to find all the prime numbers until n,
it will be enough just to perform the sifting only
by the prime numbers,which do not exceed the root of n.

*/


/*
Runtime: 360 ms, faster than 48.57% of JavaScript online submissions for Count Primes.
Memory Usage: 157.9 MB, less than 20.02% of JavaScript online submissions for Count Primes.
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
    for (let i = 2; i * i <= limit; i++) {
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
  