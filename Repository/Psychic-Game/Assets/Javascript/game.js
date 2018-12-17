// What the user sees when they first open page
alert("Come play the Psychic Game!")

//The alpabet the user can choose from
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Starting values for wins, losses and how many guesses are left
var wins = 0;
var losses = 0;
var guessLeft = 10;
var guessFar = [];

var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessLeftText = doucment.getElementById("guessLeft");
var guessFarText = document.getElementById("guessFar");

//Randomize the computer's choice
var computerChoice = choices[Math.floor(Math.random() * choices.length)];   
    
//Log it so I can see
console.log(computerChoice);

//Trying to assign the random numbers to letters... this may or may not work
function guessed() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
}

//When the user presses a key to start the game....
document.onkeypress = function(event) {

    //Capture the user choice
    var userChoice = event.key;

    //Whatever the user choice is, make it lowercase
    var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
    
    //Log it so I can see
    console.log(userChoice);

    //Compare the user's choice to the computer's
    if(userChoice === computerChoice) {
        wins++;
        attempts = 10;
        guessFar = [];
        } 
        //Remove a guess if it is not the same
            else {
                guessLeft--;
            }
        // When guess left equals 0, user gets a Loss
            if(guessLeft === 0) {
                losses++
            }
        }
    
    // If user choice is not the same as computer..
    guessed();
    if (guessLeft === 0) {
        losses++;
        guessFar = []
        attempts = 10;
    }

    if (guessFar.indexOf(userChoice) >=0) {

    }   else {
        guessFar.push(userChoice);
        document.getElementById("userChoice").innerHTML = guessFar;
    }
    
    //Display the wins, losses, guesses left, and what the user has chosen so far...
    userChoiceText.textcontent = "You chose" + userChoice;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessLeftText.textContent = "guessLeft" - 1;
    guessFarText.textContent = "guessFar" + userChoice;

    document.getElementById('wins').innerHTML = wins;
    document.getElementById('losses').innerHTML = losses;
    document.getElementById('guessLeft').innerHTML = guessLeft;
    document.getElementById('guessFar').innerHTML = guessFar;
    



    
    
