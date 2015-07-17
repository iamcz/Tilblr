Tilblr.Routers.BlogRouter = Backbone.Router.extend({
  routes: {
    "": "postIndex",
    "new/blog": "newBlog"
  },

  initialize: function (options) {
    // this.model = options.model;
    // this.view = options.view;
    // this.user = options.user;
    this.blog = options.blog;
    this.blogs = options.blogs;

    this.setupViews();
  },

  setupViews: function () {
    
    this._containerView = new Tilblr.Views.ContainerView({
      el: "body",
      // collection: this.blogs,
      model: Tilblr.Models.currentUser
    });
  },

  postIndex: function () {
    this.blog.fetch();
    var blogView = new Tilblr.Views.BlogShow({
      el: "#blog",
      model: this.blog
    });
    //this.model.fetch();
  },

  newBlog: function () {
    this._containerView._swapDropdown();

    var newBlog = new Tilblr.Models.Blog();
    var blogForm = new Tilblr.Views.BlogForm({
      el: "#blog-form",
      model: newBlog
    });

    blogForm.render();
  }
});
