Tilblr.Views.PostShow = Backbone.View.extend({
  template: JST["posts/show"],
  tagName: "section",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({post: this.model}));

    return this;
  }
})
