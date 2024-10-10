// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charArr = str.split('');
    let charCount = {}; 

    for (let char of charArr) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let maxChar = ''; 
    let maxCount = 0; 

    for (let char in charCount) {
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }

    return maxChar;
}


module.exports = maxChar;
