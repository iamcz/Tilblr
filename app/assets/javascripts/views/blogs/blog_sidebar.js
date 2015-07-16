Tilblr.Views.BlogSidebar = Backbone.View.extend({
  template: JST["blogs/blog_sidebar"],
  tagName: "section",
  id: "blog-info",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    this.$el.html(this.template({blog: this.model}));

    return this;
  }
})
