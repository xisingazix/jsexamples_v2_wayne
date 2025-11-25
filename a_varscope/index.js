//1.Primitive Types

let pi = 3.142;                 // Variable with a number of 3.142
console.log(typeof pi);

let strValue = "Hello";         // Variable with a value of "Hello"     
console.log(typeof strValue);

let boolValue = true;            // Variable storing a boolean of true
console.log(typeof boolValue);

let nullValue = null;           // Variable of null value
console.log(typeof nullValue);

let undefineValue;              // Variable that is declared BUT uninitialised 
console.log(typeof undefineValue);

let arr = [ "a", "b", "c"];     // an Array with 3 elements, index 0 , 1 , 2  where 0 is "a" ,1 is "b" , 2 is "c" 
console.log(arr);

let faang = new Array();        //Declare a new INSTANCE of an Array called faang
faang[0] = "Facebook";          // Storing value to faang
faang[1] = "Amazon";
console.log(faang);

console.log(faang[0]);          //Accessing the value from index position 0 from array: faang

let person = {name: "Sam", age: 42}     //Create a Javascript Object with 2 key values pairs (name,age)
console.log(`Name:, ${person.name}`);   // Calling the value from different value pairs in the object 
console.log("Age:", person.age);        //Interpolated string template

let vehicle = new Object();             // Declaring a new INSTANCE of an Object called vehicle
vehicle.name = "Suzuki";                // Giving the vehicle object a PROPERTY called "name" and assigning it a value: "Suzuki"
vehicle.model = "Swift";                // Giving the vehicle object a PROPERTY called "model" and assigning it a value: "Switft"
vehicle.color = "Blue";

let announce = function(){
    console.log("Hello JS");        //Approach 1 of writing function
};

function announce2(){
    console.log("Hello JS");        //Approach 2 of writing function
};

announce2();                         //Invoke and execute the new object "announce()"

let announce3 = () => {             //Approach 3 of writing function
    console.log("Hello JS");        //Decalring a new object "announce3" as an ARROW function
};

announce3();

//3. Declaring variables using let const and var 

let PI = 3.14159;           // Declare a mutable variable called PI ,if let is replaced with const it will result in an error, as const cant be reassigned value
PI = 3.142;                 // Update PI's value because it is mutable
console.log(PI);    

// let variables
function greet(){
    let greeting = "Welcome FSD learners";
    console.log(greeting);
};

//greeting();   // greeting() only exist in greet() 

var localMsg = "Welcome FSD Developers";

function welcome(){
    var localMsg = "Welcome to Full Stack Development";     // this var value only exist in welcome()
    console.log(localMsg);
}

console.log(localMsg);  // Will call the globally defined localMsg

