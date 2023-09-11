// Assignment code here
var strings = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*(){}[]<>,."
}

var chars = ' ';
var password = ' ';
var lengthRe = 0;

function getResults() {
  lengthRe = prompt("How long should your passord be? 8-128 charcters.");
  if (isNaN(lengthRe) || lengthRe < 8 || lengthRe > 128) {
    alert("Please input a number between 8 and 128. Please try again!");
    return false;
  } 
  if (confirm("Should your password use lowercase letters?")) {
    chars += strings.lower;
  }  
  if (confirm("Should your password use uppercase letters?")) {
    chars += strings.upper;
  } 
  if (confirm("Should your password use numbers?")) {
    chars += strings.numbers;
  } 
  if (confirm("Should your password use special charcters?")) {
    chars += strings.symbols;
  } 
  return true;
}
    



var generatePassword = function() {
  for (var i = 0; i < lengthRe; i++) {
  random = chars.charAt(Math.floor(Math.random() * chars.length));
  password += random;
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = "";
  var goodPrompts = getResults(); 
  var passwordText = document.querySelector("#password");
  if (goodPrompts) {
    password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
