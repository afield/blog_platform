var app = angular.module('platform',['ui.router','ui.bootstrap']);

app.config(function($stateProvider, $httpProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('main',{
        url:'/',
        views: {
            header: {
                templateUrl: 'site/partials/common/header.html',
                controller: 'MainCtrl as ctrl'
            },
            layout: {
                templateUrl: 'site/partials/main.html',
                controller: 'MainCtrl as ctrl'

            }
        }
    })
	.state('admin',{
		url:'/admin',
		controller:'AdminCtrl as ctrl',
        views: {
            layout: {
                templateUrl:'site/partials/admin.html',
                controller: 'AdminCtrl as ctrl'
            }
        }
    })
    .state('admin.login',{
        url:'/login',
        templateUrl:'site/partials/admin.login.html',
        controller:'AdminCtrl as ctrl',
        parent:'admin'
    })
    .state('admin.register',{
        url:'/register',
        templateUrl:'site/partials/admin.register.html',
        controller:'AdminCtrl as ctrl',
        parent:'admin'
    })
    .state('admin.panel',{
        url:'/panel',
        templateUrl:'site/partials/admin.panel.html',
        parent:'admin'
    })
	$httpProvider.interceptors.push(function(){
       return {
           request: function(config) {
               //stripe headers
               //config.headers = {};
               // if(localStorage.authToken != undefined && localStorage.authToken != null){
               //     config.headers.authentication = localStorage.authToken;
               // }
               return config;
           },
           response: function(response) {
               var auth_token = response.headers('authentication');
               if(localStorage.authToken == undefined && auth_token != null){
               	localStorage.authToken = auth_token;
               }
               return response;
           }
       }
   });
});
