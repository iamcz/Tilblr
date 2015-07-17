Tilblr.Views.FeedSidebar = Backbone.CompositeView.extend({
  template: JST["feeds/sidebar"],
  tagName: "section",
  id: "feed-sidebar",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    this.$el.html(this.template({feed: this.model}));

    return this;
  }
});
