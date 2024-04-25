/**
 * Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5
 */

function countVowels(word) {
    const vowelList = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    for(let i = 0; i < word.length; i++) {
      if(vowelList.indexOf(word[i]) !== -1) {
        count+=1;
      }
    }
  
    return count;
  }
  
  console.log(countVowels('The quick brown fox'));





