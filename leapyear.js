//function to check if the year is a leap year
function LeapYear(year) {
    // Leap years are divisible by 4
    // But not divisible by 100 unless also divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  // Example usage:
  const yearToCheck = 2028;
  if (LeapYear(yearToCheck)) {
    console.log(`${yearToCheck} is a leap year.`);
  } else {
    console.log(`${yearToCheck} is not a leap year.`);
  }
  