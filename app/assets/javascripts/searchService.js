myAppModule.service('SearchService', function() {

  var property = {};

  return {
    getSearchObject: function() {
      return property;
    },
    setSearchObject: function(value) {
      property = value;
    }
  };
});