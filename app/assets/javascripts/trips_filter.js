
// Flight (leg) object
function Flight(flight_data){
  this.carrier_abbv = flight_data.carrier_abbv;
  this.airport_ori_code = flight_data.origin;
  this.airport_dest_code = flight_data.destination;
  this.duration = flight_data.duration;
}

// creatFlights function
function createFlights(flight_input){
  return flight_input.map(function(flight_data) {return new Flight(flight_data)})
}

// Trip object
function Trip(flight_array, trip_data){
  this.price = trip_data.price;
  this.flights = flight_array;
  this.duration = function(){
    duration = 0;
    this.flights.forEach(function(flight){duration = duration + flight.duration});
    return duration
  }
}

// stubbed request input
request_input = {
  "request": {
    "slice": [
      {
        "origin": "EWR",
        "destination": "SFO",
        "date": "2015-03-27"
      }
    ],
    "passengers": {
      "adultCount": 1,
      "infantInLapCount": 0,
      "infantInSeatCount": 0,
      "childCount": 0,
      "seniorCount": 0
    },
    "solutions": 1,
    "refundable": false
  }
}

// findTrips function when searching
myAppModule.controller('TripController', function($scope,$http) {
  var httpConfig = {headers: {'key':'AIzaSyDskBz8WieP74_yU_hA7tVRvL1Ifl4ED1w'}};
  $scope.findTrips = function(){
    $http.post('https://www.googleapis.com/qpxExpress/v1/trips/search', request_input)
    .success(function(data){
      var flight_input = data.trips.tripOption[0].slice[0].segment[0];
      var trip_input = data.trips.tripOption;
      $scope.trips = new Trip(createFlights(flight_input), {price: "USD320.50"});
    })
    .error(function(data, status){
      $scope.trips = new Trip(createFlights(flight_input), {price: "USD320.50"});
    });
  }
});

// stubbed output from the flight api
flight_output = [
{
  carrier_abbv: "US",
  origin: "EWR",
  destination: "PHX",
  duration: "330"
},
{
  carrier_abbv: "CA",
  origin: "PHX",
  destination: "LAX",
  duration: "210"
}
];