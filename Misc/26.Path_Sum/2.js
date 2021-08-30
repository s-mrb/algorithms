

/*
Runtime: 80 ms, faster than 81.69% of JavaScript online submissions for Path Sum.
Memory Usage: 42.9 MB, less than 37.00% of JavaScript online submissions for Path Sum.
*/

var hasPathSum = function(root, targetSum) {
    var traverse = function(root, sum) {
        if(root === null){ return false; }
        if(root.left === null && root.right == null){
            return sum + root.val === targetSum;
        }
        sum += root.val;
        return traverse(root.left, sum) || traverse(root.right, sum);
    }
    return traverse(root, 0);
};