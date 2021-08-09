/*

Greatest Common Divisor (GCD) of two or more numbers is the largest possible integer that can divide each of the numbers.

For example, GCD of 15, 10, and 20 is 5.

The trick to find GCD of more than two numbers is to use the GCD of two numbers with the third one.

For example, we will first calculate the GCD of the first two numbers of the array (say x), then we will calculate the GCD of the x and the third number, (say y) then again we will compute the GCD of y and the fourth number.

We will repeat this process until the last element of the array and the final GCD value would be the GCD of the whole array.

*/