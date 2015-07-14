uplearnApp.controller('NavCtrl',[
	'$scope',
	'Auth',
	'$state',
	'$location',
	function($scope,Auth,$state,$location){

		window.navscope = $scope;
		window.navLocation = $location;

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

		// function for adding new link
		$scope.addNewLink = function() {
			$state.go('addlink');
		};

		// function to toggle active class on nav li's
		$scope.isActive = function(viewLocation) {
			return $location.path().indexOf(viewLocation) == 0;
		};

	}
]);