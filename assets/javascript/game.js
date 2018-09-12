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
    console.log("inside init");
    $("#blueGem").attr("value",getRandomBetween(1,12));
    $("#redGem").attr("value",getRandomBetween(1,12));
    $("#greenGem").attr("value",getRandomBetween(1,12));
    $("#purpleGem").attr("value",getRandomBetween(1,12));
    wallet = getRandomBetween(19,120);
    currentSpent = 0;
    $("#walletTotalH").text(wallet);
    $("#currentTotalH").text(currentSpent);
  }

  // Check if eligible to continue to play
  function checkit(){
    console.log("inside checkit");
    if (currentSpent<wallet){return;}
    if (currentSpent==wallet){
      $("#messageBox").text("You WIN!!");
      wins++;
      $("#winsH").html(wins);
    }
    if (currentSpent>wallet){
      $("#messageBox").text("You overspent. IT'S JAILTIME!!");
      losses++;
      $("#lossesH").html(losses);
    }
  }
  

  //Show wallet total on left
  $("#walletTotalH").text(wallet);

  // Show total purchase on right
  $("#currentTotalH").text(currentSpent);

  //Add gem values
  $(".gems").on("click", function() {
    console.log("Inside click");
    if (currentSpent<wallet){
      currentSpent = currentSpent + parseInt($(this).attr("value"));
      $("#currentTotalH").text(currentSpent);
      checkit();
      return;
    }
  });

  init();
  console.log("outside");

});




