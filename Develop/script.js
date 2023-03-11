// Assignment code here

// added 4 arrays given by TA through Slack

var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];

var allChar = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {


// Tutor helped with putting first variable into function and helped with figuring out how to use return
  var passwordLength = prompt("How long do you want your secure password to be?");

  if (passwordLength < 8 || passwordLength > 128) {
    alert(" Please choose a password between 8 and 128 characters long.");
    return generatePassword();
  }
// Class Zoom chat, Teacher helped with concat function ( I asked how to put all arrays into one function 
// so that all characters can be generated )
// Teacher helped with discerning array variable name from variable function name
  var hasUpperCaseChar = confirm("Do you want upper cased characters in your secure password?");

  if (hasUpperCaseChar === true) {
    alert("Great! Upper cased characters make your password more secure!");
    allChar = allChar.concat(upperCaseChar);
  }

  var hasLowerCaseChar = confirm("Do you want lower cased characters in your secure password?");

  if (hasLowerCaseChar === true) {
    alert("Great! Lower cased characters make your password more secure!");
    allChar = allChar.concat(lowerCaseChar);
  }

  var hasNumericChar = confirm("Do you want numeric characters in your secure password?");
  
  if (hasNumericChar === true) {
    alert("Great! Numeric characters make your password more secure!");
    allChar = allChar.concat(numericChar);
  }

  var hasSpecialChar = confirm("Do you want special characters in your secure password?");
  
  if (hasSpecialChar === true) {
    alert("Great! Special characters make your password more secure!");
    allChar = allChar.concat(specialChar);
  } else if (allChar.length === 0) {
    alert("You didn't pick any characters! We cannot create a password for you without chosing at least one!");
    return generatePassword();


  }

  console.log(allChar);
}


// Write password to the #password input
function writePassword() {
  var generateAPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("button click");
  passwordText.value = generateAPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
// User Starting Point To Generate Password


//console.log(generateAPassword);

//Questions for Tutor:

// How to have window prompt/alert open while also showing the generator in the background browser?
// question prcess of generating a password:
// password length, uppercased characters, lower cased characters, numbers, special characters
// if everything false, alert: Please select at least one criteria to generate secure password, the more criteria you selcet, the more secure your password will be
// How to include all arrays in one function word?
//Questions: Do you want Upper Case Letters in your password?
//Do you want lower case letters in your password?
//Do you want numbers in your password?
//Do you want Symbols in your password?


// for loop:
// else {
 // for (var i=0, i<passwordLength; i++ ) {
  //  var random = Math.floor
 // }
