/*
Algo: recursive
*/

/*
Runtime: 76 ms, faster than 44.75% of JavaScript online submissions for Binary Tree Postorder Traversal.
Memory Usage: 38.1 MB, less than 99.39% of JavaScript online submissions for Binary Tree Postorder Traversal.
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
var postorderTraversal = function(root) {
           var arr = [0,]
    traverse(root, arr)
    return arr.splice(1,arr.length) 
};

const traverse = (root,arr)=>{
    if(!root){
        return null
    }
    
    traverse(root.left,arr)
    traverse(root.right,arr)
    arr.push(root.val)
}
