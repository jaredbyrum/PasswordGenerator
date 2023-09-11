// Assignment code here
var strings = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*(){}[]<>,."
}
// global values for functions
var chars = ' ';
var password = ' ';
var lengthRe = 0;

function getResults() {
  //length prompt
  lengthRe = prompt("How long should your passord be? 8-128 charcters.");
  if (isNaN(lengthRe) || lengthRe < 8 || lengthRe > 128) {
    alert("Please input a 'number' between 8 and 128. Please try again!");
    return false;
  } 
  // character prompts
  var lowerRe = confirm("Should your password use lowercase letters?");
  var upperRe = confirm("Should your password use uppercase letters?");
  var numberRe = confirm("Should your password use numbers");
  var symbolRe = confirm("Should your password use symbols");
  //adds to char string
  if (lowerRe) {
    chars += strings.lower;
  }
  if (upperRe) {
    chars += strings.upper;
  }
  if (numberRe) {
    chars += strings.numbers;
  }
  if (symbolRe) {
    chars += strings.symbols;
  }
  //if all false rejects attempt and restarts app
  if (!lowerRe, !upperRe, !numberRe, !symbolRe) {
    alert("Please choose at least one character type and try again.");
    return false;
  } else {
    return true;
  }
}
    


// code for charAt found on Stack Overflow
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
  //resets password value to nothing everytime you press the button
  password = "";
  var goodPrompts = getResults(); 
  var passwordText = document.querySelector("#password");
  if (goodPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
