import random


def is_Prime(n):
    """
    Miller-Rabin primality test.

    A return value of False means n is certainly not prime. A return value of
    True means n is very likely a prime.
    """
    if n != int(n):
        return False
    n = int(n)
    # #Miller-Rabin test for prime
    # if n==0 or n==1 or n==4 or n==6 or n==8 or n==9:
    #     return False

    # if n==2 or n==3 or n==5 or n==7:
    #     return True
    s = 0
    d = n-1
    while d % 2 == 0:
        d >>= 1
        s += 1
    assert(2**s * d == n-1)

    def trial_composite(a):
        if pow(a, d, n) == 1:
            return False
        for i in range(s):
            if pow(a, 2**i * d, n) == n-1:
                return False
        return True

    for i in range(1):  # number of trials
        a = 2
        if trial_composite(a):
            return False

    return True



count = 0
for i in range(2, 1000):
    if is_Prime(i):
        # print(i)
        count = count+1

print('\n', count)

# print(is_Prime(1234567890123))
