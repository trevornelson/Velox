$(document).ready(function(){
  var depart_autocomplete = $('#depart-autocomplete');
  var return_autocomplete = $('#return-autocomplete');

  console.log("Initialized function called");


  var departing = new google.maps.places.Autocomplete((depart_autocomplete), { types: ['airport'] });


  console.log("Departing object initialized");
  console.log(departing);

  google.maps.event.addListener(departing, 'place_changed', function() {
    createSearch();
    // console.log(departing.getPlace());
  });

  function createSearch() {
    console.log("in createSearch");

    var place = autocomplete.getPlace();

    console.log(place.geometry.location.lat());
    console.log(place.geometry.location.lng());
  }

  // var returning = new google.maps.places.Autocomplete((return_autocomplete), { types: ['airport'] });


  // console.log("Returning object initialized");
  // console.log(returning);


  // google.maps.event.addListener(returning, 'place_changed', function() {
  //   // console.log(returning.getPlace());
  // });
});
