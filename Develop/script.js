// Assignment code here

// added 4 arrays given by TA Meg Meyers through Slack

var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z',];
var lowerCasedCharacters = [ 'a','b', 'c','d', 'e','f', 'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [ '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
// User Starting Point To Generate Password

window.onload = alert('Welcome to the Secure Password Generator! Please click the red button that says "Generate Password" to start!');


var passwordLength = prompt("How long do you want your secure password to be?");

if (passwordLength <8 || passwordLength > 128) {
  alert (" Please choose a password between 8 and 128 characters long.")
}

console.log(password);

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
