'use strict';

(function() {

    var homeCtrl = function($scope, utils, $filter) {
        console.log("home Ctrl");
        $scope.flightJsonData = [];
        $scope.passengerNumber = [];
        $scope.flighSearchData = [];
        $scope.isSearchExists = false;
        $scope.isSearchProcessing = false;
        $scope.search = {};
        $scope.searchDups = {};
        for (var i = 0; i < 40; i++) {
            $scope.passengerNumber.push(i + 1);
        }
        utils.getCatalogData().then(function(response) {
            console.log(response);
            $scope.flightJsonData = response.data;
        });
        $scope.searchFlight = function(type) {
            console.log(type);
            console.log($scope.search);
            // $scope.isSearchProcessing = true;
            switch (type) {
                case 1:
                    $scope.searchDups = angular.copy($scope.search);
                    $scope.flighSearchData = [];
                    $scope.isReturn = false;
                    console.log("One Way Trip");
                    $scope.flightJsonData.forEach(function(item) {
                        if (item.origin_city == $scope.search.origin_city && item.destination_city == $scope.search.destination_city && item.total_passengers == $scope.search.no_passengers && item.departure_date == $filter('date')($scope.search.departure_date, "M/d/yyyy")) {
                            $scope.flighSearchData = $scope.flighSearchData.concat(item);
                        }
                    });
                    console.log("Search Found >", $scope.flighSearchData);
                    // $scope.isSearchProcessing = false;
                    break;
                case 2:
                    $scope.searchDups = angular.copy($scope.search);
                    $scope.flighSearchData = [];
                    $scope.isReturn = true;
                    console.log("Two Way Trip");
                    $scope.flightJsonData.forEach(function(item) {
                        if (item.origin_city == $scope.search.origin_city && item.destination_city == $scope.search.destination_city && item.total_passengers == $scope.search.no_passengers && item.departure_date == $filter('date')($scope.search.departure_date, "M/d/yyyy") && item.return_date == $filter('date')($scope.search.return_date, "M/d/yyyy")) {
                            $scope.flighSearchData = $scope.flighSearchData.concat(item);
                        }
                    });
                    console.log("Search Found >", $scope.flighSearchData);
                    // $scope.isSearchProcessing = false;
                    break;
            }
            $scope.isSearchExists = true;
        }

        var changeSliderListener = function() {
            console.log("Search After Slider Movement");
            console.log("Slider Data >", $scope.slider);
            $scope.flighSearchData.forEach(function(item) {
                if (item.per_ticket_price > $scope.slider.minValue && item.per_ticket_price < $scope.slider.maxValue) {
                    item.isRefinePrice = false;
                } else {
                    item.isRefinePrice = true;
                }
            });
            console.log("Flight Data >", $scope.flighSearchData);
        }

        $scope.slider = {
            minValue: 0,
            maxValue: 10000,
            options: {
                floor: 0,
                ceil: 10000,
                step: 1,
                onEnd: changeSliderListener
            }
        }
        $scope.init = function() {
            $scope.slider = {
                minValue: 0,
                maxValue: 10000,
                options: {
                    floor: 0,
                    ceil: 10000,
                    step: 1,
                    onEnd: changeSliderListener
                }
            }
            // $scope.flightJsonData = [];
            utils.getCatalogData().then(function(response) {
                console.log(response);
                $scope.flightJsonData = response.data;
            });
            $scope.flighSearchData = [];
            $scope.isSearchExists = false;
            $scope.isSearchProcessing = false;
            $scope.search = {};
        }
    };

    flightManagementApp.controller('HomeCtrl', ['$scope', 'utils', '$filter', homeCtrl]);
}());