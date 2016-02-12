app.controller('NewController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  console.log("New controller.");
  $scope.addJob = function(job) {
    var job = {
      jobTitle: $scope.job.jobTitle,
      jobCompany: $scope.job.jobCompany,
      jobDescription: $scope.job.jobDescription,
      jobResponsibilities: $scope.job.jobResponsibilities,
      jobPictureURL: $scope.job.jobPictureURL,
      jobCreated: Date.now(),
      jobFilled: false
    }
    $http.post('https://protected-plateau-2199.herokuapp.com/api/jobsly/', job).then(function(response) { // NEW
      console.log("Job added.");
      $location.path( '/jobsly/');
    }, function(response) {
      console.log("Invalid URL");
    });
  }
}]);
