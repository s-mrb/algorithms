var climbStairs = function(n) {
    a = b = 1
    while (n--)
        a = (b += a) - a
    return a
};

console.log(climbStairs(0))