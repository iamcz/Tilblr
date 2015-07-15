Tilblr.Routers.BlogRouter = Backbone.Router.extend({
  routes: {
    "": "postIndex"
  },

  initialize: function (options) {
    this.model = options.model;
    this.collection = options.collection;
    this.$rootEl = options.$rootEl;

    this.setupViews();
  },

  setupViews: function () {
    this._containerView = new Tilblr.Views.ContainerView({
      $el: this.$rootEl
    });

    // this._profileView = new Tilblr.Views.ProfileView({
    //   collection: this.collection
    // });

    // this._containerView.addSubview("#profile-button", this._profileView);
  },

  postIndex: function () {
    this.model.fetch();
    var blogView = new Tilblr.Views.BlogShow({model: this.model})
    // this._containerView.html(blogView.render().$el);
  }
});
