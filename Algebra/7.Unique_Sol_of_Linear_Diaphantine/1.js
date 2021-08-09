// Iterative Extended Euclidean Algorithm

/*
            EXPLANATION

    EQUATION IN QUESTION = a*xn + b*yn = c

Assume a and b are non-negative
Apply EEA and get g,x,y
Now u have ax + by = g, divide by g and multiply by c
You got solution of Equation In Question



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
  
  var [init_a,init_b, c] = [1, 0, 6]

  var [g, a, b] = dynamic_gcd(init_a, init_b)
  var [x,y] = find_diaphantine_coeff(a,b)

  console.log('gcd = ',g)
  console.log('x,y = ',(x/g)*c,(y/g)*c)