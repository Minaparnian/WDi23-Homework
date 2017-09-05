const fetchCharacters = function () {

  const character = document.getElementById('characters').value;
  console.log('character');
$.ajax(`https://anapioficeandfire.com/api/characters?${character}`).done(function (info){


});
};


$(document).ready(function(){
  $('#search').on('click', fetchCharacters);
})
