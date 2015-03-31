myAppModule.controller('SaveItineraryController', ['$scope', '$rootScope', '$http', 'ItineraryFactory',
    function($scope, $rootScope, $http, ItineraryFactory) {


      $scope.create = function() {
        var json_itinerary = ItineraryFactory.parse($rootScope.hotels[$rootScope.hotels_index])
        $http.post('/users/' + $rootScope.user.id + '/itineraries', )
      };

      $scope.destroy = function() {
        // send ajax to itineraries delete
      }
    }
  ]);

myAppModule.factory('ItineraryFactory', function() {
  var factory = {};

  factory.parse = function(){
    // parse itinerary into correct format for rails
  }


  return factory;
});
