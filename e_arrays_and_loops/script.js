// ---------
// 1. ARRAYS
// ---------

// Basic array
// This is just an example, the best practice is to store a single data type to an array
<<<<<<< HEAD
const myArray = [1, 2, 3, 4, "Hello", true, null];
=======
const myArray = [ 1, 2, 3, 4, "Hello", true, null];
console.log(myArray);
>>>>>>> 0c0e91b (add exercises arrays and loops)
console.log(myArray.length);

// B) ARRAY METHODS

// i - map function of an array
// Implement your code here
<<<<<<< HEAD
const mappedArray = [1, 2, 3, 4, 5, 6]; 

const multiplyArrBy10 = mappedArray.map(item => item * 10); /* Short-hand of the arrow function */
=======
const mappedArray = [1, 2, 3, 4, 5, 6];

const multiplyArrBy10 = mappedArray.map(item => item * 10); /* short hand of arrow function*/
>>>>>>> 0c0e91b (add exercises arrays and loops)
console.log(multiplyArrBy10);

// ii - filter function of an array
// Implement your code here
<<<<<<< HEAD
const vowels = ["a", "e", "i", "o"];
=======
const vowels = ["a", "e", "i", "o", "u"];

const filteredVowels = vowels.filter(vowel => vowel === "a" || vowel === "u");
console.log(filteredVowels);

const filteredVowels2 = vowels.filter((vowel) => {          // the long format of the function above
    return (vowel === "a" || vowel === "u");
});
console.log(filteredVowels2);       
>>>>>>> 0c0e91b (add exercises arrays and loops)

// ? re-write the example below using an arrow function (long-form)
const filteredVowels = vowels.filter(vowel => vowel === "a" || vowel === "u");
console.log(filteredVowels);

// iii - sort function of an array
// Implement your code here
<<<<<<< HEAD
const nums =  [1, 3, 2, 5, 4, 6]; 
const names = ["James", "Chris", "Max", "Lenon"];
=======
const nums = [ 1, 2, 4, 3, 5, 6];
const names = ["James", "Chris", "Max", "Lenon"];

// Sort by descending order
// Implement your code here
const descendNums = nums.sort((a, b) => a > b ? -1 : 1) ; /* - 1 : 1  will signify a descending sort */
console.log(descendNums);


const ascendingNums = nums.sort((a, b) => a > b ? 1 : -1) ; 
console.log(ascendingNums);
const ascendingNums2 = nums.sort((a, b) => a < b ? -1 : 1) ;
console.log(ascendingNums2)
const ascendingNums3 = nums.sort() ;  // default ascending
console.log(ascendingNums3)

const descendName = names.sort((a, b) => a > b ? -1 : 1) ;
console.log(descendName);
const ascendingName = names.sort() ;  // default ascending
console.log(ascendingName);

const reverseNames = names.toReversed()
console.log(reverseNames);
>>>>>>> 0c0e91b (add exercises arrays and loops)

// Sort by descending order
// Implement your code here
const descendNums = nums.sort((a, b) => a > b ? -1 : 1 );
console.log("descendNums", descendNums);

const ascendNums = nums.sort((a, b) => a > b ? 1 : -1 ); /* num.sort() acheives the same: ascending sort */
console.log("ascendNums", ascendNums);

<<<<<<< HEAD
// Sort by descending order
// Implement your code here
const descendNames = names.sort((a, b) => a > b ? -1 : 1 );
console.log(descendNames);

const ascendNames = names.sort();   /* By default, array.sort() sorts in ascending order */
console.log(ascendNames);
=======
const numbers = new Array(1, 2 , 3, 4);             // reduce , applies the function using all the value in the array and returns a single value
const product_of_arr = numbers.reduce((a, b) => a * b); //24
console.log(product_of_arr);
>>>>>>> 0c0e91b (add exercises arrays and loops)

// iv - reduce function of an array
// Implement your code here
const numbers = new Array(1, 2, 3, 4);
const product_of_arr = numbers.reduce((a, b) => a * b);     // 24
console.log(product_of_arr);

// another approach of applying a reduce function of an array
// Implement your code here
const arr = new Array(2, 3, 4, 5);
<<<<<<< HEAD
=======

function product(a, b){
    return a * b;
}

const resultOfProduct = arr.reduce(product);
console.log(resultOfProduct);

const teamList = ["Tanna", "Shalyn", "Zhang", "Francis"] // 0-3
teamList.push("MUhaimin");
console.log(teamList.length);       // 0-4
console.log(teamList);

teamList.pop();                     // dont ned arguments as its auto remove last item
console.log(teamList.length);       // 0-3
console.log(teamList);              // 3names
>>>>>>> 0c0e91b (add exercises arrays and loops)

function product(a, b){
    return a * b;
}

const resultOfProduct = arr.reduce(product);
console.log(resultOfProduct);

// append elements to an EXISTING array
const teamList = ["Tanna", "Shalyn", "Zhang", "Francis"];   // 0 - 3
teamList.push("Muhaimin");                                  // 0 - 4
console.log(teamList.length);
console.log(teamList);

// remove the last element of an EXISTING array
teamList.pop();                                             // intrinsically known to remove lst element
console.log(teamList.length);                               // 0 - 3 
console.log(teamList);                                      // 4 names

// shift and unshift elements of an array
const mag7 = ["FB", "AMZN", "AAPL", "TSLA", "GOOG"];
console.log(mag7.shift());                                  // FB removed
console.log(mag7);                                          // AMZN, AAPL, NFLX, GOOG

// Unshift (prepend META, NVDA, MSFT)
mag7.unshift("META", "NVDA", "MSFT");
console.log(mag7);

// splice data (insert or replace data in an array)
const bballTeam = ["Jordan", "Pippen", "Bill"];             // 0 - 2
const index = 2;
const newPlayer = "Steve Carr";  
bballTeam.splice(index, 0, newPlayer);                      // ["Jordan", "Pippen", "Steve Carr", "Bill"]                           
console.log(bballTeam);

bballTeam.splice(bballTeam.length - 1, 1, "Rodman");        // Replace "Bill" with "Rodman" 
console.log(bballTeam);

//shift and unshift
const mag7 = ["FB", "AMZN", "AAPL", "TSLA", "GOOG"];
console.log(mag7.shift());          // shift removes first elements from array and returns the value, FB
console.log(mag7)
// unshift (prepend META NVDA MSFT)
mag7.unshift("META", "NVDA", "MSFT");   // unshift adds the arugments to the array
console.log(mag7);

//Splice Data
const bballTeam = ["Jordan", "Pippen", "Bill"]      //0-2
const index = 2;
let newPlayer = "Steve Carr";
bballTeam.splice(index,0,newPlayer);
console.log(bballTeam);                         //[ 'Jordan', 'Pippen', 'Steve Carr', 'Bill' ]

//replace bill with rodman

bballTeam.splice(3,1,"Rodman");     //[ 'Jordan', 'Pippen', 'Steve Carr', 'Rodman' ]
console.log(bballTeam);
// ---------    
// 2. LOOPS
// ---------

// i - for loops (Simulate a countdown using a for loop)
// Implement your code here
const max = 10;
for (let i = 1; i <= max ; i++) {
    console.log(i);    
}

//index, the condition and the step are variables
const max100 = 100;
for (let i = 10; i <= max100; i = i + 10){
    // 10 , 20 , 30, 40 ... 100//
    console.log(i);
}

//countdown
for (let i = max; i >= 0 ; i--) {
    
    if(i === 0){
        console.log(`Merry X mas!`);
    }else{
        console.log(`${i} days to Christmas`)
    }
}

for (let i = max; i >= 0 ; i--){
    // TERNARY operation model of above for loop , if is replace with a '?'  ,  else if replace with ':'
    (i === 0) ? console.log(`Merry X mas!`) : console.log(`${i} days to Christmas`)
    }


// Do a count up (1 - 10)
const max = 10;
for (let index = 1; index <= max; index++) {
   console.log(index);
}

// change the index, the condition and the step (variables that can change)
const max100 = 100;
for (let index = 10; index <= max100 ; index = index + 10) {
    console.log(index);                                         // 10, 20, 30, 40, 50 ... 100
}

// count down (10 - 1); TERNARY operation
for (let index = max; index >= 0 ; index--) {
    // if(condition) ? execute if condition block : else block (ternary operation)
    (index === 0) ? console.log("Merry X'mas") : console.log(index);
}


// ii - for-each loop
// Implement your code here
<<<<<<< HEAD
const tickerSymbols = ["META", "AMZN", "GOOG", "MSFT"];

for (let index = 0; index < tickerSymbols.length; index++) {
    console.log(`${index + 1}. ${tickerSymbols[index]}`);
}

tickerSymbols.forEach((element, index) => { console.log(`${index + 1}. ${element}`) });

// iii - do-while loop (do first, check later)
// Implement your code here
// let i = 0;
=======
const tickerSymbols = ['META', 'NVDA','MSFT', 'AMZN','AAPL', 'TSLA','GOOG']

tickerSymbols.forEach(element => { console.log(element) })   // if no {} added will result in a short hand function,
tickerSymbols.forEach((element, index)=> { console.log(`${index +1}. ${element}`) })
// iii - do-while loop (Do first, check later) (compare to while loop, it wil lat least run 1 time regardless of condition)
// Implement your code here
let i = 0;
do{
    console.log(i);
    i++;
}while (i <= 5);

let j = 0;
while (j <= 5){
    console.log(j);
    j++;
}


>>>>>>> 0c0e91b (add exercises arrays and loops)

do {
    console.log(i); // print 0 to 10
    i++;
} while (i <= 5);

// iv - while loop (check the conditions first before running the while loop)
// Implement your code here

let j = 0;
while (j <= 10) {
    console.log(j); // print 0 to 10
    j++;
}