/*
N should be odd, otherwise either infinite loop or wrong answer
*/

const factorize = (n) => {
  // it could be positive number
  let a = Math.ceil(Math.sqrt(n))
  let b2 = a * a - n
  let b = Math.round(Math.sqrt(b2))
  while (b2 != b * b) {
    a++
    b2 = a * a - n
    b = Math.round(Math.sqrt(b2))
  }

  return [a - b, a + b]
}

let fact = factorize(69999)
console.log(fact)
