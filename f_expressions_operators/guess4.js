let ans = 10;
//let ansString = "ten";
const feedbackGuess = "Guess the number.";
const feedbackQuit = "Press q or Q to quit.";
const feedbackCorrect = "Your answer is correct.";
const feedbackWrong = "Your answer is wrong.";
const feedbackTooHigh = "Lower number. Please try again.";
const feedbackTooLow = "Higher number. Please try again.";
const feedbackEmpty = "Your answer is empty.";

let userInput = prompt(feedbackGuess.concat (" ", feedbackQuit)).toLowerCase();

// function to evaluate string answer
function evaluateStringAnswer(userInput){
    return answerLookUp[userInput] === ans;
}
function evaluateStringAnswerLower(userInput){
    return answerLookUp[userInput] < ans;
}
function evaluateStringAnswerHigher(userInput){
    return answerLookUp[userInput] > ans;
}
// as long as the user doesn't enter 'q' AND 'Q', run the loop
while (userInput !== `q`) {
    let correctAns = false;
    let feedback = "";
    switch (true) {
        case (Number(userInput) === ans || evaluateStringAnswer(userInput)):
            correctAns = true;
            feedback = feedbackCorrect;
            break;
        case (!userInput):
            correctAns = false;
            feedback = feedbackEmpty;
            break;
        case (Number(userInput) > ans || evaluateStringAnswerHigher(userInput)):
            correctAns = false;
            feedback = feedbackTooHigh;
            break;
        case (Number(userInput) < ans || evaluateStringAnswerLower(userInput)):
            correctAns = false;
            feedback = feedbackTooLow;
            break;
        default:
            correctAns = false;
            feedback = feedbackWrong;
    }
    alert (feedback);
   if(correctAns){
         break;
   }
   userInput = prompt(feedbackGuess.concat (" ", feedbackQuit)).toLowerCase();
}
 
