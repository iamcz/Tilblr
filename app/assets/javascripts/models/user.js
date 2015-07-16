Tilblr.Models.User = Backbone.Model.extend(
  urlRoot: "/api/users",
  
  parse: function (response) {
    if (response.active_blog) {
      this.activeBlog().set(activeBlog, { parse: true });
      delete response.active_blog;
    }

    return response;
  },
  
  activeBlog: function () {
    this._activeBlog = this._activeBlog || Tilblr.Models.Blog();

    return this._activeBlog;
  }
);
