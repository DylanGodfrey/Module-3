// Assignment code here
function isBoolean(val) {
  if (val == "true" || val == "false")
  {
    return true;
  }
  else {
    return false;
  }
}


/*
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected 
*/

function promptConstraints() {

//password length
  let passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("Length of Password? (Valid between 8 & 128 characters): ");
  }

  let includeLc = "";
  let includeUc = "";
  let includeNum = "";
  let includeSc = "";
  do {
    //includeLc
    includeLc = "";
    while (!isBoolean(includeLc))
    {
      includeLc = prompt("include lower case?: ");
    }

    //uc
    includeUc = "";
    while (!isBoolean(includeUc))
    {
      includeUc = prompt("include upper case?: ");
    }

    //num
    includeNum = "";
    while (!isBoolean(includeNum))
    {
      includeNum = prompt("include numbers?: ");
    }

    //sc
    includeSc = "";
    while (!isBoolean(includeSc))
    {
      includeSc = prompt("include special characters?: ");
    }
  } while (includeLc == "false" && includeUc == "false" && includeNum == "false" && includeSc == "false" ); //checks to see if after running once, if at least one character set was selected
}


function generatePassword() {
  promptConstraints();
  
  var allCharSets = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  var generatedPassword = "x";
  return generatedPassword;
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
