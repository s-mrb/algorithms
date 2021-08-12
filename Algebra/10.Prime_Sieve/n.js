const find_primes = (n) => {
  var arr = Array.apply(null, Array(n + 1)).map((elem, i) => i)

  for (let i = 2; i+i <= n; i++) {
    if (arr[i] == 0) {
      continue
    }
    console.log(i)
    for (let j = 2*i; j <= n; j =j+i) {
      arr[j] = 0
    }
  }

  let count = 0
  for(let k=0; k<=n; k++){
      if(arr[k]>0){
          count++
      }
  }
  return arr
}

var c = find_primes(10)

console.log(c)
