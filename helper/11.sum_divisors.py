# Python3 program to find sum of
# prime divisors of N
import math

# Function to check if the
# number is prime or not.
def isPrime(n) :

	# Corner cases
	if (n <= 1) :
		return False
	if (n <= 3) :
		return True

	# This is checked so that we can skip
	# middle five numbers in below loop
	if (n % 2 == 0 or n % 3 == 0) :
		return False
	
	i = 5
	while i * i <= n :
		if (n % i == 0 or n % (i + 2) == 0) :
			return False
		i = i + 6

	return True

# function to find sum of prime
# divisors of N
def SumOfPrimeDivisors(n) :

	Sum = 0
	
	# return type of sqrt function
	# if float
	root_n = (int)(math.sqrt(n))
	for i in range(1, root_n + 1) :
		if (n % i == 0) :
		
			# both factors are same
			if (i == (int)(n / i) and isPrime(i)) :
				Sum += i
			
			else :
				# both factors are
				# not same ( i and n/i )
				if (isPrime(i)) :
					Sum += i
				
				if (isPrime((int)(n / i))) :
					Sum += (int)(n / i)
					
	return Sum
	
n = 15
print(SumOfPrimeDivisors(n))

# This code is contributed by rameshtravel07
