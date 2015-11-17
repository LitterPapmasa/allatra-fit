;(function()
{
  'use strict';
  angular
  .module('ngFit.contacts', ['ngRoute'])
  .config('$routeProvider', config)
  .controller('ContactsCtrl', ContactsCtrl);

  ContactsCtrl.$inject = ['$scope', '$rootScope'];

  function ContactsCtrl($scope, $rootScope){
     $scope.title = "Our home page";
  };

  function config($routeProvider) {
    $routeProvider .when('/contacts',{
          templateUrl: 'app/components/contacts/contacts.html',
          controller : 'ContactsCtrl'
        })
  }

})();