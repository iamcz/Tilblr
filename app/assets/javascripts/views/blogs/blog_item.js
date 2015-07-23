Tilblr.Views.BlogItem = Backbone.CompositeView.extend({
  template: JST["blogs/blog_item"],
  tagName: "li",
  className: "blog-item",

  hasFollowButton: true,

  initialize: function (options) {
    for (var key in options) {
      this[key] = options[key];
    }
  },

  render: function () {
    this.$el.html(this.template({blog: this.model}));

    if (this.hasFollowButton) {
      var followButton = new Tilblr.Views.FollowButton({
        model: Tilblr.Models.currentUser.activeBlog().followFor(this.model)
      });

      this.addSubview(".follow-button-section", followButton);
    }

    return this;
  }
});
