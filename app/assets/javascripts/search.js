var myAppModule = angular.module('hither', []);

myAppModule.controller('SearchController', function($scope) {
  // $scope.departing = new google.maps.places.AutocompleteService();
  // $scope.returning = new google.maps.places.AutocompleteService();
  $scope.results = [];

  // show results ul when results.length > 0 && focused on element
  $scope.autoComplete = function(service) {
    // find object that was focused on
    // create new autocomplete service object
    // add keypress listener on that object
    // query autocomplete service with input value on each keypress
    //
  }

  // on result click...
  $scope.selectResult = function(places_object) {
    // hydrate Search object
  }
});
