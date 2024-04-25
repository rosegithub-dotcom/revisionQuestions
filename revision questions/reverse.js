/**
 * Write a JavaScript function that reverses a number.
Example x = 32243;
 */

function reverseNumber(num) {
    const str = num.toString();
  
    return parseInt(str.split('').reverse().join(''));
  }
  
  function reverseWord(word) {
    return word.split('').reverse().join('');
  }
  
  // OR
  function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
  }
  
  console.log(reverseWord('hello'));
  console.log(reverseString('world'));