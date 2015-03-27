function initialize() {
  var depart_autocomplete = $('#depart-autocomplete');
  var return_autocomplete = $('#return-autocomplete');
  var departing, returning;

  departing = new google.maps.places.Autocomplete((depart_autocomplete), { types: ['airport'] });

  google.maps.event.addListener(departing, 'place_changed', function() {
    console.log(departing.getPlace());
  });

  returning = new google.maps.places.Autocomplete((return_autocomplete), { types: ['airport'] });

  google.maps.event.addListener(returning, 'place_changed', function() {
    console.log(returning.getPlace());
  });
}
