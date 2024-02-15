function sortAscending(number) {
    return number.sort((a, b) => a - b);
  }
  
  
  const numbers = [4, 2, 7, 1, 9, 5];
  const sortedNumbers = sortAscending(number);
  console.log("Sorted Numbers (Ascending):", sortedNumbers);
  