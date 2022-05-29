console.log("\n 13. Remove the Special Characters from a String (use RegExp): ");
const str = 'The quick brown fox! .!@#$%^&\*() jumps over';
const removeSpecialCharacters = str.replace(/[^\w ]/g, '');
console.log(removeSpecialCharacters);