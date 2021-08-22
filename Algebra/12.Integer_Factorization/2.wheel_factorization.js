// this function factorizes and doesn't find factors, there is a huge difference between the two



const prime_factorization = (n) => {
  if (n == 1) {
    return [1]
  }
  if (n == 0) {
    return []
  }
  let factors = []
  Array(2, 3, 5).forEach((i) => {
    while (n % i == 0) {
      n /= i
      factors.push(i)
    }
  })

  let steps = [4, 2, 4, 2, 4, 6, 2, 6]
  let current_step = 0
  for (let i = 7; i * i <= n; i += steps[current_step++]) {
    while (n % i == 0) {
      n /= i
      factors.push(i)
    }
    if (current_step == 8) {
      current_step = 0
    }
  }

  if (n > 1) {
    factors.push(n)
  }
  return factors
}

console.log(prime_factorization(60))
