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
  $("#winsH").html(wins);
  $("#lossesH").html(losses);
  
  //Assign value to each tag and initialize wallet
  function init(){
  $("#blueGem").attr("value",getRandomBetween(1,12));
  $("#redGem").attr("value",getRandomBetween(1,12));
  $("#greenGem").attr("value",getRandomBetween(1,12));
  $("#purpleGem").attr("value",getRandomBetween(1,12));
  wallet = getRandomBetween(19,120);
  currentSpent = 0;
  $("#walletTotalH").text(wallet);
  $("#currentTotalH").text(currentSpent);
  }

  init();

  //Show wallet total on left
  $("#walletTotalH").text(wallet);

  // Show total purchase on right
  $("#currentTotalH").text(currentSpent);

  //Add gem values
    $(".gems").on("click", function() {
      if (currentSpent<wallet){
        currentSpent = currentSpent + parseInt($(this).attr("value"));
        $("#currentTotalH").text(currentSpent);
        //$("#redText").text($(this).gem.gemBought);
        //$("#messageBox").text("You bought a " + $(this).gem.gemColor + "gemstone");
      } else if (currentSpent>wallet){
        $("#messageBox").text("You overspent. JAILTIME!!");
        losses++;
        $("#lossesH").html(losses);
        init();
      } else if(!currentSpent){
        $("#messageBox").text("SOMETHING IS TERRIBLY WRONG! THE PROGRAMMER HAS BEEN EXECUTED");
      } else  {
        $("#messageBox").text("You WIN!!");
        wins++;
        $("#winsH").html(wins);
        init();
      }
    });
  
});




