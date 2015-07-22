Tilblr.Views.PostSearch = Backbone.CompositeView.extend({
  template: JST["searches/posts"],
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template());

    this.collection.each(function (post) {
      var postView = new Tilblr.Views.PostShow({model: post});
      this.addSubview("#post-list", postView);
    }.bind(this));

    return this;
  }
});
