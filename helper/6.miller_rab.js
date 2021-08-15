function probablyPrime(n) {
  if (n === 2 || n === 3) return true
  if (n % 2 === 0 || n < 2) return false

  // Write (n - 1) as 2^s * d
  var s = 0,
    d = n - 1
  while ((d & 1) == 0) {
    d >>= 1
    ++s
  }

  let base = 2
  var x = Math.pow(base, d) % n

  if (x == 1 || x == n - 1) return true

  for (var i = 1; i <= s; i++) {
    x = (x * x) % n

    if (x === n - 1) return true
  }
  return false
}

// 31
// 59
// 61
// 71
// 79
// 89
console.log(probablyPrime(61))

// let count = 0
// for (let i = 2; i <= 100; i++) {
//   let res = probablyPrime(i, 1)

//   if (res) {
//     // console.log(i)
//     count++
//   } else {
//     console.log(' not - ', i)
//   }
// }

// console.log('\n', count)
