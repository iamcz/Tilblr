Tilblr.Views.PostShow = Backbone.CompositeView.extend({
  template: JST["posts/show"],
  tagName: "article",
  className: "post-show group",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({post: this.model}));

    return this;
  },

  addHeader: function () {
    var postHeader = new Tilblr.Views.PostHeader({model: this.model});
    this.addSubview(".post-header", postHeader);
  },

  addFooter: function () {
    var postFooter = new Tilblr.Views.PostFooter({model: this.model});
    this.addSubview(".post-footer", postFooter);
  },

  addBlogAvatar: function () {
    var blogAvatar = new Tilblr.Views.BlogAvatar({model: this.model.blog()});
    this.addSubview(".blog-avatar", blogAvatar);
  }
})
