angular.module("app").controller("mainController", function($scope, nameFactory){
  $scope.angutest = nameFactory.getName();

$scope.addHero = function(angutest){
  console.log(angutest)
}
});
