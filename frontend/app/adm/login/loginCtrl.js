'use strict'

angular.module('myApp.login', ['ngRoute','angularCSS'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/painel/login',{
        templateUrl: './adm/login/login.html',
        controller: 'loginCtrl',
        css: './adm/login/login.css'
    })
}])
.controller('loginCtrl', function($scope,$http){
  
})