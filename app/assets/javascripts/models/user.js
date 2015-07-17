Tilblr.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",
  
  parse: function (response) {
    if (response.active_blog) {
      this.activeBlog().set(this.activeBlog().parse(response.active_blog));
      delete response.active_blog;
    }

    if (response.blogs) {
      this.blogs().set(response.blogs);
      delete response.blogs;
    }

    return response;
  },
  
  activeBlog: function () {
    this._activeBlog = this._activeBlog || new Tilblr.Models.Blog();

    return this._activeBlog;
  },

  blogs: function () {
    this._blogs = this._blogs || new Tilblr.Collections.Blogs();

    return this._blogs;
  },

  ownsPost: function (post) {
    var blogIds = this.blogs().map(function (blog) { return blog.id });

    return _(blogIds).contains(post.blog().id);
  }
});
