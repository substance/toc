"use strict";

var View = require("substance-application").View;


// Substance.TOC.View
// ==========================================================================

var TOCView = function(document) {
  View.call(this);

  this.$el.addClass('substance-toc');
};

TOCView.Prototype = function() {
  

};

TOCView.Prototype.prototype = View.prototype;
TOCView.prototype = new TOCView.Prototype();

module.exports = TOCView;
