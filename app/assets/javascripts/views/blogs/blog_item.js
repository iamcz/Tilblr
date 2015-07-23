Tilblr.Views.BlogItem = Backbone.CompositeView.extend({
  template: JST["blogs/blog_item"],
  tagName: "li",
  className: "blog-item",

  initialize: function (options) {
    for (var key in options) {
      this[key] = options[key];
    }
  },

  render: function () {
    this.$el.html(this.template({blog: this.model}));
  }
});
