myAppModule.factory('userSession', ['$http', function($http) {
  var factory = {}

  factory.user = null;

  factory.checkSession = function() {
    if (factory.user == null) {
    $http.get('/sessions/fetch').
      success(function(data, status, headers, config) {
        console.log('ajax success');
        console.log(data);
        console.log(status);
      }).
      error(function(data, status, headers, config) {
        console.log('ajax fail');
        console.log(status);
      });
    }
  }

  return factory;
}]);
