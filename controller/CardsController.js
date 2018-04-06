app.controller("serviceCtrl",function($scope,JsonService)
{
$scope.jsonRead=function(){
    // $scope.ID="1234";
    $scope.json = JsonService.read();
    $scope.json
    .then(function(response) {
        $scope.json=response.data;
         console.log($scope.json);
    });
    //console.log("hello");
  }
});
