let SpaceChatApp = angular.module('SpaceChatApp', []);

SpaceChatApp.controller('ChatController', function($scope) {
  let socket = io.connect('http://' + document.domain + ':' + location.port + '/iss');

  $scope.messages = [];
  $scope.name = '';
  $scope.text = '';

  socket.on('connect', function() {
    console.log('Socket Connected...');
  });
});
