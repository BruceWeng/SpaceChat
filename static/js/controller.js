let SpaceChatApp = angular.module('SpaceChatApp', []);

SpaceChatApp.controller('ChatController', function($scope) {
  let socket = io.connect('http://' + document.domain + ':' + location.port + '/iss');

  $scope.messages = [];
  $scope.name = '';
  $scope.text = '';

  socket.on('message', function(msg) {
    console.log(msg);
    $scope.messages.push(msg);
    $scope.$apply();
    let elem = document.getElementById('msgpane');
    elem.scrollTop = elem.scrollHeight;
  });

  $scope.setName = function() {
      socket.emit('identify', $scope.name)
  };

  $scope.send = function() {
    console.log(`Sending message: ${$scope.text}`);
    socket.emit('message', $scope.text);
    $scope.text = '';
  }

  socket.on('connect', function() {
    console.log('Socket Connected...');
  });
});
