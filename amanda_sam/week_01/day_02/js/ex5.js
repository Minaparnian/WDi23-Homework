/*
The Temperature Converter
It's hot out! Let's make a converter based on the steps here.
    - Store a celsius temperature into a variable.
    - Convert it to fahrenheit and output "NN°C is NN°F".
    - Now store a fahrenheit temperature into a variable.
    - Convert it to celsius and output "NN°F is NN°C."
*/

// USE const:
// ///////////////////////////////////////////////////////////////////
// const celsiusTemperature = 20;
//
// // convert celsius to fahrenheit: 0°C = 32°F
// // fahrenheit = celsius * 1.8 + 32
// const fahrenheitTemperature = celsiusTemperature * 1.8 + 32;
// const message1 = celsiusTemperature + "°C is " + fahrenheitTemperature + "°F.";
// console.log( message1 );
//
//
// ////////////////////////////////////
//
//
// const fahrenheitTemperature = 100;
//
// // celsius = (fahrenheit - 32) / 1.8
// const celsiusTemperature = (fahrenheitTemperature - 32) / 1.8;
// const message2 = fahrenheitTemperature + "°F is " + celsiusTemperature + "°C.";
// console.log( message2 );
// ///////////////////////////////////////////////////////////////////


// USE var:

var celsiusTemperature = 20;

// convert celsius to fahrenheit: 0°C = 32°F
// fahrenheit = celsius * 1.8 + 32
var fahrenheitTemperature = celsiusTemperature * 1.8 + 32;
var message1 = celsiusTemperature + "°C is " + fahrenheitTemperature + "°F.";
console.log( message1 );


///////////////////////////////////////////////////////////////////


var fahrenheitTemperature = 100;

// celsius = (fahrenheit - 32) / 1.8
var celsiusTemperature = (fahrenheitTemperature - 32) / 1.8;
var message2 = fahrenheitTemperature + "°F is " + celsiusTemperature + "°C.";
console.log( message2 );
