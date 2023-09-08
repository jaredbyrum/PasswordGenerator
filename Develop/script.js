// Assignment code here
var strings = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*(){}[]<>,."
}

var chars = ' ';
var password = ' ';
var lengthRe = ' ';

var results = {
  lowerRe: function() {
    lower = confirm("Should your password use lowercase letters?");
    return lower;
  },
  upperRe: function() {
    upper = confirm("Should your password use uppercase letters?");
    return upper;
  },
  numbersRe: function() {
    numbers =confirm("Should your password use numbers?");
    return numbers;
  },
  symbolsRe: function() {
    symbols = confirm("Should your password use symbols?");
    return symbols;
  }
}



var generatePassword = function() {
  
  var lengthPrompt = function () {
    var lengthRe = prompt("How long should your passord be? 8-128 charcters.");
    if (lengthRe > 128) {
      alert("Please choose a password length between 8 and 128.");
      return;
    } else if (lengthRe < 8) {
      alert("Please choose a password length between 8 and 128.");
      return;
    } else {
      console.log(lengthRe);
      return lengthRe;
    }
  }
  var availableChars = function() {
    results.lowerRe();
    results.upperRe();
    results.numbersRe();
    results.symbolsRe();
    if (lower) {
      chars += strings.lower;
    } if (upper) {
      chars += strings.upper;
    } if (numbers) {
      chars += strings.numbers;
    } if (symbols) {
      chars += strings.symbols;
    } else {
      alert("Please choose at lease one character type.");
      return;
    }
    return chars;
  }
  var passwordGen = function (chars, lengthRe, password) {
    for (var i = 0; i < lengthRe; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
    } 
    return password;
  }
  lengthPrompt();
  availableChars();
  passwordGen();
  console.log(chars);
  console.log(password);
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(chars, password) { 
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
