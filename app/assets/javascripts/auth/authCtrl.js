uplearnApp.controller('AuthCtrl',[
	'$scope',
	'$state',
	'Auth',
	function($scope,$state,Auth){

		window.myscope = $scope;

		$scope.login = function(){
			Auth.login($scope.user).then(function(){
				$state.go('home');
			});
		};

		$scope.register = function(){
			Auth.register($scope.user).then(function(){
				$state.go('home');
			});
		};
		
	}
]);