Tilblr.Views.PostView = Backbone.View.extend({
  //id: "post-" + this.model.id,
  id: function () {
    return "post-" + this.model.id;
  },
  className: "post",
  tagName: "article",
  events: {
    "click .cancel": "showView",
    "click .edit-post": "editView",
    "click .submit": "showView"
  },

  initialize: function () {
    this.showView();
  },

  editView: function () {
    this.$el.addClass("active");
    var postForm = new Tilblr.Views.PostForm({
      model: this.model,
      collection: this.collection
    });

    this._swapView(postForm);
  },

  showView: function () {
    event.preventDefault();
    this.$el.removeClass("active");
    var showView = new Tilblr.Views.PostShow({model: this.model});
    this._swapView(showView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove()
    this._currentView = view;
    this._currentView && this.$el.html(this._currentView.render().$el);
  }
})

