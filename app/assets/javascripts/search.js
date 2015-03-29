var myAppModule = angular.module('hither', []);

angular.module('hither')
  .controller('SearchController', ['$scope', '$q', 'searchFactory',
    function($scope, $q, searchFactory) {

      $scope.search = new searchFactory.buildSearch();
      // var options = {types : ['airport']};
      var depart_input = document.getElementById('depart-autocomplete');
      var arrive_input = document.getElementById('destination-autocomplete');
      $scope.depart_ac = new google.maps.places.Autocomplete(depart_input);
      $scope.arrive_ac = new google.maps.places.Autocomplete(arrive_input);



      google.maps.event.addListener($scope.depart_ac, 'place_changed', function() {
        console.log('added listener');
        var place = $scope.depart_ac.getPlace();
        // $scope.search.depart_location = searchFactory.buildLocation(place);
        $scope.search.depart_location.latitude = place.geometry.location.lat();
        $scope.search.depart_location.longitude = place.geometry.location.lng();
        $scope.search.depart_location.name = place.formatted_address;
        $scope.$apply();
      });






























      // $scope.keyup = function(event) {
      //   var search_box = event.target;
      //   console.log('started keyup function');
        // $scope.results = searchFactory.query(search_box.value);

        // $scope.results = searchFactory.query(search_box.value);
        // console.log($scope.results);
        // var promise = searchFactory.query(search_box.value);
        // promise.then(function(data) {
        //   console.log(data);
        //   console.log('promise success');
        // }, function(data) {
        //   console.log(data);
        // }, function(data) {
        //   console.log(data);
        // });

        // $scope.results = data;
        // console.log('ended keyup function');
      // }

  }
]);

angular.module('hither')
  .factory('searchFactory', function($q) {

    var factory = {};
    factory.placesService = new google.maps.places.AutocompleteService();

    factory.query = function(query) {
      var deferred = $q.defer();

      if (query === '') {
        deferred.reject('No search query supplied');
      } else {
        factory.placesService.getQueryPredictions({input: query}, factory.hydrateResults);
        // console.log('adding resolve to deferred');
        // deferred.resolve(responses);
      }

      return deferred.promise;

      // return factory.placesService.getQueryPredictions({input: query}, factory.callback);
        // factory.placesService.getQueryPredictions({input: query}, factory.callback);
    };

    factory.selectResult = function(search_result) {
      return factory.buildSearch(search_result);
    };

    factory.hydrateResults = function(predictions, status) {
      var deferred = $q.defer();
      var hydrated = [];
      console.log(predictions);

      // if (predictions.length > 0) {
      predictions.forEach(function(el, ind, arr){
        hydrated.push(new SearchResult(el));
      });
      return deferred.resolve(hydrated);
      // }

      // return deferred.promise; //resolve(hydrated);
    };

    factory.callback = function(predictions, status) {
      // if (status != google.maps.places.PlaceServiceStatus.OK) {
      //   alert(status);
      //   return;
      // }

      console.log('start callback');
      console.log(predictions);
      return predictions; //factory.hydrateResults(predictions);;
    };

    factory.buildSearch = function() {
      return new Search();
    };

    factory.buildLocation = function(args) {
      return new Location(args);
    }

    var Location = function(args) {
      this.name = args.name;
      this.airport_code = args.airport_code;
      this.latitude = args.latitude;
      this.longitude = args.longitude;
    };

    // how to make this accept a object containing any of these parameters?
    var Search = function() {
      this.depart_location = '';
      this.arrival_location = '';
      this.depart_date = '';
      this.return_date = '';
    };

    var SearchResult = function(args) {
      this.name = args.description;
      this.airport_code = args.airport_code;
      this.latitude = args.latitude;
      this.longitude = args.longitude;
    };

    return factory;
  }
);


