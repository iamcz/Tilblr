Tilblr.Views.ProfileBlogItem = Backbone.View.extend({
  //template: JST["blogs/profile_blog_item"],
  tagName: "li",

  render: function () {
    var $blogLink = $("<a>");
    $blogLink.attr({"href": "/blogs/" + this.model.id });
    $blogLink.html(this.model.escape("title"));
    this.$el.html($blogLink);

    return this;
  }
})
