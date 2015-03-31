myAppModule.controller('SaveItineraryController', ['$scope', '$rootScope', '$http', 'ItineraryFactory',
    function($scope, $rootScope, $http, ItineraryFactory) {


      $scope.create = function() {
        var user_id = $rootScope.user.id

        if (user_id) {
          var json_itinerary = {
                                user_id: user_id,
                                hotels: $rootScope.hotels[$rootScope.hotels_index],
                                trips: [$rootScope.trips[$rootScope.trips_index]]
                                );

          $http.post('/users/' + $rootScope.user.id + '/itineraries', json_itinerary).success(function(data) {
            console.log(data);  // Redirect view in angular to user account page
          });
        } else {
          $('#login-modal').modal();
        }
      };

      $scope.destroy = function() {
        // send ajax to itineraries delete
      }
    }
  ]);
