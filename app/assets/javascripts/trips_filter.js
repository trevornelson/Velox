myAppModule.controller('TripController', ['$scope', '$rootScope', 'FlightFactory', function($scope, $rootScope, FlightFactory) {
  $scope.$watch(function() {return $rootScope.search}, function(newValue, oldValue){
    console.log("trip controller watch called");
    var thing = {
      "request": {
        "slice": [
        {
          "origin": newValue.depart_location.airport_code,
          "destination": newValue.arrival_location.airport_code,
          "date": newValue.depart_date
        }
        ],
        "passengers": {
          "adultCount": 1,
          "infantInLapCount": 0,
          "infantInSeatCount": 0,
          "childCount": 0,
          "seniorCount": 0
        },
        "solutions": 5,
        "refundable": false
      }
    };
    FlightFactory.fetchFlights(thing).success(function(data) {
      console.log(data.trips);
      var trip_input = data.trips.tripOption;
      $scope.trips = trip_input.map(function(flight_input) {
        return new Trip(createFlights(flight_input.slice[0].segment), flight_input);
      });
      $scope.$apply();
    }).error(function(data) {
      var trip_input = stub_trips.trips.tripOption;
      $scope.trips = trip_input.map(function(flight_input) {
        return new Trip(createFlights(flight_input.slice[0].segment), flight_input);
      });
      $scope.$apply();
    });
  });
  $scope.trip_index = 0;
  $scope.next = function () {
      if ($scope.trip_index >= $scope.trips.length - 1) {
          $scope.trip_index = 0;
      } else {
          $scope.trip_index++;
      }
  };
}] );

myAppModule.factory('FlightFactory', ['$http', '$rootScope', function($http, $rootScope) {
  var factory = {};


  factory.fetchFlights = function(thing) {
    return $.ajax({
      type: 'POST',
      url: 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAZwVwEPSvSSXXKzLrt-h-lQMN2T3woqCs',
      contentType: 'application/json',
      data: JSON.stringify(thing),
      dataType: "json"
    });
  };

  return factory;
}] );

function Flight(flight_data){
  this.dep_time = flight_data.leg[0].departureTime;
  this.arr_time = flight_data.leg[0].arrivalTime;
  this.carrier_abbv = flight_data.flight.carrier;
  this.airport_ori_code = flight_data.leg[0].origin;
  this.airport_dest_code = flight_data.leg[0].destination;
  this.duration = flight_data.leg[0].duration;
  this.cabin = flight_data.cabin;
}

function createFlights(flight_input){
  return flight_input.map(function(flight_data) {return new Flight(flight_data)})
}

function Trip(flight_array, flight_input){
  this.price = flight_input.saleTotal;
  this.flights = flight_array;
  this.duration = flight_input.slice[0].duration;
}
