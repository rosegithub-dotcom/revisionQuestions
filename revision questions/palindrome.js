/**
 * Write a JavaScript function that checks whether a passed string is a palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
 */

function isPalindrome(str) {
    // Function to check if a character is alphanumeric
    function isAlphanumeric(char) {
      return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9');
    }
  
  // Remove non-alphanumeric characters and convert to lowercase
    let cleanStr = '';
    for (let i = 0; i < str.length; i++) {
        if (isAlphanumeric(str[i])) {
            cleanStr += str[i].toLowerCase();
        }
    }
  
  // Compare characters from start and end
    for (let i = 0; i < Math.floor(cleanStr.length / 2); i++) {
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return false; // Characters don't match
        }
    }
    return true; // All characters match, so it's a palindrome
  }
  
  console.log(isPalindrome("madam")); // true
  console.log(isPalindrome("nurses run")); // true
  console.log(isPalindrome("hello")); // false