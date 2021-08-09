/*
The Binary GCD algorithm is an optimization to the normal Eulidean algorithm.

The slow part of the normal algorithm are the modulo operations. Modulo operations, although we see them as O(1), are a lot slower than simpler operations like addition, subtraction or bitwise operations. So it would be better to avoid those.

It turns out, that you can design a fast GCD algorithm that avoids modulo operations. It's based on a few properties:

If both numbers are even, then we can factor out a two of both and compute the GCD of the remaining numbers: gcd(2a,2b)=2gcd(a,b).
If one of the numbers is even and the other one is odd, then we can remove the factor 2 from the even one: gcd(2a,b)=gcd(a,b) if b is odd.
If both numbers are odd, then subtracting one number of the other one will not change the GCD: gcd(a,b)=gcd(b,a−b) (this can be proven in the same way as the correctness proof of the normal algorithm)

*/