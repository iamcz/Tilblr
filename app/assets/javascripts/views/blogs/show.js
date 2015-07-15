Tilblr.Views.BlogShow = Backbone.CompositeView.extend({
  template: JST["blogs/show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({blog: this.model}));

    this.addSidebar();
    //this.addPosts();

    return this;
  },

  addSidebar: function () {
    var sidebarView = new Tilblr.Views.BlogSidebar({model: this.model});
    this.addSubview("#blog-sidebar", sidebarView);
  },

  addPosts: function () {
    var postsView = new Tilblr.Views.PostsIndex({collection: this.collection});
    this.addSubview("#posts-index", postsView);
  }
})
