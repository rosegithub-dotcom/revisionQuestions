/**
 * Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4
 */

function findSecondLowestAndGreatest(numbers) {
    // Sort the array in ascending order
    const sortedArray = numbers.sort((a, b) => a - b);
    // Second lowest number is at index 1
    const secondLowest = sortedArray[1];
    // Second greatest number is at index length - 2
    const secondGreatest = sortedArray[sortedArray.length - 2];
  
    return [secondLowest, secondGreatest];
  }
  
  // OR
  function getSecondLowestAndGreatest(numbers) {
    // Initialize variables with the first element of the array
    let min = Infinity;
    let max = -Infinity;
    let secondMin = Infinity;
    let secondMax = -Infinity;
  
    // Iterate through the array to find minimum, maximum, second minimum, and second maximum numbers
    for (let num of numbers) {
        if (num < min) {
            secondMin = min;
            min = num;
        } else if (num < secondMin && num !== min) {
            secondMin = num;
        }
        
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max) {
            secondMax = num;
        }
    }
  
    return [secondMin, secondMax];
  }
  
  const numbers = [1, 2, 3, 4, 5];
  console.log(findSecondLowestAndGreatest(numbers)); // Output: [2, 4]
  console.log(getSecondLowestAndGreatest(numbers)); // Output: [2, 4]