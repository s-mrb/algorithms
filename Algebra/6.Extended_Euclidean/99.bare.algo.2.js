/*
Algorithm: EA and not EEA but does work of EEA, storing a and b in arrays

Explanation:

- have 4 vars, a, b, x, y, a_array, b_array
- x=1, y=0, a_array=[a,], b_array=[b,]
- Use GCD iterative algo
- keep storing updated a and b in a_array and b_array
- nth a and b is used to find (n-1)th x and y
  since we already know last x and y, we wont use last a and b
- use another loop and get a and b from arrays to update x and y as:
    [x,y] = [y, x-parseInt(a/b)*y]
*/

const eea = (a, b) => {
  let x = 1,
    y = 0,
    counter = 0,
    a_arr = [a],
    b_arr = [b]
  while (b) {
    ;[a, b] = [b, a % b]
    a_arr.push(a)
    b_arr.push(b)
    counter++
  }

  // nth a and b is used to find (n-1)th x and y
  // since we already know last x and y, we wont use last a and b
  // so first decrement counter than use in equation
  while (counter--) {
    ;[x, y] = [y, x - parseInt(a_arr[counter] / b_arr[counter]) * y]
  }
  return [a, x, y]
}
console.log(eea(240, 46))
