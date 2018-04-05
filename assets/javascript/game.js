
//To Be Fixed:
//delay guess until on page of game & letter is pressed


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
   
    //If guess is guessed again
    if (userGuess === guessesSoFar[0] || userGuess === guessesSoFar[1] || userGuess === guessesSoFar[2] || userGuess === guessesSoFar[3] || userGuess === guessesSoFar[4] || userGuess === guessesSoFar[5] || userGuess === guessesSoFar[6] || userGuess === guessesSoFar[7] || userGuess === guessesSoFar[8]) {
      //alert
      alert("You've already guessed that letter! Please try again!")
      //Delete last guess
      guess.pop(guess[0])
    };
    //If guess isn't letter, alert 
    if (guess != "a" && guess != "b" && guess != "c" && guess != "d" && guess != "e" && guess != "f" && guess != "g" && guess != "h" && guess != "i" && guess != "j" && guess != "k" && guess != "l" && guess != "m" && guess != "n" && guess != "o" && guess != "p" && guess != "q" && guess != "r" && guess != "s" && guess != "t" && guess != "u" && guess != "v" && guess != "w" && guess != "x" && guess != "y" && guess != "z") {
      //alert
      alert("That isn't a letter! Please guess a letter between A-Z")
      //Delete last guess
      guess.pop(guess[0])
      // Delete last wrongGuess
      guessesSoFar.pop(guessesSoFar[0])
    };
    // If user wins
    if (userGuess === computerChoice) {
    console.log(computerChoice)
        //guessesSoFar reset
        guessesSoFar.splice(guess);
        //wins goes up
        wins++;
        //guessesLeft reset
        guessesLeft = 9; 
        //New Letter is chosen
        computerChoice = autoChoice[Math.floor(Math.random() * autoChoice.length)];
      }
    // If user guesses incorrect letter
    else if (userGuess != computerChoice && guessesLeft != 0) {
      console.log(computerChoice)
      //Guesses Left lowered  
      guessesLeft--;
      //userGuess becomes guessesSoFar
      guessesSoFar.push(guess);
    };
    // If user looses
    if (guessesLeft === 0) {
    console.log(computerChoice)  
      //Losses goes up
      losses ++;
      //guessesLeft reset
      guessesLeft = 9; 
      //New Letter is chosen
      computerChoice = autoChoice[Math.floor(Math.random() * autoChoice.length)];
      //guessesSoFar reset
      guessesSoFar.splice(guess);
    };
   
      //HTML
      var html =
        "<h1 class='header'>The Psychic Game</h1>" +
        "<p class='text'>Guess what letter I'm thinking of</p>" +
        "<p class='text'>Wins: "+ wins + "</p>" +
        "<p class='text'>Losses: " + losses + "</p>" +
        "<p class='text'>Guesses Left: " + guessesLeft + "</p>" +
        "<p class='text'>Your Guesses so far: " + guessesSoFar + "</p>" +
        '<img  class="crystalBall"src="assets/images/crystal-ball.png" alt="Crystal Ball">' 
        ;
      // ALLOWS HTML TO WORK
      document.querySelector("#game").innerHTML = html;
  
  };
