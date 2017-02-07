
'use strict';

(function(mod) {
  const controller = {};

  controller.mapClean = function() {
    if (mapping.layer) mapping.layer.setMap();
    if (mapping.washShape) mapping.washShape.setMap();
    if (mapping.markerArray) mapping.clearMarkers();
    $('#legend').remove();
  }

  controller.homeRestart = function() {
    $('.right').show();
    $('.down').hide();
    $('p').hide();
    $('article').show();
  }

  controller.home = function() {
    controller.mapClean();
    controller.homeRestart();
  }

  controller.q = function(ctx) {
    controller.mapClean();
    controller.homeRestart();
    let thisaEl = 'a[href="' + ctx.path + '"]';
    $(thisaEl).children('.right').hide();
    $(thisaEl).children('.down').show();
    $(thisaEl).parent().next().show();
  }

  controller.countymap = function() {
    $('#legend').remove();
    $('article').fadeOut();
    if (mapping.washShape) mapping.washShape.setMap();
    if (mapping.markerArray) mapping.clearMarkers();
    mapping.countymap();
  }

  controller.schoolsmap = function() {
    $('#legend').remove();
    $('article').fadeOut();
    if (mapping.layer) mapping.layer.setMap();
    mapping.schoolsmap();
  }

  controller.graphs = function() {
    $('article').fadeOut();
    controller.mapClean();
  }

  mod.controller = controller;
})(window);
