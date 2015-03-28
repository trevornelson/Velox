var myAppModule = angular.module('hither', []);

myAppModule.controller('SearchController', function($scope) {
  // $scope.departing = new google.maps.places.AutocompleteService();
  // $scope.returning = new google.maps.places.AutocompleteService();



  // show results ul when results.length > 0 && focused on element
  $scope.autoComplete = function(event) {
    console.log(event.target);
    var search_box = event.target;
    var placesService = new google.maps.places.AutocompleteService();

    $(search_box).on('keyup', function(){
      $scope.results = [];
      var query = search_box.value;
      console.log(query);
      placesService.getQueryPredictions({ input: query }, callback);
    });

    function callback(predictions, status) {
      if (status != google.maps.places.PlacesServiceStatus.OK) {
        alert(status);
        return;
      }

      console.log(predictions);

      $scope.hydrateResults(predictions);
    }

    // find object that was focused on
    // create new autocomplete service object
    // add keypress listener on that object
    // query autocomplete service with input value on each keypress
    //
  }

  $scope.hydrateResults = function(search_results) {
    search_results.forEach(function(el, ind, arr){
      console.log("hydrating result");
      $scope.results.push(new searchResult(el));
    })
  }

  // on result click...
  $scope.selectResult = function(places_object) {
    // hydrate Search object
  }
});

var searchResult = function(args) {
  this.description = args.description;
}
