//Create global variables
var length;
var lowercasePref;
var uppercasePref;
var numbersPref;
var specialCharacterPref;

//Create arrays for password generation
let lowercase = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];
let uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
];
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9,
];
let specialCharacter = [
  "!", "@", "#", "$", "%", "^", "&", "*", "'", "(", ")", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "\\", "]", "_",  "`",  "{", "|", "}",  "~",
];
let masterArray = [];
  
//onclick --> initiate function that lets the user enter their data
document.getElementById("generate").addEventListener("click", function enterCriteria (length) {
var length = window.prompt("Enter a password length (8 to 128 characters)","");
if (8 > length || length > 128) {window.alert ("Your password length doesn't meet the right criteria!")
return};
var lowercasePref = window.confirm("Would you like to include lowercase letters in the password?","");
var uppercasePref = window.confirm("Would you like to include uppercase letters in the password?","");
var numbersPref = window.confirm("Would you like to include numbers in the password?","");
var specialCharacterPref = window.confirm("Would you like to include special characters in the password?");
});

//generate the password based on the preferences the user entered
function generatePassword(lowercasePref, uppercasePref, numbersPref, specialCharacterPref) {
  if (lowercasePref == true){
  then masterArray.concat(lowercase);
  }
  else if (uppercasePref == true){
    then masterArray.concat(uppercase);
  }
  else if (numbersPref == true){
  then masterArray.concat(number);
  }
  else if (specialCharacterPref == true){
  then masterArray.concat(speciaCharacter);
  }
  var password = Math.floor(Math.random)*masterArray.length;
};

// Write password to the #password input (code provided)
function writePassword(password) {
var passwordText = password;
passwordText = document.querySelector("#password")
};
