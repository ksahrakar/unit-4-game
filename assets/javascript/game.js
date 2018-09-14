//Global variables
var wins = 0;
var losses = 0;

//Random number inclusive the maximum and the minimum 
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

  
  // Assign value to each tag and initialize wallet (after every game)
  function init(){
    $("#blueGem").attr("value",getRandomBetween(1,12));
    $("#redGem").attr("value",getRandomBetween(1,12));
    $("#greenGem").attr("value",getRandomBetween(1,12));
    $("#purpleGem").attr("value",getRandomBetween(1,12));
    wallet = getRandomBetween(19,120);
    currentSpent = 0;
    $("#walletTotalH").text(wallet);
    $("#currentTotalH").text(currentSpent);
    $("#messageBox").text("Click a gem to buy it!");
  }

  // Check status of wallet and purchase total to continue to play
  function checkit(){
    if (currentSpent<wallet){return;}
    if (currentSpent===wallet){
      $("#messageBox").text("You WIN!!");
      wins++;
      $("#winsH").html(wins);
      if (confirm("YOU WIN!\nTry again?")){
        setTimeout(init,1500);
        return;
      }
    }
    if (currentSpent>wallet){
      $("#messageBox").text("You overspent. IT'S JAILTIME!!");
      losses++;
      $("#lossesH").html(losses);
      if (confirm("YOU LOST!\nTry again?")){
        setTimeout(init,1500);
        return;
      }
    }
  }
  
  //Show wallet total on left
  $("#walletTotalH").text(wallet);

  // Show total purchase on right
  $("#currentTotalH").text(currentSpent);

  //Add gem values
  $(".gems").on("click", function() {
      if (currentSpent<wallet){
      currentSpent = currentSpent + parseInt($(this).attr("value"));
      $("#currentTotalH").text(currentSpent);
      checkit();
      return;
    }
  });

  init();

});




