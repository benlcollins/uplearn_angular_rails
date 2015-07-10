//= require application
//= require angular-mocks

// need to set up this helper to load angular application and dependencies before each test
// tbc....

beforeEach(module('uplearn'));

beforeEach(inject(function($rootScope){
	$scope = $rootScope.new;
}));