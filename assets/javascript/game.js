
$(document).ready(function () { // event signals that DOM is ready

    //global variables
    var randomNumber = ""; //anything random needs string
    var wins = 0;
    var losses = 0;
    var blueGem = "";
    var yellowGem = "";
    var greenGem = "";
    var redGem = "";
    var totalPoints = 0;

    // formulas for random numbers
    function gameStart() {
        randomNumber = Math.floor(Math.random() * 101) + 19;
        blueGem = Math.floor(Math.random() * 11) + 1;
        redGem = Math.floor(Math.random() * 11) + 1;
        yellowGem = Math.floor(Math.random() * 11) + 1;
        greenGem = Math.floor(Math.random() * 11) + 1;

    };
    gameStart();


    //win or loss logic
    if (totalPoints === randomNumber) {
        alert("WIN");
        wins++;
        reset();

    } else if (totalPoints > randomNumber) {
        alert("You Lose!");
        losses++;
        reset();
    }



    // gem button click events
    $("#blueGem").click(function() {
        totalPoints += blueGem; //adding mystery gem value to total points score
        console.log(blueGem);
    });
    $("#redGem").click(function() {
        totalPoints += redGem;
        console.log(redGem);
    });
    $("#yellowGem").click(function() {
        totalPoints += yellowGem; 
        console.log(yellowGem);
    });
    $("#greenGem").click(function() {
        totalPoints += greenGem; 
        console.log(greenGem);
    });






    //for reset after win/loss is triggered
    function reset() {
        totalPoints = 0;
        gameStart();
    }

//testing space
    console.log(blueGem);
    console.log(redGem);
    console.log(greenGem);
    console.log(yellowGem);



});
