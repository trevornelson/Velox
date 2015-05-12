App.directive('autocomplete', ['SearchSvc', '$timeout', function(SearchSvc, $timeout) {
  return {
    restrict: 'AEC',
    scope: {
      items: '=',
      prompt: '@',
      title: '@',
      subtitle: '@',
      city: '@',
      model: '=',
      onSelect: '&'
    },
    link: function(scope, elem, attrs) {
      scope.handleSelection = function(selectedItem) {
        scope.model = SearchSvc.buildLocation(selectedItem);
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
    template: ['<input type="text" class="search-bar form-control" ng-model="model" placeholder="{{prompt}}" ng-keydown="selected=false" />',
              '<div class="items" ng-hide="!model.length || selected">',
              '<div class="item" ng-repeat="item in items | filter:model track by $index" ng-click="handleSelection(item)" style="cursor:pointer" ng-class="{active:isCurrent($index)}" ng-mouseenter="setCurrent($index)">',
              '<div class="autocomplete-title-container">',
              '<span class="autocomplete-title">{{item[title]}}</span>',
              '</div>',
              '<div class="autocomplete-subtitle-container">',
              '<span class="autocomplete-subtitle"><strong>{{item[subtitle]}}</strong></span>',
              '<span class="autocomplete-subtitle"><em>{{item[city]}}</em></span>',
              '</div>',
              '</div>',
              '</div>'
              ].join('\n')
  };
}]);