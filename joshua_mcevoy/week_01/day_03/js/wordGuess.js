
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
//and one to hold the current guessed letters (e.g. it would start with '_', '_', '_'
//and end with 'F', 'O', 'X').
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and
//congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed,
//and if not, it should congratulate the user for winning the game.


let arrayHold = ['F', 'O', 'X', 'Y'];
let arrayGuess = [];
let lettersLeft = 4;

// Write a function called guessLetter that will:
// Take one argument, the guessed letter.

const guessLetter = function (guess){
  for (let i = 0; i < arrayHold.length; i++){
    if ( guess === arrayHold[i] ){
      arrayGuess.push(guess);
<<<<<<< HEAD
      lettersLeft--;
=======
      lettersLeft -= 1;
>>>>>>> 6450ee61d3759bd91b9be11ac85463bdbe263fc7
      console.log(`${guess} is one of the letters!`);
      console.log(`Guesses so far ${arrayGuess}`);
      console.log(`there are ${lettersLeft} letters still to guess.`);
    }
    if (lettersLeft === 0){
      console.log("YOU WIN!")
    }
  }
};

guessLetter('N');
guessLetter('J');
guessLetter('X');
guessLetter('F');
guessLetter('O');
guessLetter('Y');




// Pretend you don't know the word, and call guessLetter multiple times with various
//letters to check that your program works.
