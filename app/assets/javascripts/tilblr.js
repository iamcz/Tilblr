window.Tilblr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function(blogId, currentUserId) {
    var blogs = new Tilblr.Collections.Blogs();
    var blog = blogs.getOrFetch(blogId);

    // Not sure where this should be done
    Tilblr.Models.currentUser = new Tilblr.Models.User({id: currentUserId});

    new Tilblr.Routers.BlogRouter({
      blogs: blogs,
      blog: blog
    });

    Backbone.history.start();
  }
};
