window.Tilblr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function(blogId) {
    var blogs = new Tilblr.Collections.Blogs();
    var blog = blogs.getOrFetch(blogId);

    new Tilblr.Routers.BlogRouter({
      collection: blogs,
      model: blog
    });

    Backbone.history.start();
  }
};
