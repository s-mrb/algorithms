/*
Runtime: 80 ms, faster than 68.33% of JavaScript online submissions for Add Binary.
Memory Usage: 41.3 MB, less than 23.67% of JavaScript online submissions for Add Binary.
*/

const addBinary = (a, b) => {
    let obj = { a: a, b: b }
    let max_len = a.length > b.length ? a.length : b.length
    let small_str = a.length < b.length ? 'a' : 'b'
    let carry = '0'
    let sum = ''
    let l = max_len - obj[small_str].length
  
    for (let i = 0; i < l; i++) {
      obj[small_str] = '0' + obj[small_str]
    }
  
    for (let i = max_len - 1; i >= 0; i--) {
      if (obj['a'][i] == '1' && obj['b'][i] == '1') {
        sum = carry + sum
        carry = '1'
        continue
      }
      if (obj['a'][i] == '0' && obj['b'][i] == '0') {
        sum = carry + sum
        carry = '0'
  
        continue
      }
      if (carry == '1') {
        sum = '0' + sum
      } else {
        sum = '1' + sum
      }
    }
    if (carry == '1') sum = '1' + sum
    return sum
  }
  
  console.log(addBinary('1', '111'))
  