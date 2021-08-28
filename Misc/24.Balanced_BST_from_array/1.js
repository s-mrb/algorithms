/*
Algo:

Recursive:

Your function must take an array, start_index, end_index

bbst(arr,n,m):
    if((m-n)==0){
        return null
    }
    mid = (n+m)/2
    node.val = arr[mid]
    node.left = bbst(arr, n, mid-1)
    node.right = bbst(arr, mid+1, m)

*/

/*
Given an integer array nums where the elements are sorted in ascending order,
convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two
subtrees of every node never differs by more than one.
*/

/*
Runtime: 80 ms, faster than 88.15% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
Memory Usage: 41.5 MB, less than 36.45% of JavaScript online submissions for Convert Sorted Array to Binary

Runtime: 76 ms, faster than 96.46% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
Memory Usage: 41.2 MB, less than 89.19% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
*/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

function sortedArrayToBST(arr) {
  return bbst(arr, 0, arr.length - 1)
}

const bbst = (arr, start, end) => {
  if (start > end) {
    return null
  }
  var mid = parseInt((start + end) / 2)
  var node = new TreeNode()
  node.val = arr[mid]
  node.left = bbst(arr, start, mid - 1)
  node.right = bbst(arr, mid + 1, end)
  return node
}
var arr = [1, 2, 3, 4, 5, 6, 7]
var n = arr.length
root = sortedArrayToBST(arr, 0, n - 1)
console.log(root)
