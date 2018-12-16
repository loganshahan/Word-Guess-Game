var $ = function (id) {
    return document.getElementById(id);
}
    


var game = ["queen", "aerosmith", "madona", "prince", "cher"];
var choice = Math.floor(Math.random()*wordBank.length);
var answer = game[choice];
var myLength = answer.length;
var display = [myLength];
var win = myLength;
var letters = answer.split('');
var maxGuesses = 10;
var losses = 0;
var output = "";
var userLetter = "";


var setup = function()
{
    for(var i=0; i<answer.length; i++){
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById(game).innerHTML = output;
    output = "";
}
var submit = function()
{
    
}


