const sieve = (n) => {
    let arr = new Uint8Array(n + 1)
    arr[0] = arr[1] = 1
    let count = 0
  
    for (let i = 2; i <= n; i++) {
      if (arr[i]==0) {
        count++
        for (let j = i; j <= n; j += i) {
          arr[j] = 1
        }
      }
    }
    return count
  }
  
  console.log(sieve(100))
  