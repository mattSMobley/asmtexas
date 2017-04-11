angular.module("app")
.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/our-properties', {
        templateUrl: 'views/our-properties.html'
      })
      .when('/apts/goodhaven', {
        templateUrl: 'views/apts/goodhaven.html'
      })
      .when('/apts/huntington', {
        templateUrl: 'views/apts/huntington.html'
      })
      .when('/apts/parkcreekmanor', {
        templateUrl: 'views/apts/parkcreekmanor.html'
      })
      .when('/apts/prairieridge', {
        templateUrl: 'views/apts/prairieridge.html'
      })
      .when('/apts/princehall', {
        templateUrl: 'views/apts/princehall.html'
      })
      .when('/apts/pythianmanor', {
        templateUrl: 'views/apts/pythianmanor.html'
      })
      .when('/apts/raibleplace', {
        templateUrl: 'views/apts/raibleplace.html'
      })
      .when('/apts/royalcrest', {
        templateUrl: 'views/apts/royalcrest.html'
      })
      .when('/apts/southernoaks', {
        templateUrl: 'views/apts/southernoaks.html'
      })
      .when('/apts/springdaleapartments', {
        templateUrl: 'views/apts/springdaleapartments.html'
      })
      .when('/apts/springdaleestates', {
        templateUrl: 'views/apts/springdaleestates.html'
      })
      .when('/apts/terraceview', {
        templateUrl: 'views/apts/terraceview.html'
      })
      .when('/apts/westmountplace', {
        templateUrl: 'views/apts/westmountplace.html'
      })
      .when('/apts/winfieldestates', {
        templateUrl: 'views/apts/winfieldestates.html'
      })
      .when('/services/property-management', {
        templateUrl: 'views/services/property-management.html'
      })
      .when('/services/what-we-do', {
        templateUrl: 'views/services/what-we-do.html'
      })
      .when('/services/in-the-community', {
        templateUrl: 'views/services/in-the-community.html'
      })
      .when('/about/who-we-are', {
        templateUrl: 'views/about/who-we-are.html'
      })
      .when('/about/in-the-news', {
        templateUrl: 'views/about/in-the-news.html'
      })
      .when('/about/contact', {
        templateUrl: 'views/about/contact.html'
      });

  });
