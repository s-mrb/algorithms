/*
Runtime: 92 ms, faster than 98.64% of JavaScript online submissions for Count Primes.
Memory Usage: 46.3 MB, less than 86.93% of JavaScript online submissions for Count Primes.
 */


//  Further improvement: In inner loop use j =  i*i

var countPrimes = function (n) {
    // auto initializes with zero
    let arr = new Uint8Array(n)
  
    let count = 0
  
    for (let i = 2; i < n; i++) {
      if (arr[i]) {
        continue
      }
      count++
  
      for (let j = 2 * i; j < n; j = j + i) {
        // let all non-primes be flagged 1
        arr[j] = 1
      }
    }
  
    return count
  }