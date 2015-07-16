Tilblr.Views.PostForm = Backbone.View.extend({
  template: JST["posts/form"],
  tagName: "form",
  className: "group",
  id: "post-form",
  events: {
    "click .submit": "submitPost",
    "keypress textarea": "changeClass"
  },

  initialize: function () {
    this.model.on("invalid", function (model, error) {
      this.$("textarea").addClass("error");
    }.bind(this));
  },

  render: function () {
    this.$el.html(this.template({post: this.model}));

    return this;
  },
  
  submitPost: function (event) {
    event.preventDefault();
    
    var formData = this.$el.serializeJSON()["post"];

    var posts = this.collection;
    var post = this.model;

    post.save(formData, {
      success: function () {
        posts.add(post);
      }
    });
  },

  changeClass: function (event) {
    var $textarea = this.$("textarea");
    setTimeout(function () {
      var body = $(event.currentTarget).val();
      if (body === "") {
        $textarea.addClass("error");
      } else {
        $textarea.removeClass("error");
      }
    }, 0);
  }
});
