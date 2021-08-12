/*

Runtime: 100 ms, faster than 97.66% of JavaScript online submissions for Count Primes.
Memory Usage: 46.5 MB, less than 85.65% of JavaScript online submissions for Count Primes.

Runtime: 104 ms, faster than 96.60% of JavaScript online submissions for Count Primes.
Memory Usage: 46.3 MB, less than 88.52% of JavaScript online submissions for Count Primes.
*/

var countPrimes = function (n) {
  // auto initializes with zero
  let arr = new Uint8Array(n)

  let count = 0

  for (let i = 2; i < n; i++) {
    if (arr[i] == 1) {
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


// Further edge
// var countPrimes = function (n) {
//     let arr = new Uint8Array(n)
//     let count = 0
//     for (let i = 2; i < n; i++) {
//       if (arr[i] == 1) {
//         continue
//       }
  
  
//         count++
//               if(i*i>n){continue}
//       for (let j = 2 * i; j < n; j = j + i) {
//         arr[j] = 1
//       }
//     }
//     return count
//   }
