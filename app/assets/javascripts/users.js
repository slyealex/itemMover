

// This function should allow a user to toggle on and off to move elements where
// they want them on the page, then toggle off to set the elements


$(document).on('ready', function() {

  $('#dragBox').draggable({disabled: true});
  $('#dragBox').draggable({disabled: true});
  $('#dragBox').draggable({disabled: true});
  $('#dragBox').draggable({disabled: true});
  $('#dragBox').draggable({disabled: true});


  $('#dragOn').on('click', function() {
    $('#dragBox').draggable('enable');
  });

  $('#dragOff').on('click', function() {
    $('#dragBox').draggable('disable');
  });
});
