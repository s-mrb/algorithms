/*
Algo: Iterative


*/



/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    var stack = []
    var arr = []
    let crt_height=0
    let mx_height = 0
    while (root || stack.length) {
      if (root) {
        stack.push(root)
        root = root.left
        continue
      }
      root = stack.pop()
      arr.push(root.val)
      root = root.right
    }
  
    return arr
  }
  