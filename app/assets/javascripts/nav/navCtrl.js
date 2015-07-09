uplearnApp.controller('NavCtrl',[
	'$scope',
	'Auth',
	'$state',
	'$location',
	function($scope,Auth,$state,$location){

		window.navscope = $scope;

		$scope.signedIn = Auth.isAuthenticated;
		$scope.logout = Auth.logout;

		Auth.currentUser().then(function(user){
			$scope.user = user;
		});

		$scope.$on('devise:new-registration', function(e, user){
			$scope.user = user;
		});

		$scope.$on('devise:login', function(e, user){
			$scope.user = user;
		});

		$scope.$on('devise:logout', function(e, user){
			$scope.user = {};
			$state.go('home');
		});

		$scope.addNewLink = function() {
			// debugger;
			$state.go('addlink');
		};


	}
]);