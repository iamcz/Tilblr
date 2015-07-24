Tilblr.Views.OwnedFooter = Backbone.CompositeView.extend({
  template: JST["posts/owned_footer"],
  tagName: "section",

  render: function () {
    this.$el.html(this.template({model: this.model}));

    return this;
  }
})
