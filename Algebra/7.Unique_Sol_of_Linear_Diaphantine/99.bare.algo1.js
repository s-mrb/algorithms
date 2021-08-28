/*
Apply EEA and get g,x,y
Now u have ax + by = g, divide by g and multiply by c
You got solution of Equation In Question
*/

const eea = (a, b) => {
  let r1 = a
  let r2 = b
  let s1 = 1
  let s2 = 0
  let t1 = 0
  let t2 = 1
  let q = 0

  while (r2) {
    q = Math.floor(r1 / r2)
    ;[r1, r2] = [r2, r1 - q * r2]
    ;[s1, s2] = [s2, s1 - q * s2]
    ;[t1, t2] = [t2, t1 - q * t2]
  }

  return [r1, s1, t1]
}

const diaphantine_uni_sol = (coeff_a, coeff_b, constant_c) => {
  ;[g, x, y] = eea(coeff_a, coeff_b)
  console.log()
  return [(x / g) * constant_c, (y / g) * constant_c]
}

var [init_a, init_b, c] = [1, 0, 6]
console.log(diaphantine_uni_sol(init_a, init_b, c))
