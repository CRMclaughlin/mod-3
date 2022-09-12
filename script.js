// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  
  var userInput = window.prompt("How many characters do you want your password to be?");
  
  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)){
    window.alert("That's not a number!")
    return
  } 

  if (passwordLength < 8 || passwordLength > 128){
    window.alert("Password length must be between 8 and 128 characters")
    return
  }
  
  var userWantNumbers = window.confirm("Would you like to include numbers in your password?")
  var userWantLower = window.confirm("Would you like to include lowercase letters in your password?")
  var userWantUpper = window.confirm("Would you like to include uppercase letters in your password?")
  var userWantSpecial = window.confirm("Would you like to include special charaters in your password?")

  var numberList = ["0", "1", "2", "3","4","5","6","7","8","9"]
  var specialList = ["!","@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "`", "~", "<", ">", "/", "?", ":", ";", "|"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []

  var passwordbox = []

  for (var i = 0; i < lowercaseList.length; i++){
    uppercaseList[i] = lowercaseList[i].toUpperCase()
  }

  if (userWantNumbers === true){
    passwordbox.push(numberList)
  }

  if (userWantLower === true){
    passwordbox.push(lowercaseList)
  }
  
  if (userWantUpper === true){
    passwordbox.push(uppercaseList)
  }

  if (userWantSpecial === true){
    passwordbox.push(specialList)
  }

  console.log(passwordbox)
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

