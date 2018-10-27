
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
        display();


    };
    gameStart();


    //win or loss logic
    function isGameOver() { //isGameOver should be called after each click event
        if (totalPoints === randomNumber) {
            alert("Winner winner, gems for dinner!");
            wins++;
            reset(); // reset re-runs game start and sets score to 0

        } else if (totalPoints > randomNumber) {
            alert("NO GEMS FOR YOU!");
            losses++;
            reset();
        }
    };


    // gem button click events
    $("#blueGem").click(function () {
        totalPoints += blueGem; //adding mystery gem value to total points score
        console.log(blueGem);
        display();
        isGameOver();

    });
    $("#redGem").click(function () {
        totalPoints += redGem;
        console.log(redGem);
        display();
        isGameOver();
    });
    $("#yellowGem").click(function () {
        totalPoints += yellowGem;
        console.log(yellowGem);
        display();
        isGameOver();
    });
    $("#greenGem").click(function () {
        totalPoints += greenGem;
        console.log(greenGem);
        display();
        isGameOver();
    });


    //html outputs for score, computer generated number, gems, wins/losses
    function display() {

        $("#score-row").text(totalPoints);
        $("#computerNumber").text("Random Number: " + randomNumber);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);

    }



    //for reset after win/loss is triggered
    function reset() {
        totalPoints = 0;
        gameStart();
    }

    //testing space
    // console.log(blueGem);
    // console.log(redGem);
    // console.log(greenGem);
    // console.log(yellowGem);



});
