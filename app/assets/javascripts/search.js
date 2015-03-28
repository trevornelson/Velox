var myAppModule = angular.module('hither', []);

angular.module('hither')
  .controller('SearchController', ['$scope', 'searchFactory',
    function($scope, searchFactory) {
      var search = searchFactory.buildSearch({});

      $scope.keyup = function() {
        searchFactory.query();
      }
  }
]);

angular.module('hither')
  .factory('searchFactory', function() {

    var factory = {};

    factory.query = function(query) {
      return query;
    };

    factory.selectResult = function(search_result) {
      factory.buildSearch(search_result);
    };

    factory.buildSearch = function(search_options) {
      console.log('building search object');
      return new Search(search_options);
    };

    var location = function(args) {
      this.name = args.name;
      this.airport_code = args.airport_code;
      this.latitude = args.latitude;
      this.longitude = args.longitude;
    };

    // how to make this accept a object containing any of these parameters?
    var Search = function(depart_location) {
      this.depart_location = depart_location;
      this.arrival_location = null;
      this.depart_date = null;
      this.return_date = null;
    };

    var searchResult = function(args) {
      this.name = args.description;
      this.airport_code = args.airport_code;
      this.latitude = args.latitude;
      this.longitude = args.longitude;
    };

    return factory;
  }
);


