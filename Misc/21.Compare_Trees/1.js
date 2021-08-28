/*
Algo:

Just do inorder traversal of both trees simultaneously

For much intuitive code see 2.js
*/

/*
Runtime: 68 ms, faster than 88.40% of JavaScript online submissions for Same Tree.
Memory Usage: 40.2 MB, less than 24.77% of JavaScript online submissions for Same Tree.
*/


/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    return inorderTraversal(p, q)
  }
  
  var inorderTraversal = function (root1, root2) {
    var stack1 = []
    var stack2 = []
  
    while (root1 || stack1.length) {
      if (root1 || root2) {
        if (!(root1!=undefined && root2!=undefined)) {
          return false
        }
        if (root1.val != root2.val) {
          return false
        }
        stack1.push(root1)
        root1 = root1.left
        stack2.push(root2)
        root2 = root2.left
        continue
      }
      root1 = stack1.pop()
      root1 = root1.right
      root2 = stack2.pop()
      root2 = root2.right
    }
  
    // if p and q are [] and [0] then stakcs will be empty at the end, hence don't compare stacks
    // both roots must be null,equal, at the end  
    return root1==root2
  }
  