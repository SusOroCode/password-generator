// Assignment code here

var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];

var allChar = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var generateAPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("button click");
  passwordText.value = generateAPassword;
}

function generatePassword() {
  var passwordLength = prompt("How long do you want your secure password to be?");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a password between 8 and 128 characters long.");
    return generatePassword();
  }

  var hasUpperCaseChar = confirm("Do you want upper cased characters in your secure password?");

  if (hasUpperCaseChar) {
    alert("Great! Upper cased characters make your password more secure!");
    allChar = allChar.concat(upperCaseChar);
  }

  var hasLowerCaseChar = confirm("Do you want lower cased characters in your secure password?");

  if (hasLowerCaseChar) {
    alert("Great! Lower cased characters make your password more secure!");
    allChar = allChar.concat(lowerCaseChar);
  }

  var hasNumericChar = confirm("Do you want numeric characters in your secure password?");

  if (hasNumericChar) {
    alert("Great! Numeric characters make your password more secure!");
    allChar = allChar.concat(numericChar);
  }

  var hasSpecialChar = confirm("Do you want special characters in your secure password?");

  if (hasSpecialChar) {
    alert("Great! Special characters make your password more secure!");
    allChar = allChar.concat(specialChar);
  } else if (allChar.length === 0) {
    alert("You didn't pick any characters! We cannot create a password for you without chosing at least one!");
    return generatePassword();
  }

  var generateAPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomPassword = allChar[Math.floor(Math.random() * allChar.length)];
    generateAPassword += randomPassword;
  }

  return generateAPassword;
}

// Worked with Tutor on putting first if statement into function

// Classmate room, worked on concat method to merge arrays

// Worked with classmate Serish on running the for loop properly. 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Resources: https://javascript.info/alert-prompt-confirm





