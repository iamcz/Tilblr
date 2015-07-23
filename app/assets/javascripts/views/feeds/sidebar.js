Tilblr.Views.FeedSidebar = Backbone.CompositeView.extend({
  template: JST["feeds/sidebar"],
  tagName: "section",
  id: "feed-info",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    this.$el.html(this.template({feed: this.model}));

    this.addRecommendedBlogs();
    this.collection.fetch();

    return this;
  },

  addRecommendedBlogs: function () {
    var recommendedBlogsView = new Tilblr.Views.RecommendedBlogs({
      collection: this.collection
    });

    this.addSubview("#recommended-blogs", recommendedBlogsView);
  }
});
