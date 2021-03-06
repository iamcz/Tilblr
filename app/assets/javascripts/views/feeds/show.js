Tilblr.Views.FeedShow = Backbone.CompositeView.extend({
  template: JST["feeds/show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({blog: this.model}));

    this.addSidebar();
    this.addPosts();

    return this;
  },

  addSidebar: function () {
    var recommendedBlogs = new Tilblr.Collections.Blogs([], {
      url: "/api/recommended_blogs"
    });
    var sidebarView = new Tilblr.Views.FeedSidebar({
      model: this.model,
      collection: recommendedBlogs
    });
    this.addSubview("#feed-sidebar", sidebarView);
  },

  addPosts: function () {
    var postsView = new Tilblr.Views.PostsIndex({
      el: "#posts-index",
      model: this.model,
      collection: this.model.posts()
    });
    this.addSubview("#posts-index", postsView);
  }
});
