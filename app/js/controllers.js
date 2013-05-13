'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('PoissonController', ['$scope', function ($scope) {
  	 $scope.poissonResults= [];

  /*	 $scope.ideas = [
	    ['ideas1', 1],
	    ['ideas2', 8],
	    ['ideas3', 5]
	  ];
  
  $scope.limitedIdeas = $scope.ideas; */
 
  $scope.update = function(poisson) { //calculate poisson, return hash
  	var k = poisson.k;
  	var phi = poisson.phi;
  	var i = poisson.x;
  	var e = Math.E;

  	  	function factorial(n){
			if (n <= 1) return 1;
				return n*factorial(n-1);
			}

	  	for(i; i <= poisson.k; i++ ){
	  		var result = ((Math.pow(e,(phi * -1))*(Math.pow(phi, i))))/(factorial(i));
	  		var roundedResult = Math.round(result*1000)/1000 

	    	$scope.poissonResults.push([i,roundedResult]);
		}

  };
 
  $scope.reset = function() { //reset form
    $scope.poisson = {};
    $scope.poissonResults = [];
  };
 
  $scope.reset();

  }])





  .controller('MyCtrl2', ['$scope', function ($scope) {
  		//todo
  		$scope.ideas = [
	    ['ideas1', 1],
	    ['ideas2', 8],
	    ['ideas3', 5]
	  ];
  
  $scope.limitedIdeas = $scope.ideas;

  }]);

