/**
 * Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
 */

function capitalizeWords(word) {
    let words = word.split(' ');
  
    for(let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  
    return words.join(' ');
  }
  
  console.log(capitalizeWords('the quick brown fox'));