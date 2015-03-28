var myAppModule = angular.module('hither', []);

myAppModule.controller('SearchController', function($scope) {
  var placesService = new google.maps.places.AutocompleteService();
  this.search = new Search();

  $scope.keyup = function(event) {
    var search_box = event.target;
    this.search.query = search_box.value;
    this.search.queryApi();
  }

});

var Search = function() {
  this.placesService = new google.maps.places.AutocompleteService();
  this.results = [];
  this.depart_location = null;
  this.destination_location = null;
  this.departure_date = null;
  this.arrival_date = null;
}

Search.prototype = {
  hydrateResults: function(search_results) {
    search_results.forEach(function(el, ind, arr){
      this.results.push(new searchResult(el));
    });
  },
  queryApi: function(query) {
    this.placesService.getQueryPredictions({ input: query }, callback);
  },
  callback: function(predictions, status) {
    if (status != google.maps.places.PlacesServiceStatus.OK) {
      alert(status);
      return;
    }

    this.hydrateResults(predictions);
  }
}


var searchResult = function(args) {
  this.description = args.description;
}
