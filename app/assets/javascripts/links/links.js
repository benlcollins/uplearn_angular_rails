uplearnApp.factory('links',['$http',function($http){
	
	var o = {
		links: [],
		groupedLinks: []
	};

	o.getAll = function(){
		var abc = $http.get('/links.json').success(function(data){
			
			var dates = []; // empty array to store link dates
			var groupedLinks = [];  // empty array to store links grouped by dates

			for (var i = 0; i < data.length; i++){
				
				// create a formatted version of date for display
				data[i].created_at_formatted = new Date(data[i].created_at).toDateString();
				data[i].time_submitted = new Date(data[i].created_at)
					.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});

				// create array of all link dates for grouping
				dates.push(data[i].created_at.slice(0,10));
			};

			// put the unique dates into array
			var sorted_dates = dates.sort();
			var unique_dates = [];
			for (var i = 0; i < sorted_dates.length; i++) {
				if (sorted_dates[i] != sorted_dates[i+1]) {
					unique_dates.push(sorted_dates[i]);
				};
			};


			// put the link objects into arrays based on date, then into one single group object with dates
			for (var i = 0; i < unique_dates.length; i++){
				var innerArray = [];
				var tempGroup = {}; 
				for (var j = 0; j < data.length; j++){
					if (data[j].created_at.slice(0,10) === unique_dates[i].slice(0,10)) {
						innerArray.push(data[j]);
					};
				};
				// tempGroup.linkArray = innerArray;
				// tempGroup.date = unique_dates[i];
				// groupedLinks.push(tempGroup);
				groupedLinks.push(innerArray);
			};

			var groupedLinksSorted = groupedLinks.reverse();


			// debugger;

			angular.copy(data,o.links);
			angular.copy(groupedLinksSorted,o.groupedLinks);
			// angular.copy(unique_dates,o.dates);
		});
		// debugger;
		return abc;
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

	// functions to handle upvote button
	o.upvote = function(link){
		return $http.put('/links/' + link.id + '/upvote.json',link).success(function(data){
			link.upvotes += 1;
		});
	};

	// functions to handle downvoting
	o.downvote = function(link){
		return $http.put('/links/' + link.id + '/downvote.json',link).success(function(data){
			link.upvotes -= 1;
		});
	};

	// add comments
	o.addComment = function(id,comment){
		return $http.post('/links/' + id + '/comments.json', comment);
	};

	return o;

}]);