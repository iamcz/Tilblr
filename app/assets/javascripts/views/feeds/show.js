Tilblr.Views.FeedShow = Backbone.CompositeView.extend({
  template: JST["blogs/show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({blog: this.model}));

    // this.addSidebar();
    this.addPosts();

    return this;
  },

  // addSidebar: function () {
  //   var sidebarView = new Tilblr.Views.BlogSidebar({model: this.model});
  //   this.addSubview("#blog-sidebar", sidebarView);
  // },

  addPosts: function () {
    var postsView = new Tilblr.Views.PostsIndex({
      el: "#posts-index",
      model: this.model,
      collection: this.model.posts()
    });
    this.addSubview("#posts-index", postsView);
  }
});
