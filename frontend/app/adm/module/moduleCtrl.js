'use strict'

angular.module('myApp.module', ['ngRoute','angularCSS'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/painel/module',{
        templateUrl: './adm/module/module.html',
        controller: 'moduleCtrl',
        css: './adm/module/module.css'
    })
    $routeProvider.when('/painel/module/edit/:id/:name',{
        templateUrl: './adm/module/editModule.html',
        controller: 'editModuleCtrl',
        css: './adm/module/module.css'
    })
    $routeProvider.when('/painel/module/create',{
        templateUrl: './adm/module/createModule.html',
        controller: 'createModuleCtrl',
        css: './adm/module/module.css'
    })
}])
.controller('moduleCtrl', function($scope,$http){
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