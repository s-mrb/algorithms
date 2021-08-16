// Tested via http://www.javascripter.net/math/calculators/divisorscalculator.htm

/*
if the prime factorization of n is p1^e1⋅p2^e2 ... pk^ek, where pi are distinct prime numbers, then the number of divisors is:

d(n)=(e1+1)⋅(e2+1)...(ek+1)
where e1 is number of times a factor appeared in prime_factorization
*/

const prime_factorization = (n) => {
  if (n == 1) {
    return 1
  }
  if (n == 0) {
    return Number.POSITIVE_INFINITY
  }
  let num_divisors = 1
  let en = 0
  Array(2, 3, 5).forEach((i) => {
    if (n % i == 0) {
      while (n % i == 0) {
        n /= i
        en++
      }

      num_divisors = num_divisors * (en + 1)
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
      num_divisors = num_divisors * (en + 1)
      en = 0
    }
    if (current_step == 8) {
      current_step = 0
    }
  }

  if (n > 1) {
    num_divisors = num_divisors * (1 + 1)
  }
  return num_divisors
}

console.log(prime_factorization(1123445566))
