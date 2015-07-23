Tilblr.Views.RecommendedBlogItem = Backbone.View.extend({
  template: JST["blogs/recommended_item"],
  tagName: "li",
  className: "reccomended-blog-item",

  render: function () {
    this.$el.html(this.template({blog: this.model}));

    return this;
  }
})
