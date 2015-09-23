$('#center-text').on('click', function(event) {
  event.preventDefault();
  $('mag').removeClass('left-text');
  $('mag').removeClass('justify-text');
  $('mag').removeClass('right-text');
  $('mag').addClass('center-text');
});