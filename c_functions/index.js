//1 .Writing a function declaration
function ftnGreeting(salutation, user){
    // How do i factor this?
    // const msg = "Hi, " + salutation + " " + user ;
    const msg = `Hi, ${salutation} ${user}`;

    return msg;
}


// since ftnGreeting returns a string we can refactor it by removing the ned for const result
//const result = ftnGreeting("Mr.", "Jones");
//console.log(result);

console.log(ftnGreeting("Mr.", "Jones"));

//2. Does a function return a undefined by default?  
function ftnNoreturn(a, b){
    const result = a +b;
}
console.log(ftnNoreturn);
//Without the term 'return' it will not return undefined, only when return is present it will return undefined

//2.1 Equip ftnAdd to handle NON-existent ARGUMENTS (passed to its paramenters)
//function ftnAdd(a, b){              //function will take in 2 parameters for its function
function ftnAdd(a = 0, b = 0){          // set default value for the parameter to handle NON -existent arguments
    const result = a +b;
    return result;
}
const sum = ftnAdd(10, 5);  //ftn will send over 2 arguments 
console.log(sum);           //15

const anothersum = ftnAdd();        /*Passing in ZERO ARGUMENTS*/
console.log(typeof anothersum);     //number  as ftnAdd have + used , hence expecting to get a number in return
console.log(anothersum);

//3. Arrow Function
// Allow the function to handle non-existent arguments
const anotherftnGreeting = (salutation = "",name = "") => {
    
    // Handle empty values passed in 
    if (salutation.length == 0 && name.length == 0)
        return "PLease enter your salutation and name.";

        // Otherwise, return the greeting
    return `Hello, ${salutation} ${name}. Welcome to Generation Bootcamp`;
};

console.log(anotherftnGreeting("Ms.", "Fareeda"));
console.log(anotherftnGreeting());              // N0 Parameter is passed to function, = "" added to saluation default value to prevent error on undefine value.length




