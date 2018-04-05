
//To Be Fixed:
//delay userGuess until on page of game & letter is pressed
//Last two functions not working


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
        //guessesSoFar reset
        guessesSoFar.splice(guess);
        //wins goes up
        wins++;
        //guessesLeft reset
        guessesLeft = 9; 
        //New Letter is chosen
        computerChoice = autoChoice[Math.floor(Math.random() * autoChoice.length)];
        //guess reset 
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
    //If guess isn't letter, alert 
    // if (userGuess != guess.indexOf(autoChoice)) {
    //   //alert
    //   alert("That isn't a letter! Please guess a letter between A-Z")
    //   //Delete last guess
    //   guess.pop(guess[0])
    // };
    // //If guess is guessed again
    // if (userGuess === guessSoFar.indexOf() < 0) {
    //   //alert
    //   alert("You've already guessed that letter! Please try again!")
    //   //Delete last guess
    //   guess.pop(guess[0])
    // };
   
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
