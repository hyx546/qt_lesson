/**
 * @param {string} s
 * @{number}
 */

// 从右开始，永远和最大的进行比较，如果大于最大的就为正数，否则就减
var romanObj = {'I': 1,'V': 5,'X': 10,'L': 50,'C': 100,'D': 500,'M': 1000};
var romanToInt = function(s) {
    let max = 0;
    let result = 0;
    for (var i = s.length - 1; i >= 0; i--) {
        var currRoman = s[i];
        var currVal = romanObj[currRoman];
        result += currVal >= max ? currVal : -currVal;
        max = Math.max(max, currVal);
    }
    return result;
};
