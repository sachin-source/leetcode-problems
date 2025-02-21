/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    // Create a map to store mappings
    let map = new Map();
    const words = s.split(" ");

    // Initial rejection when the lengths are not equal
    if(pattern.length != words.length) return false;

    // Iterate through each char of pattern for matching
    for(let i = 0; i<pattern.length; i++) {
        
        // Store if the pattern appeared for the first time
        if(!map.has(pattern[i])) map.set(pattern[i], words[i]);

        // Return false if the existing word for this char does not match with the current word
        if(map.get(pattern[i]) !== words[i]){
            return false;
        }
    }

    // Checking for the duplicates in the map values
    return new Set([...map.values()]).size === map.size
};