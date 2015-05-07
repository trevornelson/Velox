App.controller('SearchController', ['$scope', 'SearchSvc', 'FlightSvc', 'HotelSvc',
                            function($scope, SearchSvc, HotelSvc) {
  $scope.$on('search.update', function(event) {
    $scope.trips = SearchSvc.trips;
    $scope.hotels = SearchSvc.hotels;
  });

  $scope.trips = [];
  $scope.hotels = [];

}]);
