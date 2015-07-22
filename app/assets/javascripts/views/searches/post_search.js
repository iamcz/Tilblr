Tilblr.Views.PostSearch = Backbone.CompositeView.extend({
  template: JST["searches/posts"],
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template());

    debugger;
    this.collection.each(function (post) {
      var postView = new Tilblr.Views.PostShow({model: post});
      this.addSubview("#post-list", postPreview);
    });

    return this;
  }
});
