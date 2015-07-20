Tilblr.Routers.SearchRouter = Backbone.Router.extend({
  routes: {
    "": "searchIndex"
  },

  initialize: function (options) {
    this.blogResults = options.blogResults;
    this.postResults = options.postResults;
    Tilblr.Models.currentUser = new Tilblr.Models.User({id: options.currentUserId});

    this.setupContainer();
    this.searchIndex();
  },

  setupContainer: function () {
    this._containerView = new Tilblr.Views.ContainerView({
      el: "body",
      model: Tilblr.Models.currentUser
    });
  },

  searchIndex: function () {
    searchView = new Tilblr.Views.SearchView({
      el: "#search",
      blogResults: this.blogResults,
      postResults: this.postResults
    });
    debugger;
    this.blogResults.fetch();
    this.postResults.fetch();
  }
})
