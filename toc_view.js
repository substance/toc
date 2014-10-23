"use strict";

var View = require("substance-application").View;
var $$ = require("substance-application").$$;
var Data = require("substance-data");
var Index = Data.Graph.Index;
var _ = require("underscore");

// Substance.TOC.View
// ==========================================================================

var TOCView = function(doc) {
  View.call(this);
  this.doc = doc;

  // Sniff into headings
  // --------
  //

  this.$el.addClass("toc");
};

TOCView.Prototype = function() {

  // Renderer
  // --------

  this.render = function() {
    if (this.doc.getHeadings().length < 2) return this;
    _.each(this.doc.getHeadings(), function(heading) {
      var headingEl = $$('a.heading-ref.level-'+heading.level, {
        id: "toc_"+heading.id,
        text: heading.content
      });
      $(headingEl).click( _.bind( this.onClick, this, heading.id ) );
      this.el.appendChild(headingEl);
    }, this);

    return this;
  };

  // Renderer
  // --------
  //

  this.setActiveNode = function(nodeId) {
    this.$('.heading-ref.active').removeClass('active');
    this.$('#toc_'+nodeId).addClass('active');
  };

  this.onClick = function(headingId) {
    this.trigger('toc-item-selected', headingId)
  };
};

TOCView.Prototype.prototype = View.prototype;
TOCView.prototype = new TOCView.Prototype();

module.exports = TOCView;
