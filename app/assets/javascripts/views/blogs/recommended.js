Tilblr.Views.RecommendedBlogs = Backbone.CompositeView.extend({
  template: JST["blogs/recommended"],
  className: "recommended",

  initialize: function () {
    this.listenTo(this.collection, "add remove", this.render);
  },

  render: function () {
    this.$el.html(this.template());

    this.addBlogs();

    return this;
  },

  addBlogs: function () {
    this.collection.each(function (blog) {
      var blogItem = new Tilblr.Views.BlogItem({model: blog});
      this.addSubview(".blog-list", blogItem);
    }.bind(this));
  }
})
