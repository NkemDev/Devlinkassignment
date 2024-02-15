function calculateBMI(weight, height) {
    // Check if both weight and height are valid numbers
    if (isNaN(weight) || isNaN(height)) {
      return "Invalid input. Please enter valid numbers for weight and height.";
    }
  
    // Convert height to meters if provided in centimeters
    if (height >= 100) {
      height /= 100;
    }
  
    // Calculate BMI
    const bmi = weight / (height * height);
  
    // Interpret BMI based on WHO standards
    let interpretation;
    if (bmi < 18.5) {
      interpretation = "Underweight";
    } else if (bmi < 25) {
      interpretation = "Normal weight";
    } else if (bmi < 30) {
      interpretation = "Overweight";
    } else {
      interpretation = "Obese";
    }
  
    // Display result
    return `Your BMI is ${bmi.toFixed(2)}. This indicates you are ${interpretation}.`;
  }
  
  // Example
  const weight = 70; // Change this to your weight
  const height = 1.8; // Change this to your height in meters or centimeters
  
  const bmiResult = calculateBMI(weight, height);
  
  console.log(bmiResult);
  