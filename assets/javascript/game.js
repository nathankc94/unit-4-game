// 1. create varribles
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

var winningNumber = 0;
var totalScore = 0;

var wins = 0;
var losses = 0;
    
    

// 2. generate winning number



// 3. generate crystals value

// 4.start game
function getRandom (min, max){
 return Math.floor(Math.random() * (max - min + 1)) + min; 
}

var generateNums = function (){
    var totalScore = 0; 
    winningNumber = getRandom.apply(19, 120);

    crystal1 = getRandom(1,12);
    crystal2 = getRandom(1,12);
    crystal3 = getRandom(1,12);
    crystal4 = getRandom(1,12); 

    console.log(winningNumber); 
    console.log(crystal1); 
    console.log(crystal2); 
};

// 5. update game

// 6. capture user input
// startGame();

$("#red").click(function(){
    alert("12");
});
$("#white").click(function(){
    alert("10");
});
$("#purple").click(function(){
    alert("1");
});
$("#green").click(function(){
    alert("3");
});

// 7. determine if win or lose 




