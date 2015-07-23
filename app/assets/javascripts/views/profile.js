Tilblr.Views.ProfileView = Backbone.CompositeView.extend({
  events: {
    "click": "preventPropagation"
  },

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    this.$el.addClass("visible");
    this.addBlogs();
    return this;
  },

  addBlogs: function () {
    this.$("#profile-blogs").empty();

    this.collection.each(function (blog) {
      var profileBlogItem = new Tilblr.Views.BlogItem({
        model: blog,
        hasFollowButton: false
      });
      this.$("#profile-blogs").append(profileBlogItem.render().$el);
    });
  },

  preventPropagation: function (event) {
    event.stopPropagation();
  },

  remove: function () {
    this.stopListening();
    this.$el.removeClass("visible");
  }
});
