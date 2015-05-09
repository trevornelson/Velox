/**
Service for user authentication and querying app backend for user data.
**/
App.service('UserSvc', ['$rootScope', '$http',
                function($rootScope,   $http) {

  var service = {
    user: null,
    errors: {
      username: null,
      password: null
    },

    // fetches user session from backend API if user is null. Returns user.
    getUser: function() {
      return $http.get('/sessions/fetch')
        .success(function(data, status, headers, config) {
          service.user = data;
          return service.user;
        }
      );
    },

    // Attempts to authenticate user, takes the serialized inputs as an argument
    login: function(credentials) {
      $http.post('/sessions', credentials)
        .success( function(data, status, headers, config) {
          service.user = data;
          
          service.errors = { username: null, password: null };
        }).fail( function(data, status, headers, config) {
          // TODO: Set service.errors based on response
        });
    },

    logout: function() {
      $http({ method: 'DELETE', url: '/sessions/' + user.id })
        .success(function(data) { service.user = null; }
      );
    }

  };

  return service;
}]);
