/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // Create map
    let map = new Map();
 
    // Iterate through array
    for(i=0;i<nums.length;i++){
 
    // Check if number exists to check the difference
     if(map.has(nums[i])){
 
        // Check difference and return true if the difference is less than K
        if((i - map.get(nums[i])) <= k) return true;
 
     }

     // Storing all the values as is
     map.set(nums[i], i)
    }
    // Return false otherwise
    return false;
 };