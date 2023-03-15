
//function generate  password with certain by asking user to input password categories to be included within password
function generatePassword(){
  //create variable for the promting of password length 
let lengthofPassword = prompt("Please indicate the total length that you would like your password to be, with a min of 8 and limit of 128");
//returns alert and stops program from running futher is users response is not a number 
if (isNaN(lengthofPassword)) {
   alert ("not valid")
   return
} 
 //converting prompt response to a number if input is a number value
lengthofPassword = parseInt(lengthofPassword);
// displays questions based on what categories the user may includ for password given in confirm options
 const typeofCharUpperCase = confirm("Would you like to include UpperCase letter values in your password?");
 const typeofCharLowerCase = confirm("Would you like to include LowerCase letter values in your password?");
 const typeofCharSpecial = confirm("Would you like your password to include special characters");
 const typeofCharNumeric = confirm("Would you like to include numerical values to your password?");

 console.log(lengthofPassword);
//object variable with different categories for types of values that user can include
const  objArraysforPassword = {
  letterArray: ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"],
  specialCharArray: ["~","!","@","#","%","^","&","*","+","_"],
  numericArray : [1,2,3,4,5,6,7,8,9],
}

console.log("hellloooo")
//Global variable that will have the different value arrays initializing it to empty array
let categoriesIncludedArray = [];
//initializes password value provided by random function for password for specific array
let passwordValue = "";
//if conditions for user input of values they want to include, also picking random value from given array and then subtracting it from the password length value 
if ( typeofCharUpperCase == true ){
//changing letterArray propery to uppercase 
   const upperCaseArray = objArraysforPassword.letterArray.toString().toUpperCase().split(",")
   categoriesIncludedArray = categoriesIncludedArray.concat(upperCaseArray);
   passwordValue += upperCaseArray[Math.floor(Math.random()*(upperCaseArray.length))];
   console.log(passwordValue);
   lengthofPassword--;
} 
if ( typeofCharLowerCase  == true){
   categoriesIncludedArray = categoriesIncludedArray.concat(objArraysforPassword.letterArray);
   passwordValue += Math.floor(Math.random()*(objArraysforPassword.letterArray.length));
   console.log(passwordValue);
   lengthofPassword--;
} 
 if (typeofCharSpecial == true) {
   categoriesIncludedArray = categoriesIncludedArray.concat(objArraysforPassword.specialCharArray);
   passwordValue += Math.floor(Math.random()*(objArraysforPassword.specialCharArray.length));
   console.log(passwordValue);
   lengthofPassword--;
} 
 if (typeofCharNumeric == true) {
   categoriesIncludedArray = categoriesIncludedArray.concat(objArraysforPassword.numericArray);
   passwordValue += Math.floor(Math.random()*(objArraysforPassword.numericArray.length));
   console.log(passwordValue);
   lengthofPassword--;
} 

console.log(categoriesIncludedArray);

//number must be equivalent to the array number
let i = 0 ;
console.log(lengthofPassword);
//while loop that iterates until remaing legthofPassword is equivalent changes index values to the values within the array back
while(i < lengthofPassword) {
  const responseRandomArrayValue= Math.floor(Math.random()*(categoriesIncludedArray.length));
  const value = categoriesIncludedArray[responseRandomArrayValue] //go over
  passwordValue += value;
  console.log(responseRandomArrayValue);
  i++;
}

return passwordValue
 }


//accesses the generate id from html document and creates a variable for it
var generateBtn = document.querySelector("#generate");

//function 
function writePassword() {
     //calls upon the generatePassword and assignes it a variable password 
  var password = generatePassword();
    //accesses the password id from html stores it in passwordText (text area)
  var passwordText = document.querySelector("#password");

//value is the action of obtaining the information that was inputted by the user is a specifc textbox
//password is the value of generatePassword function assigned to passwordText from html  provides the value from function to the document
   passwordText.value = password;

}


//when clicked on uses the value of passwordText.value to html doc
generateBtn.addEventListener("click", writePassword );
