Tilblr.Views.PostForm = Backbone.View.extend({
  template: JST["posts/form"],
  tagName: "section",
  className: "post",

  render: function () {
    this.$el.html(this.template({post: this.model}));

    return this;
  }
});
