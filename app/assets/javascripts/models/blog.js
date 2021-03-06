Tilblr.Models.Blog = Backbone.Model.extend({
  urlRoot: "/api/blogs/",

  parse: function (response) {
    if (response.owner) {
      this.owner().set(response.owner);
      delete response.owner;
    }

    if (response.posts) {
      this.posts().set(response.posts, { parse: true });
      delete response.posts;
    }

    if (response.follows) {
      this.follows().set(response.follows);
      delete response.follows;
    }

    if (response.followers) {
      this.followers().set(response.followers);
      delete response.followers;
    }

    return response;
  },

  owner: function () {
    this._owner = this._owner || new Tilblr.Models.User();

    return this._owner;
  },

  posts: function () {
    this._posts = this._posts || new Tilblr.Collections.Posts([], {blog: this});

    return this._posts;
  },

  follows: function () {
    this._follows = this._follows || new Tilblr.Collections.Follows();
    
    return this._follows;
  },
  
  followers: function () {
    this._followers = this._followers || new Tilblr.Collections.Follows();

    return this._followers;
  },

  followFor: function (blog) {
    return this.follows().findOrFetch({followed_id: blog.id})
  },

  ownedByCurrentUser: function () {
    return this.owner().id === Tilblr.Models.currentUser.id;
  }
});
