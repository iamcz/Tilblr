Tilblr.Collections.Blogs = Backbone.Collection.extend({
  url: "/api/blogs",
  model: Tilblr.Models.Blog,

  getOrFetch: function (id) {
    var blog = this.get(id);

    if (blog) {
      blog.fetch();
    } else {
      blog = new this.model({id: id});
      blog.fetch({
        success: function () {
          this.add(blog);
        }
      });
    }

    return blog;
  }
});
