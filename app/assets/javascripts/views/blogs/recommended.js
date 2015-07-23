Tilblr.Views.RecommendedBlogs = Backbone.View.extend({
  template: JST["blogs/recommended"],
  className: "reccommended",

  initialize: function () {
    this.listenTo(this.collection, "remove", this.render);
  },

  render: function () {
    this.$el.html(this.template())
  },

  addBlogs: function () {
    this.collection.each(function (blog) {
      var blogItem = new Tilblr.Views.RecommendedBlogItem({model: blog});
      this.addSubview("blog-list", blogItem);
    });
  }
})
