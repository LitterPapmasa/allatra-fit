// initialize material design js
$.material.init();

(function()
{
	'use strict';
	// Create module ngFit and use ngRoute
	angular
		.module('ngFit', ['ngRoute'])
		.config(ngFitConfig)
		.controller('MainCtrl', MainCtrl)
		.controller('AboutCtrl', AboutCtrl)
		.controller('ContactsCtrl', ContactsCtrl)
		.controller('PracticeCtrl', PracticeCtrl)
		.controller('ExercisesCtrl', ExercisesCtrl)
		.controller('ProfileCtrl', ProfileCtrl)
		.controller('StatisticCtrl', StatisticCtrl);

	function ngFitConfig($routeProvider)
	{
		$routeProvider
			.when('/',{
				templateUrl: '/views/index.html',
				controller : 'MainCtrl'
			})
			.when('/about',{
				templateUrl: '/views/about.html',
				controller : 'AboutCtrl'
			})
			.when('/contacts',{
				templateUrl: '/views/contacts.html',
				controller : 'ContactsCtrl'
			})
			.when('/practice',{
				templateUrl: '/views/practice.html',
				controller : 'PracticeCtrl'
			})
			.when('/exercises',{
				templateUrl: '/views/exercises.html',
				controller : 'ExercisesCtrl'
			})
			.when('/profile',{
				templateUrl: '/views/profile.html',
				controller : 'ProfileCtrl'
			})
			.when('/statistic',{
				templateUrl: '/views/statistic.html',
				controller : 'StatisticCtrl'
			});
	}

	function MainCtrl($scope)
	{
		$scope.title = "Our home page";
		$scope.name = "Vyacheslav Aleksandrovich";
		$scope.clickFuntion = function(){
			alert("Привет " + this.name);
		}
	};

	function AboutCtrl($scope)
	{
		$scope.title = "Our home page";
	};

	function ContactsCtrl($scope)
	{
		$scope.title = "Our home page";
	};

	function PracticeCtrl($scope)
	{

	};

	function ExercisesCtrl($scope)
	{

	};

	function ProfileCtrl($scope)
	{

	};

	function StatisticCtrl($scope)
	{

	};


})();



