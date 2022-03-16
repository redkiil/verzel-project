angular.module('myApp.module')
.controller('editModuleCtrl', function($scope,$http,$routeParams,$mdToast){
    $scope.data = {
        name: $routeParams.name,
        id: $routeParams.id,
        oldname: $routeParams.name
    }
    $scope.updateModule = function(id){
        $http.patch(`http://localhost:3000/modules/${id}`,{name: $scope.data.name}).then(function(){
            $mdToast.show($mdToast.simple().textContent('Item atualizado!'))
        },function(err){console.error(err),$mdToast.show($mdToast.simple().textContent('Aconteceu um erro ao atualizar!'))})
    }
    $scope.deleteModule = function(id){
        $http.delete(`http://localhost:3000/modules/${id}`).then(function(){
            $mdToast.show($mdToast.simple().textContent('Item deletado!'))
        },function(err){console.error(err),$mdToast.show($mdToast.simple().textContent('Aconteceu um erro ao deletar!'))})
    }
})