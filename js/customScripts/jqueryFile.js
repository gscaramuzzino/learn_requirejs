define(['jquery','methods'], function($, methods) { //use jquery e angular defined in require.config

  $('#clickMe').click(function() {
    methods.changeHTML("I was clicked!");
  });

  //angular.module
});