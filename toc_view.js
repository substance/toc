"use strict";

var View = require("substance-application").View;
var $$ = require("substance-application").$$;
var _ = require("underscore");

// Substance.TOC.View
// ==========================================================================

var TOCView = function(docCtrl) {
  View.call(this);
  this.docCtrl = docCtrl;

  this.$el.addClass("toc");
};

TOCView.Prototype = function() {

  // Renderer
  // --------

  this.render = function() {
    this.el.innerHTML = "";

    // TODO: we can do this efficiently using an Index
    this.headings = _.filter(this.docCtrl.container.getNodes(), function(node) {
      return node.type === "heading";
    });

    

    if (this.headings.length > 0) {
      _.each(this.headings, function(heading) {
        this.el.appendChild($$('a.heading-ref.level-'+heading.level, {
          id: "toc_"+heading.id,
          text: heading.content,
          "sbs-click": "jumpToNode("+heading.id+")"
        }));
      }, this);
    } else {
      this.el.appendChild($$('.toc-placeholder', {html: 'Add structure to your article using headings.'}));
    }


    return this;
  };

  // Renderer
  // --------
  //

  this.setActiveNode = function(nodeId) {
    this.$('.heading-ref.active').removeClass('active');
    this.$('#toc_'+nodeId).addClass('active');
  };

};

TOCView.Prototype.prototype = View.prototype;
TOCView.prototype = new TOCView.Prototype();

module.exports = TOCView;
