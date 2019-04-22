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
}
$(document).ready(function(){



})