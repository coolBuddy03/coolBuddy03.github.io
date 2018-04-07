'use strict';
flightManagementApp.config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider){

$locationProvider.hashPrefix('!');
// routes
$routeProvider
	.when("/",{
		templateUrl:"/app/components/home/HomeView.html",
		controller:"HomeCtrl"
	})
	
	.otherwise({templateUrl:"/app/components/home/HomeView.html",controller:"HomeCtrl"});
}]);