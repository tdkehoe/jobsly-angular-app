app.config(function($routeProvider) {

  $routeProvider
  .when('/', { // INDEX
    templateUrl: 'javascript/templates/home.html',
    controller: 'HomeController'
  })
  .when('/jobsly/', { // INDEX
    templateUrl: 'javascript/templates/home.html',
    controller: 'HomeController'
  })
  .when('/jobsly/new', { // NEW
    templateUrl: 'javascript/templates/new.html',
    controller: 'NewController'
  })
  .when('/jobsly/:id/edit', { // EDIT
    templateUrl: 'javascript/templates/edit.html',
    controller: 'EditController'
  })
  .when('/jobsly/:id/apply', { // APPLY
    templateUrl: 'javascript/templates/apply.html',
    controller: 'ApplyController'
  })
  .when('/jobsly/:id', { // SHOW
    templateUrl: 'javascript/templates/show.html',
    controller: 'ShowController'
  })
  .otherwise({ redirectTo: '/' });
});
