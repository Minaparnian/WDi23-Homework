// The Sieve of Eratosthenes is a simple, ancient algorithm for finding all prime numbers up to any given limit.
//
// Create your range, starting at two and ending at the given limit.
//
// The algorithm consists of repeating the following over and over:
//
// take the next available unmarked number in your list (it is prime)
// remove all the multiples of that number (they are not prime)
// Repeat until you don't have any possible primes left in your range.
//
// When the algorithm terminates, all the numbers in the list that have not been removed are prime.
//

const sieve = {

  numbers: [],
  counter: 0,

  calculatePrimes: function(max){

    this.counter = 0;

    // Create your range, starting at two and ending at the given limit.
    for (let i = 0; i < max; i++) {
      this.numbers[i] = true
    }

    // iterate through all the numbers in our range
    for (let i = 2; i < this.numbers.length; i++) {
      let currentNumber = i; //quality of life
      for (let j = currentNumber + 1; j < this.numbers.length; j++){
        if ( ( this.numbers[j] === true) && ( j % currentNumber === 0) ){
          this.numbers[j] = false
        }//if
        this.counter++
      }// jloop
    }//i loop
    // console.log(this.numbers);
    this.printPrimes( this.numbers )

  },  //calculate primes

  printPrimes: function(primes){

    let primesList = [];

    for (let i = 0; i < primes.length; i++) {
      if (primes[i] === true ) {
        primesList.push(i)
      } //if

    } //for
    console.log(`Primes found :  ${primes.length}`);
    console.log(`Primes : ${ primesList.join(', ')}`);
  }


} // obj
