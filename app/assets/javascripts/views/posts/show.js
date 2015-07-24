Tilblr.Views.PostShow = Backbone.CompositeView.extend({
  template: JST["posts/show"],
  tagName: "article",
  className: "post-show group",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({post: this.model}));

    this.addHeader();
    this.addTags();
    this.addFooter();

    return this;
  },

  addHeader: function () {
    var postHeader = new Tilblr.Views.PostHeader({model: this.model});
    this.addSubview(".post-header", postHeader);
  },

  addFooter: function () {
    var postFooter;

    if (Tilblr.Models.currentUser.ownsPost(this.model)) {
      postFooter = new Tilblr.Views.OwnedFooter({model: this.model});
    } else {
      postFooter = new Tilblr.Views.UnownedFooter({model: this.model});
    }

    this.addSubview(".post-footer", postFooter);
  },

  addBlogAvatar: function () {
    var blogAvatar = new Tilblr.Views.BlogAvatar({model: this.model.blog()});
    this.addSubview(".blog-avatar", blogAvatar);
  },

  addTags: function () {
    this.model.tags().each(function (tag) {
      var tagView = new Tilblr.Views.TagShow({model: tag});
      this.addSubview(".tags", tagView);
    }.bind(this));
  }
})
