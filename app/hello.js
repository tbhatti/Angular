angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://localhost:5000/books-categories-list').
        then(function(response) {
			console.log('Response', response)
            $scope.categories = response.data;
        });
});