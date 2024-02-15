//program to validate an email address
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  }
  
  // Example usage:
  const testEmail1 = "johndoe@example.com";
  const testEmail2 = "invalid.email@";
  const testEmail3 = "valid@domain.co.uk";
  
  console.log(validateEmail(testEmail1));
  console.log(validateEmail(testEmail2)); 
  console.log(validateEmail(testEmail3)); 
  