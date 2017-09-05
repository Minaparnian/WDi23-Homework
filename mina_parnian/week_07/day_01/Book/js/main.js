const fetchFact = function () {

  const val = document.getElementById('fact').value;

//Create the XHR object
const xhr = new XMLHttpRequest();
//set up the XHR object with the url
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${val}`);

//Attach the readystatechange handler (callback)
  xhr.onreadystatechange = function () {

  if(xhr.readyState !== 4) {
    return;
  }
    const info = JSON.parse( xhr.responseText )


    const image = info.items[0].volumeInfo.imageLinks.thumbnail;


    //find the image tag by id
    document.getElementById('image').src = image;




};
xhr.send();
//send the request
};

fetchFact();

const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', fetchFact);
