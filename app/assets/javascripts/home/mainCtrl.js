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
			$scope.links.push({
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
			link.upvotes += 1;
		};

		$scope.hiddenDiv = false;

		$scope.showLink = function(index){
			event.stopPropagation();
			$location.url("/links/"+index);
		};

	}
]);