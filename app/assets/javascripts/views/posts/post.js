Tilblr.Views.PostView = Backbone.View.extend({
  className: "post",
  tagName: "section",

  id: function () {
    return "post-" + this.model.id;
  },

  events: {
    "click .cancel": "showView",
    "click .edit-post": "editView",
    "click .destroy-post": "destroyPost"
  },

  initialize: function () {
    this.showView();
    this.listenTo(this.model, "sync", this.showView);
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

  destroyPost: function () {
    this.model.destroy({
      success: function () {
        this.collection.remove(this.model);
      }.bind(this)
    });
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove()
    this._currentView = view;
    this._currentView && this.$el.html(this._currentView.render().$el);
  },

  remove: function () {
    this._swapView();

    Backbone.View.prototype.view.call(this)
  }
})

