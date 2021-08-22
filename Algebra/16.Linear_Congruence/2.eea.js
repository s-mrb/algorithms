/*
Not tested fir negative integers and floats, and big ints

TODO:
make it for big ints
*/

/*
Solution of linear Congruence Equation using MMI (Multiplicative Modulo Inverse)

a*x mod n = b
IDEA:

- find g=gcd(a,m)
- if b divisible by g then solution possible else not
- consider equation

AX = B + MY
AX - MY = B ............. eq(1)

One way:
    let 
    Au + Mv = gcd(A,M)
    find u and v
    U got Au + Mv = gcd(A,M)
    divide both sides by B/g (this is why B is supposed to be divisible by g)
    you will get

    Au*(B/g) + Mv*(B/g) = g * (B/g)
    Au*(B/g) + Mv*(B/g) = B


Simple Way:
    let
    find represent g as: g = AX + MY 
    multiply bs by B/g
    you get eq(1)

Now use EEA
*/

const solve_linear_cong = (coeff, mod, remainder) => {
  let g = gcd(coeff, mod)

  if (remainder % g) {
    throw Error('Solution does not exist')
  }

  var [_, a, b] = dynamic_gcd(coeff, mod)
  var [x, _] = find_diaphantine_coeff(a, b)
  x = x * (remainder / g)
  if (x < 0) {
    x = x + mod
  }
  return x
}

const gcd = (a, b) => {
  while (b != 0) {
    temp = b
    b = a % b
    a = temp
  }
  return a
}

//stores a and b values, and return them along with gcd
const dynamic_gcd = (a, b) => {
  var a_array = [],
    b_array = []

  a_array.unshift(a)
  b_array.unshift(b)

  while (b != 0) {
    temp = b
    b = a % b
    a = temp

    a_array.unshift(a)
    b_array.unshift(b)
  }
  return [a, a_array, b_array]
}

const find_diaphantine_coeff = (a_array, b_array) => {
  var x = 1
  var y = 0
  var temp
  for (i = 1; i < a_array.length; i++) {
    temp = x
    x = y
    y = temp - y * Math.floor(a_array[i] / b_array[i])
  }

  return [x, y]
}

console.log(solve_linear_cong(2, 9, 2))
