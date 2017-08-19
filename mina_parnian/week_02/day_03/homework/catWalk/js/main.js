/*Exercises: Animation

The Cat Walk

Who needs Milan when you have JavaScript?

Start with this webpage, which has a single img tag of an animated GIF of a cat walking.

<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title>Cat Walk</title>
 </head>
 <body>
  
  <img id="cat" style="position:absolute;left:0" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
  
 </body>
</html>
Create a new Javascript file and link to it with a script tag at the bottom.

Create a variable to store a reference to the img.

Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
get current image left position -> add 10px to it

Call that function every 50 milliseconds (setInterval). Your cat should now be moving across the screen from left to right. Hurrah!
eg. setInterval(catWalk(), 50)
1 second = 1000 milliseconds

Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.

Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

*/


let cat = document.getElementsByTagName('img')[0];
let cat2 = document.getElementsByTagName('img')[1];

cat.style.position = 'absolute';
cat.style.left = '0px';
cat2.style.position = 'absolute';
cat2.style.left = '0px';
cat2.style.top = '400px';

let catWalkBlack = function () {
	let oldLeft = parseInt(cat.style.left);
	let newRight = oldLeft + 1;
	cat.style.left = newRight + 'px';

if (newRight > 500){
   newRight = 500;


}
};

let catStop = function() {
	clearInterval(timerId);
}

let catWalkBrown = function () {
	let oldLeft = parseInt(cat2.style.left);
	let newRight = oldLeft + 1;
	cat2.style.left = newRight + 'px';
}


setInterval(catWalkBlack, 10);
setInterval(catWalkBrown, 10);

// let catWalkToRight = function () {
// 	let oldRight = parseInt(cat.style.left);
// 	let newLeft = oldRight + 1;
// 	cat.style.right = newLeft + 'px';



// }



