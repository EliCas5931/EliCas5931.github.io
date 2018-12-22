// Set variables for what will be pulled

// The random number generated per game
var randomNumber;

// Set the loss 
var losses = 0;
var wins = 0;
var previous = 0;
var resetGame;

var resetGame = function () {

    randomNumber = Math.floor(Math.random() * 101) + 19;
    console.log(randomNumber);

    // Show the random number for user to try and guess
    $("#result").html('Random Number: ' + randomNumber);

    // Empty the crystal and reset after the functions    
    $(".crystals").empty();

    // Found this version of splitting the div and assigning the number to it. Thought it was awesome
    for (var i = 0; i < 4; i++) {
        // Generate random numbers for the crystals 1-12
        var random = Math.floor(Math.random() * 12) + 1;
        console.log(random);

        // Apply the random number generated to the 4 divided crystals and add the name crystal to it
        var crystal = $("<div>");
        crystal.attr({
            // Morgan explained about adding i to pull number and rename the crystals. Have to rewrite whole code if you use it. Try CSS first, might be easier LOL
            "class": 'crystal',
            "id": 'crystal' + i,
            "data-random": random
        });
        // Adding the crystal class to my document
        $(".crystals").append(crystal);
    }
    // I don't think this is working the way I intended it too... sometimes get multiple of same random number
    if (random === randomNumber) {
        (randomNumber) += 1;
        // In class Jeff went over calculator that used result = blah + blah. See if that works 
        // Put in array and check or compare
    }
    // Writing out the previous number total in my html
    $("#numberTotal").html('' + previous);
}

// Resets the game functions
resetGame();

//Event delegation was explained from sample video. Look into this!
// If left as "crystal" and not changed to document, it would have rewritten all the code and come back broken or undefined
$(document).on('click', ".crystal", function () {

    // Grab the random number from crystal and add them together.
    var num = parseInt($(this).attr('data-random'));
    previous += num;
    console.log(previous);

    $("#numberTotal").html('' + previous);

    // If user goes above target number, they lose
    if (previous > randomNumber) {
        losses++;
        $("#losses").html(losses);
        previous = 0;
        resetGame();
        console.log("You're a LOSER");
    }

    // If they equal to target number, they win
    else if (previous === randomNumber) {
        wins++;
        $("#wins").html(wins);
        previous = 0;
        resetGame();
        console.log("winner winner Chicken dinner");
    }

});