
// Program to check password
// create all the variables
  var Strength_score = 0;
  var Password = prompt("Enter your Password");
  var lowercasealphabets = "abcdefghijklmnopqrstuvwxyz";
  var uppercasealphabets = "ABCDEFGHIJKMLMNOPQRSTUVWXYZ";
  var Numbers = "0123456789";
  var Symbols = "&~!@#$%^*_-";
  var flag = true;

  // call each function and increment score by 2 if any function is true
  if (Password == ""){
    console.log("Enter Password again");
  }else{
  Strength_score = checkLowerAlpha(Password,lowercasealphabets,flag,Strength_score);
  Strength_score = checkUpperAlpha(Password,uppercasealphabets,flag,Strength_score);
  Strength_score = checkNumbers(Password,Numbers,flag,Strength_score);
  Strength_score = checkSymbols(Password,Symbols,flag,Strength_score);
  Strength_score = checkLength(Password,Strength_score);
  
  //  Print the score and the status
  console.log(Strength_score);
  if (Strength_score >= 8){
    console.log("Strong Password");
  }else{
    console.log("Weak Password");
  }
  }
// function to check the lower case character is present in the password
function checkLowerAlpha(Password,lower,flag,Score){
  for (i = 0; i<Password.length;i++){
    if(flag==true){
      if (Password.includes(lower.substring(i, i+1))){
        Score+=2;
        flag = false;
        console.log()
      }
    }
  }return Score;
}
// function to check the Upper case character is present in the password
function checkUpperAlpha(Password,Upper,flag,Score){
  for (i = 0; i<Password.length;i++){
    if(flag==true){
      if (Password.includes(Upper.substring(i, i+1))){
        Score+=2;
        flag = false;
      } 
    } 
  }return Score;
}

// function to check the Numbers present in the password
function checkNumbers(Password,numbers,flag,Score){
  for (i = 0; i<Password.length;i++){
    if(flag==true){
      if (Password.includes(numbers.substring(i, i+1))){
        Score+=2;
        flag = false; 
      } 
    } 
  }return Score;
}


// function to check the special character is present in the password
function checkSymbols(Password,Symbols,flag,Score){
  for (i = 0; i<Password.length;i++){
    if(flag==true){
      if (Password.includes(Symbols.substring(i, i+1))){
        Score+=2;
        flag = false; 
      } 
    } 
  }return Score;
}


// function to check if the password contains characters more than 8
function checkLength(Password,Score){
  if (Password.length>=8){
    Score+=2;
    return Score;
  }
}