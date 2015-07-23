Tilblr.Collections.Posts = Backbone.Collection.extend({
  url: "/api/posts",
  model: Tilblr.Models.Post,

  initialize: function (models, options) {
    if (typeof options !== "undefined") {
      for (var key in options) {
        this[key] = options[key];
      }
    }

    this.doneFetching = false;
    this.page = 1;
  },

  comparator: function (thisPost, otherPost) {
    var thisDate = Date.parse(thisPost.get("created_at"));
    var otherDate = Date.parse(otherPost.get("created_at"));

    if (thisDate < otherDate) {
      return 1;
    } else if (thisDate > otherDate) {
      return -1;
    } else {
      return 0;
    }
  },

  fetch: function () {
    if (this.doneFetching) return;

    Backbone.Collection.prototype.fetch.call(this, {
      remove: false,
      data: { blog_id: this.blog.id, page: this.page },
      success: function (collection, response, options) {
        if (response.length === 0) this.doneFetching = true;
        this.page += 1;
      }.bind(this)
    });
  }
});
