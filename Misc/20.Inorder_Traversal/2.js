/*
Algo:

- keep stack to store parent node and point node to left
- if node is empty then pop last parent and store value in array and point node to it's right

               1
             /   \
            /     \
           2       3
          /      /   \
         /      /     \
        4      5       6
              / \
             /   \
            7     8


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  var stack = []
  var arr = []
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
