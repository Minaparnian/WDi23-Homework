/*Create a variable to store a reference to the img.

Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.

Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.

Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
*/

const cat = document.getElementsByTagName('img')[0];
cat.style.position ='absolute';
cat.style.left ='0px';

 var catWalk = function (){
   var oldPosition = parseInt(cat.style.left);
   var newPosition = oldPosition + 1;
   cat.style.left = newPosition + 'px';

 };

 setInterval(catWalk, 1);
