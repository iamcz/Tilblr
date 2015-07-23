Tilblr.Collections.Blogs = Backbone.Collection.extend({
  url: "/api/blogs",
  model: Tilblr.Models.Blog,

  initialize: function (models, options) {
    if (!(typeof options === "undefined")) {
      for (var key in options) {
        this[key] = options[key];
      }
    }
  },

  getOrFetch: function (id) {
    var blog = this.get(id);

    if (blog) {
      blog.fetch();
    } else {
      blog = new this.model({id: id});
      blog.fetch({
        success: function () {
          this.add(blog);
        }.bind(this)
      });
    }

    return blog;
  }
});
