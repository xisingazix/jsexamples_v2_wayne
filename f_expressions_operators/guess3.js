let ans = 10;

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();

// as long as the user doesn't enter 'q' AND 'Q', run the loop
while (userInput !== 'q') {
    
    if(Number(userInput) === 10){                                                       // correct answer, provide an alert
        alert("You are correct");
        break;
    }
    else if(!userInput){                                                                // input empty string, provide an alert and prompt
        userInput = prompt("You answer is empty. Please enter a value").toLowerCase();
    }
    else{                                                                               // wrong answer, provide an alert and prompt
        
        const hint = (userInput < ans) ? "Higher" : "Lower";                            // provide hints to the user (on the range)

        alert(`Answer incorrect. ${hint} number please.`);
        userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();

    }

}
