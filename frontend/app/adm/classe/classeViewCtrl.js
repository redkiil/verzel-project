'use strict'

angular.module('myApp.classe')
.controller('classeViewCtrl', function($scope,$http,$routeParams){
    $scope.id = $routeParams.id
    var loadClasses = function(){
        $http.get(`http://localhost:3000/modules/${$scope.id}`)
            .then(function(data,status){
                $scope.classes = data.data.classes
                console.log(data,status)
            },function(err){console.log(err)})
    }
    loadClasses();
})