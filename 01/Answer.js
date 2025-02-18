/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create empty map
    let map = new Map();

    // Iterate through the array
    for (let i = 0; i<nums.length; i++) {

        // Get the current number
        let num1 = nums[i];

        // Calculate the complement needed to reach the target
        let num2 = target - num1;

        // Check if the complement already exists in the map
        if(map.has(num2)) return [i, map.get(num2)];

        // Store the current value in the map
        map.set(num1, i);
    }
};