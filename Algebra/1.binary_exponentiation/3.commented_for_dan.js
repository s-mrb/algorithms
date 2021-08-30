
const myPow = (base, exp) => {

  // let response be 0, it would help us to see
  // whether we can return response without even running the algorithm
  // if we counter the cases which don't need main algo to run
  // then we will set response to it's actual value and return
  let res = 0
  
  // if base is 1 or exponent is 0, response should be 1
  // if base is -1 and exponent is odd then response should be -1 else 1
  // if none of these true then don't change response and let it be 0
  res = base == 1 || exp == 0 ? 1 : base == -1 ? (exp % 2 ? -1 : 1) : res
  
  // if exponent is out of constraints then do change response
  res =
    exp > 2147483647
      ? Number.POSITIVE_INFINITY
      : exp < -2147483648
      ? Number.NEGATIVE_INFINITY
      : res

  // if response is changed then it means we got our result, now return 
  if (res != 0) {
    return res
  }
  
  res = 1
  let is_neg
  
  // if exponent is negative then set the flag and make exponent negative
  if (exp < 0) {
    is_neg = 1
    exp = Math.abs(exp)
  }
  
  // apply algo on positive exponent
  while (exp != 0) {
  

    if (exp & 1) {
	  // if exponent is odd then subtract one from exponent
	  // to balance out the equation multiply base^1 with response
	  // (4^7)*res = (4^6)*res*4^1
      res = res * base
	  
	  // if constraints crossed then break loop and return
      if (res <= -10000 || res >= 10000) {
        break
      }
    }
	
	// since we made exponent even by subtracting 1 from it
	// hence it is now even, and could be divided by 2
	// 4^6  --> divide exponent by 2 --> 4^3
	// to balance the equation take that 2 as power of base --> (4^2)^3 = 4^6
    exp >>= 1
    base *= base
  }

  // if exponent was negative
  if (is_neg) {
    return 1 / res
  }

  return res
}