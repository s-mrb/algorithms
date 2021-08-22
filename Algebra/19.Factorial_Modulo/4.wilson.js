/*
Theorem:
If p is a prime no then
(p-1)! mod p = -1
or
(p-1)! mod p = p-1




1) Initialize: result = 1
2) While n is not prime
    result = (result * n) % p
3) result = (result * (n-1)) % p  // Using Wilson's Theorem 
4) Return result
*/