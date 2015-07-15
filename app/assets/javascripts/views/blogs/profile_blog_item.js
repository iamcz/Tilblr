Tilblr.Views.ProfileBlogItem = Backbone.View.extend({
  template: JST["blogs/profile_blog_item"],
  tagName: "li",

  render: function () {
    this.$el.html(this.template({blog: this.model}));

    return this;
  }
})
