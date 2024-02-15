//Program to convert Celusis to Fahreheit
function celsiusToFahrenheit(celsius) {
    // Conversion formula: (°C × 9/5) + 32 = °F
    return (celsius * 9/5) + 32;
  }
  
  // Example usage:
  const celsiusTemperature = 100;
  const fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
  console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F.`);
 
  