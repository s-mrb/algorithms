// const fn = (n) => {
//   var current = 0
//   var next = 1

//   for (i = 0; i < n; i++) {
//     [current, next] = [next, current + next]
//   }
//   return current
// }

// var d1 = Date.now()
// // milli sec
// console.log(fn(27))
// var d2 = Date.now()
// console.log(d2 - d1)

const fn = (n) => {
    let current = 0
    let next = 1
    let temp;
    for (let i = 0; i < n-1; i++) {
      [current, next] = [next, current + next]
    }
    return next
  }
  
  var d1 = Date.now()
  // milli sec
  console.log(fn(27))
  var d2 = Date.now()
  console.log(d2 - d1)
  