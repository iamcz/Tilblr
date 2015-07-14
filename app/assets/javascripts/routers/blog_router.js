Tilblr.Routers.BlogRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  initialize: function (options) {
    this.model = options.model;
  },

  index: function () {
    this.model.fetch();
    alert("this is blog " + this.model.id);
  }
});
