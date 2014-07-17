'use strict';

angular
  .module('twentyfourtyeightApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'Game'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('GameController', function(GameManager) {
    this.game = GameManager;
});
