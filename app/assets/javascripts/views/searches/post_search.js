Tilblr.Views.PostSearch = Backbone.CompositeView.extend({
  template: JST["searches/posts"],
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template());

    return this;
  }
});
