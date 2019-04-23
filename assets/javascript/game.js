function numberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


let ranNum = 0;
let wins = 0;
let loses = 0;
let numCryst1, numCryst2, numCryst3, numCryst4 = 0;
let totalScore = 0;
let setTimeOutId = 0;

function generateRandNumb() {
    ranNum = numberGenerator(19, 120);
    $('.randNum').text(ranNum);
    numCryst1 = numberGenerator(1, 12);
    numCryst2 = numberGenerator(1, 12);
    numCryst3 = numberGenerator(1, 12);
    numCryst4 = numberGenerator(1, 12);
    console.log(numCryst1 + " " + numCryst2 + " " + numCryst3 + " " + numCryst4);

}

function checkGain() {
    if (totalScore === ranNum) {
        wins++;
        $(".wins").text(wins);
        //play clap sound
        $(".clapSound")[0].play();
        
        $(".box-imgs").css("border","10px solid green");
        setTimeout(function(){
            totalScore = 0;
            $(".totalScore").text(totalScore);
            generateRandNumb();
            $(".box-imgs").css("border","0px solid black");
        }, 1500); 

    } else if (totalScore > ranNum) {
        loses++;
        $(".loses").text(loses);
        $(".errorSound")[0].play();
        
        //$(".box-imgs").enable(false);
        $(".box-imgs").css("border","10px solid red");
        setTimeoutId = setTimeout(function(){
            totalScore = 0;
            $(".totalScore").text(totalScore);
            generateRandNumb();
            $(".box-imgs").css("border","0px solid black");
        }, 1500);   
    }
   else{
    $(".totalScore").text(totalScore);
   }
   
}


$(document).ready(function (event) {
    event.preventDefault;
    generateRandNumb();

    $(".crystal1").on("click", function () {
        totalScore += numCryst1;
        checkGain();
    });

    $(".crystal2").on("click", function () {
        totalScore += numCryst2;
        checkGain();
    });
    $(".crystal3").on("click", function () {
        totalScore += numCryst3;
        checkGain();
    });
    $(".crystal4").on("click", function () {
        totalScore += numCryst4;
        checkGain();
    });







});