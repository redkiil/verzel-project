'use strict'

angular.module('myApp.classe')
.controller('createClasseCtrl', function($scope,$http,$routeParams,$filter,$mdToast){
    $scope.data = {
        module:{
            name: $routeParams.id
        }
    }
    $scope.createClasse = function(){
            console.log($scope.data.date)
            let dt = $scope.data.date
            let dateandhour = dt.split(' ')
            let date = dateandhour[0].split('/')
            let hour = dateandhour[1].split(':')//refactor this
            let formatted_date = new Date(date[2], date[1]-1, date[0], hour[0], hour[1], hour[2]).toISOString()
            console.log("DATE", formatted_date)
            $http.get(`http://localhost:3000/modules/${$scope.data.module.name}`)
            .then(function(data){
                console.log(data.data.id);
                $http.post(`http://localhost:3000/classes`,{name: $scope.data.name, date: formatted_date,module: { _id: data.data.id } }).then(function(){
                    $mdToast.show($mdToast.simple().textContent('Item criado!'))
                },function(err){console.error(err),$mdToast.show($mdToast.simple().textContent('Aconteceu um erro ao criar aula!'))})
    
            },function(err){console.log(err),$mdToast.show($mdToast.simple().textContent('Falha ao obter modulo inserido!'))})
    }
})