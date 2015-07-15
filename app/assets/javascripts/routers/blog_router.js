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
      el: "body",
      collection: this.collection
    });
  },

  postIndex: function () {
    this.model.fetch();
    var blogView = new Tilblr.Views.BlogShow({model: this.model})
  }
});
