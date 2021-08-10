// The largest Fibonacci number that can be calculated using the Javascript number type is fib(1474)
// because Fibonacci numbers after that are too large.

// n max = 1476
// This code i faster than Matrix Implementation in file number 4 of this folder

const fn = (n)=>{
    var current = 0
    var next = 1

        for(i =0; i<n; i++){
            [current,next] = [next,current+next]
        }
    return current
}


var d1 = Date.now()
console.log(fn(1476))
var d2 = Date.now()
console.log(d2-d1)