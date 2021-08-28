const fib = (n) => {
    let f1 = 0
    let f2 = 1
    n = n - 1
    while (n--) {
      ;[f1, f2] = [f2, f1 + f2]
    }
    return f2
  }