// For a much better version view 2.js
// This Code doesn't handle negative exponents
// This Code doesn't handle fractional exponents


/*
        EXPLANATION

params: base, exponent : (base^e).residual

while exponent greater than 1
    if exponent even
        then half it and take square of base
    else
        subtract 1 from exponent, multiply residual by base to make equation balanced,
        and half exponent and take square of base

    return residual*base

then handle edge cases
*/


const binary_expo = (base, exponent) => {
  res = 1

  if(base == 0 && exponent==0){
    throw Error("Math Error")
  }

  if (exponent==0 || base==1){
    return 1
  }
  if(base == -1 ){
    if(exponent & 1){
      return -1
    }
    return 1
  }

  while (exponent>1) {
    if (!(exponent & 1)) {
      // u cab further optimize by recognizing the fact that 
      // below two lines are also in else case
      exponent = exponent >> 1
      base = base * base
    } else {
      exponent = exponent >> 1

      // update res first then update base
      // note that negative base will be handles here automatically
      res = res * base
      base = base * base

    }
  }
  return res*base
}

console.log(binary_expo(2.5, 2))
