'use strict';

/**
 *
 * Common Services
 *
 */
(function() {

    var utilsService = function($http, $q) {

        var allData = undefined;

        var getCatalogData = function() {
            var q = $q.defer();
            if (!allData) {
                $http.get('/data/catalog.json').then(function(response) {
                    
                    allData = response.data;
                    var temp = [];
                    angular.copy(allData, temp);
                    q.resolve(temp);
                }, function(response) {
                    console.error("Unable To Fetch");
                    console.log(response);
                    q.reject(response);
                });
            } else {
                var temp = [];
                angular.copy(allData, temp);
                q.resolve(temp);
            }
            return q.promise;
        }
        return {
            getCatalogData: getCatalogData
        }
    };
    var showToast = function($mdToast) {
        var ret = {};
        ret.display = function(message) {
            $mdToast.show(
                $mdToast.simple()
                .textContent(message)
                .position('right')
                .hideDelay(3000)
            );
        }
        return ret;
    }

    flightManagementApp.factory('utils', ['$http', '$q', utilsService]);
    flightManagementApp.factory('showToast', ['$mdToast', showToast]);

}());

/**
 *
 * Common Filters
 *
 */
/**
 *
 * Common Controllers
 *
 */
/**
 *
 * Common Directives
 *
 */
(function() {
    
    var flightFormDirective = function() {
        return {
            restrict: 'EA',
            replace: true,
            scope: {
                isreturn: '=',
                search:'=',
                someCtrlFn: '&callbackFn', 
            },
            templateUrl: '/components/shared/templates/flightFormTemplate.html',
            link: function(scope, element, attrs) {
                scope.passengerNumber = [];
                for (var i = 0; i < 40; i++) {
                    scope.passengerNumber.push(i + 1);
                }
            }
        }
    };
    flightManagementApp.directive('flightForm', [flightFormDirective]);

}());