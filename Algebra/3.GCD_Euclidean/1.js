// verify implementation on http://www.alcula.com/calculators/math/gcd/#gsc.tab=0

/*
        EXPLANATION

if b==0:
    return a
else:
    temp = b
    b = a % b
    a = b
    repeat
*/

const gcd = (a, b) => {
  while (b != 0) {
      temp = b
      b = a % b
      a = temp
  }
  return a
}

console.log(gcd(123432,567892))