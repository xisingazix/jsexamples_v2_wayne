let ans = 10;
let ansString = "ten";

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();
//if user press q or Q , he quits
while (userInput !== 'q') { // as long as the user doesn't enter 'q' AND 'Q', run the loop
    
    //if user enter correct result
    if (Number(userInput) === ans || userInput === "ten") {
        alert("You got it right!");
        break;
    }
    else if (!userInput) {          // no input
        userInput = prompt("Your answer is empty. Please enter a value").toLowerCase();
    }
    else {              // Wrong answer provide and alert
        alert("Answer is incorrect")
        userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();
    }
}
