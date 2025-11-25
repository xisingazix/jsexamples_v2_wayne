// 4. Type casting
//Converting values to numbers using the Number object
console.log(Number("3.142"));   // 3.142
console.log(Number(Math.PI));   // 3.141592653589793
console.log(Number("    "));    // 0  
console.log(Number(""));        // 0
console.log(Number("88 88"));   // NaN(not a number)
console.log(Number("Number"));  // NaN(not a number)

// Converting values to Strings Objects

console.log((new Date()));          //  2025-11-24T06:43:27.649Z ,Unformat form of Date and time
console.log(String(new Date()));   //  Mon Nov 24 2025 14:43:04 GMT+0800 (Singapore Standard Time) , Formated Date and time
console.log(String("98765"));       //  "98765"
console.log(String(98765));         //  "98765"

// Converting values into boolean
console.log(Boolean("1"));          //true  (truthy response) , a string
console.log(Boolean(1));            //true
console.log(Boolean("0"));          //true  (truthy response) , a string
console.log(Boolean(0));            // FALSE   
console.log(Boolean(" "));          //true  (truthy response)
console.log(Boolean(""));           // FALSE    (Falsy response)
console.log(Boolean("False"));      //true  , a string

// let's try abit of a trivia using a prompt in the web browser
function greetUser(){
    let userName = prompt("Please enter your name:");        
    
    if(userName){   // what if the user enters a series of spaces, what happens, will result in truthy response,
        alert(`Welcome to FSD ${userName}!!!`);
    }
}
// "    " true
// 1    true
// 0  true 
// "" false


greetUser();
 
function greetUser(){
    let userName = prompt("Please enter your name:");        
    
    if(userName.trim()){   // "  " will be trimmed , and treated as empty string
        alert(`Welcome to FSD ${userName}!!!`);
    }
}
 
greetUser();

