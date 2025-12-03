//Trim a String
let wordWithTrim = "    FSD     ";
console.log(`"${wordWithTrim.trim()}"`);
console.log(`"${wordWithTrim.trimStart()}"`);
console.log(`"${wordWithTrim.trimEnd()}"`);

//toString (convert Number to String)
let statusCode = 404;
console.log(typeof statusCode.toString())       // toString method
console.log(typeof String(statusCode).toString()) // type-cast method

//a Boolean does not have a toString method!(Boolean to String)
let boolVal = true; 
console.log(String(boolVal).toString())     //only can use type-cast method

// Splitting a string 
let fullName = "John Wick the Babayaga";
let splitName = fullName.split(" ");
console.log(splitName.length);
console.log(splitName);
console.log(`Welcome ${splitName[0]} ${splitName[1]}!, to our hotel!`);

// Split a string and obtain the string by X Elements
let sentence = "Hello World JS Coders";
let splitInstances = sentence.split(" ", 3);
console.log(splitInstances);
let splitWord = splitInstances[0].split("");
console.log(splitWord);

//Split the String based on today's date and render a custom 
const currDate = Date.now();        // started frm 1970, in milisecond
const today = new Date(currDate);         //new instance of Date
let splitToday = today.toDateString();          // [day] mmm dd yyyy
splitToday = splitToday.split(" ");         // ["day", "mmm", "dd", "yyyy"]
console.log(splitToday[0]);

let msg = "";

switch (splitToday[0]) {
    case "Mon":
        msg = "Monday blues"
        break;
    case "Tue":
        msg = "The Sleeper has awaken!"
        break;
    case "Wed":
        msg = "Work, work!"
        break;
    case "Thu":
        msg = "Off i go then..."
        break;
    case "Fri":
        msg = "TGIF"
        break;
    case "Sat":
        msg = "Its's Hammertime!"
        break;
    default:
        msg = "Weekend is Here"
        break;
}
console.log(msg);

// Slicing a string (when working with String Object methods, 
// each character is treated as an array)
let sentence2 = "Good Morning";
let slicedResult = sentence2.slice(0,4);    //position 0 to 4
console.log(slicedResult);      //Good
console.log(sentence2);     //non-mutate

let slicedResult2 = sentence2.slice(2); //single +ve number,remove and return string from the numbered position
console.log(slicedResult2);

let slicedResult3 = sentence2.slice(-2); //single -ve number,return(number)character frm back
console.log(slicedResult3);

// Concatenation 
let firstName = "Wayne";
let lastName = "Gan";
let myName = firstName.concat(" ", lastName); //join and add " " at connection
console.log(myName);

//Arithmetic + operater to concat a string
let myName2 = firstName + " " + lastName ;
console.log(myName2);

//Substring (extracting parts frm string)
let language = "JavaScript";
let substr = language.substring(0, 4); //similar to slice 0 to 4
console.log(substr);       //non-mutate
console.log(language);      // language unchanged ,JavaScript

let substr2 = substr.substring(1);  //single +ve,removes and return from numbered posiiton
console.log(substr2);   //similar to Slice
