(function() {
    angular.module('app').config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider

            .state('main', {
                abstract: true,
                templateUrl: 'templates/main/main.tpl.html',
                controller: 'MainController',
                controllerAs: "main"
            })
            .state('main.home', {
                url: '/home',
                templateUrl: 'templates/home/home.tpl.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .state('main.login', {
                url: '/login',
                templateUrl: 'templates/login/login.tpl.html',
                controller: 'LoginController',
                controllerAs: 'login'
            })
            .state('main.upload', {
                url: '/upload',
                templateUrl: 'templates/upload/upload.tpl.html',
                controller: 'UploadController',
                controllerAs: 'upload'
            })
    });

})(angular);