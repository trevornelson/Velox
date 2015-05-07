/**
Service for user authentication and querying app backend for user data.
**/
App.service('UserSvc', ['$rootScope',
                function($rootScope) {

  var service = {
    user: null,
    errors: {
      username: null,
      password: null,
    },

    // fetches user session from backend API if user is null. Returns user.
    getUser: function() {
      if (!user) {
        $http.get('/sessions/fetch')
          .success( function(data) { service.user = data; }
        );
      }

      return user;
    },

    // Attempts to authenticate user, takes the serialized inputs as an argument
    login: function(credentials) {
      $http.post('/sessions', credentials)
        .success( function(data) {
          service.user = data;
          
          service.errors = { username: null, password: null };
        }).fail( function(data) {
          // TODO: Set service.errors based on response
        });
    }


  };

  return service;
}]);
