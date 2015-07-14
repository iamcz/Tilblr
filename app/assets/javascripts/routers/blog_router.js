Tilblr.Routers.BlogRouter = Backbone.Router.extend({
  routes: {
    "": "index"
  },

  initialize: function (options) {
    this.model = options.model;
    this.$rootEl = options.$rootEl;
  },

  index: function () {
    this.model.fetch();
    var blogView = new Tilblr.Views.BlogShow({model: this.model})
    this.$rootEl.html(blogView.render().$el);
  }
});
