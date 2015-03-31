myAppModule.controller('SearchController', ['$scope', '$rootScope', 'searchFactory', 'userSession',
    function($scope, $rootScope, searchFactory, userSession) {

      userSession.checkSession().success(function(data) {
        $rootScope.user = data;
      });

      $scope.show_input = true;
      $scope.show_filter = false;
      $scope.show_flight_results = true;

      $scope.search = searchFactory.buildSearch();
      $scope.airports = autocomplete_source;

      $scope.onItemSelected = function() {
        console.log('selected=' + $scope.search.depart_location);
      };


      $scope.submit = function() {
        console.log($scope.search);

        $rootScope.search = $scope.search;
      };

    }
  ]);

myAppModule.directive('typeahead', ['searchFactory', '$timeout', function(searchFactory, $timeout) {
  return {
    restrict: 'AEC',
    scope: {
      items: '=',
      prompt: '@',
      title: '@',
      subtitle: '@',
      model: '=',
      onSelect: '&'
    },
    link: function(scope, elem, attrs) {
      scope.handleSelection = function(selectedItem) {
        scope.model = searchFactory.buildLocation(selectedItem);
        console.log(scope.model);
        scope.current = 0;
        scope.selected = true;
        elem.find('input').text("");
        $timeout(function() {
          scope.onSelect();
        }, 200);
      };
      scope.current = 0;
      scope.selected = true;
      scope.isCurrent = function(index) {
        return scope.current == index;
      };
      scope.setCurrent = function(index) {
        scope.current = index;
      };
    },
    template: ['<input type="text" class="search-bar" ng-model="model" placeholder="{{prompt}}" ng-keydown="selected=false" />',
              '<br/>',
              '<div class="items" ng-hide="!model.length || selected">',
              '<div class="item" ng-repeat="item in items | filter:model track by $index" ng-click="handleSelection(item)" style="cursor:pointer" ng-class="{active:isCurrent($index)}" ng-mouseenter="setCurrent($index)">',
              '<p class="autocomplete-title">{{item[title]}}</p>',
              '<p class="autocomplete-subtitle">{{item[subtitle]}}</p>',
              '</div>',
              '</div>'
              ].join('\n')
  };
}]);

myAppModule.factory('searchFactory', ['$http', function($http) {

    var factory = {};

    factory.search;

    factory.buildSearch = function() {
      return new Search();
    };

    factory.buildLocation = function(args) {
      return new Location(args);
    };

    factory.fetchAirport = function(airport_name) {
      var airport_object;
      console.log(airport_name);
      autocomplete_source.forEach(function(el, i, arr) {
        if (el === airport_name) {
          console.log(el);
          airport_object = el;
        }
      });
      return airport_object;
    };

    var Location = function(args) {
      this.city = args.city;
      this.airport_code = args.code;
      this.latitude = args.lat;
      this.longitude = args.lng;
      this.name = args.name;
    };

    Location.prototype.toString = function() {
      return this.name + ' - ' + this.city;
    }

    var Search = function() {
      this.depart_location = null;
      this.arrival_location = null;
      this.depart_date = null;
      this.return_date = null;
    };

    return factory;
  }
]);


