$(document).ready(function(){
  var depart_autocomplete = $('#depart-autocomplete');
  var return_autocomplete = $('#return-autocomplete');

  console.log("Initialized function called");


  var departing = new google.maps.places.Autocomplete((depart_autocomplete), { types: ['airport'] });


  console.log("Departing object initialized");
  console.log(departing);

  google.maps.event.addListener(departing, 'place_changed', function() {
    console.log("event listener added to departing");
    // console.log(departing.getPlace());
  });

  var returning = new google.maps.places.Autocomplete((return_autocomplete), { types: ['airport'] });


  console.log("Returning object initialized");
  console.log(returning);


  google.maps.event.addListener(returning, 'place_changed', function() {
    // console.log(returning.getPlace());
  });
});
