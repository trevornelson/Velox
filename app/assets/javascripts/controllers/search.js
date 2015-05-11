/**
Controller for trip search input fields
**/
App.controller('SearchController', ['$scope', 'SearchSvc',
                            function($scope,   SearchSvc) {
  
  $scope.search = SearchSvc;
  $scope.airports = autocomplete_source;

}]);
