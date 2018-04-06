app.controller('homeCtrl', function ($scope,$mdSidenav,$state,$rootScope,$http,JsonService) {
  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }


$scope.readJson=JsonService.read();
$scope.readJson.then(function(response){
  $scope.jsonRecord = response;
})
  $scope.sendLogin = function() {
    $state.go('login');
  };
})
