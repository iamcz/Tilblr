Tilblr.Views.PostView = Backbone.View.extend({
  events: {
    "click .cancel-edit": "showView",
    "click .edit-post": "editView"
  },

  editView: function () {
    var postForm = new Tilblr.Views.PostForm({
      model: this.model,
      collection: this.collection
    });

    this._swapView(postForm);
  },

  showView: function () {
    var showView = new Tilblr.Views.PostShow({model: this.model});
    this._swapView(showView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove()
    this._currentView = view;
    this._currentView && this.$el.html(this._currentView.render().$el);
  }
})
