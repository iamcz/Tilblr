Tilblr.Views.PostButton = Backbone.View.extend({
  tagName: "button",
  className: "create-post post",

  render: function () {
    this.$el.html("Create a post...");

    return this;
  }
})
