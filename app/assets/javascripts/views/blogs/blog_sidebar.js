Tilblr.Views.BlogSidebar = Backbone.CompositeView.extend({
  template: JST["blogs/blog_sidebar"],
  tagName: "section",
  id: "blog-info",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    this.$el.html(this.template({blog: this.model}));

    this.renderFollowButton();

    return this;
  },

  renderFollowButton: function () {
    var follow = Tilblr.Models.currentUser.activeBlog().followFor(this.model);

    var followButton = new Tilblr.Views.FollowButton({model: follow});
    debugger;
    this.addSubview(".follow-container", followButton);
  }
});
