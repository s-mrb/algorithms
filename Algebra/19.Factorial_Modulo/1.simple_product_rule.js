/*
WHY?

Why 
    res = res * (i % mod)
won't work

That would work but at the end we need to do res%mod
Morever the code we wrote won't let ans to exceed mod
*/


const mod_fact = (num, mod) => {
  let res = 1

  for (let i = num; i >= 1; i--) {
    res = (res * i) % mod
  }

  return res
}

console.log(mod_fact(8, 11))
