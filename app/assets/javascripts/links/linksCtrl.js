uplearnApp.controller('LinksCtrl',[
	'$scope',
	'links',
	'linkPromise',
	function($scope,links,linkPromise){

		window.myscope = $scope;

		$scope.link = linkPromise;

		$scope.addComment = function(){
			if ($scope.body === "" || !$scope.body){ return; }
			// debugger;
			links.addComment($scope.link.data.id,{
				body: $scope.body
			}).success(function(comment){
				// debugger;
				$scope.link.data.comments.push(comment);
			});
			$scope.body = "Add your comment";
		};
	}
])