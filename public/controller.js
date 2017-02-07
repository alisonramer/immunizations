
'use strict';

(function(mod) {
  const controller = {};

  controller.home = function() {
    $('#legend').fadeOut();
    $('article').fadeIn();
    $('p').hide();
  }

  controller.q = function() {
    $(this.p).fadeIn().siblings.hide();
    $('#legend').fadeOut();
  }

  controller.countymap = function() {
    $('article').fadeOut();
    $('#legend').fadeIn();
    mapping.countymap();
  }

  controller.schoolsmap = function() {
    $('article').fadeOut();
    $('#legend').fadeIn();
    mapping.schoolsmap();
  }

  controller.graphs = function() {
    $('article').fadeOut();
    $('#legend').fadeOut();
  }

  mod.controller = controller;
})(window);
