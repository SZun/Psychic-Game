
//To Be Fixed:
//game does not restart

//variables
  var wins = 0;
  var losses = 0;
  var guessesLeft = 9;
  var guessesSoFar = [];
  var autoChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var guess = [];
  
  // make this a function?
  var computerChoice = autoChoice[Math.floor(Math.random() * autoChoice.length)];

  document.onkeyup = function(userInput) {
    var userGuess = userInput.key;
    userGuess = userGuess.toLowerCase();
    guess = userGuess;
    // If user wins
    if (userGuess === computerChoice) {
    console.log(computerChoice)
        //wins goes up
        wins++;
        //guessesLeft reset
        guessesLeft = 9; 
        //New Letter is chosen
        
         //guessesSoFar reset
        guessesSoFar.splice(guess);
      } 
    // If user guesses incorrect letter
    else if (userGuess != computerChoice && guessesLeft != 1) {
    console.log(computerChoice)
      //Guesses Left lowered  
      guessesLeft--;
      //userGuess becomes guessesSoFar
      guessesSoFar.push(guess);
      
    }
    // If user looses
    else if (guessesLeft <= 1) {
    console.log(computerChoice)  
      //Losses goes up
      losses ++;
      //guessesLeft reset
      guessesLeft = 9; 
      //New Letter is chosen
      
      //guessesSoFar reset
      guessesSoFar.splice(guess);
    }
   
      //HTML
      var html =
        "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: "+ wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your Guesses so far: " + guessesSoFar + "</p>"
        ;
      // ALLOWS HTML TO WORK
      document.querySelector("#game").innerHTML = html;
  
  };
