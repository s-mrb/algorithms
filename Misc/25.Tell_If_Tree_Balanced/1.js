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

var isBalanced = function (root) {
  return maxDepth(root) == Infinity ? false : true
}

var maxDepth = function (root) {
  if (!root) {
    return 0
  }
  let lh = maxDepth(root.left) + 1
  let rh = maxDepth(root.right) + 1
  if (Math.abs(lh - rh) > 1) {
    return Infinity
  }
  return Math.max(lh, rh)
}
