angular.module('myApp.module')
.controller('createModuleCtrl', function($scope,$http,$mdToast){
   $scope.createModule = function(){
    $http.post(`http://localhost:3000/modules`,{name: $scope.data.name}).then(function(){
        $mdToast.show($mdToast.simple().textContent('Item criado!'))
    },function(err){console.error(err),$mdToast.show($mdToast.simple().textContent('Aconteceu um erro ao criar!'))})
   }
})