'use strict';

/* Controllers */

angular.module('poolbuy.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);


// satellizer
angular.module('MyApp', ['satellizer'])
.config(function($authProvider) {

  $authProvider.facebook({
    clientId: '624059410963642',
  });

  $authProvider.google({
    clientId: '631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com'
  });

  $authProvider.github({
    clientId: '0ba2600b1dbdb756688b'
  });


});