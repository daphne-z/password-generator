function enterCriteria() {
  // Ask user for their password parameters
  var length = window.prompt("Enter a password length (8 to 128 characters)","");
  var lowercasePref = window.prompt("Would you like to include lowercase letters in the password? Enter Y or N","");
  var uppercasePref = window.prompt("Would you like to include uppercase letters in the password? Enter Y or N","");
  var numbersPref = window.prompt("Would you like to include numbers in the password? Enter Y or N","");
  var specialCharactersPref = window.prompt("Would you like to include special characters in the password? Enter Y or N");
  
  // If user pressed Cancel, immediately end function
  if (!length) {
    return;
    }
    else if (!lowercasePref) {
      return;
    }
    else if (!uppercasePref) {
      return;
    }
    else if (!numbersPref) {
      return;
    }
    else if (!specialCharactersPref) {
      return;
    }
}

// Convert to uppercase to make comparisons easier
  lowercasePref = lowercasePref.toUpperCase();
  uppercasePref = uppercasePref.toUpperCase();
  numbersPref = numbersPref.toUpperCase();
  specialCharactersPref = specialCharactersPref.toUpperCase();

//set parameters for random strings 
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "1234567890";
  const specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//generate the password
function generatePassword() {
  passwordText.length=length;
  If lowercasePref = "Y"
}

// Write password to the #password input
function writePassword() {
 var password = generatePassword();
  var passwordText = document.querySelector("#password");
}
