Tilblr.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",
  
  parse: function (response) {
    if (response.active_blog) {
      this.activeBlog().set(response.active_blog, { parse: true });
      delete response.active_blog;
    }

    return response;
  },
  
  activeBlog: function () {
    this._activeBlog = this._activeBlog || new Tilblr.Models.Blog();

    return this._activeBlog;
  }
});
