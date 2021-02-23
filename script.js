//Step 1: Create arrays for password generation (Trilogy used for guidance on this step)
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

//Step 2: Onclick run the generate password function which creates the password string (Triology was used for guidance for this coding step)
document.getElementById("generate").addEventListener("click", function getCriteria () {

//Step 2.1: Have the user enter their preference data

var lengthPref=window.prompt("Enter a password length (8 to 128 characters) or hit enter to accept the default", 15);

//Step 2.2: Validate that length fits the parameters
if (8 > lengthPref || lengthPref > 128) {window.alert ("Your password length doesn't meet the right criteria!")
return false};

var lowercasePref = window.confirm("Would you like to include lowercase letters in the password?","");
var uppercasePref = window.confirm("Would you like to include uppercase letters in the password?","");
var numbersPref = window.confirm("Would you like to include numbers in the password?","");
var specialCharacterPref = window.confirm("Would you like to include special characters in the password?");

console.log(lengthPref, lowercasePref, uppercasePref, numbersPref, specialCharacterPref);

generatePassword();

});

//Step 3: generate the password

function generatePassword(lengthPref, lowercasePref, uppercasePref, numbersPref, specialCharacterPref){

//Step 3.1: create the master array (randomIndex) based on pref values

let randomIndex = [];
var finalPass = "";

  if (lowercasePref){
  randomIndex=randomIndex.concat(lowercase.values);
   }
  
  if (uppercasePref){
  randomIndex=randomIndex.concat(uppercase.values);
  }
  
  if (numbersPref){
  randomIndex=randomIndex.concat(number.values);
  }
  
  if (specialCharacterPref){
    randomIndex=randomIndex.concat(specialCharacter.values);

  console.log(randomIndex);
  }

//Step 2.4: Randomize from the mainArray, loop through the number of times in the  password length pref
//used Technical Cafe youtube video to understand math.floor in this context 
  for (let i = 0; i < lengthPref; i++){
  finalPass = finalPass + randomIndex.charAt(Math.floor(Math.random() * Math.floor(randomIndex.length-1))); 

}
return finalPass;
  };


// Step 3: Write password to the #password input (Trilogy was used for guidance for this coding step)
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
