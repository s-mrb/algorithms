/*
Algo: Trivial Recursive, for non recursive see 2.js
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
 * @return {number[]}
 */

var preorderTraversal = function(root) {
        var arr = [0,]
    traverse(root, arr)
    return arr.splice(1,arr.length)
};

const traverse = (root,arr)=>{
    if(!root){
        return null
    }
    arr.push(root.val)
    traverse(root.left,arr)
    traverse(root.right,arr)
}
