// https://leetcode.com/problems/symmetric-tree/

/*
Algo:

Compare two trees algo, just a small difference
that left one tree must be equal to right of the other
*/

/*
Runtime: 76 ms, faster than 93.99% of JavaScript online submissions for Symmetric Tree.
Memory Usage: 39.8 MB, less than 99.85% of JavaScript online submissions for Symmetric Tree.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return inorderTraversal(root.left, root.right)
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
          root2 = root2.right
          continue
        }
        root1 = stack1.pop()
        root1 = root1.right
        root2 = stack2.pop()
        root2 = root2.left
      }
    
      // if p and q are [] and [0] then stakcs will be empty at the end, hence don't compare stacks
      // both roots must be null,equal, at the end  
      return root1==root2
    }
    