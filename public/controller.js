
'use strict';

(function(mod) {
  const controller = {};

  controller.mapClean = function() {
    if (mapping.layer) mapping.layer.setMap();
    if (mapping.washShape) mapping.washShape.setMap();
    if (mapping.markerArray) mapping.clearMarkers();
    $('#legend').remove();
    $('span').fadeOut();
  }

  controller.homeRestart = function() {
    $('.down').hide();
    $('p').hide();
    $('.right').show();
    $('article').show();
  }

  controller.home = function() {
    controller.mapClean();
    controller.homeRestart();
  }

  controller.q = function(ctx) {
    var thisaEl = 'a[href="' + ctx.path + '"]';
    if ($(thisaEl).children('.right').css('display') === 'none') {
      controller.home();
    } else {
      controller.mapClean();
      controller.homeRestart();
      $(thisaEl).children('.right').hide();
      $(thisaEl).children('.down').show();
      $(thisaEl).parent().next().show();
    }
  }

  controller.countymap = function() {
    $('#legend').remove();
    $('article').fadeOut();
    $('span').fadeOut();
    if (mapping.washShape) mapping.washShape.setMap();
    if (mapping.markerArray) mapping.clearMarkers();
    mapping.map.setCenter({lat: 47.2718, lng: -120.6738});
    mapping.countymap();
  }

  controller.schoolsmap = function() {
    $('#legend').remove();
    $('article').fadeOut();
    $('span').fadeOut();
    if (mapping.layer) mapping.layer.setMap();
    mapping.map.setCenter({lat: 47.2718, lng: -120.6738});
    mapping.schoolsmap();
  }

  controller.graphs = function() {
    $('article').fadeOut();
    controller.mapClean();
    $('span').fadeIn();
  }

  mod.controller = controller;
})(window);
