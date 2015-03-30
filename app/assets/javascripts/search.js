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
      $scope.depart_location = '';
      $scope.arrival_location = '';

      $scope.submit = function() {
        $rootScope.search = $scope.search;
        console.log($rootScope.search);
      }

      $scope.onItemSelected = function() {
        console.log('selected=' + $scope.name);
      };
    }
  ]);

myAppModule.directive('typeahead', function($timeout) {
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
        scope.model = selectedItem;
        scope.current = 0;
        scope.selected = true;
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
    template: ['<input type="text" ng-model="model" placeholder="{{prompt}}" ng-keydown="selected=false" />',
              '<br/>',
              '<div class="items" ng-hide="!model.length || selected">',
              '<div class="item" ng-repeat="item in items | filter:model track by $index" ng-click="handleSelection(item[title])" style="cursor:pointer" ng-class="{active:isCurrent($index)}" ng-mouseenter="setCurrent($index)">',
              '<p class="title">{{item[title]}}</p>',
              '<p class="subtitle">{{item[subtitle]}}</p>',
              '</div>',
              '</div>'
              ].join('\n')
  };
});

myAppModule.factory('searchFactory', ['$http', function($http) {

    var factory = {};

    factory.search;

    factory.buildSearch = function() {
      factory.search = new Search();
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
      this.name = args.name;
      this.airport_code = args.airport_code;
      this.latitude = args.latitude;
      this.longitude = args.longitude;
    };

    var Search = function() {
      this.depart_location = {};
      this.arrival_location = {};
      this.depart_date = "2015-07-12";
      this.return_date = "2015-07-12";
    };

    return factory;
  }
]);


