Tilblr.Views.PostHeader = Backbone.View.extend({
  template: JST["posts/header"],
  tagName: "section",

  render: function () {
    this.$el.html(this.template({blog: this.model.blog()}));

    return this;
  }
})
