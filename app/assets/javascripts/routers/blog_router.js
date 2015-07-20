Tilblr.Routers.BlogRouter = Backbone.Router.extend({
  routes: {
    "": "postIndex"
  },

  initialize: function (options) {
    this.model = options.model;
    this.view = options.view;

    this.setupContainer();
  },

  setupContainer: function () {
    this._containerView = new Tilblr.Views.ContainerView({
      el: "body",
      model: Tilblr.Models.currentUser
    });
  },

  postIndex: function () {
    this.model.fetch();
    var mainView = new this.view({
      el: "#blog",
      model: this.model
    });
  },

  newBlog: function () {
    this._containerView.removeDropdown();

    var newBlog = new Tilblr.Models.Blog();
    var blogForm = new Tilblr.Views.BlogForm({
      el: "#blog-form",
      model: newBlog
    });

    blogForm.render();
  }
});
