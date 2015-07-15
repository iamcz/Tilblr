Tilblr.Views.ContainerView = Backbone.CompositeView.extend({
  events: {
    "click": "removeDropdown",
    "click #profile-button": "addProfileDropdown"
  },

  addProfileDropdown: function (event) {
    event.stopPropagation();

    var profile = new Tilblr.Views.ProfileView({
      el: "#profile-nav",
      collection: this.collection
    });

    this._swapDropdown(profile);
  },

  removeDropdown: function (event) {
    this._swapDropdown();
    //this._profileView.remove()
    //this._profileView.$el.css({display: "none"});
  },

  _swapDropdown: function (dropdown) {
    this._currentDropdown && this._currentDropdown.remove();
    this._currentDropdown = dropdown;
    this._currentDropdown && this._currentDropdown.render();
  }
})
