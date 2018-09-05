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
  wallet = getRandomBetween(19,120);

  // Chose number value of each gem randomly (there may be duplicates)
  var valueBlue = getRandomBetween(1,12);
  valueRed = getRandomBetween(1,12);
  var valuePurple = getRandomBetween(1,12);
  var valueGreen = getRandomBetween(1,12);

  //Show wallet total on left
  var randomWallet = document.createElement("span");
  $(document.getElementById("walletTotal")).append(randomWallet);
  $(randomWallet).text(wallet);

  // Show total purchase on right
  currentSpent = 0;
  function addToCurrent(a,b){
    return a+b;
  }
  var showSpent = document.createElement("span");
  document.getElementById("spent").append(showSpent);
  $(showSpent).text(currentSpent);

  //Add gem values until reach wallet total or overspend
  do {
    if $((document.getElementById("redGem")).on("click") {
    currentSpent = currentSpent+valueRed;
    console.log(currentSpent);
    }
    if (document.getElementById("blueGem").click()) {
    currentSpent = currentSpent+valueBlue;
    console.log(currentSpent);
    }
    if (document.getElementById("greenGem").click()) {
    currentSpent = currentSpent+valueGreen;
    console.log(currentSpent);
    }
    if (document.getElementById("purpleGem").click()) {
    currentSpent = currentSpent+valuePurple;
    console.log(currentSpent);
    }
    $(showSpent).text(currentSpent);
    } while (currentSpent<wallet);

  if (currentSpent == wallet){
    alert("YOU WIN!");
    wins++;
  } else {
    alert("YOU OVERSPENT! You are jailed for 1 mo!")
  }

  // $("#redGem").click(addToCurrent(currentSpent,valueRed));

  // $(showSpent).text(currentSpent);
  
  
})
