Tilblr.Views.PostForm = Backbone.View.extend({
  template: JST["posts/form"],
  tagName: "section",
  className: "post",
  id: "new-post-form",

  render: function () {
    this.$el.html(this.template({post: this.model}));

    return this;
  }
});
