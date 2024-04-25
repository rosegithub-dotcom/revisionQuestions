/**
 * Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g
 */

function stringCombinations(str) {
    const result = [];
    function generateComb(prefix, remaining) {
      if (prefix !== "") {
        result.push(prefix);
      }
      
      for(let i = 0; i < remaining.length; i++) {
        generateComb(prefix + remaining[i], remaining.slice(i+1))
      }
    }
   
    generateComb('', str);
    return result;
  }
  
  console.log(stringCombinations('dog'));