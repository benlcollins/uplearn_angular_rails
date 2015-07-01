uplearnApp.controller('MainCtrl',[
	'$scope', 
	'links',
	'$location',
	'$state',
	function($scope, links, $location,$state){	
		
		window.myscope = $scope;
		
		$scope.links = links.links;

		$scope.addLink = function() {
			if ($scope.title==="" || !$scope.title || $scope.url==="" || !$scope.url) { return; }

			links.create({
				title: $scope.title,
				body: $scope.body,
				url: $scope.url,
				upvotes: 0 
			});
			
			$scope.title = "Title";
			$scope.body = "Body";
			$scope.url = "Url";
			$location.url("/home");
		};

		$scope.upvoteLink = function(link) {
			event.stopPropagation();
			links.upvote(link);
		};

		$scope.hiddenDiv = false;

		$scope.showLink = function(link){
			event.stopPropagation();
			$location.url("/links/" + link.id);
		};

	}
]);