// @param {string} digits
// @return {string[]}
 
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
var letterCombinations = function(digits){
    var digitDict = {     
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']};
    var combinations = [];



    if(digits.length===0){
        return combinations
    }

    for(var i=0; i<=digits.length; i++){
        var charr = digits.charAt(i)
    }

}




var letterCombinations = function(digits){
    for(var numberIndex = 0; letterIndex < letters.length; numberIndex++){
        for()
    }
}