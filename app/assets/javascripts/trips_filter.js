//create hotel controller
myAppModule.controller('TripController', ['$scope', 'FlightFactory', function($scope, FlightFactory) {
  FlightFactory.fetchFlights().success(function(data) {
      var trip_input = data.trips.tripOption;
      $scope.trips = trip_input.map(function(flight_input) {
        return new Trip(createFlights(flight_input.slice[0].segment), flight_input);
      });
      $scope.$apply();
  });
}] );

// create flight factory
myAppModule.factory('FlightFactory', ['$http', function($http) {
  var factory = {};

  var thing = {
    "request": {
      "slice": [
      {
        "origin": "EWR",
        "destination": "SFO",
        "date": "2015-03-29"
      }
      ],
      "passengers": {
        "adultCount": 1,
        "infantInLapCount": 0,
        "infantInSeatCount": 0,
        "childCount": 0,
        "seniorCount": 0
      },
      "solutions": 2,
      "refundable": false
    }
  };

  factory.fetchFlights = function() {
    return $.ajax({
      type: 'POST',
      url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAZwVwEPSvSSXXKzLrt-h-lQMN2T3woqCs&',
      contentType: 'application/json',
      data: JSON.stringify(thing),
      dataType: "json"
    });
  };

  return factory;
}] );

//flight class definition
function Flight(flight_data){
  this.dep_time = flight_data.leg[0].departureTime;
  this.arr_time = flight_data.leg[0].arrivalTime;
  this.carrier_abbv = flight_data.flight.carrier;
  this.airport_ori_code = flight_data.leg[0].origin;
  this.airport_dest_code = flight_data.leg[0].destination;
  this.duration = flight_data.leg[0].duration;
  this.cabin = flight_data.cabin;
}

//create flights function
function createFlights(flight_input){
  return flight_input.map(function(flight_data) {return new Flight(flight_data)})
}

//trip class definition
function Trip(flight_array, flight_input){
  this.price = flight_input.saleTotal;
  this.flights = flight_array;
  this.duration = flight_input.slice[0].duration;
}
