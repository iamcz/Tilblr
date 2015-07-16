Tilblr.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",
  
  parse: function (response) {
    if (response.active_blog) {
      //debugger;
      this.activeBlog().set(this.activeBlog().parse(response.active_blog));
      delete response.active_blog;
    }

    return response;
  },
  
  activeBlog: function () {
    this._activeBlog = this._activeBlog || new Tilblr.Models.Blog({ user: this });

    return this._activeBlog;
  }
});
