'use strict';
rentalManagementApp.config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider){

$locationProvider.hashPrefix('!');
// routes
$routeProvider
	.when("/",{
		templateUrl:"app/components/home/HomeView.html",
		controller:"HomeCtrl"
	})
	.when("/category",{
		templateUrl:"app/components/category/CategoryListView.html",
		controller:"CategoryCtrl"
	})
	.when("/category-detail/",{
		templateUrl:"app/components/category/CategoryDetailView.html",
		controller:"CategoryDetailCtrl"
	})
	.otherwise({templateUrl:"/components/home/HomeView.html",controller:"HomeCtrl"});
}]);