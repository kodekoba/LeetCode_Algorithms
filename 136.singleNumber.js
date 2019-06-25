/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //using extra memory
    /*
    var map = {};
    for (let i = 0; i < nums.length; i++) {
        var key = nums[i];
        if (!map[key]) {
            map[key] = true;
        } else {
            delete map[key];
        }
    }
    for (var key in map) {
        return key;
    }
    */
    
    //without using extra memory
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        res ^= nums[i];
    }
    return res;
};
