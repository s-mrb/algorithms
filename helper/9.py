import random
def isPrime(n, k=5):
    def isComposite(s, d):
        x = pow(int(random.randrange(2,n-1)), d, n)
        # print(n)
        # x = pow(random.randint(2,n-1), d, n)
        if x == 1 or x == n-1: return False
        for r in range(1, s):
            x = pow(x, 2, n)
            if x == 1: return True
            if x == n-1: return False
        return True
    if n < 2: return False
    for p in [2, 3, 5, 7, 11, 13, 17]:
        if n % p == 0: return n == p
    s, d = 0, n-1
    while d % 2 == 0: s, d = s+1, d//2
    for i in range(k):
        if isComposite(s, d): return False
    return True


count = 0
for i in range(2, 1000):
    if isPrime(i):
        # print(i)
        count = count+1

print('\n', count)

# print(isPrime(1234567890123))
# print(random.randint(2,n-1))