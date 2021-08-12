/*
Substitute
Array.apply(null, Array(n + 1)).map((elem, i) => i)
with
Array(n+1).fill(true);

and  replace

i*i  <= limit
by
i  <= limit
*/


/*
Runtime: 268 ms, faster than 63.29% of JavaScript online submissions for Count Primes.
Memory Usage: 79.7 MB, less than 41.54% of JavaScript online submissions for Count Primes.
*/


var countPrimes = function (n, upto_n = false) {
    var arr = Array(n+1).fill(true);
    let count = 0
    
    arr[0] = arr[1] = false
  
    let limit = n
    if (!upto_n) {
      limit = n - 1
    }
  
    for (let i = 2; i  <= limit; i++) {
      if (!(arr[i])) {
        continue
      }
        count++
      for (let j = 2 * i; j <= limit; j = j + i) {
        arr[j] = false
      }
    }
  

    return count
  }