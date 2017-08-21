
// Create a variable to store a reference to the img.
//
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
// Create a function called catWalkRigth() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.


const catImage = document.getElementById("walkingCat");
catImage.style.position = 'absolute';
catImage.style.left = '0px';
let screenSize = window.innerWidth;
console.log(screenSize);


const catObject = {
  walkLeftTimer: 0,
  walkRightTimer: 0,
  danceTimerOne: 0,
  danceTimerTwo: 0,

  catWalkRigth: function () {

    let startPosition = parseInt(catImage.style.left);
    let newPosition = startPosition + 10;
    catImage.style.left = newPosition + 'px';
    console.log(catImage.style.left);
    if (parseInt(catImage.style.left) > screenSize){
      catImage.style.transform = 'scale(-1, 1)';
      clearInterval(catObject.walkRightTimer);
      catObject.walkLeftTimer = setInterval(catObject.catWalkLeft, 80);
    }
    else if (parseInt(catImage.style.left) > ((screenSize/2) - 10) && parseInt(catImage.style.left) < ((screenSize/2) + 10)){
      console.log(`in the middle`);
      catObject.danceTimerOne = setInterval(catObject.dancingCat, 100);
    }

  },

  catWalkLeft: function () {
    // debugger
    let startPosition = parseInt(catImage.style.left);
    let newPosition = startPosition + -10;
    catImage.style.left = newPosition + 'px';
    console.log(catImage.style.left);
    if (parseInt(catImage.style.left) < 0){
      catImage.style.transform = 'scale(1, 1)';
      clearInterval(catObject.walkLeftTimer);
      catObject.walkRightTimer = setInterval(catObject.catWalkRigth, 80);
    }
    else if (parseInt(catImage.style.left) > ((screenSize/2) - 10) && parseInt(catImage.style.left) < ((screenSize/2) + 10)){
      console.log(`in the middle`);
      catObject.danceTimerOne = setInterval(catObject.dancingCat, 100);
    }
  },

  dancingCat: function () {
    // catImage.src = "http://rs220.pbsrc.com/albums/dd152/LissyRose/dancing_cat.gif?w=280&h=210&fit=crop";
    // clearInterval(catObject.danceTimerOne);
    //make cat dance for 10 secs
  },

  addCats: function () {

  }

};

// if (parseInt(catImage.style.left) > screenSize){
//   clearInterval(catObject.walkRightTimer);
//
//   catObject.walkLeftTimer = setInterval(catObject.catWalkLeft, 80);
// }




catObject.walkRightTimer = setInterval(catObject.catWalkRigth, 80);
