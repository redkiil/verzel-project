'use strict'

angular.module('myApp.classe')
.controller('editClasseCtrl', function($scope,$http,$routeParams,$filter,$mdToast){
    $scope.id = $routeParams.id
    $scope.updateClasse = function(id){
        let date = new Date($scope.data.date)
        date = date.toISOString()
        $http.get(`http://localhost:3000/modules/${$scope.data.module.name}`)
        .then(function(data){
            console.log(data.data.id);
            $http.patch(`http://localhost:3000/classes/${id}`,{name: $scope.data.name, date: date,module: { _id: data.data.id } }).then(function(){
                $mdToast.show($mdToast.simple().textContent('Item atualizado!'))
            },function(err){console.error(err),$mdToast.show($mdToast.simple().textContent('Aconteceu um erro ao atualizar!'))})

        },function(err){console.log(err),$mdToast.show($mdToast.simple().textContent('Falha ao obter modulo inserido!'))})
    }
    $scope.deleteClasse = function(id){
        $http.delete(`http://localhost:3000/classes/${id}`).then(function(){
            $mdToast.show($mdToast.simple().textContent('Item deletado!'))
        },function(err){console.error(err),$mdToast.show($mdToast.simple().textContent('Aconteceu um erro ao deletar!'))})
    }
    var loadClasse = function(){ 
        console.log('AR', $routeParams.id)
        $http.get(`http://localhost:3000/classes/${$routeParams.id}`)
            .then(function(data){
                $scope.data = data.data;
                $scope.oldname = $scope.data.name
                $scope.oldmodule = $scope.data.module.name
                $scope.data.date = $filter('date')($scope.data.date , 'dd/MM/yyyy HH:mm:ss')
            },function(err){console.log(err)})
    }
    loadClasse();
})