Tilblr.Views.BlogSearch = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    debugger;
    this.collection.each(function (blog) {
      this
    }.bind(this))
  }
});
