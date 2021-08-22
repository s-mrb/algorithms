// SUM OF ALL DIVISORS OF A NUMBER N

/*
TESTED AT
http://www.positiveintegers.org/IntegerTables/1-100

*/

/*
To be optimized using Binary Exponentaition and other shit
*/

const prime_factorization = (n) => {
  if (n == 1) {
    return 1
  }
  if (n == 0) {
    return Number.POSITIVE_INFINITY
  }
  let sum = 1
  let en = 0
  Array(2, 3, 5).forEach((i) => {
    if (n % i == 0) {
      while (n % i == 0) {
        n /= i
        en++
      }

      sum = sum * Math.floor((Math.pow(i, en + 1) - 1) / (i - 1))
      en = 0
    }
  })

  let steps = [4, 2, 4, 2, 4, 6, 2, 6]
  let current_step = 0
  for (let i = 7; i * i <= n; i += steps[current_step++]) {
    if (n % i == 0) {
      while (n % i == 0) {
        n /= i
        en++
      }
      //   sum = sum * (myPow(i, en + 1) / (i - 1))
      sum = sum * Math.floor((Math.pow(i, en + 1) - 1) / (i - 1))

      en = 0
    }
    if (current_step == 8) {
      current_step = 0
    }
  }

  if (n > 1) {
    // sum = sum * (myPow(n, en + 1) / (n - 1))
    sum = sum * Math.floor((Math.pow(n, 2) - 1) / (n - 1))
  }
  return sum
}



console.log(prime_factorization(60))
