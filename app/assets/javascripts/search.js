var myAppModule = angular.module('hither', []);

myAppModule.controller('SearchController', function($scope) {
  // $scope.departing = new google.maps.places.AutocompleteService();
  // $scope.returning = new google.maps.places.AutocompleteService();
  var placesService = new google.maps.places.AutocompleteService();
  // var search = new Search();
  this.search = new Search();
  // show results ul when results.length > 0 && focused on element
  $scope.focus = function(event) {
    console.log('in focus function');
    var search_box = event.target;
    // this.search.query = search_box.value;
    console.log(search_box.val);
    // console.log(this.search.query);



    // console.log(event.target);

    // var search_box = event.target;
    // console.log(search_box);

    // $(search_box).keyup(function(){
    //   $scope.results = [];
    //   var query = search_box.value;
    //   console.log(query);
    //   placesService.getQueryPredictions({ input: query }, callback);
    // });



    // find object that was focused on
    // create new autocomplete service object
    // add keypress listener on that object
    // query autocomplete service with input value on each keypress
    //
  }

  $scope.keyup = function(event) {
    console.log('in keyup function');
    var search_box = event.target;
    console.log(search_box.value);
    this.search.query = search_box.value;
    this.search.queryApi();
  }

  function callback(predictions, status) {
    if (status != google.maps.places.PlacesServiceStatus.OK) {
      alert(status);
      return;
    }

    console.log(predictions);

    $scope.hydrateResults(predictions);
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

var Search = function() {
  console.log('creating new Search object');
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
      console.log("hydrating result");
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

    console.log(predictions);

    this.hydrateResults(predictions);
  }
}


var searchResult = function(args) {
  this.description = args.description;
}
