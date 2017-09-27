let totalmages = 0;
let countImages = 0;
let page = 1;

const showImages = function (results) {
  const generateURL = function (photo) {
    return [
      'http://farm',
      photo.farm,
      '.static.flickr.com/',
      photo.server,
      '/',
      photo.id,
      '_',
      photo.secret,
      '_q.jpg' // Change the q for different sizes
    ].join('');
  };

  console.log( results );
  countImages++;
  totalmages =results.photos.total;


  _(results.photos.photo).each(function (p) {
    const imageURL = generateURL(p);
    const $img = $('<img>', {src: imageURL}); // Equivalent .attr('src', imageURL);
    $img.appendTo('#images');
  });
};

const searchFlickr = function (q) {
  console.log('Searching Flickr for', q, "pageNumber", page);

  const flickrURL = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: q,
    format: 'json',
    page: page++,
    // per_page: 30
  }).done(showImages);
};



$(document).ready(function () {
  $('#search').on('submit', function (e) {
    e.preventDefault();
    $('img').remove();
    totalmages = 0;
    countImages = 0;
    page = 1;

    const query = $('#query').val();
    searchFlickr( query );
  });

  const throttle = _.throttle(searchFlickr, 5000, { trailing: false});

  $(window).on('scroll', function () {
    const documentHeight = $(document).height();
    const windowHeight = $(window).height();
    const scrollTop = $(window).scrollTop();

    const scrollBottom = documentHeight - (scrollTop + windowHeight);
  if (countImages <= totalmages) {
    if (scrollBottom < 500) {
      const query = $('#query').val();
      // searchFlickr( query );
      throttle( query ); //slow the page when you get to the end of the page

      $('#images').on('click', function(){
        $(this).css({height: '+=10%', width: '+=10%'});
      })


      $(document).on('clicke', 'img', function (e){
        $('#largeImageContainer').empty();
        let largeImageURL = e.currentTarget.currentSrc.slice(0, -5);
        largeImageURL += "b.jpg";


        const $largeImg = $('<img>', {src: largeImageURL});
        $largeImg.appendTo('#largeImageContainer');
      });
    }
   }
  });
});
