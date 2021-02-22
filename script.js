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
let masterArray = [];


//Step 2: Onclick run the generate password function which creates the password string (Triology was used for guidance for this coding step)
document.getElementById("generate").addEventListener("click", function generatePassword (lowercase, uppercase, number, specialCharacter, masterArray) {

//Step 2.1: Have the user enter their preference data

let lengthPref=window.prompt("Enter a password length (8 to 128 characters) or hit enter to accept the default", 15);

//Step 2.2: Validate that length fits the parameters
if (8 > lengthPref || lengthPref > 128) {window.alert ("Your password length doesn't meet the right criteria!")
return false};

let lowercasePref = window.confirm("Would you like to include lowercase letters in the password?","");
let uppercasePref = window.confirm("Would you like to include uppercase letters in the password?","");
let numbersPref = window.confirm("Would you like to include numbers in the password?","");
let specialCharacterPref = window.confirm("Would you like to include special characters in the password?");

//Step 2.3: Populate the master array with concat

if (lowercasePref == true){
masterArray=masterArray.concat(lowercase);
  }

else if (uppercasePref == true){
masterArray=masterArray.concat(uppercase);
}

else if (numbersPref == true){
masterArray=masterArray.concat(number);
}

else if (specialCharacterPref == true){
 masterArray=masterArray.concat(specialCharacter);
}

//Step 2.4: Randomize from the masterArray, loop through the number of times in the  password length pref

var finalPass = "";

for (let i = 0; i < lengthPref; i++){
  finalPass = finalPass + masterArray.charAt(Math.floor(Math.random() * Math.floor(masterArray.length-1)));
}

//step 2.5//return the final password
return finalPass;
});

// Step 3: Write password to the #password input (Trilogy was used for guidance for this coding step)
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
