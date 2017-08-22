/*
The Geometrizer
Calculate properties of a circle, using the definitions here.
    - Store a radius into a variable.
    - Calculate the circumference based on the radius, and output "The circumference is NN".
    - Calculate the area based on the radius, and output "The area is NN".
*/

const radius = 10;

// When a circle's diameter is 1, its circumference is π.
// Math.PI is approximately 3.14159
const circumference = radius * 2 * Math.PI;
const message1 = "The circumference is " + circumference;
console.log( message1 );

// Aear = π * r * r
const area = radius * radius * Math.PI;
const message2 = "The area is " + area;
console.log( message2 );
