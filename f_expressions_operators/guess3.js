let ans = 10;

let userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();
//if user press q or Q , he quits
while (userInput !== 'q') { // as long as the user doesn't enter 'q' AND 'Q', run the loop
    
    //if user enter correct result
    if (Number(userInput) === ans) {
        alert("You got it right!");
        break;
    }
    else if (!userInput) {
        userInput = prompt("Your answer is empty. Please enter a value").toLowerCase();
    }

    else {
        const msg = userInput < ans ? "Guess Higher!" : "Guess Lower!";
        alert(`Answer is incorrect. ${msg}`)
        userInput = prompt("Guess the number. Press q or Q to quit.").toLowerCase();
    }

}
