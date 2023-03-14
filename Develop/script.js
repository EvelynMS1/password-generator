// Assignment code here
//function that will have code to generate the password with certain criterias returns/prints the password
function generatePassword(){
  //create variable for promting of password length 
  //converting prompt response to a number if input is a value
const lengthofPassword = (prompt("Please indicate the total length that you would like your password to be, with a min of 8 and limit of 128"));
//use lengthofPassword value to double check whether it fits with the requirements of being a number verify if a string literal and or a number literal
 const typeofCharUpperCase = confirm("Would you like to include UpperCase letter values in your password?");
 const typeofCharLowerCase = confirm("Would you like to include LowerCase letter values in your password?");
 const typeofCharSpecial = confirm("Would you like your password to include special characters");
 const typeofCharNumeric = confirm("Would you like to include numerical values to your password?");


const  objArraysforPassword = {
  letterArray: ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"],
  specialCharArray: ["~","!","@","#","%","^","&","*","+","_"],
  numericArray : [1,2,3,4,5,6,7,8,9],
}
//function of changing letterArray to uppercase 
//Global variable that will have the different value arrays initializing it to empty array
let categoriesIncludedArray = [];
if ( typeofCharUpperCase == true ){
//-see if you can add the function of converting each array element to upper case within this scope
//this is adding an array property value to this variable  
//change to upper case
   categoriesIncludedArray += Object.values(objArraysforPassword.letterArray.toString().toUpperCase().split(","));

} else { 
	//add an empty string
   categoriesIncludedArray += [];
} 
if ( typeofCharLowerCase  ==true){
   categoriesIncludedArray += Object.values(objArraysforPassword.letterArray);
} else { 
	//add an empty string
   categoriesIncludedArray += [];
}
 if (typeofCharSpecial == true) {
   categoriesIncludedArray += Object.values(objArraysforPassword.specialCharArray);
} else { 
	//add an empty string
   categoriesIncludedArray += [];
}
 if (typeofCharNumeric == true) {
categoriesIncludedArray += Object.values(objArraysforPassword.numericArray);
} else { 
	//add an empty string
    categoriesIncludedArray += [];
}
//Now that we have our length of different arrays and it works for each array now we can initialize our random function 
//For random function selects a value between the given set of array
//Will not include at least one of each though
const responseRandomArrayValue= Math.floor(Math.random()*(categoriesIncludedArray.length - categoriesIncludedArray[0]+1))+ categoriesIncludedArray[0]
//number must be equivalent to the array number


while(responseRandomArrayValue != lengthofPassword) {
  console.log(responseRandomArrayValue)
}




 }



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
     //calls upon the generatePassword and assignes it a variable password 
  var password = generatePassword();
    //accesses the password id from html stores it in passwordText (text area)
  var passwordText = document.querySelector("#password");
//creating a property value named value with generatePassword function
//value is the action of obtaining the information that was inputted by the user is a specifc textbox

   passwordText.value = password;

}

// Add event listener to generate button
//when clicked on due to the writePassword
generateBtn.addEventListener("click",generatePassword );
