uplearnApp.factory('links',['$http',function($http){
	
	var o = {
		links: []
	};

	o.getAll = function(){
		return $http.get('/links.json').success(function(data){
			// debugger;
			for (var i = 0; i < data.length; i++){
				var newDate = new Date(data[i].created_at);
				data[i].created_at = newDate.toDateString();
				// debugger;
			};
			angular.copy(data,o.links);
		});
	};

	o.get = function(id){
		return $http.get('/links/' + id + '.json').success(function(result){
			// debugger;
			return result.data;
		});
	};

	o.create = function(link){
		return $http.post('/links.json',link).success(function(data){
			o.links.push(data);
		});
	};

	o.upvote = function(link){
		return $http.put('/links/' + link.id + '/upvote.json',link).success(function(data){
			link.upvotes += 1;
		});
	};

	o.downvote = function(link){
		return $http.put('/links/' + link.id + '/downvote.json',link).success(function(data){
			link.upvotes -= 1;
		});
	};

	o.addComment = function(id,comment){
		return $http.post('/links/' + id + '/comments.json', comment);
	};

	return o;



	// initial setup with seed data within angular app

	// var obj = {
	// 	links: [
	// 		{ 
	// 			title: "Get bootstrap", 
	// 			url: "http://getbootstrap.com/", 
	// 			body: "This is a great resource for front-end work",
	// 			comments: [
	// 					{ author: "Joe Bloggs", body: "This is a great resource." },
	// 					{ author: "Paul Smith", body: "Thanks for sharing!" }
	// 			],
	// 			upvotes: 0
	// 		},
	// 		{ 
	// 			title: "GitHub", 
	// 			url: "https://github.com/", 
	// 			body: "This is a great resource for GitHub",
	// 			comments: [
	// 					{ author: "Joe Bloggs", body: "Use this on a daily basis." }
	// 			],
	// 			upvotes: 0
	// 		},
	// 		{ 
	// 			title: "Twitter", 
	// 			url: "https://twitter.com/", 
	// 			body: "This is Twitter", 
	// 			comments: [],
	// 			upvotes: 0
	// 		}
	// 	]
	// };
	// return obj;
}]);