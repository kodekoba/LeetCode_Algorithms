/*
 *Runtime: 100 ms, faster than 99.44% of JavaScript online submissions for Reverse String.
  Memory Usage: 46.9 MB, less than 39.75% of JavaScript online submissions for Reverse String.
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(let i = 0; i < Math.floor(s.length / 2); i++) {
        let temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
    }
    return s;
};
