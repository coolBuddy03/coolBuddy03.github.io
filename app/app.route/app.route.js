'use strict';
flightManagementApp.config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider){

$locationProvider.hashPrefix('!');
// routes
$routeProvider
	.when("/",{
		templateUrl:"/components/home/HomeView.html",
		controller:"HomeCtrl"
	})
	
	.otherwise({templateUrl:"/components/home/HomeView.html",controller:"HomeCtrl"});
}]);