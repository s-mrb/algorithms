// FAULTY IMPLEMENTATION ONLY GIVE CORRECT ANSWER FOR ODD FIB NUMBERS

const fn = (n) => {
  var current = 0
  var next = 1
  var c
  var d

  for (let i = n; i; i = i >> 1) {
    c = current * ((2*next) - current)
    d = current * current + next * next

    if (i & 1) {
      ;[current, next] = [d, c + d]
    } else {
      ;[current, next] = [c, d]
    }
  }
  return [current,next]
}

var start = Date.now()
console.log(fn(29))
console.log(Date.now() - start)


// fib(100000000) should be
// 4.73710347345633696254897131335103865754868E+20898763