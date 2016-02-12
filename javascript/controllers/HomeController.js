app.controller('HomeController', ['$scope', '$http', function($scope, $http) {
  console.log("Home controller.");
  $http.get('https://protected-plateau-2199.herokuapp.com/api/jobsly/').then(function(response) { // INDEX
    $scope.jobs = response.data;
  }, function(response) {
    console.log("Invalid URL");
  });
}]);
