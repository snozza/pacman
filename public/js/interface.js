$(document).ready(function(){

  $('#player-name-button').on('click',function(){
    var playerName = $('#player-name-form').val();
    $('#player-name').text('Welcome' + ' ' + playerName);
    $('#player-name-form').hide();
    $('#player-name-button').hide();
  });

})