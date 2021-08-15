def _try_composite(a, d, n, s):
    p =pow(a, d, n) 
    if p == 1:
        return False
    for i in range(s):
        p2 = pow(a, 2**i * d, n)
        # print(a,"^(2^",i,"*",d," ") = ")
        # print(a,"2^",i,"*",d," = ",pow(a,2**i * d))
        # print(pow(a,2**i * d))
        if p2 == n-1:
            return False
    return True  # n  is definitely composite


def is_prime(n, _precision_for_huge_n=16):
    if n in _known_primes:
        return True
    if any((n % p) == 0 for p in _known_primes) or n in (0, 1):
        return False
    d, s = n - 1, 0
    while not d % 2:
        d, s = d >> 1, s + 1
    # Returns exact according to http://primes.utm.edu/prove/prove2_3.html
    if n < 25326001:
        return not _try_composite(2, d, n, s) 
    if n < 25326001:
        return not any(_try_composite(a, d, n, s) for a in (2, 3, 5))
    if n < 118670087467:
        if n == 3215031751:
            return False
        return not any(_try_composite(a, d, n, s) for a in (2, 3, 5, 7))
    if n < 2152302898747:
        return not any(_try_composite(a, d, n, s) for a in (2, 3, 5, 7, 11))
    if n < 3474749660383:
        return not any(_try_composite(a, d, n, s) for a in (2, 3, 5, 7, 11, 13))
    if n < 341550071728321:
        return not any(_try_composite(a, d, n, s) for a in (2, 3, 5, 7, 11, 13, 17))
    # otherwise
    return not any(_try_composite(a, d, n, s)
                   for a in _known_primes[:_precision_for_huge_n])


_known_primes = [2]
count = 0
for i in range(2, 1000):
    if is_prime(i):
        # print(i)
        count = count+1

print('\n', count)

# print('83 = >',is_prime(83))