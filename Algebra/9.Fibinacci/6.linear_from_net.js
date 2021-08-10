// Much faster than Mine implementation of file 1, but WHY?

function Fib(n) {
    if (n == 1 || n == 2) {
      return 1;
    } else {
      var secondToLastFib = 1;
      var lastFib = 1;
      for (var i = 3; i <= n; i++) {
        var currentFib = secondToLastFib + lastFib;
        secondToLastFib = lastFib;
        lastFib = currentFib;
      }
      return currentFib;
    }
  }

var d1 = Date.now()
console.log(Fib(1476))
var d2 = Date.now()

console.log(d2-d1)