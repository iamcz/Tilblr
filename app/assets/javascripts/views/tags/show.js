Tilblr.Views.TagShow = Backbone.View.extend({
  template: JST["tags/show"],
  tagName: "a",
  className: "tag-link",

  render: function () {
    this.$el.html(this.template({tag: this.model}));
    this.$el.attr({href: "#"});

    return this;
  }
})
