// Iterative Method of EGCD
// Only Method used here
// O(log N), but faster then it's recursive variant

/*
        EXPLANATION

You know how to find gcd using iterative method.

Method 1
Use that method to find gcd,when loop terminates u get terminal_a, terminal_b, x1, y1
now add one more while loop ( run until terminal_b!=b )
    in this while loop find x and y


Method 2
Use that method to find gcd,when loop terminates you have all a's and b's in arraies
you already know x and y for terminal a and b
now use array of a and b's to find consecutive x and y
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
  var x=1
  var y=0
  var temp
  for (i = 1; i < a_array.length; i++) {
    temp = x
    x = y
    y = temp - y*(Math.floor(a_array[i]/b_array[i]))
  }

  return [x,y]
}

var [d, a, b] = dynamic_gcd(55, 80)
var [x,y] = find_diaphantine_coeff(a,b)
console.log('gcd = ',d)
console.log('x,y = ',x,y)

