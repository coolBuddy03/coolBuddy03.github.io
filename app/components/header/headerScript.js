"use strict";
(function() {
    var headerCtrl = function($scope) {
        console.log("header controllerr");
    };
    flightManagementApp.controller('HeaderCtrl', ['$scope', headerCtrl]);
}());

(function() {
    var flightHeader = function() {
        return {
            restrict: 'EA',
            scope: {},
            replace: true,
            controller: 'HeaderCtrl',
            templateUrl: 'components/header/headerTemplate.html',
            link: function(scope, element, attrs) {}
        }
    };
    flightManagementApp.directive('flightHeader', [flightHeader]);
}());