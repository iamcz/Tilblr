Tilblr.Views.OwnedFooter = Backbone.CompositeView.extend({
  template: JST["posts/owned_footer"],
  tagName: "section",
  className: "group",

  render: function () {
    this.$el.html(this.template({model: this.model}));

    return this;
  }
})
