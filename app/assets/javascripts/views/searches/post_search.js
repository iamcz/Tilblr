Tilblr.Views.PostSearch = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {}
});
