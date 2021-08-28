/*
Not tested fir negative integers and floats, and big ints
*/

/*
Solution using EEA
*/

/*
TESTED AT https://keisan.casio.com/exec/system/15901266097609

Need improvements

NOTE: for a = 7 and m = 49, keisan.casio gives error but not this code, guess why
*/

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

const mod_inv = (coef, mod,remainder) => {
  var [g, a, b] = dynamic_gcd(coef, mod)
  var [x, y] = find_diaphantine_coeff(a, b)
  x = (x / g) * c
  if (x < 0) {
    x = x + mod
  }
  return x
}
var [init_a, init_b, c] = [56, 5, 1]

console.log(mod_inv(init_a,init_b,c))
