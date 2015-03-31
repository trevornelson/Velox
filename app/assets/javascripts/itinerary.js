myAppModule.controller('SaveItineraryController', ['$scope', '$rootScope',
    function($scope, $rootScope) {


      $scope.create = function() {
        // send ajax to itineraries create
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
