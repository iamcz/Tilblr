Tilblr.Models.Feed = Backbone.Model.extend({
  url: function () {
    return "/api/blogs/" + this.id + "/feed";
  },

  parse: function (response) {
    if (response.posts) {
      this.posts().set(response.posts, {parse: true});
      delete response.posts;
    }

    if (response.owner) {
      this.owner().set(response.owner);
      delete response.owner;
    }

    return response;
  },

  posts: function () {
    this._posts = this._posts || new Tilblr.Collections.Posts([]);

    return this._posts;
  },

  owner: function () {
    this._owner = this._owner || new Tilblr.Models.User();

    return this._owner;
  }
})
