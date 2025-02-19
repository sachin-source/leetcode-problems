/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Create map to store the brackets
    let map = new Map();
    map.set("{", "}")
    map.set("[", "]")
    map.set("(", ")")

    // Empty stack to store the opening brackets
    let stack = [];

    // Iterate through the string
    for (let i=0; i<s.length; i++) {

        // If the character is opening bracket, push it's pair to the stack
        if(map.has(s[i])) {
            stack.push(map.get(s[i]));
        } else if (stack.pop() != s[i]) {
            return false;
        }
    }
    // After all the iterations, Check if the stack is empty
    // Empty stack indicates bracket balancing
    return stack.length == 0;
};