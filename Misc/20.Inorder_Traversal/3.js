/*
Runtime: 60 ms, faster than 99.44% of JavaScript online submissions for Binary Tree Inorder Traversal.
Memory Usage: 38.6 MB, less than 91.94% of JavaScript online submissions for Binary Tree Inorder Traversal.
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
var inorderTraversal = function(root) {
    var arr = [0,]
    traverse(root, arr)
    return arr.splice(1,arr.length)
};

const traverse = (root,arr)=>{
    if(!root){
        return null
    }
    traverse(root.left,arr)
        arr.push(root.val)
    traverse(root.right,arr)
}
