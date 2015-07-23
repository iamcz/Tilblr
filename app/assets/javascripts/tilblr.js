window.Tilblr = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function(options) {
    var model = options.model;
    var view = options.view;

    Tilblr.Models.currentUser = new Tilblr.Models.User();

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
