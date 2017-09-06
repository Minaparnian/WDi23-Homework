const fetchTvShow = function () {

  const name = document.getElementById('name').value;

$.ajax(`http://api.tvmaze.com/singlesearch/shows?q=${name}`).done(function (info){

  const name = info.name;
     $('<h1>').text(`${name}`).appendTo('main');
  const genre = info.genres;
     $('<p>').text(`Genre: ${genre}`).appendTo('main');
  const premiered = info.premiered;
     $('<p>').text(`Premiered: ${premiered}`).appendTo('main');
  const language = info.language;
    $('<p>').text(`Language: ${language}`).appendTo('main');
  const cover = info.image.medium;
     $('<img>').attr('src', cover).appendTo('main');

 }).done(function (i) {
    console.log(i);
   }).fail(function () {
     alert('There was an error');

 });
};


$(document).ready(function(){
  $('#search').on('click', fetchTvShow);
})
