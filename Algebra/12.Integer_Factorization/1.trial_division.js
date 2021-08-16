// this function factorizes and doesn't find factors, there is a huge difference between the two


const factorize = (n) => {
  if (n == 1) {
    return [1]
  }
  if (n == 0) {
    return []
  }
  let factors = [1]
  for (let i = 2; i*i  <= n; i++) {
    while (n % i == 0) {
      factors.push(i)
      n /= i
    }
  }

  if (n > 1) {
    factors.push(n)
  }
  return factors
}

console.log(factorize(69998))


// console.log(34999%31)