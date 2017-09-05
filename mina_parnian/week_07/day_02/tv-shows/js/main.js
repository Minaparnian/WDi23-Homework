const fetchTvShow = function () {

  const name = document.getElementById('name').value;

$.ajax(`http://api.tvmaze.com/singlesearch/shows?q=${name}`).done(function (info){
  debugger
  const genre = info.results[0].genres;
  $('<p>').text(`Genre: ${genre}`).appendTo('main');

});
};


$(document).ready(function(){
  $('#search').on('click', fetchTvShow);
})
