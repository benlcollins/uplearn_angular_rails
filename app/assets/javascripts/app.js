var uplearnApp = angular.module('uplearn',['ui.router','templates','Devise']);

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
			})
			.state('addlink',{
				url: '/addlink',
				templateUrl: 'home/_addlink.html',
				controller: 'MainCtrl'
			})
			.state('profile',{
				url: '/profile/{id}',
				templateUrl: 'auth/_profile.html',
				controller: 'MainCtrl',
				resolve: {
					postPromise: ['links',function(links){
						return links.getAll();
					}]
				}
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
			})
			.state('login',{
				url: '/login',
				templateUrl: 'auth/_login.html',
				controller: 'AuthCtrl',
				onEnter: ['$state','Auth',function($state,Auth){
					Auth.currentUser().then(function(){
						$state.go('home');
					})
				}]
			})
			.state('register',{
				url: '/register',
				templateUrl: 'auth/_register.html',
				controller: 'AuthCtrl',
				onEnter: ['$state','Auth',function($state,Auth){
					Auth.currentUser().then(function(){
						$state.go('home');
					})
				}]
			});

		$urlRouterProvider.otherwise('home');

}]);


uplearnApp.factory('AuthService',
	function(){
		var currentUser;

		return {
			currentUser: function(){ 
				return "Auth Service is working!";
			}
		}
	}
);

// this factory does not work, because injecting 'Auth' here creates a circular reference I believe
// uplearnApp.factory('AuthService',[
// 	'Auth',
// 	function(Auth){
// 		var currentUser;

// 		return {
// 			currentUser: function(){ 
// 				return "Auth Service is working!";
// 				// return Auth.currentUser().then(function(user){
// 				// 	return user;
// 				// }); 
// 			}
// 		}
// 	}
// ]);




