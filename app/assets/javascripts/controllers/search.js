/**
Controller for trip search input fields
**/
App.controller('SearchController', ['$scope', 'SearchSvc', 'FlightSvc', 'HotelSvc',
                            function($scope,   SearchSvc,   FlightSvc,   HotelSvc) {
  
  $scope.$on('search.update', function(event) {
    $scope.trips = SearchSvc.trips;
    $scope.hotels = SearchSvc.hotels;
  });

  $scope.trips = [];
  $scope.hotels = [];

}]);

/**
Controller for itinerary results filters
**/
App.controller('ResultsController', ['$scope', 'FlightSvc', 'HotelSvc',
                            function($scope,   FlightSvc,   HotelSvc) {





}]);
