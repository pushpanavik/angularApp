app.controller('homeCtrl', function ($scope,$mdSidenav,$state,$rootScope,$http,JsonService) {
  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }
$scope.manufactureArray=[];
$scope.storageArray=[];
$scope.osArray=[];
$scope.cameraArray=[];

$scope.readJson=JsonService.read();
$scope.readJson.then(function(response){
  $scope.jsonRecord = response.data;

angular.forEach($scope.jsonRecord,function(value,key)
{
  $scope.manufactureArray.push(value.specs.manufacturer);
  $scope.removeDuplicateManufacturer=$scope.manufactureArray.filter(function(elem,index,data){
    return index==data.indexOf(elem);
  })
  console.log($scope.removeDuplicateManufacturer);
});
  angular.forEach($scope.jsonRecord,function(value,key)
  {
    $scope.storageArray.push(value.specs.storage);
    $scope.removeDuplicateStorage=$scope.storageArray.filter(function(elem,index,data){
      return index==data.indexOf(elem);
    })
});
angular.forEach($scope.jsonRecord,function(value,key)
{
  $scope.osArray.push(value.specs.os);
  $scope.removeDuplicateOS=$scope.osArray.filter(function(elem,index,data){
    return index==data.indexOf(elem);
  })
});
angular.forEach($scope.jsonRecord,function(value,key)
{
  $scope.cameraArray.push(value.specs.camera);
  $scope.removeDuplicateCamera=$scope.cameraArray.filter(function(elem,index,data){
    return index==data.indexOf(elem);
  })
});
})
// $scope.abc=["afdaf","fgsgs"];
  $scope.sendLogin = function() {
    $state.go('login');
  };
})
