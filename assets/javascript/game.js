//Global variables
var wins = 0;
var losses = 0;


//Inclusive the maximum and the minimum 
function getRandomBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {
  
  // Chose random total number in wallet (changes every game)
  var wallet = getRandomBetween(19,120);
  var currentSpent = 0;
  // Chose number value of each gem randomly (there may be duplicates)
  var valueBlue = getRandomBetween(1,12);
  var valueRed = getRandomBetween(1,12);
  var valuePurple = getRandomBetween(1,12);
  var valueGreen = getRandomBetween(1,12);
  var redBought = 0;
  var blueBought = 0;
  var greenBought = 0;
  var purpleBought = 0;

  //Show wallet total on left
  $("#walletTotalH").text(wallet);

  // Show total purchase on right
  $("#currentTotalH").text(currentSpent);

  //Function to add gem values if wallet not exceeded

  function addValue(){
    //var doneAdding = false;
    
      $("#redGem").on("click", function() {
      if (currentSpent<wallet){
        currentSpent = currentSpent+valueRed;
        redBought++;
        $("#currentTotalH").text(currentSpent);
        $("#redText").text(redBought);
        $("#messageBox").text("You bought a red gemstone");
      } else {return}
      });

      $("#blueGem").on("click", function() {
      if (currentSpent<wallet){  
        currentSpent = currentSpent+valueBlue;
        blueBought++;
        $("#currentTotalH").text(currentSpent);
        $("#blueText").text(blueBought);
        $("#messageBox").text("You bought a blue gemstone");
      } else {return}
      });

      $("#greenGem").on("click", function() {
      if (currentSpent<wallet){
        currentSpent = currentSpent+valueGreen;
        greenBought++;
        $("#currentTotalH").text(currentSpent);
        $("#greenText").text(greenBought);
        $("#messageBox").text("You bought a green gemstone");
      } else {return}
      });

      $("#purpleGem").on("click", function() {
      if (currentSpent<wallet){
        currentSpent = currentSpent+valuePurple;
        purpleBought++;
        $("#currentTotalH").text(currentSpent);
        $("#purpleText").text(purpleBought);
        $("#messageBox").text("You bought a purple gemstone");
      } else {return}
      });
  }

  function playgame (){
    
      while (wallet<currentSpent){
        addValue();
      }
  }

  addValue();
  // if (currentSpent<wallet){
  //   addValue();
  console.log("out of loop");
    // if (currentSpent==wallet){
    // $("#messageBox").text("You WIN");
    // wins++;
    // $(".score").text("Wins: "+ wins);
    // }

    if (currentSpent>wallet){
    $("#messageBox").text("You LOSE");
    losses++;
    $(".score").text("Losses: "+ losses);
    }
  // }
});




