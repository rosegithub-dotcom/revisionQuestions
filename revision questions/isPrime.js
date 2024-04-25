/**
 * Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.
Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 */

function isPrime(num) {
    if(num <= 1) {
      console.log(num, 'Not prime');
      return false;
    }
    if(num <= 3) {
      console.log(num, 'Is prime');
      return true;
    }
    if(num % 2 === 0) {
      console.log(num, 'Not prime');
      return false;
    } else {
      console.log(num, 'is prime');
      return true;
    }
  }
  
  isPrime(5);
  isPrime(-5);
  isPrime(8);
  isPrime(1);