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
  var includes = [includeLc, includeUc, includeNum, includeSc];
  return (includes);
}


function generatePassword() {
  var constraints = promptConstraints();
  
  var allCharSets = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M","1","2","3","4","5","6","7","8","9","0"," ","!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\]","^","_","`","{","|","}","~"];
  if (constraints[3] == "false") { //specials
    allCharSets.splice(62, 100 - 62 + 1);
    console.log("special chars removed: "+ allCharSets)
  }
 
  if (constraints[2] == "false") { //numbers
    allCharSets.splice(52, 62 - 52 + 1);
    console.log("numbers removed: "+ allCharSets)
  }
   
  if (constraints[1] == "false") { //uppercase
    allCharSets.splice(26, 51 - 26 + 1);
    console.log("Uppercase removed: "+ allCharSets)
  }
  if (constraints[0] == "false") { //lowercase
    
    allCharSets.splice(0, 25 - 0 + 1);
    
    console.log("Lowercase removed: "+ allCharSets)
  }
  var generatedPassword = allCharSets;


  /*
  remove from range if () 
  includeLc == "false" && includeUc == "false" && includeNum == "false" && includeSc == "false"
  */

  return generatedPassword;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(includeLc, includeUc, includeNum, includeSc) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
