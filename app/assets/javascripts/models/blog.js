Tilblr.Models.Blog = Backbone.Model.extend({
  urlRoot: "/api/blogs/",

  parse: function (response) {
    if (response.owner) {
      this.owner().set(response.owner);
      delete response.owner;
    }

    if (response.posts) {
      this.posts().set(response.posts);
      delete response.posts;
    }

    return response;
  },

  owner: function () {
    this._owner = this._owner || new Tilblr.Models.User();

    return this._owner;
  },

  posts: function () {
    this._posts = this._posts || new Tilblr.Collections.Posts();

    return this._posts;
  }
});
