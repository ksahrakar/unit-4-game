//Global variables
var wins = 0;
var losses = 0;
var bestTime = 100;

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
  var gameTime = 0;
  var calcTime = 0;
  var startTime;

  function timer(){
    gameTime++;
    $("#timerH").text("Timer: " + (gameTime/10).toFixed(1));
  }
  
  
  //Assign value to each tag and initialize wallet
  function init(){
    if (calcTime<=bestTime){
      bestTime = calcTime;
    }
    $("#bestH").text("Best time: " + bestTime);
    $("#blueGem").attr("value",getRandomBetween(1,12));
    $("#redGem").attr("value",getRandomBetween(1,12));
    $("#greenGem").attr("value",getRandomBetween(1,12));
    $("#purpleGem").attr("value",getRandomBetween(1,12));
    wallet = getRandomBetween(19,120);
    currentSpent = 0;
    $("#walletTotalH").text(wallet);
    $("#currentTotalH").text(currentSpent);
    $("#messageBox").text("Click a gem to buy it!");
    gameTime = 0;
  }

  // Check if eligible to continue to play
  function checkit(){
    if (currentSpent<wallet){return;}
    if (currentSpent===wallet){
      clearInterval(gameTime);
      calcTime = ((Date.now() - startTime)/1000).toFixed(2);
      $("#messageBox").text("You WIN!!");
      wins++;
      $("#winsH").html(wins);
      if (confirm("Try again?")){
        clearInterval(gameTime);
        setTimeout(init,1500);
        return;
      }else{clearInterval(gameTime);return};
    }
    if (currentSpent>wallet){
      $("#messageBox").text("You overspent. IT'S JAILTIME!!");
      losses++;
      $("#lossesH").html(losses);
      if (confirm("Try again?")){
        clearInterval(gameTime);
        setTimeout(init,1500);
        return;
      }else{clearInterval(gameTime);return};
    }
  }
  

  //Show wallet total on left
  $("#walletTotalH").text(wallet);

  // Show total purchase on right
  $("#currentTotalH").text(currentSpent);

  // Show game timer
  $("#timerH").text("Timer: " + (gameTime/10));

  //Show best time
  $("#bestH").text("Best time: " + bestTime);


  //Add gem values
  $(".gems").on("click", function() {
    if (gameTime === 0){
      gameTime = setInterval(timer,100);
      startTime = Date.now();
    }
    if (currentSpent<wallet){
      currentSpent = currentSpent + parseInt($(this).attr("value"));
      $("#currentTotalH").text(currentSpent);
      checkit();
      return;
    }
    
  });

  init();

});




