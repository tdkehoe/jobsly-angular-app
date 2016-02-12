app.controller('ShowController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
  console.log("Show controller");
  $http.get('https://protected-plateau-2199.herokuapp.com/api/jobsly/' + $routeParams.id).then(function(response) { // SHOW
    $scope.job = response.data;
  }, function(response) {
    console.log("Invalid URL");
  });

  $scope.addJobApplication = function(job) {
    console.log("Applying for job.");
    console.log(job);
    var application = {
      applicantName: job.application.applicantName,
      applicantEmail: job.application.applicantEmail,
      resumeURL: job.application.resumeURL
    };
    console.log(application);
    var applications = job.applications || [];
    console.log(applications);
    applications.push(application);
    job.application.applicantName = null;
    job.application.applicantEmail = null;
    job.application.resumeURL = null;
    job.applications = applications;
    $http.put('https://protected-plateau-2199.herokuapp.com/api/jobsly/' + job._id, job).then(function(response) { // UPDATE
      console.log("Job application added.");
    }, function(response) {
      console.log("Invalid URL");
    });
  };

  $scope.deleteJobApplication = function(job, applicant) {
    console.log(job);
    console.log(applicant);
    console.log("Deleting job application.");
    var index = job.applications.indexOf(applicant);
    console.log(index);
    job.applications.splice(index, 1);
    $http.put('https://protected-plateau-2199.herokuapp.com/api/jobsly/' + job._id, job).then(function(response) { // UPDATE
      console.log("Job application added.");
    }, function(response) {
      console.log("Invalid URL");
    });
  }

}]);
