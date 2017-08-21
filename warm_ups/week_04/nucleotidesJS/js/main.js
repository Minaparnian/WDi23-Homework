const nucleotides= ['A', 'C', 'G', 'T', 'U'];

let validNucleotides = false;

const nucleotideCounter = function(string, letter){
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      counter += 1;
      validNucleotides = true;
    } //if
  } //for
  return counter;
} //func

const getNucleotideCount = function(str) {
  str = str.toUpperCase();

  let result = '';

  for (var i = 0; i < nucleotides.length; i++) {
    let nucleotide = nucleotides[i];

    let count = nucleotideCounter(str, nucleotide);

    if (count > 0){
      result += (`${nucleotide} : ${count} \n`)
    } //if
  } //for

  if (validNucleotides) {
    validNucleotides = false;
    return result;
  }else {
    return "No valid nucleotides bro.";
  }
} //get nucleotides
