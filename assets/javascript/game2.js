var wordBank = ["queen", "aerosmith", "madona", "prince", "cher"];
// var random = Math.floor(Math.random()*wordBank.length);
// var answer = wordBank[random];
//"current" and "random" are switched & "answer" and "display" are switched
var current = "";
var display = [];
var win = 0;
var maxGuesses = 10;
var losses = 0;
var lettersGuessed = "";
var userLetter = "";

var winsText = document.getElementById("wins");
var currentText = document.getElementById("current-word");
var guessesText = document.getElementById("guesses-remaining");
var guessedText = document.getElementById("guessed-letters");


var game = document.getElementById("game");
var setup = function(){
    current = wordBank[Math.floor(Math.random() * wordBank.length) +1];
    display = current.split("").map(function(letter){return "_";});
    currentText.innerHTML = display.join(" ");
    console.log(win);
    winsText.innerHTML = win.toString();
    guessesText.innerHTML = maxGuesses.toString();
    guessedText.innerHTML = lettersGuessed.toString();
    
};
document.onkeyup = function(event){
    lettersGuessed = event.key;
    if (lettersGuessed === current.indexOf()){
        display.push(lettersGuessed);
    }
};



setup();
document.onkeyup();

