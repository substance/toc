"use strict";

var View = require("substance-application").View;
var $$ = require("substance-application").$$;


// Substance.TOC.View
// ==========================================================================

var TOCView = function(doc) {
  this.doc = doc;
  View.call(this);

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


    this.el.appendChild($$('a.heading-ref.level-1', {
      text: "HELLO"
    }));

    // <% _.each(headings, function(h) { %>
    //   <a href="#" class="heading-ref level-<%= h.level %>" data-node="<%= h.id %>"><%= h.content %></a>
    // <% }); %>

    // $(this.el).html(_.tpl('toc', {
    //   headings: getHeadings(this.model.document)
    // }));

    return this;
  };
};

TOCView.Prototype.prototype = View.prototype;
TOCView.prototype = new TOCView.Prototype();

module.exports = TOCView;
