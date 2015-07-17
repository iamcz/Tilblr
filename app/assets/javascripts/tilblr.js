window.Tilblr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function(options) {
    var currentUserId = options.userId;
    var model = options.model;
    var view = options.view;

    // Not sure where this should be done
    Tilblr.Models.currentUser = new Tilblr.Models.User({id: currentUserId});

    Tilblr.Models.currentUser.fetch({
      success: function () {
        new Tilblr.Routers.BlogRouter({
          model: model,
          view: view
        });

        Backbone.history.start();
      }
    });
    

  }
};
