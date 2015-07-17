Tilblr.Routers.BlogRouter = Backbone.Router.extend({
  routes: {
    "": "postIndex",
    "new/blog": "newBlog"
  },

  initialize: function (options) {
    this.blog = options.blog;
    this.blogs = options.blogs;

    this.setupViews();
  },

  setupViews: function () {
    this._containerView = new Tilblr.Views.ContainerView({
      el: "body",
      collection: this.blogs,
      model: this.model
    });

    //var blogView = new Tilblr.Views.BlogShow({model: this.blog});
    //this._containerView.addSubview()
  },

  postIndex: function () {
    this.blog.fetch();
    var blogView = new Tilblr.Views.BlogShow({
      el: "#blog",
      model: this.blog
    });
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
