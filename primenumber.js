// A program to check if a number is a prime number
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    // Check divisibility from 2 to square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  

  const numberCheck = 29;
  if (isPrime(numberCheck)) {
    console.log(`${numberCheck} is a prime number.`);
  } else {
    console.log(`${numberCheck} is not a prime number.`);
  }
  