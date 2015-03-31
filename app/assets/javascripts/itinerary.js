myAppModule.controller('SaveItineraryController', ['$scope', '$rootScope', '$http',
    function($scope, $rootScope, $http) {


      $scope.create = function() {
        $http.get('/users/:id/itineraries')
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
