'use strict';


// Declare app level module which depends on filters, and services
//angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
//  config(['$routeProvider', function($routeProvider) {
//    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: MyCtrl1});
//    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
//    $routeProvider.otherwise({redirectTo: '/view1'});
//  }]);
//'use strict';


// Declare app level module which depends on filters, and services
angular.module('jthink', ['jthink.filters', 'jthink.services', 'jthink.directives']).
    config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: MyCtrl2});
      $routeProvider.when('/register', {templateUrl: 'partials/register.html', controller: MyCtrl2});
      $routeProvider.otherwise({redirectTo: '/login'});
    }]);