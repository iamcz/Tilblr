Tilblr.Views.PostForm = Backbone.View.extend({
  template: JST["posts/form"],
  tagName: "form",
  className: "post",
  id: "new-post-form",
  events: {
    "click .submit-post": "submitPost"
  },

  render: function () {
    this.$el.html(this.template({post: this.model}));

    return this;
  },
  
  submitPost: function (event) {
    event.preventDefault();
    
    var formData = this.$el.serializeJSON()["post"];
    debugger;

    this.model.save(formData, {
      success: function () {
        debugger;
      }
    });
  }
});
