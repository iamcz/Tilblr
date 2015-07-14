Tilblr.Views.BlogShow = Backbone.View.extend({
  template: JST["blogs/show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    this.$el.html(this.template({blog: this.model}));

    return this;
  }
})
