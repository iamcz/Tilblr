Tilblr.Views.BlogSearch = Backbone.CompositeView.extend({
  template: JST["searches/blogs"],
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    this.collection.each(function (blog) {
      var blogPreview = new Tilblr.Views.BlogPreview({model: blog});
      this.addSubview("#blog-list", blogPreview);
    }.bind(this));

    return this;
  }
});
