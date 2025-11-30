let ans = 10;
let ansString = "ten";

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();

// as long as the user doesn't enter 'q' AND 'Q', run the loop
while (userInput !== 'q') {
    console.log(userInput);
    if(Number(userInput) === 10 || userInput === "ten"){                                // correct answer, provide an alert
        alert("You are correct");
        break;
    }
    else if(!userInput){                                                                // input empty string, provide an alert and prompt
        userInput = prompt("You answer is empty. Please enter a value").toLowerCase();
    }
    else{                                                                               // wrong answer, provide an alert and prompt
        alert("Answer incorrect.");
        userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();
    }
}
