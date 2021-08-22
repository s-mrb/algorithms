## Remember

- odd>>2 = (odd-1)>>2
- 1>>1 = 0
- instead of loop upt sqrt:

```
for (int d = 2; d <= sqrt(x); d++) {

    }
```

use instead

```python
# just assume multiplying on the both sides
for (int d = 2; d*d <= x; d++) {

    }
```

- Modulo when operand is smaller than other

```
22  % 5 = 2
17  % 5 = 2
12  % 5 = 2
7   % 5 = 2
2   % 5 = 2
```

- To check odd

```js
if (num & 1) {
}
```

- Warning

```js
if (0 & 1) {
  // won't execute ever
}
```

### Modulo

### Distributive

### Modulo 0

```js
//NaN
console.log(5 % 0)
```

#### Note

```
(2 + 2) % 3 = 1 != (2 %3) + (2 % 3) = 2 + 2 = 4

if A>=M and B>=M
    (A+B)mod M = A mod M + B mod M (mod M)
else
    (A+B)mod M = A mod M + B mod M
```

##### Why is it true that x^ab mod n = (x^a mod n)^b mod n?

I understand that if I substitute z for x^a, I get:

z^b mod n=(z mod n)^b mod n

since a power is nothing but an iterated product, this is indeed a consequence of the more general:
(amodn)(bmodn)=abmodn
by which we mean that the product of any two integers, one of which is congruent to a and the other to b modulo n, is congruent to ab modulo n.

Proof:
(a+nk)(b+nl)=ab+n(kb+al+nkl)
To get the powers formula, apply this repeatedly, first to b=a, then b=a2, etc.

### GCD and LCM

- gcd of zero and k is k
- lcm(a,b) = (a.b)/gcd(a,b)
