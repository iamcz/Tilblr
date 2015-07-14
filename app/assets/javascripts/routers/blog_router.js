Tilblr.Routers.BlogRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  initialize: function (options) {
    this.model = options.model;
  },

  index: function () {
    this.model.fetch();
    var BlogView = new Tilblr.Views.BlogShow({model: this.model})
    alert("this is blog " + this.model.id);
  }
});
