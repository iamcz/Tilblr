Tilblr.Views.ContainerView = Backbone.CompositeView.extend({
  events: {
    "click": "removeProfileDropdown",
    "click #profile-button": "addProfileDropdown"
  },

  initialize: function () {
  },

  profileDropdown: function (event) {
    event.stopPropegation();

    this._profileView = new Tilblr.Views.ProfileView({
      $el: this.$("profile-nav"),
      collection: this.collection
    });
    this.addSubview("#profile-nav", this._profileView);
  },

  removeProfileDropdown: function (event) {
    this.removeSubview("#profile");
  }
})
