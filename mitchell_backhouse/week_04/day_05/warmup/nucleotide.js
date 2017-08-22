//There are 5 types of nucleotides. 4 of these occur in DNA: A, C, G, and T. 4 occur in RNA: A, C, G, U.

console.log('test');


const word_count = function(word) {
    let nucleotide = {
        "A":  0,
        "C": 0,
        "G": 0,
        "T": 0,
        "U": 0
    }

    let chr_list = word.toUpperCase().split('');

    for (let i in chr_list) {
        if ( nucleotide.hasOwnProperty(chr_list[i]) === true ) {
            nucleotide[chr_list[i]] += 1;
        }
    }
    console.log(nucleotide);
}


word_count("coagulate");
word_count("Triangle apple");
word_count("Actgtgkskdjgtcccisiskj");

