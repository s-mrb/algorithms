var searchInsert = function (nums, target) {
    if (target <= nums[0])
        return 0;
    if (target > nums[nums.length - 1])
        return nums.length;
    let start = 0, end = nums.length - 1;
    while (start < end) {
        mid = Math.floor((end + start) / 2);
        if (nums[mid] > target)
            end = mid;
        else if (nums[mid] < target)
            start = mid + 1;
        else
            break;
    }
    return nums[mid] >= target ? mid : mid + 1
};