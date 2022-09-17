// Assignment code here
function isBoolean(val) { //checks if a valid input has been inputted
  if (val == "true" || val == "false")
  {
    return true;
  }
  else {
    return false;
  }
}

function promptConstraints() { //Prompts the user for what constraints the password should use to generate

//Set password length 
  let passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = prompt("Length of Password? (Valid between 8 & 128 characters): ");
    if (passwordLength === null) {
      return; //break out of the function early on cancel
    }
  }

  //Variables to determine whether a character set should be included
  let includeLc; //lowercase
  let includeUc; //uppercase
  let includeNum; //number
  let includeSc; //special characters
  
  do { //checks to see if after running once if at least one character set was selected, otherwise reset and re-run
    includeLc = "";
    while (!isBoolean(includeLc))
    {
      includeLc = prompt("include lower case?: ");
      if (includeLc === null) {
        return; //break out of the function early on cancel
      }
    }

    includeUc = "";
    while (!isBoolean(includeUc))
    {
      includeUc = prompt("include upper case?: ");
      if (includeUc === null) {
        return; //break out of the function early on cancel
      }
    }

    includeNum = "";
    while (!isBoolean(includeNum))
    {
      includeNum = prompt("include numbers?: ");
      if (includeNum === null) {
        return; //break out of the function early on cancel
      }
    }

    includeSc = "";
    while (!isBoolean(includeSc))
    {
      includeSc = prompt("include special characters?: ");
      if (includeSc === null) {
        return; //break out of the function early on cancel
      }
    }

  } while (includeLc == "false" && includeUc == "false" && includeNum == "false" && includeSc == "false" ); 
  var includes = [includeLc, includeUc, includeNum, includeSc, passwordLength];
  return (includes);
}


function generatePassword() {
  var constraints = promptConstraints();
  
  var lowerCaseCharSet = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberCharSet = "1234567890";
  var specialCharSet = "~!@#$%^&*?/.";

  var filteredConstraints = [];


  //Filters the array for only the user-selected char sets
  var j = 0;
  for (var i =0; i < constraints.length-1;i++) {
    if (constraints[i] == "true") {
      filteredConstraints[j] = i; // [j] = 0 to 4 if true
      j++;
    }
  }

  //Two dimensional array
  var allCharSets = [filteredConstraints, lowerCaseCharSet,upperCaseCharSet, numberCharSet, specialCharSet];
  
  var generatedPassword =[];
  var selectedIndex, selectedElement;

  //Generating the password
  for (var i =0; i < constraints[4];i++) { //Select a random valid charset and character and assign it to 'generatedPassword' for each character included

    selectedIndex = (Math.floor(Math.random() * filteredConstraints.length)); // selectedIndex chooses which valid array to pull from 
    
    selectedElement = (Math.floor(Math.random() * allCharSets[filteredConstraints[selectedIndex]+1].length)); // selectedElement chooses an element inside the selectedIndex's index

    generatedPassword[i] = allCharSets[filteredConstraints[selectedIndex]+1]
    [selectedElement];
  }
  
  return generatedPassword.join('');
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
