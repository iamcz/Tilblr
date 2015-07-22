Tilblr.Views.BlogPreview = Backbone.View.extend({
  template: JST["blogs/preview"],
  tagName: "li",
  className: "blog-preview",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({blog: this.model}));

    return this;
  }
});
