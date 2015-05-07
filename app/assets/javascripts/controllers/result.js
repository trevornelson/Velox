/**
Controller for itinerary results filters
**/
App.controller('ResultsController', ['$scope', 'FlightSvc', 'HotelSvc',
                            function($scope,   FlightSvc,   HotelSvc) {

  $scope.$on('trips.update', function(event) {
    $scope.trips = FlightSvc.trips;
  });

  $scope.$on('hotels.update', function(event) {
    $scope.hotels = HotelSvc.hotels;
  });



}]);
