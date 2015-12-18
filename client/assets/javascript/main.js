var trelloApp = angular.module('trello',['ngRoute','ui.materialize']);
trelloApp.config(function ($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: './partials/login.html'
		})
		.when('/dash', {
			templateUrl: './partials/dashboard.html'
		})
		.otherwise({
			redirectTo: '/'
		})
})