var uplearnApp = angular.module('uplearn',['ui.router','templates']);

uplearnApp.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider,$urlRouterProvider){
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'home/_home.html',
				controller: 'MainCtrl',
				resolve: {
					postPromise: ['links',function(links){
						return links.getAll();
					}]
				}
			})
			.state('links',{
				url: '/links/{id}',
				templateUrl: 'links/_links.html',
				controller: 'LinksCtrl',
				resolve: {
					linkPromise: ['$stateParams','links',function($stateParams,links){
						return links.get($stateParams.id);
						// debugger;
					}]
				}
				// 	postPromise ['link',function(link){
				// 		return links.
				// 	}]
				// }
			})
			.state('addlink',{
				url: '/addlink',
				templateUrl: 'home/_addlink.html',
				controller: 'MainCtrl'
			})
			.state('about',{
				url: '/about',
				templateUrl: 'pages/_about.html',
				controller: 'PagesCtrl'
			})
			.state('contact',{
				url: '/contact',
				templateUrl: 'pages/_contact.html',
				controller: 'PagesCtrl'
			})
			.state('jobs',{
				url: '/jobs',
				templateUrl: 'pages/_jobs.html',
				controller: 'PagesCtrl'
			});

		$urlRouterProvider.otherwise('home');

}]);