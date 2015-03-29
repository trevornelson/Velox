var myAppModule = angular.module('hither', []);

angular.module('hither')
  .controller('SearchController', ['$scope', 'searchFactory',
    function($scope, searchFactory) {
      $scope.search = new searchFactory.buildSearch();

      $scope.submit = function() {
        $scope.search.depart_date = new Date($scope.search.depart_date);
        $scope.search.return_date = new Date($scope.search.return_date);
        console.log($scope.search);
      };

      $scope.initAutocomplete = function(autocomplete_element, location_type) {
        var options = {types: ['(cities)'],
                        componentRestrictions: {country: "us"}
                      };

        google.maps.event.addListener(autocomplete_element, 'place_changed', function() {
          var place = autocomplete_element.getPlace();
          var lat = place.geometry.location.lat();
          var lng = place.geometry.location.lng();

          $scope.search[location_type] = {
                                          latitude: lat,
                                          longitude: lng,
                                          name: place.formatted_address
                                          };

          searchFactory.fetchAirport(lat, lng)
          .success(function(data, status, headers, config) {
            $scope.search[location_type].airport_code = data.airports[0].code;
          })
          .error(function(data, status, headers, config) {
            alert(status);
          });
        });
      };

      var depart_input = document.getElementById('depart-autocomplete');
      var arrive_input = document.getElementById('destination-autocomplete');
      $scope.depart_ac = new google.maps.places.Autocomplete(depart_input);
      $scope.arrive_ac = new google.maps.places.Autocomplete(arrive_input);

      $scope.initAutocomplete($scope.depart_ac, 'depart_location');
      $scope.initAutocomplete($scope.arrive_ac, 'arrival_location');

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


