//function to count the number of occurence of a string
function countCharacterOccurrences(string) {
    // Initialize an empty object to store character counts
    const characterCounts = {};
  
    // Convert the string to lowercase for case-insensitive counting
    string = string.toLowerCase();
  
    // Iterate through each character in the string
    for (const character of string) {
      // Check if the character is already present in the object
      if (characterCounts[character]) {
        // Increment the count for existing character
        characterCounts[character]++;
      } else {
        // Add the character as a new key with a count of 1
        characterCounts[character] = 1;
      }
    }
  
    // Return the object containing character counts
    return characterCounts;
  }
  

  const string = "Testing , testing on the microphone";
  const characterCounts = countCharacterOccurrences(string);
  
  console.log(characterCounts);
  