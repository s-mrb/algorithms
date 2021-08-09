// this algo represents GCD as Diophantine Equation
// gcd(a,b) = ax + by

const gcd = (a, b, vars) => {
  if (b == 0) {
    vars.x = 1
    vars.y = 0
    return a
  }

  let d = gcd(b, a % b, vars)
  let temp = vars.x

  vars.x = vars.y

  vars.y = temp - vars.y * Math.floor(a / b)
  return d
}

var vars = { x: null, y: null }

var d = gcd(55, 80, vars)
var { x, y } = vars
console.log('gcd = ', d)
console.log('x,y = ', x, y)
