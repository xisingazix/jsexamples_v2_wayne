//import the prompt-sync library
const prompt = require('prompt-sync')({sigint: true});  // allows CTRL+C to terminate the app


// introduce response when fail
function greetUser(){
    let userName = prompt("Please enter your name:");        
    
    if(userName.trim()){   // "  " will be trimmed , guard rial to  prevent spaces being used
        console.log(`Welcome to FSD ${userName}!!!`);
    }else{
        console.log("We did not receive your name!!");      //alert changed to  console.log()
    }
}
 
greetUser();