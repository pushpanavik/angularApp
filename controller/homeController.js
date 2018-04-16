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

  // $scope.items=jsonRecord.manufac;
  // $scope.selected=[];
  // $scope.toggle = function (item, list) {
  //      var idx = list.indexOf(item);
  //      if (idx > -1) {
  //        list.splice(idx, 1);
  //      }
  //      else {
  //        list.push(item);
  //      }
  //    };
  //    $scope.exists = function (item, list) {
  //      return list.indexOf(item) > -1;
  //    };
angular.forEach($scope.jsonRecord,function(value,key)
{
  $scope.manufactureArray.push(value.specs.manufacturer);
  $scope.removeDuplicateManufacturer=$scope.manufactureArray.filter(function(elem,index,data){
    return index==data.indexOf(elem);
  })

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
       $scope.sendLogin = function() {
         $state.go('login');
};
})
