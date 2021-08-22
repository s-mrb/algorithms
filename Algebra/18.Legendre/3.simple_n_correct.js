const legendre_exp = (num, base) => {
  let t = base
  let x = 0
  while (num) {
    num = Math.floor(num / base)
    x += num
  }
  return x
}
