Tilblr.Views.ContainerView = Backbone.CompositeView.extend({
  events: {
    "click": "removeProfileDropdown",
    "click #profile-button": "addProfileDropdown"
  },

  addProfileDropdown: function (event) {
    event.stopPropagation();

    this._profileView = new Tilblr.Views.ProfileView({
      el: "#profile-nav",
      collection: this.collection
    });

  },

  removeProfileDropdown: function (event) {
    this.removeSubview("#profile");
  }
})
