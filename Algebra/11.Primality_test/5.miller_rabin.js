// using base where gcd(a,n)==1 we get 664846 probable primes less than 10000000, 
// more pseudoprimes than with base 2

// https://math.mit.edu/research/highschool/primes/materials/2014/Narayanan.pdf
/*
Verify at
https://primes.utm.edu/howmany.html
and
https://primes.utm.edu/prove/
and
http://primes.utm.edu/prove/prove2_3.html

and

make use of edge cases here
https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-numeric-types-number-exponentiate
*/

/*
If n is prime greater than 2 than it must be an odd number, and n-1 even

lets
    n-1 = s^2 * d , where d is odd

fermat equation:
    a^(n-1) mod n = 1
    n^((s^2)*s) mod n = 1
    (n^((s^2)*s) - 1 ) mod n = 0

    use a^2-b^2 to expand

    Expansion
    (a^((2^(s−1))*d)+1)(a^((2^(s−2))d)+1)⋯(a^d+1)(a^d−1) ≡ 0  mod n

If n is prime, then n has to divide one of these factors.
And in the Miller-Rabin primality test we check exactly that statement,
which is a more stricter version of the statement of the Fermat test.
For a base 2 ≤ a ≤ n−2 we check if either

a^d mod n = 1
a^((2^r)*d) mod n = -1

0 ≤ r ≤ s−1

  */

const miller_rabin = (n) => {
  let a = 2n
  let gcd = 0n
  let d
  let s = 0n
  let res
  let n_less1 = n - 1n
  let check_one = 0
  //   2 ≤ a ≤ n−2
    while (gcd != 1n) {
      a++
      gcd = gcd_euclid(a, n)
    }

  // find r and d
  // initially d == n-1
  d = n_less1

  // as long as d is not odd
  // we divide d by 2, so that after each loop (2^s)*d = n-1
  // s is to satify => n-1 = s^2 * d
  while ((d & 1n) == 0) {
    d >>= 1n
    s++
  }

  // check a^d % n
  // if it equals true then number is strong probable prime
  res = pow_mod(a, d, n)
  if (res === 1n || res === n_less1) {
    return 1
  }

  // now handle r part
  // a^((2^r)*d) == (a^(2^r)) * (a^d) OR
  // 2^(4*6) == (2^4) * (2^2)

  // Done with a^d in above pow_mod call
  // a^d was when r=0, the end of Expansion
  // now need to handle only a^(2^r)

  //  0 ≤ r ≤ s−1
  //  when r=1, it's second third last expression in Expansion
  //  i.e ((a^(2d)) - 1) = (a^2) * (a^d) -1
  //  we are done with (a^d), hence proceed forward
  for (let i = 1n; i <= s; i++) {
    res = (res * res) % n

    if (res == n_less1) {
      return 1
    }
  }

  return 0
}

const gcd_euclid = (a, b) => {
  while (b != 0n) {
    temp = b
    b = a % b
    a = temp
  }
  return a
}

const pow_mod = (base, exp, n) => {
  if (n == 0n) {
    return 'Undefined'
  }

  let res = -2

  res = base == 1n || exp == 0n ? 1n : base == -1n ? (exp & 1n ? -1n : 1n) : res

  if (res != -2) {
    return res % n
  }

  res = 1n

  let is_neg
  if (exp < 0n) {
    is_neg = 1
    exp = -exp
  }

  base %= n
  while (exp != 0n) {
    if (exp & 1n) {
      res = ((res % n) * (base % n)) % n
    }
    exp >>= 1n
    base = ((base % n) * (base % n)) % n
  }

  if (is_neg) {
    return 1n / res
  }

  return res
}

// let n = 16n
let count = 0
for (let i = 2n; i < 10000000; i++) {
  let res = miller_rabin(i)

  if (res) {
    // console.log(i)
    count++
  }
}

console.log('\n',count)
