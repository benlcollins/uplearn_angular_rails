uplearnApp.controller('NavCtrl',[
	'$scope',
	'Auth',
	'links',
	function($scope,Auth,links){

		window.navscope = $scope;
		// $scope.links = links.links;

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
		});


	}
]);