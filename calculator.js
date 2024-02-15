//A calculator Program 
function add(a, b) {//addition
    return a + b;
  }
  
  function subtract(a, b) { //subtraction
    return a - b;
  }
  
  function multiply(a, b) {//multiplication
    return a * b;
  }
  
  function divide(a, b) {//division
    if (b === 0) {
      return "Cannot divide by zero";
    }
    return a / b;
  }
  
  
  const num1 = 20;
  const num2 = 14;
  
  console.log(`Addition: ${num1} + ${num2} = ${add(num1, num2)}`);
  console.log(`Subtraction: ${num1} - ${num2} = ${subtract(num1, num2)}`);
  console.log(`Multiplication: ${num1} * ${num2} = ${multiply(num1, num2)}`);
  console.log(`Division: ${num1} / ${num2} = ${divide(num1, num2)}`);
  