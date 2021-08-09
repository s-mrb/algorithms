// Below code uses the matrix form whose determinant results in Cassini's Identity
// https://en.wikipedia.org/wiki/Fibonacci_number#matrix-form

// 
const find_nth_fib = (n) => {
  var mat = [
    [1, 1],
    [1, 0],
  ]

  var fibs = mat_pow(mat, n-1)
  var fn_minus_2 = fibs[1][1]
  var fn_minus_1 = fibs[0][1]
  var fn = fibs[0][0]

  return [fn,fn_minus_1,fn_minus_2]
}

const mat_pow = (matrix, pow) => {
  var res = JSON.parse(JSON.stringify(matrix))
  for (let i = 0; i < pow - 1; i++) {
    res = mat_mul(res, matrix)
  }
  return res
}

const mat_mul = (mat_a, mat_b) => {
  var [a_rows, a_cols] = find_dim(mat_a)
  var [b_rows, b_cols] = find_dim(mat_b)

  if (a_cols !== b_rows) {
    throw new Error('Matrix dimentions not suitable!')
  }

  var result = generate_2d_array(a_rows, b_cols)
  let vector_product = 0
  let b_col_slice = []
  for (let i = 0; i < a_rows; i++) {
    for (let j = 0; j < b_cols; j++) {
      b_col_slice = slice_col(mat_b, j)
      vector_product = find_vect_product(mat_a[i], b_col_slice)
      result[i][j] = vector_product
    }
  }
  return result
}

const find_vect_product = (vect_a, vect_b) => {
  let sum = 0
  for (let i = 0; i < vect_a.length; i++) {
    sum = sum + vect_a[i] * vect_b[i]
  }
  return sum
}

const slice_col = (arr, col_index) => {
  var slice = []
  for (let i = 0; i < arr.length; i++) {
    slice.push(arr[i][col_index])
  }
  return slice
}

const find_dim = (arr) => {
  if (!Array.isArray(arr)) {
    return 1
  }
  return arr[0].length ? [arr.length, arr[0].length] : [1, arr.length]
}

const generate_2d_array = (n, m, initializer = 0) => {
  var one_row = Array.apply(null, Array(m)).map((elem, i) => initializer)
  var two_d_arr = Array.apply(null, Array(n)).map((elem, i) => [...one_row])

  return two_d_arr
}

console.log(find_nth_fib(5))
