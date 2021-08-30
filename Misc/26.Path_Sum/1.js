// fails few test cases, see 2.js

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  s(root, 0, targetSum)
}

const s = (root, parentSum, targetSum) => {
  if (!root) {
    return parentSum
  }
  let l = s(root.left, root.val + parentSum, targetSum)
  let r = s(root.right, root.val + parentSum, targetSum)
  console.log(l,root.val,r,root.val)
  return l == targetSum ? l : r
}
