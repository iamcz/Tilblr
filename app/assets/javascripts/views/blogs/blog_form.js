Tilblr.Views.BlogForm = Backbone.View.extend({
  events: {
    "click .cancel-blog": "cancelForm",
  },

  cancelForm: function (event) {
    event.preventDefault();
    this.remove();

    Backbone.history.navigate("", {trigger: true});
  },

  render: function () {
    this.$('input[name="blog[title]"]').val(this.model.escape("title"));
    this.$el.addClass("visible");
  },

  remove: function () {
    this.stopListening();

    this.$el.removeClass("visible")
  }
});
