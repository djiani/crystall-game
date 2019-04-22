function numberGenerator(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}


let ranNum = 0;
let wins = 0;
let loses = 0;
let numCryst1, numCryst2, numCryst3, numCryst4 = 0;
let totalScore = 0;

function generateRandNumb(){
    ranNum = numberGenerator(19, 120);
    $('.randNum').text(ranNum);
    numCryst1 = numberGenerator(1, 12);
    numCryst2 = numberGenerator(1, 12);
    numCryst3 = numberGenerator(1, 12);
    numCryst4 = numberGenerator(1, 12);

}

function checkGain(){
    if(totalScore === ranNum){
        wins++;
        $(".wins").text(wins);
        //reinitialize the game
        totalScore = 0;
        generateRandNumb();
    }else if(totalScore > ranNum){
        loses++;
        $(".loses").text(loses);
        totalScore = 0;
        generateRandNumb();
    }else{
        $(".totalScore").text(totalScore);
    }
    
}

$(document).ready(function(){
   
    generateRandNumb();

    $(".crystal1").on("click", function(){
        totalScore += numCryst1;
        checkGain();
    });

    $(".crystal2").on("click", function(){
        totalScore += numCryst2;
        checkGain();
    });
    $(".crystal3").on("click", function(){
        totalScore += numCryst3;
        checkGain();
    });
    $(".crystal4").on("click", function(){
        totalScore += numCryst4;
        checkGain();
    });



    



});