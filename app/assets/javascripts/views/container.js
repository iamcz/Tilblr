Tilblr.Views.ContainerView = Backbone.CompositeView.extend({
  events: {
    "click": "removeProfileDropdown",
    "click #profile-button": "addProfileDropdown"
  },

  initialize: function () {
    this._profileView = new Tilblr.Views.ProfileView({
      model: this.model,
      collection: this.collection
    });
  },

  profileDropdown: function (event) {
    event.stopPropegation();

    this.addSubview("#profile", this._profileView);
  },

  removeProfileDropdown: function (event) {
    this.removeSubview("#profile");
  }
})
