Tilblr.Views.FeedSidebar = Backbone.CompositeView.extend({
  template: JST["feeds/sidebar"],
  tagName: "section",
  id: "feed-info",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
    this.listenTo()
  },

  render: function () {
    this.$el.html(this.template({feed: this.model}));

    return this;
  }
});
