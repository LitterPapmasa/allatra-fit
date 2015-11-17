// initialize material design js
$.material.init();

(function()
{
	'use strict';
	// Create module ngFit and use ngRoute
	angular
		.module('ngFit', [
											'ngRoute',
											'ngFit.navbar',
											'ngFit.contacts'
		])
		.config(ngFitConfig)
		.controller('MainCtrl', MainCtrl)
		.controller('AboutCtrl', AboutCtrl)
		//.controller('ContactsCtrl', ContactsCtrl)
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
				templateUrl: '/app/components/about/about.html',
				controller : 'AboutCtrl'
			})
			.when('/practice',{
				templateUrl: '/app/components/practice/practice.html',
				controller : 'PracticeCtrl'
			})
			.when('/exercises',{
				templateUrl: '/app/components/exercises/exercises.html',
				controller : 'ExercisesCtrl'
			})
			.when('/profile',{
				templateUrl: '/app/components/profile/profile.html',
				controller : 'ProfileCtrl'
			})
			.when('/statistic',{
				templateUrl: '/app/components/statistic/statistic.html',
				controller : 'StatisticCtrl'
			});
	}

	MainCtrl.$inject = ['$scope', '$rootScope'];
	AboutCtrl.$inject = ['$scope', '$rootScope'];

	PracticeCtrl.$inject = ['$scope', '$rootScope'];
	ExercisesCtrl.$inject = ['$scope', '$rootScope'];
	ProfileCtrl.$inject = ['$scope', '$rootScope'];
	StatisticCtrl.$inject = ['$scope', '$rootScope'];

	function MainCtrl($scope, $rootScope)
	{
		$scope.title = "Our home page";
		$scope.name = "Vyacheslav Aleksandrovich";
		$scope.clickFuntion = function(){
			alert("Привет " + this.name);
		}
	};

	function AboutCtrl($scope, $rootScope)
	{
		$scope.title = "Our home page";
	};


	function PracticeCtrl($scope, $rootScope)
	{
		$rootScope.curPage = 'practice';
	};

	function ExercisesCtrl($scope, $rootScope)
	{
		$rootScope.curPage = 'exercises';
	};

	function ProfileCtrl($scope, $rootScope)
	{
		$rootScope.curPage = 'profile';
	};

	function StatisticCtrl($scope, $rootScope)
	{
		$rootScope.curPage = 'statistic';
	};


})();



