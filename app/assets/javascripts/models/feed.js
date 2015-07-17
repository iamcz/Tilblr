Tilblr.Models.Feed = Backbone.Model.extend({
  url: function () {
    return "/api/blogs/" + this.id + "/feed";
  },

  parse: function (response) {
    if (response.posts) {
      this.posts().set(response.posts, {parse: true});
      delete response.posts;
    }

    return response;
  },

  posts: function () {
    this._posts = this._posts || new Tilblr.Collections.Posts([]);

    return this._posts;
  }
})
