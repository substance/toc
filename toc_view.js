"use strict";

var View = require("substance-application").View;
var $$ = require("substance-application").$$;
var Data = require("substance-data");
var Index = Data.Graph.Index;

// Substance.TOC.View
// ==========================================================================

var TOCView = function(doc) {
  View.call(this);
  this.doc = doc;

  // Sniff into headings
  // --------
  // 

  this.headings = _.filter(this.doc.content.getNodes(), function(node) {
    return node.type === "heading";
  });

  this.$el.addClass("toc");
};

TOCView.Prototype = function() {

  // Handle clicks on `.heading-ref` elements in the TOC
  // --------
  // 

  // _jumpToHeading: function(e) {
  //   var target = $(e.currentTarget).attr('data-node');
  //   var node = this.model.document.nodes[target];
  //   this.selectNode(node.id);
  //   this.jumpToNode(node);
  //   this.updateResources();
  //   this.updatePath();
  //   return false;
  // },

  // Renderer
  // --------

  this.render = function() {

    _.each(this.headings, function(heading) {
      this.el.appendChild($$('a.heading-ref.level-'+heading.level, {
        text: heading.content
      }));
    }, this);

    return this;
  };
};

TOCView.Prototype.prototype = View.prototype;
TOCView.prototype = new TOCView.Prototype();

module.exports = TOCView;
