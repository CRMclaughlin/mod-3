// Assignment Code
var generateBtn = document.querySelector("#generate");


// function to get a random integer
function randomInt(min, max){
  if (!max){
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(Math.random() * (max - min) ) + min;
}

function getRandomItem(list){
  return list[randomInt(list.length)]
}

function generatePassword(){
  
  var userInput = prompt("How many characters for your password?");
  
  var passwordLength = parseInt(userInput)

// Check for correct numbers to be used and password length 
if (isNaN(passwordLength)){
    alert("Please select a number between 8 - 128!")
    return
  } 

  if (passwordLength < 8 || passwordLength > 128){
    alert("Password length must be between 8 and 128 characters")
    return
  }
  
  // prompts for user to select which characters to use
 
  var userWantNumbers = confirm("Would you like to include numbers in your password?")
  var userWantLower = confirm("Would you like to include lowercase letters in your password?")
  var userWantUpper = confirm("Would you like to include uppercase letters in your password?")
  var userWantSpecial = confirm("Would you like to include special charaters in your password?")

  var numberList = ["0", "1", "2", "3","4","5","6","7","8","9"]
  var specialList = ["!","@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "`", "~", "<", ">", "/", "?", ":", ";|"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []

  var passwordBox = []

  //  For loop changes lowercase letters to upper case through uppercase method, instead of writing the alphabet twice.
  // https://www.w3schools.com/js/js_loop_for.asp
   for (var i = 0; i < lowercaseList.length; i++){
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  //.push adds characters to open array passwordBox
  if (userWantNumbers === true){
    passwordBox.push(numberList)
  }

  if (userWantLower === true){
    passwordBox.push(lowercaseList)
  }
  
  if (userWantUpper === true){
    passwordBox.push(uppercaseList)
  }

  if (userWantSpecial === true){
    passwordBox.push(specialList)
  }
// If no modifiers are selected, program will give random numbers
  if (passwordBox.length === 0) {
    passwordBox.push(numberList)
  }

var generatedPassword = ""

for (var i = 0; i < passwordLength; i++) {
  var randomList = getRandomItem(passwordBox)
  var randomChar = getRandomItem(randomList)
  generatedPassword += randomChar
}

//
console.log(generatedPassword)
  return generatedPassword
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

