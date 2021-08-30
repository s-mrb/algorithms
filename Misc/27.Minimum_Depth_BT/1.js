/*
NOTE:

Give it a thought why Max Depth algo with Math.min instead of Math.max won't work
*/

/*
Runtime: 232 ms, faster than 88.60% of JavaScript online submissions for Minimum Depth of Binary Tree.
Memory Usage: 73.3 MB, less than 76.96% of JavaScript online submissions for Minimum Depth of Binary Tree.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 *}
 */


/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0
  }
  if (!root.right) {
    return minDepth(root.left) + 1
  }
  if (!root.left) {
    return minDepth(root.right) + 1
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
}
