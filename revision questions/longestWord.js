/**
 * Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string. 
 * Example string : 'Web Development Tutorial'
Expected Output : 'Development'
 */

function longestWord(word) {
    let words = word.split(' ');
    let longestWord = words[0];
    for(let i = 0; i < words.length; i++) {
      if(words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  
  console.log(longestWord('Web Development Tutorial'), 'Answer: Development');
  console.log(longestWord('I am a web developer'), 'Answer: developer');