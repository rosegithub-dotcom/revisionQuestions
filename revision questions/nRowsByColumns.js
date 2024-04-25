/**
 * Write a JavaScript function which returns the n rows by n columns identity matrix.
 */

function matrix(num) {
    for(let i = 0; i < num; i++) {
      for(let j = 0; j < num; j++) {
        if(i === j) {
          console.log(1)
        } else {
          console.log(0)
        }
      }
      console.log(num, '-------------');
    }
  }
  
  matrix(4);
  matrix(5);