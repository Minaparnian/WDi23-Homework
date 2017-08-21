// Write a program that, given a word and a list of possible anagrams, selects the anagrams of the given word.
//
// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".
//
// Suggestions
//
// Start out by getting this working with discrete functions.
// If you feel comfortable with that, try to put all your functions, collections, etc, into an object.

// const anagram = {
//
//   posAnaArray: [],
//
//   wordCheck: function (word, posAnagram){
//       anagram.posAnaArray.push(posAnagram);
//       console.log(anagram.posAnaArray);
//       let wordArray = word.toUpperCase().split('').sort().join(', ');
//       console.log(wordArray);
//       for (let i = 0; i < anagram.posAnaArray[i].length; i++){
//         //take word - sort alphabetically
//         let posAnagramWord = anagram.posAnaArray[i];
//         console.log(`posAnagramWord = ${posAnagramWord}`);
//         // let jointAnaWord = posAnagramWord.split("").sort().join("");
//         // console.log(`jointAnaWord = ${jointAnaWord}`);
//         //take array - sort alphabetically, individually
//         //compare results ===, return if true.
//       }
//   },
//
// };

const anagramList = ["enlists", "google", "inlets", "banana"];

const wordCheck = function (word) {
  let anagrams = [];

  for (let i = 0; i < anagramList.length; i++){
    const anagramCandidate = anagramList[i].toUpperCase().split('').sort().join(', ');
    const sortedWord = word.toUpperCase().split('').sort().join(', ');

    if (anagramCandidate === sortedWord){
      anagrams.push(anagramList[i]);
    }
  }
  return anagrams;
}
