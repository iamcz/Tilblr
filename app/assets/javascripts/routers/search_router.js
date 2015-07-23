Tilblr.Routers.SearchRouter = Backbone.Router.extend({
  routes: {
    "": "searchIndex"
  },

  initialize: function (options) {
    this.blogResults = options.blogResults;
    this.postResults = options.postResults;
    Tilblr.Models.currentUser = new Tilblr.Models.User();

    this.setupContainer();
  },

  setupContainer: function () {
    this._containerView = new Tilblr.Views.ContainerView({
      el: "body",
      model: Tilblr.Models.currentUser
    });
  },

  searchIndex: function () {
    var searchView = new Tilblr.Views.SearchView({
      blogResults: this.blogResults,
      postResults: this.postResults
    });
    this._containerView.addSubview("#main", searchView);
    this.blogResults.fetch();
    this.postResults.fetch();
  }
})
