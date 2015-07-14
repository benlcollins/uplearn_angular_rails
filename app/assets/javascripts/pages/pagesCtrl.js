uplearnApp.controller('PagesCtrl',[
	'$scope',
	'links',
	'$stateParams',
	'$http',
	function($scope,links,$stateParams,$http){
		window.myscope = $scope;

		$scope.getJobs = function(){
			if($scope.username === "" || !$scope.username) { $scope.username = "GitHub"; };
			$http.get("https://api.github.com/users/" + $scope.username)
				.success(function(data){
					$scope.user = data;
					$scope.loaded = true;
				});
		};

	}
]);