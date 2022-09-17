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
  var accountedFor = [];


  var j = 0;
  for (var i =0; i < constraints.length-1;i++) {
    if (constraints[i] == "true") {
      filteredConstraints[j] = i; // [j] = 0 to 4 if true
      accountedFor[j] = false;
      j++;
    }
  }

  //Two dimensional array
  var allCharSets = [filteredConstraints, lowerCaseCharSet,upperCaseCharSet, numberCharSet, specialCharSet];
  
  var generatedPassword =[];
  var selectedIndex, selectedElement;
  //First pass of generating the password
  // wrap in do while until all needed types are accountedFor[]?
  for (var i =0; i < constraints[4];i++) {
    //                     = [random valid charset][random value in that valid charset]
    //filteredConstraints[(Math.floor(Math.random() * filteredConstraints))]

    selectedIndex = (Math.floor(Math.random() * filteredConstraints.length)); // randIndex chooses which array to pull from 
    accountedFor[selectedIndex] = true;
    
    selectedElement = (Math.floor(Math.random() * allCharSets[filteredConstraints[selectedIndex]+1].length)); // randItem chooses an element inside the randomIndex's index

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
