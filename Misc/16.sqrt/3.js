/*
Algo:

Newton Raphson method

Xn = Xm - F(Xn)/F`(Xn)
m = n+1



As Newton Raphson is used to find root of a function.
Hence you need to make a function where root is sqrt(x)

if n is sqrt(x) then n*n = x
and x-x=0

let y be our function

y = n*n - x
dy = 2n

n = x-y/dy
*/

/*
Runtime: 72 ms, faster than 99.45% of JavaScript online submissions for Sqrt(x).
Memory Usage: 40.4 MB, less than 38.85% of JavaScript online submissions for Sqrt(x).
*/

// Can be Further optimized by making good initial guess
const mySqrt = (x) => {
    let crt_val = 1
    let old_val = 99
    let y
    let dy
  
    for (let i = 0; Math.abs(crt_val - old_val) > 0.9; i++) {
      y = crt_val * crt_val - x
      dy = 2 * crt_val
      old_val = crt_val
      crt_val = crt_val - y / dy
    }
  
    return crt_val - (crt_val % 1)
  }

console.log(mySqrt(3))
