// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase ="abcdedefghijklmnopqrstuvWxyz"
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
var numeric = "1234567890"
var special = "!@#$%^&*()"


// Write password to the #password input

function writePassword(){
  var params={}
  var passwordText= "";
  var result = "";
  //What length does the user want the password to be?
  var passwordLengthUser = prompt("How many characters would you like your password to be? (Password must be between 8-128 characters)");
    while (isNaN(passwordLengthUser) || passwordLengthUser <8 || passwordLengthUser >128) {
     alert("Password must be between 8-128 characters.");
      return  ;
    }
   
  
  //Does the user want lowercase?
  params.lower = confirm("Would you like to include lowercase?");
   if (params.lower) {
     passwordText += lowercase;
   }
  //Does the user want uppercase?
  params.upper = confirm("Would you like to include uppercase?");
   if (params.upper) {
     passwordText += uppercase;
     
   }
  //Does the user want numeric chars?
  params.numeric = confirm("Would you like to include numeric characters?");
  if (params.numeric) {
    passwordText += numeric;
  }
  //Does the user want special chars?
  params.special = confirm("Would you like to include special characters?");
  if (params.special) {
    passwordText += special;
  }
  while (!params.numeric && !params.upper && !params.lower && !params.special ) {
    alert("You must select at least one character type!");
  return""}
  
  
  for (var i = 0; i < passwordLengthUser; i++) {
    result += passwordText.charAt(Math.floor(Math.random() * passwordText.length));
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = result;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
