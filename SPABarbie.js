
var myPinkSAPVar = angular.module('myPinkSAP', ['ngRoute']);
myPinkSAPVar.config(function($routeProvider)
{
    $routeProvider
            .when('/party', {
                templateUrl: 'party.html',
                controller: 'PartyController'
    })
            .when('/work',{
                 templateUrl: 'work.html',
                 controller: 'WorkController'
            });
            
    });
myPinkSAPVar.controller('PartyController', function($scope)
{
    $scope.pinkMessage = 'Lets Party!';
});
myPinkSAPVar.controller('WorkController', function($scope)
{
    $scope.pinkMessage = 'Lets Work!';
});

