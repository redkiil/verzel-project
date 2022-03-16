'use strict'

angular.module('myApp.classe', ['ngRoute','angularCSS'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/painel/classe',{
        templateUrl: './adm/classe/classe.html',
        controller: 'classeCtrl',
        css: './adm/classe/classe.css'
    })
    $routeProvider.when('/painel/classe/:id',{
        templateUrl: './adm/classe/classeView.html',
        controller: 'classeViewCtrl',
        css: './adm/classe/classe.css'
    })
    $routeProvider.when('/painel/classe/create/:id',{
        templateUrl: './adm/classe/createClasse.html',
        controller: 'createClasseCtrl',
        css: './adm/classe/classe.css'
    })
    $routeProvider.when('/painel/classe/edit/:id',{
        templateUrl: './adm/classe/editClasse.html',
        controller: 'editClasseCtrl',
        css: './adm/classe/classe.css'
    })
    
}])
.controller('classeCtrl', function($scope,$http){
    $scope.moduless = [];
    var loadModules = function(){
        $http.get('http://localhost:3000/modules')
            .then(function(data,status){
                $scope.moduless = data.data
                console.log(data,status)
            },function(err){console.log(err)})
    }
    loadModules();
})