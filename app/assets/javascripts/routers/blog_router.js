Tilblr.Routers.BlogRouter = Backbone.Router.extend({
  routes: {
    "": "postIndex",
    "new/blog": "newBlog"
  },

  initialize: function (options) {
    this.model = options.model;
    this.collection = options.collection;
    this.$rootEl = options.$rootEl;

    this.setupViews();
  },

  setupViews: function () {
    this._containerView = new Tilblr.Views.ContainerView({
      el: "body",
      collection: this.collection
    });

    //var blogView = new Tilblr.Views.BlogShow({model: this.model});
    //this._containerView.addSubview()
  },

  postIndex: function () {
    this.model.fetch();
    var blogView = new Tilblr.Views.BlogShow({model: this.model})
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
