var removeElement = function(nums, val) {
    var count = 0;

    for (var i = 0; i < nums.length; i++) {
        var current = nums[i];

        if (current === val) {
            nums[i] = Infinity;
        } else {
            count++;
        }
    }

    nums.sort((a, b) => a - b);

    return count;
};