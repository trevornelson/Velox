var myAppModule = angular.module('hither', []);

angular.module('hither')
  .controller('SearchController', ['$scope', 'searchFactory',
    function($scope, searchFactory) {

      $scope.search = new searchFactory.buildSearch();

      $scope.submit = function() {
        $scope.search.depart_date = new Date($scope.search.depart_date);
        $scope.search.return_date = new Date($scope.search.return_date);
      }

      var options = {types: ['(cities)'],
                      componentRestrictions: {country: "us"}
                    };
      var depart_input = document.getElementById('depart-autocomplete');
      var arrive_input = document.getElementById('destination-autocomplete');
      $scope.depart_ac = new google.maps.places.Autocomplete(depart_input, options);
      $scope.arrive_ac = new google.maps.places.Autocomplete(arrive_input, options);



      google.maps.event.addListener($scope.depart_ac, 'place_changed', function() {
        var place = $scope.depart_ac.getPlace();
        $scope.search.depart_location.latitude = place.geometry.location.lat();
        $scope.search.depart_location.longitude = place.geometry.location.lng();
        $scope.search.depart_location.name = place.formatted_address;
        searchFactory.fetchAirport(
                                    $scope.search.depart_location.latitude,
                                    $scope.search.depart_location.longitude)
        .success(function(data, status, headers, config) {
          $scope.search.depart_location.airport_code = data.airports[0].code;
        })
        .error(function(data, status, headers, config) {
          alert(status);
        });
      });

      google.maps.event.addListener($scope.arrive_ac, 'place_changed', function() {
        var place = $scope.arrive_ac.getPlace();
        $scope.search.arrival_location.latitude = place.geometry.location.lat();
        $scope.search.arrival_location.longitude = place.geometry.location.lng();
        $scope.search.arrival_location.name = place.formatted_address;
        searchFactory.fetchAirport(
                                    $scope.search.arrival_location.latitude,
                                    $scope.search.arrival_location.longitude)
        .success(function(data, status, headers, config) {
          $scope.search.arrival_location.airport_code = data.airports[0].code;
          console.log($scope.search);
        })
        .error(function(data, status, headers, config) {
          alert(status);
        });
      });
    }
  ]);

angular.module('hither')
  .factory('searchFactory', ['$http', function($http) {

    var factory = {};

    factory.buildSearch = function() {
      return new Search();
    };

    factory.buildLocation = function(args) {
      return new Location(args);
    };

    factory.fetchAirport = function(lat, lng) {
      return $http.jsonp("https://airport.api.aero/airport/nearest/" + lat + "/" + lng + "?user_key=" + sita_key + "&callback=JSON_CALLBACK");
    };

    var Location = function(args) {
      this.name = args.name;
      this.airport_code = args.airport_code;
      this.latitude = args.latitude;
      this.longitude = args.longitude;
    };

    var Search = function() {
      this.depart_location = {};
      this.arrival_location = {};
      this.depart_date = null;
      this.return_date = null;
    };

    return factory;
  }
]);


