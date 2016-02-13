'use strict';

angular.module('angularFullstackApp.auth', [
  'angularFullstackApp.constants',
  'angularFullstackApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
