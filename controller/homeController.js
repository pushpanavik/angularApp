app.controller('homeCtrl',function($scope,$timeout, $mdSidenav, $log){
  $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };
})
