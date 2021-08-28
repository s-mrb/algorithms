/*
Algorithm: single loop, no arrays

Explanation:

https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm#Example
*/

const eea = (a, b) => {
  let r1 = a
  let r2 = b
  let s1 = 1
  let s2 = 0
  let t1 = 0
  let t2 = 1
  let q = 0

  while (r2) {
    q = Math.floor(r1 / r2)
    ;[r1, r2] = [r2, r1 - q * r2]
    ;[s1, s2] = [s2, s1 - q * s2]
    ;[t1, t2] = [t2, t1 - q * t2]
  }

  return [s1, t1]
}

console.log(eea(240, 46))