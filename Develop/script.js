// Assignment code here

var userSelected = [];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specialChar = ['!','@','#','$','%','^','&','*','(',')'];




function generatePassword(length) {
  var password = '';
  var passwordLength = length;
  for (var i = 0; i <= passwordLength; i++) {
     var randomNumber = Math.floor(Math.random() * chars.length);
     password += chars.substring(randomNumber, randomNumber +1);
   }
  document.getElementById("password").value = password;


}

function askUser (){
  passwordLength = parseInt(prompt("How long do you want your password to be? Select from 8-128 characters"));
    if(isNaN(passwordLength)|| passwordLength < 8 || passwordLength > 128) {
      alert("Incorrect password length")
      return false;
    }

    if (confirm("Do you want to include lowercase characters?")){
      userSelected = userSelected.concat(lowerCase);
    }
    if (confirm("Do you want to include uppercase characters?")){
      userSelected = userSelected.concat(upperCase);
    }
    if (confirm("Do you want to include numbers?")){
      userSelected = userSelected.concat(numbers);
    }
    if (confirm("Do you want to include special characters?")){
      userSelected = userSelected.concat(specialChar);
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
