// MTA Lab
//
// Objectives:
//
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
//
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting
//off at and prints the journey and the total number of stops for the trip in the console:

//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

const subwaySystem = {
  N: ["Times Square", "N 34th", "N 28th", "N 23rd", "Union Square", "N 8th"],
  L: ["L 8th", "L 6th", "Union Square", "L 3rd", "L 1st"],
  6: ["6 Grand Central", "6 33rd", "6 28th", "6 23rd", "Union Square", "6 Astor Place"]
}

// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line
//is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
//


// const eachStop = function (subwaySystem){
//   for (var key in subwaySystem) {
//   for (var i = 0; i < subwaySystem[key].length; i++){
//     console.log(subwaySystem[key][i]);
//   }
// }
// }

// eachStop(subwaySystem);

//Object with Array of each subway Line
const subwaySystem = {
  N: ["Times Square", "N 34th", "N 28th", "N 23rd", "Union Square", "N 8th"],
  L: ["L 8th", "L 6th", "Union Square", "L 3rd", "L 1st"],
  6: ["6 Grand Central", "6 33rd", "6 28th", "6 23rd", "Union Square", "6 Astor Place"]
}


//Find the key of the station that the user wants to key onto
const returnOnStation = function(onLine, onStop, offLine, offStop){
  for (var key in subwaySystem){
    for (var i = 0; i < subwaySystem[key].length; i++){
      if (subwaySystem[key][i] === onStop) {
        return(key);
      }
    }
  }
};

// Find the key of the station the user wants to get off at
const returnOffStation = function(onLine, onStop, offLine, offStop){
  for (var key in subwaySystem){
    for (var i = 0; i < subwaySystem[key].length; i++){
      if (subwaySystem[key][i] === offStop) {
        return(key);
      }
    }
  }
};

// Find the index of the stop the user wants to get on at. This uses the key found in the returnOnStation function
const findOnStopIndex = function(onLine, onStop, offLine, offStop) {
  let onStation = returnOnStation(onLine, onStop, offLine, offStop);
  let onStopIndex = (subwaySystem[onStation].indexOf(onStop));
  return onStopIndex;
}

//Find the index of the stop the user wants to get off at. This uses the key found in the returnOffStation function
const findOffStopIndex = function(onLine, onStop, offLine, offStop) {
  let offStation = returnOffStation(onLine, onStop, offLine, offStop);
  let offStopIndex = (subwaySystem[offStation].indexOf(offStop));
  return offStopIndex;
}

//Find the index of the stop UnionSquare on the on station's line
const findOnUnionSquareIndex = function (onLine, onStop, offLine, offStop) {
  let onStation = returnOnStation(onLine, onStop, offLine, offStop);
  let onStopUnionIndex = (subwaySystem[onStation].indexOf("Union Square"));
  return onStopUnionIndex;
}

//Find the index of the stop UnionSquare on the off station's line
const findOffUnionSquareIndex = function (onLine, onStop, offLine, offStop) {
  let offStation = returnOffStation(onLine, onStop, offLine, offStop);
  let offStopUnionIndex = (subwaySystem[offStation].indexOf("Union Square"));
  return offStopUnionIndex;
}

//Function that goes through cases where the onStop and offStop are on the same line
const ifSameListStations = function (onLine, onStop, offLine, offStop){
  let listStations = [];
  let sameOnIndex = findOnStopIndex(onLine, onStop, offLine, offStop);
  let sameOnStation = returnOnStation(onLine, onStop, offLine, offStop);
  let sameOffIndex = findOffStopIndex(onLine, onStop, offLine, offStop);
  if (sameOnIndex < sameOffIndex) {
    for (let i = sameOnIndex+1; i < sameOffIndex+1; i++){
        listStations.push(subwaySystem[sameOnStation][i]);
    }
  } else {
    for (let i = sameOnIndex-1; i > sameOffIndex-1; i--) {
      listStations.push(subwaySystem[sameOnStation][i]);
    }
  }
  let stops = listStations.length;
  var statement = ( `You must travel through the following stops on the ${sameOnStation} Line: ${listStations.join(", ")}.
${stops} stops in total.`);
console.log(statement);
return statement;
}

//our main function
let MTAProgram = function (onLine, onStop, offLine, offStop){
if (onLine === offLine) {
  return ifSameListStations(onLine, onStop, offLine, offStop);
} else {
  let onLineStation = returnOnStation(onLine, onStop, offLine, offStop);
  let onStopIndex = findOnStopIndex(onLine, onStop, offLine, offStop);
  let offLineStation = returnOffStation(onLine, onStop, offLine, offStop);
  let offStopIndex = findOffStopIndex(onLine, onStop, offLine, offStop);
  let onStopUnionSIndex = findOnUnionSquareIndex(onLine, onStop, offLine, offStop);
  let offStopUnionIndex = findOffUnionSquareIndex(onLine, onStop, offLine, offStop);
  let onStops = [];
  let offStops = [];
  if (onStopUnionSIndex > onStopIndex) {
    for (let i = onStopIndex; i < onStopUnionSIndex+1; i++){
      onStops.push(subwaySystem[onLineStation][i]);
    }
  } else {
    for (let i = onStopIndex; i > onStopUnionSIndex-1; i--){
      onStops.push(subwaySystem[onLineStation][i]);
    }
  }
  if (offStopIndex > offStopUnionIndex) {
    for (let j = offStopUnionIndex+1; j< offStopIndex+1; j++){
      offStops.push(subwaySystem[offLineStation][j]);
    }
  } else {
    for (let j = offStopUnionIndex-1; j >= offStopIndex; j--){
      offStops.push(subwaySystem[offLineStation][j]);
    }
  }
    let stops = (onStops.length + offStops.length);
var finalStatement = ( `You must travel through the following stops on the ${onLineStation} Line: ${onStops.join(", ")}. Change at Union Square.
Your journey continues through the following stops: ${offStops.join(", ")}.
${stops} stops in total.`);
console.log(finalStatement);
return finalStatement;
}
};

MTAProgram("N", "N 8th", "N", "Times Square");
MTAProgram("N", "N 8th", "L", "L 8th");
MTAProgram("6", "6 Astor Place", "N", "Times Square");


// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
