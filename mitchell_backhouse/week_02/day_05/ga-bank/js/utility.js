$(document).ready( function() {
  $('#reset').on('click', function() {
    $('table tbody tr').remove();
  });
  $('#toggleHidden').on('click', function() {
    $('.transactions').toggleClass('hidden');
  })
});
