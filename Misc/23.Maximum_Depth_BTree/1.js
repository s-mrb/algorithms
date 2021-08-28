/*

Algo: Simple Recursion
It's easy, make sense of it from code


bottom up approach:
    last subtree's left/right child have height 0, so return 0 in terminating condition of recursion
    last tress's root height is 1, so when it's child's return 0 then add 1
*/

/*
Runtime: 72 ms, faster than 95.23% of JavaScript online submissions for Maximum Depth of Binary Tree.
Memory Usage: 41.7 MB, less than 61.63% of JavaScript online submissions for Maximum Depth of Binary Tree.
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}
