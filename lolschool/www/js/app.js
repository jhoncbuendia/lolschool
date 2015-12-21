// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}).factory('defaultService', function($http){

    return {

        get: function (url, callback, error) {
            $http.get(url).success(callback).error(error);


        },
        

        put: function (url, data, callback, error) {
            $http.put(url, data).success(callback).error(error);

        },

        delete: function (url, callback, error) {
            $http.delete(url).success(callback).error(error);

        },

        post: function (url, data, callback, error) {
            $http.post(url, data).success(callback).error(error);

        }

    }
})




.controller('MainCtrl', ['$scope', 'defaultService', function ($scope, defaultService) {
 console.log("start"); 
 defaultService.get('http://192.168.0.5:3000/service/',function(d){
  console.log(d);
  $scope.personas = d;
 }, function (e){console.log(e)
    }); 
}]);
