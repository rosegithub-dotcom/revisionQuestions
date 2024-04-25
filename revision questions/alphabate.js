/**
 * Write a JavaScript function that returns a string that has letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/

function sortStringAlphabetically(str) {
    // Convert the string to an array of characters, sort them, and join them back into a string
    return str.split('').sort().join('');
  }
  
  console.log(sortStringAlphabetically('rose'));
  // OR
  function alphabeticalArrangement(str) {
    // Convert the string to an array of characters
    const chars = str.split('');
  
    // Bubble sort to sort the characters
    for (let i = 0; i < chars.length - 1; i++) {
        for (let j = 0; j < chars.length - i - 1; j++) {
            if (chars[j] > chars[j + 1]) {
                // Swap characters if they are out of order
                const temp = chars[j];
                chars[j] = chars[j + 1];
                chars[j + 1] = temp;
            }
        }
    }
  
    // Join the sorted characters back into a string
    return chars.join('');
  }
  
  console.log(alphabeticalArrangement('webmaster'));