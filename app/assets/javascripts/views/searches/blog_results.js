Tilblr.Views.BlogSearch = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {}
});
