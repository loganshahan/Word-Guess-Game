var wordBank = ["marino", "montana", "elway", "favre", "young", "aikman", "unitas"];
var randomWord = "";
var lettersInRandom = [];
var blanks = 0;
var blanksAndLetters = [];
var wrong = [];
var letterGuessed = "";

var win = 0;
var losses = 0;
var guessesLeft = 10;

function setUp(){
  guessesLeft = 10;
  randomWord =  wordBank[Math.floor(Math.random() *  wordBank.length)];
   lettersInRandom = randomWord.split("");
  blanks = lettersInRandom.length;
//   console.log(randomWord);
  blanksAndLetters = [];
  wrong = [];
  final_join = '';
  for(var i = 0; i < blanks; i++){
    blanksAndLetters.push("_");
  }
//   console.log(blanksAndLetters);
  document.getElementById("guesses-remaining").innerHTML = guessesLeft;
  document.getElementById("current-word").innerHTML = blanksAndLetters.join(" ");
  document.getElementById("guessed-letters").innerHTML = wrong.join(" ");

};
function check(letter){
    var letterRight = false;
    for (var i = 0; i < blanks; i++){
        if (randomWord[i] === letter){
           letterRight = true; 
        }

    }
    if (letterRight){
        for(var r = 0; r < blanks; r++){
            if(randomWord[r] === letter){
                blanksAndLetters[r] = letter;
            }
        }
        // console.log(blanksAndLetters);
    }
    else if(!wrong.includes(letter)){
        wrong.push(letter);
        var finalWord = [...new Set(wrong)];
        final_join = finalWord.join("");
        console.log(final_join);

        guessesLeft --;
    }
   
};
function done(){
    // console.log("wins: " + win + " | losses: " + losses + " | guesses: " + guessesLeft);

    document.getElementById("guesses-remaining").innerHTML = guessesLeft;
    document.getElementById("current-word").innerHTML = blanksAndLetters.join(" ");
    document.getElementById("guessed-letters").innerHTML = wrong.join(" ");

    if(lettersInRandom.toString() === blanksAndLetters.toString()){
        win++;
        document.getElementById("wins").innerHTML = win;
        setUp();
    }
    else if(guessesLeft === 0){
        losses++;
        document.getElementById("lost").innerHTML = losses;
        setUp();

    }
};

setUp();
document.onkeyup = function(event){
    letterGuessed = String.fromCharCode(event.which).toLocaleLowerCase();
    check(letterGuessed);
    done();

};


