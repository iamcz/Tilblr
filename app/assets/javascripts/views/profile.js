Tilblr.Views.ProfileView = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, "sync", this.render());
  },

  render: function () {
    this.addBlogs();
    return this;
  },

  addBlogs: function () {
    this.$("#profile-blogs").empty();

    this.collection.each(function (blog) {
      var profileBlogItem = new Tilblr.Views.ProfileBlogItem({model: blog});
      this.$("#profile-blogs").append(profileBlogItem.render().$el);
    });
  }
})
