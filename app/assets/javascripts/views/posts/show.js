Tilblr.Views.PostShow = Backbone.View.extend({
  template: JST["posts/show"],
  //tagName: "article",
  //className: "post",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({post: this.model}));

    return this;
  }
})
