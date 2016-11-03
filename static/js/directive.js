let SpaceChatApp = angular.module('SpaceChatApp', []);

SpaceChatApp.directive('background', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/background.html'
  }
});

SpaceChatApp.directive('logo', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/logo.html'
  }
});
