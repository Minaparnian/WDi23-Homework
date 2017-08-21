// Keep track of all the guessed letters (right and wrong) and only let the user
//guess a letter once. If they guess a letter twice, do nothing.


let hangman = 0;
let arrayHold = ['F', 'O', 'X', 'Y'];
let arrayGuess = [];
let lettersLeft = 4;

const guessLetter = function (guess){
  let wrongAnswer = 0;
  for ( let i = 0; i < arrayHold.length; i++ ){


    /////////////////////////
  //   let doubleLetter = 0;
  //
  //   if ( arrayGuess.lenth > 1 ){
  //
  //     for ( let j = 0; j < arrayGuess.length; i++ ){
  //       if ( guess === arrayGuess[j] ){
  //         doubleLetter += 1;
  //
  //
  //         if (doubleLetter === 1){
  //           console.log("You've already tried this letter. Try again.");
  //         }
  //       }
  ////////////////////

          let correctAnswer = 0;
          if ( guess === arrayHold[i] ){
            correctAnswer += 1;
          }else {
            wrongAnswer += 1;
          }
          if ( correctAnswer > 0 ) {
            hangman += 1;
            lettersLeft -= 1;
            console.log("hangman = " + hangman);
          }
          if (wrongAnswer === 4) {
            hangman -= 1;
            console.log("hangman = " + hangman);
          }
          if (lettersLeft === 0){
            console.log("You saved them!")
          }
          //////////////////////
      //   }
      // }
      ////////////////
  }

}


guessLetter('X');
guessLetter('F');
guessLetter('X');
<<<<<<< HEAD
guessLetter('F');
guessLetter('O');
guessLetter('Y');
guessLetter('N');
guessLetter('J');
=======
// guessLetter('F');
// guessLetter('O');
// guessLetter('Y');
// guessLetter('N');
// guessLetter('J');
>>>>>>> 6450ee61d3759bd91b9be11ac85463bdbe263fc7

/////////////////////// HANGMAN

if (hangman === 1){
  console.log('__________');
}
else if ( hangman === 2){
  console.log('   / \\    |\n__________|');
}
else if ( hangman === 2){
  console.log('   _|_    |\n    |     |\n   / \\    |\n__________|');
}
else if ( hangman === 3){
  console.log('    |     |\n    0     |\n   _|_    |\n    |     |\n   / \\    |\n__________|');
}
else if ( hangman === 4){
  console.log('    ______ \n    |     |\n    X     |\n   _|_    |\n    |     |\n   / \\    |\n__________|\n GAME OVER ');
}

/////////////////////// HANGMAN


// Once the number reaches 6 (a reasonable number of body parts for a hangman),
//inform the user that they lost and show a hangman on the log.
