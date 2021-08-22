/*
WRONG: NEED DEBUGGING
*/

/*
Solution using: Summation of Binary Bits
*/

/*
EXPLANATION:

legendre_expo(num, base):

- sum_set_bits = number of 1's in the binary representation of num
- (num-sum_set_bits)/(base-1)

TODO:
Effective algorithm for finding number of set bits in number 
*/

const legendre_exp = (num, base) => {
  const str = num.toString(2)
  const re = /0*/
  let bits
  if (num & 1) {
    bits = str.split(re).length
  } else {
    bits = str.split(re).length - 1
  }
  return parseInt((num - bits) / (base - 1))
}

console.log(legendre_exp(8, 3))
