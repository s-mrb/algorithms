/*
Algo:

Trivial Recursion, for better code see 2.js
*/

// https://leetcode.com/problems/binary-tree-inorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
Runtime: 76 ms, faster than 45.65% of JavaScript online submissions for Binary Tree Inorder Traversal.
Memory Usage: 38.9 MB, less than 50.72% of JavaScript online submissions for Binary Tree Inorder Traversal.
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  var arr = [0]
  inorder_t(root, arr)
  arr.splice(0, 1)
  return arr
}

var inorder_t = function (root, arr) {
  if (root) {
    inorder_t(root.left, arr)
    arr.push(root.val)
    inorder_t(root.right, arr)
  }
}
