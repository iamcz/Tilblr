Tilblr.Views.UnownedFooter = Backbone.View.extend({
  template: JST["posts/unowned_footer"],
  tagName: "section",
  className: "group",

  render: function () {
    this.$el.html(this.template());

    return this;
  }
})
