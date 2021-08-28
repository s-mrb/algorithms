/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    
    let s = 0
    while (s * s <= x) {
      s++
    }
  
    return s-1
  }
console.log(mySqrt(1024))
