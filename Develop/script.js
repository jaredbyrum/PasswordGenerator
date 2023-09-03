// Assignment code here
//random functions using math.random and math.floor code found from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// Charecter Set https://net-comber.com/charset.html
var getRandomLower = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
var getRandomUpper = function () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
var getRandomNumber = function () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
var getRandomSymbol = function () {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)]; 
}
//test logs
console.log(getRandomSymbol());
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());

//object of random functions
var randomFunctions = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Prompts
function generateResponse() {
  var lengthResponse = prompt("How long should your password be? Between 8 and 128 characters.");
  
  var lowercaseResponse = confirm("Should your password use lowercase letters?");
  
  var uppercaseResponse = confirm("Should your password use uppercase letters?");
  
  var numbersResponse = confirm("Should your password use numbers?");
  
  var charactersResponse = confirm("Should your password use special characters?");  
  console.log(lengthResponse, lowercaseResponse, uppercaseResponse, numbersResponse, charactersResponse);
  return;
}
var length = +lengthResponse;

var generatePassword = function(lengthResponse, lowercaseResponse, uppercaseResponse, numbersResponse, charactersResponse) {
  for (var i = 0; i < {lengthResponse}; i++) {

  }
}

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
