Tilblr.Views.PostSearch = Backbone.CompositeView.extend({
  template: JST["searches/posts"],
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template());

    this.collection.each(function (post) {
      var postView = new Tilblr.Views.PostShow({
        model: post,
        tagName: "li"
      });
      this.addSubview("#post-list", postView);
    }.bind(this));

    this.$("#post-list").masonry({
      itemSelector: ".post-show",
      columnWidth: 300,
      gutter: 20
    });

   return this;
  }
});
