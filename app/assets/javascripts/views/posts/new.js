Tilblr.Views.NewPost = Backbone.View.extend({
  events: {
    "click button.create-post": "formView",
    "click button.cancel-post": "buttonView",
  },

  initialize: function (options) {
    this.buttonView();
  },

  buttonView: function () {
    event.preventDefault();
    var postButton = new Tilblr.Views.PostButton();
    this._swapView(postButton);
  },

  formView: function () {
    var newPost = new Tilblr.Models.Post();
    var postForm = new Tilblr.Views.PostForm({
      model: newPost
    });

    this._swapView(postForm)
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$el.html(this._currentView.render().$el);
  }
});
