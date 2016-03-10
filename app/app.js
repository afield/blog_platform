var app = angular.module('platform',['ui.router','ui.bootstrap']);

app.config(function($stateProvider, $httpProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
        url:'/',
        templateUrl:'site/partials/main.html',
        controller:'MainCtrl as ctrl'
    })
	.state('admin',{
		url:'/admin',
		templateUrl:'site/partials/admin.html',
		controller:'AdminCtrl as ctrl',
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
        parent:'admin'
    })

});
